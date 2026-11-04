(function(root){
'use strict';
const records=root.HubChainRegulations||(typeof require==='function'?require('./chain-regulations-data.js'):[]);
function statusOf(r){const complete=['carry','installation','season','configuration'].every(k=>r.fieldReview?.[k]?.status==='full'&&r.fieldReview[k].source);return r.fullyReviewed===true&&r.reviewStatus==='full'&&complete&&r.verifiedOn&&r.source?'full':r.verifiedOn?'limited':'unresolved';}
function search(query='',filter='all'){
 const q=String(query).trim().toLowerCase(),exactCode=records.some(r=>r.code.toLowerCase()===q);
 const statusFilter=({reviewed:'limited',unverified:'unresolved'})[filter]||filter;
 return records.filter(r=>(!q||(exactCode?r.code.toLowerCase()===q:[r.code,r.name,r.summary].some(s=>s.toLowerCase().includes(q))))&&(statusFilter==='all'||statusFilter===statusOf(r)));
}
if(typeof module!=='undefined')module.exports={records,search,statusOf};
if(typeof document==='undefined')return;
const el=id=>document.getElementById(id);
function node(tag,text){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;return n;}
function link(url,text){const a=node('a',text);a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;}
function render(){const rows=search(el('chainStateSearch').value,el('chainStateFilter').value);el('chainStateCount').textContent=rows.length+(rows.length===1?' state shown.':' states shown.')+' Source review is limited to the claims displayed; no state has been certified as a complete legal checklist.';const list=el('chainStateResults');list.replaceChildren();
 for(const r of rows){const card=node('details');card.className='regulation-card';card.append(node('summary',r.name+' ('+r.code+') — '+(statusOf(r)==='full'?'FULLY REVIEWED':statusOf(r)==='limited'?'LIMITED excerpt / summary':'UNRESOLVED')));card.append(node('p',r.summary));
 const status=node('p',r.verifiedOn?'Claims above checked against the linked official source on '+r.verifiedOn+'. Scope: '+r.scope+'.':'No verified chain-rule date. Do not interpret missing information as no requirement.');status.className='regulation-status';card.append(status);
 const dl=node('dl');for(const [label,value] of [['Carry',r.carry],['Installation',r.scope==='limited operational summary'?r.summary:null],['Season',r.season],['Configuration',r.configuration]]){dl.append(node('dt',label),node('dd',(r.fieldReview?.[label.toLowerCase()]?.status==='unresolved'?'UNRESOLVED — ':'LIMITED — ')+(value||'Not established by this review. Verify with the responsible agency.')));}card.append(dl);
 card.append(node('p','Review attempted: '+r.reviewAttemptOn+'. '+r.reviewBlocker));
 for(const lead of r.researchLeads||[]){const p=node('p');p.append(link(lead.url,'Research lead — not a verified chain rule ↗'));p.append(node('span',' '+lead.finding));card.append(p);}
 if(r.note&&r.note!==r.reviewBlocker)card.append(node('p',r.note));if(r.source){const p=node('p');p.append(link(r.source,'Official regulatory / agency source ↗'));card.append(p);}const road=node('p');road.append(link(r.roadUrl,'Open official road conditions & restrictions ↗'));card.append(road,node('p','The road link opens the agency service; this Hub does not fetch or verify current chain controls. Read its timestamp, route, vehicle category and closure details.'));list.append(card);
 }
 if(!rows.length)list.append(node('p','No matching state. Try the state name or two-letter abbreviation.'));
}
const host=el('chainRegulationsRoot');if(!host)return;
host.innerHTML='<p class="warning"><strong>50-state research guide — verification is incomplete.</strong> Research only — not approved driving instructions. A reviewed excerpt is not a complete legal determination. Unverified states and fields are labeled. Always check current official route restrictions separately; chains do not authorize travel on a closed road.</p><label for="chainStateSearch">Search state name or abbreviation</label><input id="chainStateSearch" type="search" placeholder="Example: California or CA" autocomplete="off"><label for="chainStateFilter">Source review</label><select id="chainStateFilter"><option value="all">All 50 states</option><option value="full">Fully reviewed requirements</option><option value="limited">Limited excerpts / summaries</option><option value="unresolved">Unresolved states</option></select><p id="chainStateCount" role="status"></p><div id="chainStateResults"></div>';
el('chainStateSearch').addEventListener('input',render);el('chainStateFilter').addEventListener('change',render);render();
})(typeof window!=='undefined'?window:globalThis);
