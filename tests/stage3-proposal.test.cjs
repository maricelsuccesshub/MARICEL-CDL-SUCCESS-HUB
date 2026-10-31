// Static proposal checks, NOT evidence that database RLS has been exercised.
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const dir=path.resolve(__dirname,'../database/proposals/stage-3'),catalog=require('../database/proposals/stage-3/build-catalog.cjs');
const sql=fs.readFileSync(path.join(dir,'proposed-change.sql'),'utf8');
test('Stage 3 catalog covers original study modules with unique bounded question keys',()=>{
 assert.equal(catalog.activities.length,52);assert.equal(catalog.activities.reduce((n,a)=>n+a.questions.length,0),145);
 assert.equal(new Set(catalog.activities.map(a=>a.id)).size,52);
 for(const a of catalog.activities){assert.ok(a.questions.some(q=>q.required));assert.equal(new Set(a.questions.map(q=>q.id)).size,a.questions.length);for(const q of a.questions){assert.ok(q.answer>=0&&q.answer<q.options.length);assert.ok(q.options.length>=2&&q.options.length<=8);}}
 assert.deepEqual(JSON.parse(fs.readFileSync(path.join(dir,'catalog.json'),'utf8')),JSON.parse(JSON.stringify(catalog)));
});
test('proposal grants owner-only append access; no database changes are executed by tooling',()=>{
 for(const table of ['learning_activities','learning_questions','learning_attempts','learning_reviews'])assert.ok(sql.includes(`alter table public.${table} enable row level security;`));
 for(const table of ['learning_attempts','learning_reviews']){assert.ok(sql.includes(`create policy ${table}_read_own`));assert.ok(sql.includes(`create policy ${table}_insert_own`));}
 assert.match(sql,/using \(\(select auth.uid\(\)\) = user_id\)/);assert.match(sql,/with check \(\(select auth.uid\(\)\) = user_id\)/);
 assert.doesNotMatch(sql,/security definer|grant (?:update|delete|all).*to authenticated|alter table public\.member_progress|create view/i);
 assert.match(sql,/grant insert \(user_id,attempt_id,activity_id,content_version,question_id,selected_option\)/);
 assert.match(sql,/new.correct := new.selected_option = q.correct_option/);
 assert.match(sql,/primary key \(user_id, attempt_id\)/);
 assert.match(sql,/language sql stable security invoker/);
 assert.match(sql,/^begin;/m);assert.ok(sql.endsWith('commit;\n'));
});
test('rollback disables new access while retaining all tables and member records',()=>{
 const s=fs.readFileSync(path.join(dir,'rollback-disable.sql'),'utf8').replace(/^--.*$/gm,'');
 assert.doesNotMatch(s,/drop|truncate|delete|update|member_progress|hub_private/i);
 assert.match(s,/revoke all on function public.learning_snapshot/);
});
