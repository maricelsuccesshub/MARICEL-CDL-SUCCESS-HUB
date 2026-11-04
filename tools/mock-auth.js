/* Local preview fixture. In-memory synthetic data only. Never include in a hosted release. */
(()=>{
'use strict';
window.HUB_LOCAL_MOCK=true;
window.MEMBER_CONFIG=Object.freeze({url:'https://gndommbrsfvejocipukj.supabase.co',publishableKey:'synthetic-public-placeholder',connectedTestingApproved:false,redirectUrls:[location.origin+location.pathname]});
window.fetch=async()=>{throw Error('External services are blocked in the synthetic preview.');};
let user=null,session=null,callbacks=[],records={};
const notify=(event)=>callbacks.forEach(fn=>fn(event,session));
const clone=x=>JSON.parse(JSON.stringify(x));
const query=(table)=>{let single=false;const api={select(){return api},eq(){return api},order(){return api},limit(){return api},maybeSingle(){single=true;return api},single(){single=true;return api},then(resolve){return Promise.resolve({data:single?{display_name:'Synthetic Driver'}:clone(records[table]||[]),error:null}).then(resolve)},async insert(row){(records[table]||=[]).push(clone(row));return{data:row,error:null}},async upsert(row){records[table]=[clone(row)];return{data:row,error:null}}};return api;};
const client={from:query,schema(){return{rpc:async()=>({data:[],error:null})}},rpc:async()=>({data:[],error:null}),auth:{
 onAuthStateChange(fn){callbacks.push(fn);return{data:{subscription:{unsubscribe(){}}}}},
 async getSession(){return{data:{session}}},async getUser(){return{data:{user:session?.user||null},error:session?null:{name:'AuthSessionMissingError'}}},
 async signUp({email}){user={id:'synthetic-driver',email,email_confirmed_at:null};return{data:{user,session:null},error:null}},
 async resend(){return{data:{},error:null}},async resetPasswordForEmail(){return{data:{},error:null}},
 async updateUser(){return{data:{user},error:null}},async signOut(){session=null;notify('SIGNED_OUT');return{error:null}},
 async signInWithPassword({email}){if(!user?.email_confirmed_at||user.email!==email)return{error:{code:'email_not_confirmed'}};session={user};notify('SIGNED_IN');return{data:{session,user},error:null}}
}};
window.supabase={createClient:()=>client};
window.addEventListener('DOMContentLoaded',()=>{
 const bar=document.createElement('aside');bar.setAttribute('aria-label','Synthetic preview controls');bar.style.cssText='background:#fff5d6;border:2px solid #8a5a00;padding:12px;color:#352400;position:relative;z-index:100';
 const label=document.createElement('strong');label.textContent='LOCAL MOCK PREVIEW — no real accounts, emails or database access. ';bar.append(label);
 function button(text,action){const b=document.createElement('button');b.type='button';b.textContent=text;b.style.cssText='margin:5px;padding:10px;min-height:44px';b.addEventListener('click',action);bar.append(b);}
 button('Open synthetic confirmation link',()=>{if(!user){alert('Create a synthetic account first using an example.test email.');return;}user.email_confirmed_at=new Date().toISOString();session={user};notify('SIGNED_IN');});
 button('Enter as Synthetic Driver',()=>{user={id:'synthetic-driver',email:'driver@example.test',email_confirmed_at:new Date().toISOString()};session={user};notify('SIGNED_IN');});
 button('Simulate expired link',()=>{location.hash='error=access_denied&error_code=otp_expired';location.reload();});
 button('Reset synthetic preview',()=>{sessionStorage.clear();location.href=location.pathname;});
 document.body.prepend(bar);
});
})();
