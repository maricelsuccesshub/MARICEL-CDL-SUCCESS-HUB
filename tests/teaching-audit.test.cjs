const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const root=fs.existsSync('dist/index.html')?'dist/':'';
test('teaching and download surfaces use the corrected sheet with its own directional context and limits',()=>{
 const sheet=fs.readFileSync(root+'assets/maricel-backing-study-sheet.svg','utf8');
 for(const phrase of ['Start an intentional turn','ALIGNED tractor and','OPPOSITE','Correct straight-back drift','TOWARD','does not','Stop and SECURE','before any','pull-up','Oregon CDL Manual','Reviewed October 30, 2026'])assert.ok(sheet.includes(phrase),phrase);
 assert.doesNotMatch(sheet,/YOU WILL MASTER|IN ANY SITUATION|Trailer stays straight/);
 for(const name of ['index.html','backing-poster.html','disclaimer.html']){const content=fs.readFileSync(root+name,'utf8');assert.doesNotMatch(content,/assets\/maricel-backing-visual-system\.jpeg/);assert.match(content,/Backing Visual Study Sheet/);}
 const page=fs.readFileSync(root+'backing-poster.html','utf8');assert.match(page,/href="assets\/maricel-backing-study-sheet.svg" download=/);assert.match(page,/Text study notes/);assert.match(page,/window.print\(\)/);
 assert.ok(fs.existsSync('source-materials/original-backing-visual-system.jpeg'));
 assert.ok(!fs.existsSync(root+'assets/maricel-backing-visual-system.jpeg'));
});
test('all teaching questions have valid answers and explanations; example controls have supported content',()=>{
 const elements=new Map();const get=id=>{if(!elements.has(id))elements.set(id,{innerHTML:'',value:'',hidden:true,setAttribute(){},focus(){},scrollIntoView(){},matches(){return false}});return elements.get(id)};
 const c=vm.createContext({window:{},document:{getElementById:get,querySelectorAll:()=>[]}});
 for(const file of ['remaining-backing.js','backing-guides.js','lessons.js','yard-decisions.js'])vm.runInContext(fs.readFileSync(root+file,'utf8'),c);
 const inventory=JSON.parse(vm.runInContext(`JSON.stringify({lessons:hubLessons,offset:offsetStages,straight:straightLearningStages(),remaining:remainingBackingGuides,yard:yardDecisionTests})`,c));
 let n=0;const check=q=>{assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length);assert.ok(q.why&&q.why.length>25);n++;};
 for(const lesson of inventory.lessons){for(const q of lesson.questions)check(q);for(const [key] of lesson.controls){vm.runInContext(`selectHubLesson(${inventory.lessons.indexOf(lesson)});selectLessonExample(${JSON.stringify(key)})`,c);assert.ok(!get('lessonRoot').innerHTML.includes('undefined'));}}
 for(const q of [...inventory.offset,...inventory.straight])check(q);
 for(const guide of Object.values(inventory.remaining))for(const q of guide.stages)check(q);
 for(const q of Object.values(inventory.yard))check(q);
 assert.equal(n,64);
});
