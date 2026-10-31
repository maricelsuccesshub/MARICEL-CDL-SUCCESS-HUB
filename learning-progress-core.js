/* Owner-private study persistence. No browser storage, notes writes or privileged keys. */
'use strict';
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory;else root.createHubLearningStore=factory;})(typeof window==='object'?window:this,function(catalog,notify=()=>{},uuid){
 uuid??=()=>{if(typeof crypto.randomUUID==='function')return crypto.randomUUID();const b=crypto.getRandomValues(new Uint8Array(16));b[6]=(b[6]&15)|64;b[8]=(b[8]&63)|128;const h=[...b].map(x=>x.toString(16).padStart(2,'0')).join('');return h.slice(0,8)+'-'+h.slice(8,12)+'-'+h.slice(12,16)+'-'+h.slice(16,20)+'-'+h.slice(20);};
 const activities=new Map(catalog.map(a=>[a.id,a]));
 let client=null,owner=null,identity=null,generation=0,ready=false,loadError='',questions=new Map(),reviews=new Map(),queues=new Map(),reviewErrors=new Map(),fresh=new Set(),loading=Promise.resolve(),pulls=Promise.resolve(),pullTicket=0;
 const key=(a,q)=>a+'|'+q,known=(a,q)=>activities.get(a)?.questions.find(x=>x.id===q);
 const context=()=>({client,owner,generation}),current=c=>c.owner===owner&&c.generation===generation&&c.client===client;
 const emit=()=>{const g=generation;queueMicrotask(()=>{if(g===generation)notify();});};
 const failure=()=>new Error('Could not confirm this save. Retry while signed in.');
 async function verified(c){if(!current(c))return false;const r=await c.client.auth.getUser();if(!current(c))return false;if(r.error)throw failure();if(r.data?.user?.id!==c.owner||!r.data.user?.email_confirmed_at){reset();return false;}return true;}
 function validateSnapshot(data){
  if(!data||!Array.isArray(data.questions)||!Array.isArray(data.reviews))throw failure();
  const qs=new Map(),rs=new Map();
  for(const row of data.questions){const a=activities.get(row.activity_id),q=known(row.activity_id,row.question_id);if(!a||row.content_version!==a.version)continue;
   if(!q||!Number.isInteger(row.first_choice)||!Number.isInteger(row.latest_choice)||row.first_choice<0||row.latest_choice<0||row.first_choice>=q.options.length||row.latest_choice>=q.options.length||typeof row.first_correct!=='boolean'||typeof row.latest_correct!=='boolean'||!Number.isSafeInteger(Number(row.attempt_count))||Number(row.attempt_count)<1||!Number.isSafeInteger(Number(row.missed_count))||Number(row.missed_count)<0||Number(row.missed_count)>Number(row.attempt_count))throw failure();
   qs.set(key(a.id,q.id),{...row,attempt_count:Number(row.attempt_count),missed_count:Number(row.missed_count)});
  }
  for(const row of data.reviews){const a=activities.get(row.activity_id);if(a&&row.content_version===a.version&&typeof row.reviewed_at==='string')rs.set(a.id,{...row});}
  return {qs,rs};
 }
 async function fetchSnapshot(c){
  const ticket=++pullTicket;
  if(!await verified(c))return false;
  const r=await c.client.rpc('learning_snapshot');
  if(!current(c)||ticket!==pullTicket)return false;
  if(r.error)throw failure();
  if(!await verified(c)||ticket!==pullTicket)return false;
  const next=validateSnapshot(r.data);questions=next.qs;reviews=next.rs;ready=true;loadError='';emit();return true;
 }
 function pull(c){const work=pulls.catch(()=>{}).then(()=>fetchSnapshot(c));pulls=work.catch(()=>{});return work;}
 async function load(c){try{const ok=await pull(c);if(!ok&&current(c)){ready=false;loadError='Sign in again to load your private learning progress.';emit();}return ok;}catch{if(current(c)){ready=false;loadError='Private learning progress could not load. Retry; existing saved records are unchanged.';emit();}return false;}}
 function reset(){generation++;pullTicket++;client=null;owner=null;identity=null;ready=false;loadError='';questions=new Map();reviews=new Map();queues=new Map();reviewErrors=new Map();fresh=new Set();loading=Promise.resolve();pulls=Promise.resolve();emit();}
 function connect(next){if(next?.userId===owner&&next?.generation===identity&&next?.client===client)return loading;reset();if(!next?.userId||!next.client)return loading;client=next.client;owner=next.userId;identity=next.generation;const c=context();loading=new Promise(resolve=>setTimeout(()=>resolve(load(c)),0));return loading;}
 function pending(activity){return [...queues.values()].some(q=>q.activity===activity&&q.events.length);}
 function savedQuestion(a,q){const row=questions.get(key(a,q));return row?{...row}:null;}
 function choice(a,q){const queue=queues.get(key(a,q));return queue?.events.length?queue.events.at(-1).choice:fresh.has(key(a,q))?undefined:questions.get(key(a,q))?.latest_choice;}
 // Preserve the existing UI gates, including CDL/Road scenario checks. The
 // approved database catalog's required subset remains unchanged.
 function canReview(a){const activity=activities.get(a);return Boolean(owner&&ready&&activity&&!pending(a)&&activity.questions.every(q=>!fresh.has(key(a,q.id))&&questions.get(key(a,q.id))?.latest_correct));}
 async function insertEvent(c,event){
  if(!await verified(c))throw failure();
  const payload={user_id:c.owner,attempt_id:event.id,activity_id:event.activity,content_version:activities.get(event.activity).version,question_id:event.question,selected_option:event.choice};
  let r=await c.client.from('learning_attempts').insert(payload).select('user_id,attempt_id,activity_id,content_version,question_id,selected_option,correct,received_at').single();
  if(!current(c))return false;
  if(r.error?.code==='23505')r=await c.client.from('learning_attempts').select('user_id,attempt_id,activity_id,content_version,question_id,selected_option,correct,received_at').eq('user_id',c.owner).eq('attempt_id',event.id).maybeSingle();
  if(!current(c))return false;
  if(r.error||!r.data||Object.entries(payload).some(([k,v])=>r.data[k]!==v)||typeof r.data.correct!=='boolean')throw failure();
  if(!await verified(c))return false;
  return true;
 }
 function flush(queue){
  if(queue.running)return queue.running;
  const c=context();queue.running=(async()=>{
   await loading;if(!current(c))return;
   if(!ready){queue.error=loadError||'Private progress is not loaded. Retry.';emit();return;}
   queue.error='';emit();
   while(queue.events.length&&current(c)){
    const event=queue.events[0];
    try{if(!await insertEvent(c,event)){if(current(c))queue.error='Sign in again to confirm your save.';break;}event.received=true;
     // The insert acknowledgement proves storage. Refresh the summary before dropping the pending choice.
     if(!await pull(c)){if(current(c))queue.error='Save confirmation needs a refresh. Retry.';break;}
     if(!current(c))break;queue.events.shift();fresh.delete(key(event.activity,event.question));queue.error='';emit();
    }catch{if(current(c)){queue.error=event.received?'Answer received; progress summary could not refresh — retry.':'Not saved — retry. If the connection failed after receipt, retry confirms the same attempt without duplicating it.';emit();}break;}
   }
  })().finally(()=>{queue.running=null;if(current(c))emit();});return queue.running;
 }
 function answer(a,q,selected){const item=known(a,q);if(!owner||!item||!Number.isInteger(selected)||selected<0||selected>=item.options.length)return false;
  const k=key(a,q);let queue=queues.get(k);if(!queue){queue={activity:a,events:[],running:null,error:''};queues.set(k,queue);}
  // Ignore an identical click while its current submission is pending.
  if(queue.events.at(-1)?.choice===selected)return true;
  queue.events.push({id:uuid(),activity:a,question:q,choice:selected});emit();if(!queue.error)flush(queue);return true;
 }
 async function retry(a){const c=context();if(!owner)return;if(!ready){loading=load(c);await loading;}if(!current(c))return;await Promise.all([...queues.values()].filter(q=>q.activity===a||!a).map(q=>flush(q)));if(current(c)&&a&&reviewErrors.has(a)){reviewErrors.delete(a);if(reviews.has(a))await load(c);else await review(a);}emit();}
 async function review(a){if(!canReview(a)||reviews.has(a))return false;const c=context(),activity=activities.get(a);let received=false;reviewErrors.delete(a);emit();
  try{if(!await verified(c))throw failure();const payload={user_id:c.owner,activity_id:a,content_version:activity.version};let r=await c.client.from('learning_reviews').insert(payload).select('user_id,activity_id,content_version,reviewed_at').single();
   if(!current(c))return false;if(r.error?.code==='23505')r=await c.client.from('learning_reviews').select('user_id,activity_id,content_version,reviewed_at').eq('user_id',c.owner).eq('activity_id',a).eq('content_version',activity.version).maybeSingle();
   if(!current(c))return false;if(r.error||!r.data||Object.entries(payload).some(([k,v])=>r.data[k]!==v))throw failure();if(!await verified(c))throw failure();reviews.set(a,r.data);received=true;await pull(c);if(current(c))emit();return current(c);
  }catch{if(current(c)){reviewErrors.set(a,received?'Review mark received; summary refresh failed — retry.':'Review mark was not confirmed — retry after your answers are saved.');emit();}return false;}
 }
 function status(a){if(!owner)return 'Sign in to save private learning progress.';if(loadError)return loadError;if(!ready)return 'Loading private learning progress…';const qs=[...queues.values()].filter(q=>q.activity===a);const error=qs.find(q=>q.error)?.error||reviewErrors.get(a);if(error)return error;if(pending(a))return 'Saving…';return reviews.has(a)||[...questions.values()].some(q=>q.activity_id===a)?'Saved privately':'Not yet attempted. Your next study answer will save privately.';}
 function summary(a){const activity=activities.get(a);if(!activity)return null;const rows=activity.questions.map(q=>({question:q,result:savedQuestion(a,q.id)}));return {activity,rows,reviewed:reviews.has(a),answered:rows.filter(x=>x.result).length,firstCorrect:rows.filter(x=>x.result?.first_correct).length,latestCorrect:rows.filter(x=>x.result?.latest_correct).length,needsPractice:rows.filter(x=>x.result&&!x.result.latest_correct),revisit:rows.filter(x=>x.result?.latest_correct&&x.result.missed_count>0)};}
 function startPractice(a){if(!owner||!activities.has(a)||pending(a))return false;for(const q of activities.get(a).questions)fresh.add(key(a,q.id));emit();return true;}
 return {connect,reset,answer,retry,review,choice,canReview,status,summary,savedQuestion,startPractice,isFresh:(a,q)=>fresh.has(key(a,q)),reviewed:a=>reviews.has(a),enabled:()=>Boolean(owner),isReady:()=>ready,activities:()=>catalog,identity:()=>owner,async idle(){await loading;await Promise.all([...queues.values()].map(q=>q.running).filter(Boolean));},refresh:()=>{if(owner){loading=load(context());return loading;}return Promise.resolve(false);}};
});
