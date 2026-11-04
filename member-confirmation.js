/* Signup assistance only. No administrative account changes or account lookup. */
(function(root){
'use strict';
function createConfirmationController({storage,now=Date.now,cooldown=60000}={}){
 const key='hub-confirmation-next-send';let next=0,busy=false;
 try{next=Math.min(Number(storage?.getItem(key))||0,now()+300000);}catch{}
 function hold(ms=cooldown){next=now()+ms;try{storage?.setItem(key,String(next));}catch{}}
 return {
  remaining:()=>Math.max(0,Math.ceil((next-now())/1000)),
  busy:()=>busy,
  start(){if(busy||next>now())return false;busy=true;return true;},
  finish(){busy=false;},hold,
  error(error){if(error?.status===429||/rate_limit/.test(error?.code||'')){hold(120000);return 'Too many requests. Wait at least two minutes before trying again. The email service may require longer.';}
   if(error?.code==='email_not_confirmed')return 'Your email still needs verification. Check Inbox, Spam, Junk and Promotions, or request a fresh link.';
   if(error?.code==='weak_password')return 'Choose a stronger password with at least eight characters. Do not reuse another account’s password.';
   if(error?.code==='email_address_invalid')return 'Check the email address for typing errors and try again.';
   return 'Unable to complete the request. Check your connection and try again. If it continues, wait before requesting another email.';}
 };
}
root.createConfirmationController=createConfirmationController;
if(typeof module!=='undefined')module.exports={createConfirmationController};
})(typeof window!=='undefined'?window:globalThis);
