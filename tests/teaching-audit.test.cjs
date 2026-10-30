const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const root=fs.existsSync('dist/index.html')?'dist/':'';
test('teaching and download surfaces use the Maricel visual resource with directional context and limits',()=>{
 const sheet=fs.readFileSync(root+'assets/maricel-backing-study-sheet.svg','utf8');
 for(const phrase of ['Start an intentional turn','ALIGNED tractor and','OPPOSITE','Correct straight-back drift','TOWARD','does not','Stop and SECURE','before any','pull-up','Oregon CDL Manual','Reviewed October 30, 2026'])assert.ok(sheet.includes(phrase),phrase);
 assert.doesNotMatch(sheet,/YOU WILL MASTER|IN ANY SITUATION|Trailer stays straight/);
 for(const name of ['index.html','backing-poster.html','disclaimer.html']){const content=fs.readFileSync(root+name,'utf8');assert.doesNotMatch(content,/assets\/maricel-backing-visual-system\.jpeg/);assert.match(content,/Maricel CDL Success Hub Visual Mastery/);}
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
test('Visual Mastery has four driver-view direction examples and carries its context in the download',()=>{
 const svg=fs.readFileSync(root+'assets/maricel-visual-mastery.svg','utf8');
 for(const [scenario,label] of [['turn-left','Starting aligned: desired rear left, initial top-of-wheel input right'],['turn-right','Starting aligned: desired rear right, initial top-of-wheel input left'],['drift-left','Unwanted straight-back left drift: initial small top-of-wheel correction left'],['drift-right','Unwanted straight-back right drift: initial small top-of-wheel correction right']])assert.ok(svg.includes(`id="${scenario}" aria-label="${label}"`));
 for(const phrase of ['Driver RIGHT = screen LEFT','Driver LEFT = screen RIGHT','initial LEFT → follow RIGHT','STOP &amp; SECURE','before any pull-up','Oregon CDL Manual','OSHA spotter guidance','not to scale'])assert.ok(svg.includes(phrase),phrase);
 assert.doesNotMatch(svg,/Mentorship|corrected|IN ANY SITUATION|YOU WILL MASTER|Trailer stays straight/);
 const printedText=svg.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ');assert.match(printedText,/If you are using a spotter, agree on signals beforehand; stop immediately if visual contact is lost/);
 for(const file of ['maricel-tractor.png','maricel-success-hub-trailer.png'])assert.ok(svg.includes(fs.readFileSync(root+'assets/'+file).toString('base64')));
 const png=fs.readFileSync(root+'assets/maricel-visual-mastery.png');assert.equal(png.readUInt32BE(16),1800);assert.equal(png.readUInt32BE(20),2700);
});
test('poster page offers actual full-size visual, downloads, print, accessible notes and claim-specific official sources',()=>{
 const page=fs.readFileSync(root+'backing-poster.html','utf8'),home=fs.readFileSync(root+'index.html','utf8'),credits=fs.readFileSync(root+'disclaimer.html','utf8');
 for(const content of [page,home])assert.ok(content.includes('src="assets/maricel-visual-mastery.png?v=48"'));
 for(const file of ['png','svg'])assert.match(page,new RegExp(`href="assets/maricel-visual-mastery\\.${file}\\?v=48" download=`));
 assert.match(page,/id="study-notes"/);assert.match(page,/id="sources"/);assert.match(page,/window.print\(\)/);
 for(const url of ['https://www.oregon.gov/odot/DMV/Pages/Online_CDL_Manual_2/Section_6.aspx','https://www.oregon.gov/odot/DMV/Pages/Online_CDL_Manual_2/Section_2.aspx','https://www.oregon.gov/odot/dmv/pages/online_cdl_manual_2/section_12.aspx','https://www.osha.gov/preventing-backovers/solutions'])assert.ok(page.includes(url));
 for(const content of [page,home,credits])assert.doesNotMatch(content,/corrected|Mentorship|earlier supplied poster/);
});
