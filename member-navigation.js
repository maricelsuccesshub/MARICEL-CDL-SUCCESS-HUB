/* Remember an allowlisted page per signed-in member and browser tab. No private content. */
(()=>{'use strict';
const prefix='maricel-hub:page:';
const valid=(page,allowed)=>typeof page==='string'&&Object.prototype.hasOwnProperty.call(allowed,page);
window.hubNavigation={
 remember(userId,page,allowed){if(!userId||!valid(page,allowed))return;try{window.sessionStorage.setItem(prefix+userId,page)}catch{}},
 restore(userId,allowed){if(!userId)return 'home';try{const page=window.sessionStorage.getItem(prefix+userId);return valid(page,allowed)?page:'home'}catch{return 'home'}},
 clear(userId){if(!userId)return;try{window.sessionStorage.removeItem(prefix+userId)}catch{}}
};
})();
