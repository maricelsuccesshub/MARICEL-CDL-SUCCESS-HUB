const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const root=fs.existsSync('dist/index.html')?'dist/':'';
test('teaching and download surfaces use the Maricel visual resource with directional context and limits',()=>{
 const sheet=fs.readFileSync(root+'assets/maricel-backing-study-sheet.svg','utf8');
 for(const phrase of ['Start an intentional turn','ALIGNED tractor and','OPPOSITE','Correct straight-back drift','TOWARD','does not','Stop and SECURE','before any','pull-up','California DMV','Reviewed October 29, 2026'])assert.ok(sheet.includes(phrase),phrase);
 assert.doesNotMatch(sheet,/YOU WILL MASTER|IN ANY SITUATION|Trailer stays straight/);
 for(const name of ['index.html','backing-poster.html','disclaimer.html']){const content=fs.readFileSync(root+name,'utf8');assert.doesNotMatch(content,/assets\/maricel-backing-visual-system\.jpeg/);assert.match(content,/Maricel CDL Success Hub Visual Mastery/);}
 const page=fs.readFileSync(root+'backing-poster.html','utf8');assert.match(page,/href="assets\/maricel-backing-study-sheet.svg\?v=49" download=/);assert.match(page,/Text study notes/);assert.match(page,/window.print\(\)/);
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
 const lessonSource=fs.readFileSync(root+'lessons.js','utf8'),guideSource=fs.readFileSync(root+'backing-guides.js','utf8');assert.match(lessonSource,/service-brake \(foot-brake\) pedal alone/);assert.match(lessonSource,/You may not be able to see both rear corners or the rear wheels at the same time/);assert.match(guideSource,/Alignment describes the present position; it does not guarantee the next path/);assert.doesNotMatch(guideSource,/A small alignment error grows as you continue backward/);
});
test('Visual Mastery has four driver-view direction examples and carries its context in the download',()=>{
 const svg=fs.readFileSync(root+'assets/maricel-visual-mastery.svg','utf8');
 for(const [scenario,label] of [['turn-left','Starting aligned: desired rear left, initial top-of-wheel input right'],['turn-right','Starting aligned: desired rear right, initial top-of-wheel input left'],['drift-left','Unwanted straight-back left drift: initial small top-of-wheel correction left'],['drift-right','Unwanted straight-back right drift: initial small top-of-wheel correction right']])assert.ok(svg.includes(`id="${scenario}" aria-label="${label}"`));
 for(const phrase of ['Driver RIGHT = screen LEFT','Driver LEFT = screen RIGHT','initial LEFT → follow RIGHT','STOP &amp; SECURE','before any pull-up','California DMV','OSHA','not to scale'])assert.ok(svg.includes(phrase),phrase);
 assert.doesNotMatch(svg,/Mentorship|corrected|IN ANY SITUATION|YOU WILL MASTER|Trailer stays straight/);
 const printedText=svg.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ');assert.match(printedText,/If you are using a spotter, agree on signals beforehand; stop immediately if visual contact is lost/);
 for(const file of ['maricel-tractor.png','maricel-success-hub-trailer.png'])assert.ok(svg.includes(fs.readFileSync(root+'assets/'+file).toString('base64')));
 const png=fs.readFileSync(root+'assets/maricel-visual-mastery.png');assert.equal(png.readUInt32BE(16),1800);assert.equal(png.readUInt32BE(20),2700);
});
test('poster page offers actual full-size visual, downloads, print, accessible notes and claim-specific official sources',()=>{
 const page=fs.readFileSync(root+'backing-poster.html','utf8'),home=fs.readFileSync(root+'index.html','utf8'),credits=fs.readFileSync(root+'disclaimer.html','utf8');
 for(const content of [page,home])assert.ok(content.includes('src="assets/maricel-visual-mastery.png?v=49"'));
 for(const file of ['png','svg'])assert.match(page,new RegExp(`href="assets/maricel-visual-mastery\\.${file}\\?v=49" download=`));
 assert.match(page,/id="study-notes"/);assert.match(page,/id="sources"/);assert.match(page,/window.print\(\)/);
 for(const url of ['https://www.dmv.ca.gov/portal/driver-education-and-safety/special-interest-driver-guides/truck-drivers/','https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/commercial-driver-guide-text-only','https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt','https://www.osha.gov/preventing-backovers/solutions'])assert.ok(page.includes(url));
 for(const content of [page,home,credits])assert.doesNotMatch(content,/corrected|Mentorship|earlier supplied poster/);
});
test('teaching sources separate national context, cross-state principles, local test rules and original authorship',()=>{
 const names=['lessons.js','backing-guides.js','remaining-backing.js','yard-decisions.js','backing-poster.html'];
 for(const name of names){const text=fs.readFileSync(root+name,'utf8');for(const host of ['fmcsa.dot.gov','dmv.ca.gov','dol.wa.gov'])assert.ok(text.includes(host),name+': '+host);assert.doesNotMatch(text,/Online_CDL_Manual_2|Oregon CDL Manual/);assert.match(text,/Coach Maricel/);assert.match(text,/state/);assert.match(text,/ELDT completion/);}
 const credits=fs.readFileSync(root+'disclaimer.html','utf8');assert.match(credits,/id="learning-source-credits"/);assert.match(credits,/id="state-specific-testing"/);assert.match(credits,/National training context/);assert.match(credits,/General backing principles/);assert.match(credits,/neither state’s exam instructions are presented as nationwide rules/);assert.match(credits,/California example:/);
 for(const asset of ['maricel-backing-study-sheet.svg','maricel-visual-mastery.svg']){const text=fs.readFileSync(root+'assets/'+asset,'utf8');for(const credit of ['FMCSA','California DMV','Washington DOL','OSHA'])assert.ok(text.includes(credit),asset+': '+credit);assert.doesNotMatch(text,/Oregon CDL/);}
});
