const {test}=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');const fs=require('node:fs');
const html=fs.readFileSync(new URL('../index.html',`file://${__filename}`),'utf8');
const auth=html.slice(html.indexOf('// Static training'),html.indexOf('\nconst primaryNav='));
function harness(){
 const elements=new Map();const el=id=>{if(!elements.has(id))elements.set(id,{value:'',textContent:'',hidden:false,style:{},classList:{toggle(){}},addEventListener(e,fn){this.handler=fn},reportValidity(){return true}});return elements.get(id)};
 let callback;const calls=[];const client={auth:{onAuthStateChange(fn){callback=fn},async getSession(){return {data:{session:null}}},async getUser(){return {data:{user:{id:'a',email:'a@example.com'}}}},async signUp(x){calls.push(['signup',x]);return {data:{session:null}}},async signInWithPassword(x){calls.push(['signin',x]);return {data:{session:null}}},async resetPasswordForEmail(...x){calls.push(['reset',...x]);return {}},async updateUser(x){calls.push(['update',x]);return {}},async signOut(){calls.push(['signout']);return {}},async resend(x){calls.push(['resend',x]);return {}}},from(){return {upsert(x){calls.push(['profile',x]);return Promise.resolve({})}}}};
 const context=vm.createContext({window:{supabase:{createClient:()=>client}},SUPABASE_URL:'https://dev.example',SUPABASE_KEY:'public',document:{getElementById:el},location:{origin:'http://localhost:4173',pathname:'/index.html',hash:''},URLSearchParams,history:{replaceState(){}},setTimeout(){},alert(){}});vm.runInContext(auth,context);
 return {el,calls,run:x=>vm.runInContext(x,context),event:(e,s)=>callback(e,s),submit:()=>el('memberForm').handler({preventDefault(){}})};
}
const verified={user:{id:'a',email:'a@example.com',email_confirmed_at:'2026-10-01'}};
test('unverified session cannot open dashboard',()=>{const h=harness();h.event('SIGNED_IN',{user:{id:'a'}});assert.equal(h.el('memberMain').hidden,true)});
test('signup requests verification with exact same-origin redirect',async()=>{const h=harness();await Promise.resolve();h.run("memberMode('signup')");h.el('memberEmail').value='a@example.com';h.el('memberPassword').value='test-password';await h.submit();assert.equal(h.calls[0][0],'signup');assert.equal(h.calls[0][1].options.emailRedirectTo,'http://localhost:4173/index.html');assert.match(h.el('memberMessage').textContent,/verify/);assert.equal(h.el('memberPassword').value,'')});
test('recovery event shows only new-password controls until update and signout',async()=>{const h=harness();await Promise.resolve();h.event('PASSWORD_RECOVERY',verified);assert.equal(h.el('memberMain').hidden,true);assert.equal(h.el('memberSubmit').textContent,'Save new password');assert.equal(h.el('memberTabs').hidden,true);assert.equal(h.el('memberEmailLabel').hidden,true);assert.equal(h.el('memberForgotButton').hidden,true);assert.equal(h.el('memberResendButton').hidden,true);h.el('memberPassword').value='new-password';await h.submit();assert.deepEqual(h.calls.map(x=>x[0]),['update','signout']);assert.match(h.el('memberMessage').textContent,/Password updated/);assert.equal(h.el('memberTabs').hidden,false)});
test('reset response avoids revealing account existence',async()=>{const h=harness();await Promise.resolve();h.run("memberMode('reset')");await h.submit();assert.match(h.el('memberMessage').textContent,/If an account exists/)});
test('signout clears private profile and progress',async()=>{const h=harness();await Promise.resolve();h.event('SIGNED_IN',verified);h.el('profileName').value='Private';h.el('progressList').textContent='Private';await h.run('memberSignOut()');assert.equal(h.el('profileName').value,'');assert.equal(h.el('progressList').textContent,'');assert.equal(h.el('memberMain').hidden,true)});
test('profile persists only to authenticated owner row',async()=>{const h=harness();await Promise.resolve();h.event('SIGNED_IN',verified);h.el('profileName').value='Maricel';await h.run('saveProfile()');assert.equal(h.calls[0][1].user_id,'a');assert.equal(h.calls[0][1].display_name,'Maricel')});
test('training features and authenticated Safe Haven writes are preserved',()=>{for(const id of ['practiceyard','planner','safehaven','backing','lesson'])assert.ok(html.includes(`id="${id}"`));assert.ok(html.includes("memberClient.from('safe_havens').insert"));assert.ok(!html.includes('fmyaxdzonqrgsyzizixe'));assert.ok(!html.includes('"Authorization": "Bearer " + SUPABASE_KEY'));for(const m of html.matchAll(/<script>([\s\S]*?)<\/script>/g))new vm.Script(m[1]);});
test('straight-back trainer corrects toward the trailer drift',()=>{assert.match(html,/choice === "left"\) \{\s*trailerAngle \+= 6/);assert.match(html,/choice === "right"\) \{\s*trailerAngle -= 6/);assert.match(html,/small correction toward the trailer's drift/)});
test('straight-back trainer uses non-branded Maricel truck assets',()=>{assert.ok(html.includes('assets/maricel-tractor.png'));assert.ok(html.includes('assets/maricel-success-hub-trailer.png'));for(const asset of ['maricel-tractor.png','maricel-success-hub-trailer.png'])assert.ok(fs.existsSync(new URL(`../assets/${asset}`,`file://${__filename}`)))});
test('member navigation groups every member page without exposing admin',()=>{
 const source=html.slice(html.indexOf('const primaryNav='),html.indexOf('const nav=document'));
 const context=vm.createContext({});vm.runInContext(source,context);
 const groups=vm.runInContext('primaryNav.map(item=>item[0])',context);
 assert.deepEqual(Array.from(groups),['home','training','trip','connect','notebook','account']);
 const screens=vm.runInContext('screenGroups',context);
 for(const [id,group] of Object.entries(screens)){assert.ok(groups.includes(group));assert.ok(html.includes(`id="${id}"`));}
 assert.equal(screens.drivercommunity,'connect');assert.equal(screens.progress,'account');assert.equal(screens.profile,'account');assert.equal(screens.resources,'training');assert.equal(screens.community,'notebook');assert.equal(screens.admin,undefined);
 const home=html.slice(html.indexOf('<section id="home"'),html.indexOf('<section id="practiceyard"'));
 assert.ok(home.includes('dashboardProgressSummary'));assert.ok(home.includes("openScreen('progress')"));
 assert.ok(html.includes('aria-current'));assert.ok(html.includes('aria-expanded'));assert.ok(html.includes('Stored on this device'));
});
test('Safe Haven and private facility notes use separate storage paths',()=>{assert.ok(html.includes('onclick="saveSafeHaven()"'));assert.ok(html.includes('onclick="saveFacilityNote()"'));assert.ok(html.includes("memberClient.from('facility_notes').insert"));assert.ok(!html.includes('onclick="saveFacility()"'));assert.ok(html.includes('Saved on this device only:'))});

