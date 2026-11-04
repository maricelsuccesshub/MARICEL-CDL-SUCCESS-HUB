const {test}=require('node:test'),assert=require('node:assert/strict');
const {createConfirmationController}=require('../member-confirmation.js');
test('in-flight exclusion, cooldown persistence, expiry and rate-limit recovery',()=>{
 let time=100000;const data=new Map(),storage={getItem:k=>data.get(k),setItem:(k,v)=>data.set(k,v)};
 const c=createConfirmationController({storage,now:()=>time});assert.equal(c.start(),true);assert.equal(c.start(),false);c.hold();c.finish();assert.equal(c.start(),false);assert.equal(c.remaining(),60);
 const restored=createConfirmationController({storage,now:()=>time});assert.equal(restored.remaining(),60);time+=60000;assert.equal(restored.start(),true);restored.finish();assert.match(restored.error({status:429}),/two minutes/);assert.equal(restored.remaining(),120);
});
test('blocked storage still enforces in-memory cooldown',()=>{let t=1;const c=createConfirmationController({now:()=>t,storage:{getItem(){throw Error()},setItem(){throw Error()}}});c.hold();assert.equal(c.start(),false);t+=60000;assert.equal(c.start(),true);});
test('error messages do not echo provider secrets or reveal registered accounts',()=>{const c=createConfirmationController();for(const e of [{message:'secret-token'},{code:'email_exists'},{code:'user_already_exists'}])assert.doesNotMatch(c.error(e),/secret-token|already exists|registered/);assert.match(c.error({code:'email_not_confirmed'}),/Spam, Junk and Promotions/);});
