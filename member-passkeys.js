/* Optional Supabase WebAuthn. Never store challenges, credentials or biometrics here. */
(()=>{
'use strict';
const el=id=>document.getElementById(id),domain='maricelcdlsuccesshub.com';
let enabled=false,checked=false,busy=false,epoch=0,controller=null,passkeys=[];
const supported=()=>window.isSecureContext&&typeof window.PublicKeyCredential==='function'&&Boolean(navigator.credentials)&&Boolean(memberClient?.auth?.passkey)&&location.hostname===domain;
const same=(stamp,uid)=>stamp===epoch&&uid===memberUserId&&!memberRecovery;
function sync(){
  el('passkeyLogin').hidden=memberRecovery||memberAuthMode!=='signin';
  el('passkeySignIn').disabled=busy||!enabled||!supported();
  el('passkeyAdd').disabled=busy||!enabled||!supported()||!memberUserId||memberRecovery;
  el('passkeyRefresh').disabled=busy||!memberUserId||memberRecovery;
  const reason=location.hostname!==domain?'For passkeys, open https://maricelcdlsuccesshub.com. Password sign-in still works here.':!supported()?'Passkeys are unavailable in this browser. Use your email and password.':!checked?'Checking passkey availability…':!enabled?'Passkeys are not activated yet. Use your email and password for now.':'Already added a passkey? Use it here. Otherwise sign in with your password, then open My Profile → Security.';
  el('passkeyLoginHelp').textContent=reason;
}
function message(error){
 const code=error?.code||'',name=error?.name||'';
 if(name==='AbortError'||name==='NotAllowedError'||/cancel|notallowed|timed out/i.test(error?.message||''))return 'Passkey request cancelled or not completed. You can retry or use your password.';
 if(code==='passkey_disabled')return 'Passkeys are not activated yet. Email/password sign-in is still available.';
 if(code==='webauthn_credential_exists')return 'This passkey is already registered. Refresh your list or use another authenticator.';
 if(code==='too_many_passkeys')return 'Your account has reached its passkey limit. Keep a working sign-in method before removing an older passkey.';
 if(code==='webauthn_challenge_expired')return 'The request expired. Please try again.';
 return 'Could not complete the passkey request. Retry, or use your email and password. Your existing account is unchanged.';
}
async function availability(){
 checked=false;sync();
 try{const r=await fetch(SUPABASE_URL+'/auth/v1/settings',{headers:{apikey:SUPABASE_KEY},signal:AbortSignal.timeout(10000)});if(!r.ok)throw Error('Settings unavailable');const d=await r.json();enabled=d.passkeys_enabled===true;}catch{enabled=false;}
 checked=true;sync();
}
async function owner(stamp,uid){
 const {data,error}=await memberClient.auth.getUser();
 if(!same(stamp,uid))return false;
 if(error||!data?.user?.email_confirmed_at||data.user.id!==uid)throw Error('Sign in again.');
 return true;
}
function draw(){
 const root=el('passkeyList');root.replaceChildren();
 if(!passkeys.length){const p=document.createElement('p');p.className='small';p.textContent='No passkeys registered for this account. Adding one is optional.';root.appendChild(p);return;}
 for(const key of passkeys){
  const card=document.createElement('div');card.className='list-item';
  const title=document.createElement('strong');title.textContent=key.friendly_name||'Passkey';card.appendChild(title);
  const date=document.createElement('p');date.className='small';const stamp=new Date(key.created_at);date.textContent='Added: '+(Number.isNaN(stamp.getTime())?'Date unavailable':stamp.toLocaleDateString());card.appendChild(date);
  const label=document.createElement('label');label.textContent='Passkey name';const input=document.createElement('input');input.maxLength=120;input.value=key.friendly_name||'';label.appendChild(input);card.appendChild(label);
  const rename=document.createElement('button');rename.type='button';rename.className='btn light';rename.textContent='Save name';rename.disabled=busy;rename.addEventListener('click',()=>manage('rename',key.id,input.value));card.appendChild(rename);
  const remove=document.createElement('button');remove.type='button';remove.className='btn light';remove.textContent='Remove passkey';remove.disabled=busy;remove.addEventListener('click',()=>manage('remove',key.id));card.appendChild(remove);root.appendChild(card);
 }
}
async function load(){
 const stamp=epoch,uid=memberUserId;if(!uid||memberRecovery||busy)return;
 el('passkeyStatus').textContent='Checking your passkeys…';await availability();if(!same(stamp,uid))return;
 if(!enabled||!supported()){el('passkeyStatus').textContent=el('passkeyLoginHelp').textContent;el('passkeyList').replaceChildren();return;}
 try{if(!await owner(stamp,uid)||!same(stamp,uid))return;const {data,error}=await memberClient.auth.passkey.list();if(!same(stamp,uid))return;if(error)throw error;passkeys=Array.isArray(data)?data:[];draw();el('passkeyStatus').textContent='Passkeys are optional. Your email/password sign-in stays available.';}catch(error){if(same(stamp,uid)){passkeys=[];el('passkeyList').replaceChildren();el('passkeyStatus').textContent=message(error);}}
}
async function run(action,id,name){
 if(busy||!enabled||!supported()||memberRecovery)return;
 const stamp=epoch,uid=memberUserId;
 if(action!=='signin'&&!uid)return;
 busy=true;controller=new AbortController();sync();draw();el('memberSubmit').disabled=true;
 const target=action==='signin'?el('memberMessage'):el('passkeyStatus');target.textContent=action==='signin'?'Choose your saved Hub passkey in your device prompt.':'Follow the prompt on your own device.';
 try{
  if(action!=='signin'&&(!await owner(stamp,uid)||!same(stamp,uid)))return;
  let result;
  if(action==='signin')result=await memberClient.auth.signInWithPasskey({options:{signal:controller.signal}});
  else if(action==='add')result=await memberClient.auth.registerPasskey({options:{signal:controller.signal}});
  else if(action==='rename')result=await memberClient.auth.passkey.update({passkeyId:id,friendlyName:name});
  else result=await memberClient.auth.passkey.delete({passkeyId:id});
  if(!same(stamp,uid))return;
  if(result.error)throw result.error;
  if(action==='signin'){
   if(!result.data?.session?.user?.email_confirmed_at)throw Error('No verified session');
   memberDisplay(result.data.session);memberEl('memberPassword').value='';
  }else target.textContent=action==='add'?'Passkey added. Keep email/password access for recovery.':action==='rename'?'Passkey name saved.':'Passkey removed from Hub sign-in.';
 }catch(error){if(same(stamp,uid))target.textContent=message(error);}
 finally{if(stamp===epoch){busy=false;controller=null;el('memberSubmit').disabled=false;sync();if(action!=='signin'){const note=target.textContent;await load();if(same(stamp,uid))target.textContent=note;}}}
}
function manage(action,id,name=''){
 if(busy||!passkeys.some(k=>k.id===id))return;
 if(action==='rename'){name=name.trim();if(!name||name.length>120){el('passkeyStatus').textContent='Use a passkey name of 1–120 characters.';return;}}
 else if(!confirm('Remove this passkey from Hub sign-in? Make sure you can use your email/password or another passkey. Removing it does not delete your account.'))return;
 void run(action,id,name);
}
window.memberPasskeysReset=()=>{epoch++;controller?.abort();controller=null;busy=false;passkeys=[];el('passkeyList').replaceChildren();el('passkeyStatus').textContent='';el('memberSubmit').disabled=false;sync();};
window.memberPasskeyModeChanged=()=>{if(memberAuthMode!=='signin')controller?.abort();sync();};
window.memberPasskeysBusy=()=>busy;
window.memberPasskeysOpen=()=>{void load();};
el('passkeySignIn').addEventListener('click',()=>{void run('signin');});
el('passkeyAdd').addEventListener('click',()=>{void run('add');});
el('passkeyRefresh').addEventListener('click',()=>{void load();});
void availability();
})();
