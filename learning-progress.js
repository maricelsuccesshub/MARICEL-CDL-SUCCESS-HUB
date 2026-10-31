/* Connects the approved owner-private store to existing study screens. */
(()=>{'use strict';
 const catalog=window.HUB_LEARNING_CATALOG||[],byId=new Map(catalog.map(a=>[a.id,a]));
 const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let painting=false;
 const store=window.hubLearning=window.createHubLearningStore(catalog,refresh);
 const resetStore=store.reset;
 function clearDisplays(){document.querySelectorAll('.hub-learning-panel,.hub-learning-step').forEach(el=>el.remove());const summary=document.getElementById('privateLearningProgress');if(summary)summary.textContent='Sign in to see your private learning progress.';
  for(const id of ['lessonRoot','roadReadinessRoot','cdlKnowledgeRoot','pretripRoot','airBrakeRoot','incabRoot','decisionPracticeRoot']){const el=document.getElementById(id);if(el)el.textContent='Sign in to load your private study answers.';}
  if(typeof lessonVisit!=='undefined'){lessonVisit.answers={};lessonVisit.reviewed=[];}
  if(typeof roadReadinessVisit!=='undefined'){roadReadinessVisit.answers={};roadReadinessVisit.scenarios={};roadReadinessVisit.reviewed=[];}
  if(typeof cdlKnowledgeVisit!=='undefined'){cdlKnowledgeVisit.answers={};cdlKnowledgeVisit.scenarios={};cdlKnowledgeVisit.reviewed=[];}
  if(typeof pretripVisit!=='undefined'){pretripVisit.answers={};pretripVisit.reviewed=[];}
  if(typeof airBrakeVisit!=='undefined')airBrakeVisit.answers={};
  if(typeof incabVisit!=='undefined')incabVisit.answers={};
  catalog.filter(a=>a.module==='decisions').forEach(a=>window.clearDecisionLearning?.(a.topic));
  if(typeof selectedBackingGuide!=='undefined'){selectedBackingGuide=null;backingGuideMode='quick';straightAnswerChoice=null;offsetAnswer=null;remainingBackingAnswer=null;const root=document.getElementById('backingContent');if(root)root.innerHTML='<p>Choose a backing guide to review its references.</p>';}
  if(typeof yardDecisionState!=='undefined'){yardDecisionState=null;const root=document.getElementById('practiceContent');if(root)root.textContent='Choose a Practice Yard exercise.';}
 }
 store.reset=()=>{resetStore();clearDisplays();};
 const disclosure='Your signed-in study answers and review marks are saved privately to your account. They record screen study only, not inspection findings or driving competence. You can retry; first and latest results are shown separately.';
 const qid=(a,i)=>byId.get(a)?.questions.filter(q=>q.required)[i]?.id;
 function assign(object,k,a,q){const value=store.choice(a,q);if(Number.isInteger(value))object[k]=value;else delete object[k];}
 function hydrate(module,visit,topics){if(!store.enabled())return;for(const t of topics){const a=module+'.'+t.id;visit.answers[t.id]??={};t.questions.forEach((q,i)=>assign(visit.answers[t.id],i,a,qid(a,i)));if(t.scenario&&visit.scenarios)assign(visit.scenarios,t.id,a,'scenario');}visit.reviewed=topics.filter(t=>store.reviewed(module+'.'+t.id)).map(t=>t.id);}
 function wrap(name,before,after){const old=window[name];if(typeof old!=='function')return;window[name]=function(...args){if(before?.(...args)===false)return;const result=old.apply(this,args);after?.(...args);return result;};}
 function capture(name,get){wrap(name,(...args)=>{const item=get(...args);if(item)store.answer(item[0],item[1],item[2]);});}
 function reviewGate(name,get,valid){const old=window[name];if(typeof old!=='function')return;window[name]=function(...args){if(!store.enabled())return old.apply(this,args);if(valid())return store.review(get());};}
 function activityPanel(root,a){if(!root||!byId.has(a))return;root.querySelector(':scope > .hub-learning-panel')?.remove();if(!store.enabled())return;
  const summary=store.summary(a),panel=document.createElement('div');panel.className='hub-learning-panel';panel.dataset.activity=a;
  panel.innerHTML=`<p class="small">${disclosure}</p><p role="status" aria-live="polite"><strong>${esc(store.status(a))}</strong></p><p>${summary.reviewed?'Reviewed ✓ · ':''}${summary.answered} of ${summary.rows.length} questions have saved answers. ${summary.needsPractice.length?'Practice recommended.':''}</p><div class="hub-learning-actions"><button type="button" class="btn light" onclick="hubLearning.retry('${a}')">Retry save / load</button><button type="button" class="btn light" onclick="hubLearning.review('${a}')" ${summary.reviewed||!store.canReview(a)?'disabled':''}>${summary.reviewed?'Reviewed ✓':'Mark this topic reviewed'}</button><button type="button" class="btn light" onclick="hubLearning.retake('${a}')">Practice again</button><button type="button" class="btn light" onclick="openScreen('progress')">My private learning progress</button></div>`;
  root.prepend(panel);
 }
 store.decorate=activityPanel;
 function guideActivity(){if(!selectedBackingGuide)return null;return 'guides.'+(selectedBackingGuide==='straight'?'straight-'+straightDrift:selectedBackingGuide==='offset'?'offset-'+(offsetSide==='driver'?'driver':'blind'):selectedBackingGuide);}
 function hydrateGuide(){if(!store.enabled()||!selectedBackingGuide)return;const a=guideActivity(),i=selectedBackingGuide==='straight'?straightStep:selectedBackingGuide==='offset'?offsetStep:remainingBackingStep,value=store.choice(a,qid(a,i));
  if(selectedBackingGuide==='straight')straightAnswerChoice=value??null;
  else if(selectedBackingGuide==='offset')offsetAnswer=value??null;
  else remainingBackingAnswer=value??null;
 }
 if(typeof hubLessons!=='undefined'){
  wrap('renderLessons',()=>hydrate('fundamentals',lessonVisit,hubLessons),()=>activityPanel(document.getElementById('lessonRoot'),'fundamentals.'+currentHubLesson().id));
  capture('answerHubLesson',(i,c)=>lessonVisit.tab==='check'&&Number.isInteger(i)&&hubLessons[lessonVisit.current].questions[i]?[`fundamentals.${currentHubLesson().id}`,qid(`fundamentals.${currentHubLesson().id}`,i),c]:null);
  reviewGate('markHubLessonReviewed',()=>`fundamentals.${currentHubLesson().id}`,()=>lessonVisit.tab==='check'&&lessonChecksPassed());
 }
 if(typeof roadReadinessTopics!=='undefined'){
  wrap('renderRoadReadiness',()=>hydrate('road',roadReadinessVisit,roadReadinessTopics),()=>activityPanel(document.getElementById('roadReadinessRoot'),'road.'+currentRoadTopic().id));
  capture('answerRoadReadiness',(i,c)=>roadReadinessVisit.tab==='check'&&Number.isInteger(i)&&currentRoadTopic().questions[i]?[`road.${currentRoadTopic().id}`,qid(`road.${currentRoadTopic().id}`,i),c]:null);
  capture('answerRoadScenario',c=>roadReadinessVisit.tab==='scenario'?[`road.${currentRoadTopic().id}`,'scenario',c]:null);
  reviewGate('markRoadReadinessReviewed',()=>`road.${currentRoadTopic().id}`,()=>roadReadinessVisit.tab==='check'&&roadChecksPassed());
 }
 if(typeof cdlKnowledgeTopics!=='undefined'){
  wrap('renderCdlKnowledge',()=>hydrate('cdl',cdlKnowledgeVisit,cdlKnowledgeTopics),()=>activityPanel(document.getElementById('cdlKnowledgeRoot'),'cdl.'+currentCdlTopic().id));
  capture('answerCdlKnowledge',(i,c)=>cdlKnowledgeVisit.tab==='check'&&Number.isInteger(i)&&currentCdlTopic().questions[i]?[`cdl.${currentCdlTopic().id}`,qid(`cdl.${currentCdlTopic().id}`,i),c]:null);
  capture('answerCdlScenario',c=>cdlKnowledgeVisit.tab==='scenario'?[`cdl.${currentCdlTopic().id}`,'scenario',c]:null);
  reviewGate('markCdlKnowledgeReviewed',()=>`cdl.${currentCdlTopic().id}`,()=>cdlKnowledgeVisit.tab==='check'&&cdlChecksPassed());
 }
 if(typeof pretripZones!=='undefined'){
  wrap('renderPretrip',()=>{if(!store.enabled())return;pretripZones.forEach(z=>assign(pretripVisit.answers,z.id,'pretrip.'+z.id,'scenario'));pretripVisit.reviewed=pretripZones.filter(z=>store.reviewed('pretrip.'+z.id)).map(z=>z.id);},()=>activityPanel(document.getElementById('pretripRoot'),'pretrip.'+pretripZones[pretripVisit.current].id));
  capture('answerPretrip',c=>pretripVisit.tab==='decision'?['pretrip.'+pretripZones[pretripVisit.current].id,'scenario',c]:null);
  reviewGate('markPretripReviewed',()=>`pretrip.${pretripZones[pretripVisit.current].id}`,()=>pretripVisit.tab==='review');
 }
 if(typeof airBrakeQuestions!=='undefined'){
  wrap('renderAirBrakes',()=>{if(store.enabled())airBrakeQuestions.forEach((q,i)=>assign(airBrakeVisit.answers,i,'air.guide',qid('air.guide',i)));},()=>activityPanel(document.getElementById('airBrakeRoot'),'air.guide'));
  capture('airBrakeAnswer',(i,c)=>airBrakeVisit.tab==='practice'&&Number.isInteger(i)&&airBrakeQuestions[i]?['air.guide',qid('air.guide',i),c]:null);
 }
 if(typeof incabUnits!=='undefined'){
  const ids=catalog.filter(a=>a.module==='incab').map(a=>a.id);
  wrap('renderIncab',()=>{if(store.enabled())ids.forEach((a,i)=>assign(incabVisit.answers,i,a,'scenario'));},()=>activityPanel(document.getElementById('incabRoot'),ids[incabVisit.unit]));
  capture('incabAnswer',c=>incabVisit.tab==='decision'?[ids[incabVisit.unit],'scenario',c]:null);
 }
 if(typeof backingGuides!=='undefined'){
  wrap('renderBackingGuide',hydrateGuide,()=>activityPanel(document.getElementById('backingContent'),guideActivity()));
  capture('answerStraightLearning',c=>selectedBackingGuide==='straight'&&backingGuideMode==='learn'?[guideActivity(),qid(guideActivity(),straightStep),c]:null);
  capture('answerOffset',c=>selectedBackingGuide==='offset'&&backingGuideMode==='learn'?[guideActivity(),qid(guideActivity(),offsetStep),c]:null);
  capture('answerRemainingBacking',c=>hasRemainingBacking(selectedBackingGuide)&&backingGuideMode==='learn'?[guideActivity(),qid(guideActivity(),remainingBackingStep),c]:null);
 }
 if(typeof yardDecisionTests!=='undefined'){
  wrap('renderYardDecision',null,()=>{if(yardDecisionState)activityPanel(document.getElementById('practiceContent'),'yard.'+yardDecisionState.key);});
  capture('answerYardDecision',c=>yardDecisionState&&!yardDecisionState.complete?['yard.'+yardDecisionState.key,'scenario',c]:null);
  wrap('renderStraightSimulator',null,()=>activityPanel(document.getElementById('practiceContent'),'yard.'+straightTest));
  capture('straightAnswer',c=>['left','hold','right'].includes(c)?['yard.'+straightTest,trailerAngle===0?'aligned':'initial-drift',['left','hold','right'].indexOf(c)]:null);
 }
 function refresh(){if(painting)return;painting=true;try{
  if(!store.enabled()){clearDisplays();return;}
  const screen=document.querySelector('section.active')?.id;
  const renders={lesson:window.renderLessons,starter:window.renderRoadReadiness,cdlknowledge:window.renderCdlKnowledge,pretrip:window.renderPretrip,airbrakes:window.renderAirBrakes,incab:window.renderIncab,backing:window.renderBackingGuide,decisionpractice:window.refreshDecisionLearning};
  if(renders[screen])renders[screen]();
  if(screen==='practiceyard'&&typeof yardDecisionState!=='undefined'){if(yardDecisionState)window.renderYardDecision();else if(['straight','straight-left'].includes(straightTest))activityPanel(document.getElementById('practiceContent'),'yard.'+straightTest);}
  renderSummary();pathCounts();
 }finally{painting=false;}}
 function pathCounts(){const root=document.getElementById('beginnerPathRoot');if(!root)return;const modules=[['cdl','fundamentals'],['pretrip','incab'],['air'],['guides'],['road'],['decisions','yard']];root.querySelectorAll('.hub-path-steps>li').forEach((li,i)=>{li.querySelector('.hub-learning-step')?.remove();if(!store.enabled())return;const a=catalog.filter(a=>modules[i]?.includes(a.module)),p=document.createElement('p');p.className='small hub-learning-step';p.textContent=store.isReady()?`${a.filter(x=>store.reviewed(x.id)).length} of ${a.length} study topics reviewed · private`:'Loading private study review counts…';li.append(p);});}
 function resultLabel(r,which){if(!r)return 'Not yet attempted';return r[which+'_correct']?'Correct study answer':'Review recommended';}
 function renderSummary(){const root=document.getElementById('privateLearningProgress');if(!root)return;if(!store.enabled()){root.textContent='Sign in to see your private learning progress.';return;}
  const summaries=catalog.map(a=>store.summary(a.id)),reviewed=summaries.filter(s=>s.reviewed).length;
  root.innerHTML=`<div class="card hub-learning-summary"><h2>Private Learning Progress</h2><p>${disclosure}</p><p role="status">${store.isReady()?`${reviewed} of ${catalog.length} study topics reviewed`:esc(store.status(catalog[0].id))}</p><button type="button" class="btn light" onclick="hubLearning.refresh()">Refresh private learning progress</button><p class="small">First submitted and latest answers are shown separately. Review marks are study records, not certification, test eligibility, actual inspection results or proof of driving competence. Existing practice notes remain below.</p>${[...new Set(catalog.map(a=>a.module))].map(module=>`<details><summary>${esc({fundamentals:'Backing Fundamentals',road:'Road Readiness',cdl:'CDL knowledge',pretrip:'Pre-trip inspections',air:'Air brakes',incab:'In-cab inspections',decisions:'Safety Decision Practice',guides:'Backing Guides',yard:'Practice Yard'}[module])}</summary>${summaries.filter(s=>s.activity.module===module).map(s=>`<article class="hub-learning-topic"><h3>${esc(s.activity.title)}</h3><p>${s.reviewed?'Reviewed ✓':'Not reviewed'} · ${s.answered}/${s.rows.length} questions attempted · ${s.needsPractice.length?'Practice recommended':s.answered?'Keep reviewing':'Not yet attempted'}</p><p role="status">${esc(store.status(s.activity.id))}</p><p>First answers: ${s.firstCorrect}/${s.rows.length} correct · Latest: ${s.latestCorrect}/${s.rows.length} correct.</p><button type="button" class="btn light" onclick="hubLearning.open('${s.activity.id}')">Open this study topic</button>${s.rows.filter(x=>x.result).map(({question:q,result:r})=>`<details><summary>${esc(q.prompt)}</summary><p>First: ${esc(q.options[r.first_choice])} · ${resultLabel(r,'first')}</p><p>Latest: ${esc(q.options[r.latest_choice])} · ${resultLabel(r,'latest')}</p><p>${r.attempt_count} saved attempts · ${r.missed_count} missed. ${!r.latest_correct?'Practice recommended.':r.missed_count?'Revisit later.':''}</p><p>${esc(q.why)}</p><button type="button" class="btn light" onclick="hubLearning.open('${s.activity.id}','${q.id}')">Review this question</button></details>`).join('')}</article>`).join('')}</details>`).join('')}</div>`;
 }
 store.open=(id,question)=>{const a=byId.get(id);if(!a||question&&!a.questions.some(q=>q.id===question))return;openScreen(a.screen);const n=question?a.questions.filter(q=>q.required).findIndex(q=>q.id===question):0;
  if(a.module==='fundamentals')selectHubLesson(a.position,question?'check':'learn');
  if(a.module==='road')selectRoadReadinessTopic(a.position,question==='scenario'?'scenario':question?'check':'learn');
  if(a.module==='cdl')selectCdlKnowledgeTopic(a.position,question==='scenario'?'scenario':question?'check':'learn');
  if(a.module==='pretrip')selectPretripZone(a.position,question?'decision':'parts');
  if(a.module==='incab'){incabUnit(a.position);if(question)incabTab('decision');}
  if(a.module==='air')airBrakeTab(question?'practice':'prepare');
  if(a.module==='decisions')window.hubSelectDecision(a.position);
  if(a.module==='yard')window.showPracticeLesson(a.position.test);
  if(a.module==='guides'){showBacking(a.position.guide);setBackingGuideMode('learn');if(a.position.drift)setStraightDrift(a.position.drift);if(a.position.side)setOffsetSide(a.position.side==='blind'?'passenger':'driver');if(question){if(a.position.guide==='straight')setStraightStep(n);else if(a.position.guide==='offset')setOffsetStep(n);else setRemainingBackingStep(n);}}
  refresh();
 };
 store.retake=id=>{if(!store.startPractice(id))return;const a=byId.get(id);if(a.module==='fundamentals')lessonVisit.answers[a.topic]={};if(a.module==='road'){roadReadinessVisit.answers[a.topic]={};delete roadReadinessVisit.scenarios[a.topic];}if(a.module==='cdl'){cdlKnowledgeVisit.answers[a.topic]={};delete cdlKnowledgeVisit.scenarios[a.topic];}if(a.module==='pretrip')delete pretripVisit.answers[a.topic];if(a.module==='incab')delete incabVisit.answers[a.position];if(a.module==='air')airBrakeVisit.answers={};if(a.module==='decisions')window.clearDecisionLearning?.(a.topic);if(a.module==='guides'){straightAnswerChoice=null;offsetAnswer=null;remainingBackingAnswer=null;}if(a.module==='yard')window.showPracticeLesson(a.position.test);refresh();};
 const route=window.journeyRouteChanged;window.journeyRouteChanged=id=>{route?.(id);pathCounts();if(id==='progress')renderSummary();};
 store.refreshUI=refresh;
 store.connect(window.hubLearningContext?.());
})();
