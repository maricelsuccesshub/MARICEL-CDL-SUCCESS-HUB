// Produces one reviewable transaction. Does not execute SQL or access Supabase.
const fs=require('node:fs'),path=require('node:path');
const dir=__dirname,catalog=require('./build-catalog.cjs');
const payload=JSON.stringify(catalog.activities);
if(payload.includes('$catalog$'))throw Error('Unsafe SQL delimiter');
const seed=`\n-- Original Hub catalog: ${catalog.activities.length} activities; no member data.\n`+
`insert into public.learning_activities(activity_id,content_version,module_key,title,content_hash)\n`+
`select x->>'id',(x->>'version')::integer,x->>'module',x->>'title',x->>'content_hash'\n`+
`from jsonb_array_elements($catalog$${payload}$catalog$::jsonb) x;\n`+
`insert into public.learning_questions(activity_id,content_version,question_id,prompt,options,correct_option,review_explanation,required_for_review)\n`+
`select a->>'id',(a->>'version')::integer,q->>'id',q->>'prompt',\n`+
`array(select jsonb_array_elements_text(q->'options')),(q->>'answer')::smallint,q->>'why',(q->>'required')::boolean\n`+
`from jsonb_array_elements($catalog$${payload}$catalog$::jsonb) a cross join lateral jsonb_array_elements(a->'questions') q;\ncommit;\n`;
fs.writeFileSync(path.join(dir,'proposed-change.sql'),fs.readFileSync(path.join(dir,'schema.sql'),'utf8')+seed);
console.log('Prepared proposed-change.sql; nothing applied.');
