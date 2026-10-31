const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');
const read=name=>fs.readFileSync(new URL('../'+name,`file://${__filename}`),'utf8');
const visible=html=>html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,'').replace(/<[^>]*>/g,'');
test('site-authored static pages and metadata no longer advertise a beta',()=>{
 for(const f of fs.readdirSync(new URL('../',`file://${__filename}`)).filter(f=>f.endsWith('.html'))){const html=read(f);assert.doesNotMatch(visible(html),/\bbeta\b/i,f);for(const meta of html.matchAll(/<meta\b[^>]*\bcontent="([^"]*)"[^>]*>/gi))assert.doesNotMatch(meta[1],/\bbeta\b/i,f);}
});
test('clearance messages retain incomplete coverage and no-clearance-guarantee limits',()=>{
 const s=read('clearance-checks.js');assert.doesNotMatch(s,/\bbeta\b/i);assert.match(s,/does not calculate clearance or certify a route/);assert.match(s,/clearance-specific source has not yet been verified/);assert.match(s,/This does not mean there are no low bridges/);
});
test('launch cleanup preserves internal feedback category, privacy notices and versioned updated modules',()=>{
 const html=read('index.html');assert.match(read('member-navigation.js'),/'Beta Feedback'/);assert.match(read('community.js'),/categoryLabel=value=>value==='Beta Feedback'\?'Feedback':value/);
 for(const term of ['not a CDL training school','does not issue permits','private profile and progress stay private','no browsable member directory'])assert.ok(html.includes(term),term);
 assert.match(html,/community\.js\?v=63/);assert.match(html,/clearance-checks\.js\?v=63/);
});
