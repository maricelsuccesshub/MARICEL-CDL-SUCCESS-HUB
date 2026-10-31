// Proposal tooling only. Reads original Hub content; never connects to a database.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'../../..');
const contentRoot=fs.existsSync(path.join(root,'dist','index.html'))?path.join(root,'dist'):root;
function read(file,expression){return vm.runInNewContext(fs.readFileSync(path.join(contentRoot,file),'utf8')+'\n;'+expression,{window:{},document:{getElementById:()=>null,body:{classList:{remove(){}}}},showBacking:()=>{}});}
const activities=[];
function add(module,topic,title,screen,questions,position){
 const q=questions.map((x,i)=>({id:x.id||`check-${i+1}`,prompt:x.prompt,options:Array.from(x.options||x.choices),answer:x.answer,why:x.why,required:x.required!==false}));
 const a={id:`${module}.${topic}`,version:1,module,topic,title,screen,position,questions:q};
 a.content_hash=crypto.createHash('sha256').update(JSON.stringify([title,q])).digest('hex');activities.push(a);
}
for(const [file,key,module,screen] of [['lessons.js','hubLessons','fundamentals','lesson'],['road-readiness-data.js','roadReadinessTopics','road','starter'],['cdl-knowledge-data.js','cdlKnowledgeTopics','cdl','cdlknowledge']]){
 read(file,key).forEach((t,i)=>add(module,t.id,t.title,screen,[...(t.scenario?[{...t.scenario,id:'scenario',required:false}]:[]),...t.questions],i));
}
read('pretrip-data.js','pretripZones').forEach((z,i)=>add('pretrip',z.id,z.title,'pretrip',[{...z.scenario,id:'scenario'}],i));
add('air','guide','Air Brake Check Guide','airbrakes',read('air-brakes-data.js','airBrakeQuestions').map(q=>({prompt:q[0],options:q[1],answer:q[2],why:q[3]})),0);
const cabIds=['prepare','instruments','visibility','controls','emergency','close'];
read('incab-data.js','incabUnits').forEach((u,i)=>add('incab',cabIds[i],u.title,'incab',[{...u.decision,id:'scenario'}],i));
const source=fs.readFileSync(path.join(contentRoot,'learning-paths.js'),'utf8');
const scenarios=vm.runInNewContext(source.slice(source.indexOf('const scenarios='),source.indexOf('let pathStep='))+';scenarios');
scenarios.forEach((s,i)=>add('decisions',s.id,s.title,'decisionpractice',[{id:'scenario',prompt:s.question,options:s.choices.map(x=>x[0]),answer:s.answer,why:s.review}],i));
const bg=read('backing-guides.js','backingGuides');
for(const side of ['right','left'])add('guides',`straight-${side}`,`Straight Backing · ${side} drift study`,'backing',read('backing-guides.js',`straightDrift='${side}';straightLearningStages()`).map(t=>({...t,prompt:t.question})),{guide:'straight',drift:side});
for(const side of ['driver','blind'])add('guides',`offset-${side}`,`Offset Backing · ${side} side study`,'backing',read('backing-guides.js','offsetStages').map(t=>({...t,prompt:t.question})),{guide:'offset',side});
for(const [key,g]of Object.entries(read('remaining-backing.js','remainingBackingGuides')))add('guides',key,bg[key].title,'backing',g.stages.map(t=>({...t,prompt:t.question})),{guide:key});
for(const [key,side,correct]of [['straight','right',2],['straight-left','left',0]])add('yard',key,`Trailer Drifting ${side==='right'?'Right':'Left'}`,'practiceyard',[
 {id:'initial-drift',prompt:`Confirmed unwanted ${side} drift during a straight back: choose the initial small input.`,options:['Turn wheel left','Hold wheel straight','Turn wheel right'],answer:correct,why:'Distinguish drift correction from starting an intentional trailer turn. Observe the actual response.'},
 {id:'aligned',prompt:'The illustration is aligned. What should you do?',options:['Add left correction','Monitor alignment without adding an unjustified correction','Add right correction'],answer:1,why:'Monitor both mirrors and actual response; the picture does not establish real wheel position.'}
],{test:key});
const yd=read('yard-decisions.js','yardDecisionTests').center;
add('yard','center',yd.title,'practiceyard',[{id:'scenario',prompt:yd.scene,options:yd.options,answer:yd.answer,why:yd.why}],{test:'center'});
for(const a of activities){if(!a.title||!a.questions.length)throw Error('Missing topic content '+a.id);for(const q of a.questions)if(!q.prompt||!q.why||!Number.isInteger(q.answer)||q.answer<0||q.answer>=q.options.length)throw Error('Invalid question '+a.id+'/'+q.id);}
const result={baseline:'b758ca3d2a55c7aa0e1813116ef59ffd538a5b92',activities};
if(require.main===module){fs.writeFileSync(path.join(__dirname,'catalog.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({activities:activities.length,questions:activities.reduce((n,a)=>n+a.questions.length,0),byModule:Object.fromEntries([...new Set(activities.map(a=>a.module))].map(m=>[m,activities.filter(a=>a.module===m).length]))}));}
module.exports=result;
