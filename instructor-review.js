(function(){
'use strict';
const models=window.HubSafety.models,root=document.getElementById('manualVisuals');
for(const key of ['cam','cable']){
 const model=models[key],card=document.createElement('div'),heading=document.createElement('h3');heading.textContent=model.name;card.append(heading);
 const source=document.createElement('a');source.href=model.url+'#page=2';source.target='_blank';source.rel='noopener noreferrer';source.textContent='Open exact manufacturer manual — installation page ↗';card.append(source);
 const figure=document.createElement('div');figure.innerHTML=window.HubSafety.orientationSvg(key,true,'review-'+key)+'<h3>At the tensioning topic</h3>'+window.HubSafety.wheelSvg(key,true,3);card.append(figure);root.append(card);
}
const items=['All six banking cases match the expected matrix','Lane position and offtracking wording is accurate','Speed, loaded/empty and rollover explanations are sound','CAM contact face and fastening match its manual','Cable TIRE SIDE and round/flat connectors match its manual','Two tensioners / seven positions are depicted for Super Z','Side drape is distinguished from vehicle clearance','Movement, inspections and rechecks are product-specific','Wrong answers block progress; model changes reset it','Oregon example is correctly scoped and rejects mistakes','State review statuses do not overstate verification','Keyboard, zoom, reduced motion and screen readers checked'];
const checklist=document.getElementById('reviewChecklist');items.forEach((text,i)=>{const p=document.createElement('p'),label=document.createElement('label'),select=document.createElement('select');label.htmlFor='review-'+i;label.textContent=(i+1)+'. '+text;select.id=label.htmlFor;select.className='result';for(const value of ['Not reviewed','Pass','Needs correction']){const o=document.createElement('option');o.textContent=value;select.append(o);}p.append(label,select);checklist.append(p);});
})();
