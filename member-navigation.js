/* Remember an allowlisted page per signed-in member and browser tab. No private content. */
(()=>{'use strict';
const prefix='maricel-hub:page:', viewPrefix='maricel-hub:view:';
const pages=['lesson','backing','practiceyard','drivercommunity'];
const uuid=v=>typeof v==='string'&&/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v);
function clean(page,v){
 if(!v||typeof v!=='object')return null;
 if(page==='lesson'&&Number.isInteger(v.current)&&v.current>=0&&v.current<6&&['learn','try','check'].includes(v.tab))return {current:v.current,tab:v.tab};
 if(page==='backing'&&['straight','offset','alley','45','90','blind','truckstop','panic'].includes(v.key)&&['quick','learn'].includes(v.mode)&&Number.isInteger(v.step)&&v.step>=0&&v.step<10)return {key:v.key,mode:v.mode,step:v.step,side:v.side==='passenger'?'passenger':'driver',drift:v.drift==='left'?'left':'right'};
 if(page==='practiceyard'&&['trailer','straight','straight-left','center'].includes(v.test))return {test:v.test};
 if(page==='drivercommunity'&&['forum','members','messages','feedback','settings','moderation'].includes(v.tab))return {tab:v.tab,category:['General Help','Backing Help','Trip Preparation','Success Stories','Beta Feedback'].includes(v.category)?v.category:'',postId:uuid(v.postId)?v.postId:null,threadId:uuid(v.threadId)?v.threadId:null};
 return null;
}
const valid=(page,allowed)=>typeof page==='string'&&Object.prototype.hasOwnProperty.call(allowed,page);
window.hubNavigation={
 remember(userId,page,allowed){if(!userId||!valid(page,allowed))return;try{window.sessionStorage.setItem(prefix+userId,page)}catch{}},
 restore(userId,allowed){if(!userId)return 'home';try{const page=window.sessionStorage.getItem(prefix+userId);return valid(page,allowed)?page:'home'}catch{return 'home'}},
 rememberView(userId,page,value){const v=clean(page,value);if(!userId||!v)return;try{window.sessionStorage.setItem(viewPrefix+userId+':'+page,JSON.stringify(v))}catch{}},
 view(userId,page){if(!userId)return null;try{return clean(page,JSON.parse(window.sessionStorage.getItem(viewPrefix+userId+':'+page)))}catch{return null}},
 clear(userId){if(!userId)return;try{window.sessionStorage.removeItem(prefix+userId);pages.forEach(page=>window.sessionStorage.removeItem(viewPrefix+userId+':'+page))}catch{}}
};
})();
