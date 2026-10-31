const {test}=require('node:test'),assert=require('node:assert/strict');
const create=require('../learning-progress-core.js');
const catalog=require('../database/proposals/stage-3/catalog.json').activities;
const clone=x=>JSON.parse(JSON.stringify(x));
const deferred=()=>{let resolve;return{promise:new Promise(r=>resolve=r),resolve};};
function harness(){
 const state={user:'A',rows:[],reviews:[],calls:[],clock:0,failBefore:0,failAfter:0,holdRead:null,holdWrite:null};
 function snapshot(user){const groups=new Map();for(const r of state.rows.filter(r=>r.user_id===user)){const key=[r.activity_id,r.content_version,r.question_id].join('|');const list=groups.get(key)||[];list.push(r);groups.set(key,list);}
  return {questions:[...groups.values()].map(list=>{const first=list[0],last=list.at(-1);return {activity_id:first.activity_id,content_version:first.content_version,question_id:first.question_id,first_choice:first.selected_option,latest_choice:last.selected_option,first_correct:first.correct,latest_correct:last.correct,attempt_count:list.length,missed_count:list.filter(x=>!x.correct).length,first_received_at:first.received_at,latest_received_at:last.received_at};}),reviews:state.reviews.filter(r=>r.user_id===user).map(clone)};
 }
 const client={auth:{async getUser(){return{data:{user:{id:state.user,email_confirmed_at:'confirmed'}}};}},async rpc(name){assert.equal(name,'learning_snapshot');const user=state.user,data=snapshot(user),hold=state.holdRead;if(hold){state.holdRead=null;hold.started.resolve();await hold.release.promise;}return {data,error:null};},from(table){assert.ok(['learning_attempts','learning_reviews'].includes(table),'Only new learning tables');let payload=null,filters={};const builder={insert(p){payload=clone(p);return this;},select(){return this;},eq(k,v){filters[k]=v;return this;},async maybeSingle(){return{data:clone((table==='learning_attempts'?state.rows:state.reviews).find(r=>r.user_id===state.user&&Object.entries(filters).every(([k,v])=>r[k]===v))||null),error:null};},async single(){
   const user=state.user;state.calls.push({table,payload:clone(payload)});
   if(payload.user_id!==user)return {error:{code:'42501'}};
   const hold=state.holdWrite;if(hold){state.holdWrite=null;hold.started.resolve();await hold.release.promise;}
   if(state.failBefore-->0)return {error:{message:'network'}};
   const rows=table==='learning_attempts'?state.rows:state.reviews;
   if(rows.some(r=>r.user_id===user&&(table==='learning_attempts'?r.attempt_id===payload.attempt_id:r.activity_id===payload.activity_id&&r.content_version===payload.content_version)))return {error:{code:'23505'}};
   const a=catalog.find(a=>a.id===payload.activity_id&&a.version===payload.content_version);assert.ok(a);
   let row;if(table==='learning_attempts'){const q=a.questions.find(q=>q.id===payload.question_id);row={...payload,correct:payload.selected_option===q.answer,received_at:new Date(1700000000000+state.clock++).toISOString()};}
   else row={...payload,reviewed_at:'2026-10-31T20:00:00Z'};
   rows.push(row);if(state.failAfter-->0)return {error:{message:'lost acknowledgement'}};return {data:clone(row),error:null};
  }};return builder;}};
 let id=0,notifications=0;const store=create(catalog,()=>notifications++,()=>`event-${++id}`);
 return {state,store,client,snapshot,connect:(user,g=1)=>{state.user=user;return store.connect({client,userId:user,generation:g});},notifications:()=>notifications};
}
test('private results persist across a fresh store; first answers survive retries and review is explicit',async()=>{
 const h=harness();await h.connect('A');const s=h.store,a='decisions.closed-exit';assert.equal(s.canReview(a),false);
 s.answer(a,'scenario',0);await s.idle();assert.equal(s.summary(a).needsPractice.length,1);assert.equal(s.canReview(a),false);
 s.answer(a,'scenario',1);await s.idle();assert.equal(s.summary(a).firstCorrect,0);assert.equal(s.summary(a).latestCorrect,1);assert.equal(s.summary(a).revisit.length,1);assert.equal(s.reviewed(a),false);
 assert.equal(await s.review(a),true);assert.equal(s.reviewed(a),true);
 const fresh=create(catalog,()=>{},()=> 'fresh-event');await fresh.connect({client:h.client,userId:'A',generation:1});assert.equal(fresh.choice(a,'scenario'),1);assert.equal(fresh.summary(a).rows[0].result.attempt_count,2);assert.equal(fresh.reviewed(a),true);
});
test('failed save remains visible; retry reuses the event ID and a lost acknowledgement cannot duplicate history',async()=>{
 const h=harness();await h.connect('A');h.state.failBefore=1;h.store.answer('decisions.closed-exit','scenario',1);await h.store.idle();assert.match(h.store.status('decisions.closed-exit'),/Not saved/);assert.equal(h.store.canReview('decisions.closed-exit'),false);
 await h.store.retry('decisions.closed-exit');assert.equal(h.state.calls[0].payload.attempt_id,h.state.calls[1].payload.attempt_id);assert.equal(h.state.rows.length,1);
 h.state.failAfter=1;h.store.answer('decisions.full-parking','scenario',0);await h.store.idle();assert.match(h.store.status('decisions.full-parking'),/Not saved/);await h.store.retry('decisions.full-parking');assert.equal(h.state.rows.length,2);assert.equal(h.store.summary('decisions.full-parking').rows[0].result.attempt_count,1);
});
test('switching accounts discards a late prior-owner snapshot and clears progress synchronously',async()=>{
 const h=harness();h.state.rows.push({user_id:'A',activity_id:'decisions.closed-exit',content_version:1,question_id:'scenario',selected_option:1,correct:true,received_at:'2026-01-01'});
 const hold={started:deferred(),release:deferred()};h.state.holdRead=hold;const old=h.connect('A');await hold.started.promise;await h.connect('B',2);assert.equal(h.store.identity(),'B');assert.equal(h.store.choice('decisions.closed-exit','scenario'),undefined);hold.release.resolve();await old;assert.equal(h.store.summary('decisions.closed-exit').answered,0);
 h.store.reset();assert.equal(h.store.identity(),null);assert.equal(h.store.isReady(),false);assert.equal(h.store.reviewed('decisions.closed-exit'),false);
});
test('a delayed prior-owner write never populates the next owner or replays under that owner',async()=>{
 const h=harness();await h.connect('A');const hold={started:deferred(),release:deferred()};h.state.holdWrite=hold;h.store.answer('decisions.closed-exit','scenario',1);await hold.started.promise;const old=h.store.idle();await h.connect('B',2);hold.release.resolve();await old;assert.equal(h.store.summary('decisions.closed-exit').answered,0);assert.equal(h.state.rows[0].user_id,'A');assert.ok(h.state.calls.every(c=>c.payload.user_id==='A'));
});
test('parallel questions and rapid retries preserve distinct immutable attempts without false save errors',async()=>{
 const h=harness();await h.connect('A');h.store.answer('decisions.closed-exit','scenario',0);h.store.answer('decisions.closed-exit','scenario',1);h.store.answer('decisions.full-parking','scenario',0);await h.store.idle();assert.equal(h.state.rows.length,3);assert.equal(h.store.summary('decisions.closed-exit').firstCorrect,0);assert.equal(h.store.summary('decisions.closed-exit').latestCorrect,1);assert.equal(h.store.status('decisions.closed-exit'),'Saved privately');assert.equal(h.store.status('decisions.full-parking'),'Saved privately');
});
test('unknown content and invalid answers cannot write; token refresh preserves the same-owner cache',async()=>{
 const h=harness();await h.connect('A');assert.equal(h.store.answer('__proto__','scenario',1),false);assert.equal(h.store.answer('decisions.closed-exit','unknown',1),false);assert.equal(h.store.answer('decisions.closed-exit','scenario',99),false);assert.equal(h.state.calls.length,0);
 h.store.answer('decisions.closed-exit','scenario',1);await h.store.idle();await h.connect('A');assert.equal(h.store.choice('decisions.closed-exit','scenario'),1);h.store.startPractice('decisions.closed-exit');assert.equal(h.store.choice('decisions.closed-exit','scenario'),undefined);assert.equal(h.store.summary('decisions.closed-exit').latestCorrect,1);assert.equal(h.store.canReview('decisions.closed-exit'),false);
});
test('an unannounced identity mismatch stops reads/writes and clears the old result cache',async()=>{
 const h=harness();await h.connect('A');h.store.answer('decisions.closed-exit','scenario',1);await h.store.idle();h.state.user='B';await h.store.refresh();assert.equal(h.store.identity(),null);assert.equal(h.store.choice('decisions.closed-exit','scenario'),undefined);assert.equal(h.store.answer('decisions.closed-exit','scenario',1),false);assert.equal(h.state.rows.length,1);
});
test('failed review marks are not shown as reviewed and can be retried without touching private notes',async()=>{
 const h=harness();await h.connect('A');const a='decisions.closed-exit';h.store.answer(a,'scenario',1);await h.store.idle();h.state.failBefore=1;assert.equal(await h.store.review(a),false);assert.equal(h.store.reviewed(a),false);assert.match(h.store.status(a),/not confirmed/);await h.store.retry(a);assert.equal(h.store.reviewed(a),true);assert.equal(h.state.reviews.length,1);
});
test('existing CDL scenario-plus-check UI gating remains stricter than the catalog minimum',async()=>{
 const h=harness();await h.connect('A');const a=catalog.find(a=>a.id==='cdl.path');for(const q of a.questions.filter(q=>q.required))h.store.answer(a.id,q.id,q.answer);await h.store.idle();assert.equal(h.store.canReview(a.id),false);const scenario=a.questions.find(q=>q.id==='scenario');h.store.answer(a.id,scenario.id,scenario.answer);await h.store.idle();assert.equal(h.store.canReview(a.id),true);
});
