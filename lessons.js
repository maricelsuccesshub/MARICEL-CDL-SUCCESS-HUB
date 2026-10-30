// Original beginner learning content for Maricel CDL Success Hub. No school materials or database access.
const hubLessons=[
  {
    "id": "meet",
    "title": "Meet your truck",
    "kicker": "Start with the names",
    "objective": "Identify the tractor, trailer, rear wheels and the two sides before learning a steering rule.",
    "learn": [
      [
        "Tractor = the powered front unit",
        "The tractor is the truck with the driver’s cab. Its front corners need clearance as it changes heading. It is a different part from the trailer."
      ],
      [
        "Trailer = the unit coupled behind it",
        "The trailer and tractor join at a coupling. On this type of combination, the tractor’s fifth-wheel coupling has a locking mechanism that secures the kingpin under the front of the trailer. Your instructor will teach inspection and coupling procedures separately."
      ],
      [
        "Rear corners and rear wheels are different references",
        "Rear corners are the two back edges of the trailer. The rear wheel group is farther forward; a two-axle group is often called the tandems. Clearance for a corner does not prove clearance for the wheels or tractor."
      ],
      [
        "Learn the picture’s viewpoint",
        "Our drawings look down from above, with the tractor nose at the bottom. On this left-hand-drive truck, the seated driver’s right is screen left. The driver’s left is screen right. These are not mirror images."
      ]
    ],
    "tryIntro": "Choose a part to highlight. Find the same part on the real, stationary vehicle with your instructor.",
    "controls": [
      [
        "tractor",
        "Tractor / cab"
      ],
      [
        "trailer",
        "Trailer"
      ],
      [
        "rear",
        "Rear corners"
      ],
      [
        "wheels",
        "Rear wheels"
      ],
      [
        "coupling",
        "Coupling"
      ]
    ],
    "coach": "Learn what each reference means before trying to use it.",
    "questions": [
      {
        "prompt": "Which part is the tractor?",
        "options": [
          "The powered front unit with the driver’s cab",
          "The trailer behind the cab"
        ],
        "answer": 0,
        "why": "The tractor is the powered front unit. The trailer is the separate unit coupled behind it."
      },
      {
        "prompt": "In this top view, the truck nose faces down. Where is the seated driver’s left?",
        "options": [
          "Screen left",
          "Screen right"
        ],
        "answer": 1,
        "why": "The driver faces toward the bottom of the picture, so their left is screen right. This screen orientation does not change the meaning of a left steering input."
      }
    ],
    "guides": [
      "straight"
    ],
    "practice": [],
    "instructor": "Can you show me the tractor, trailer rear corners, rear wheels and coupling on this vehicle?"
  },
  {
    "id": "look",
    "title": "Learn where to look",
    "kicker": "Build a useful view",
    "objective": "Compare known references on both sides and recognize what the mirrors cannot show.",
    "learn": [
      [
        "Begin with a known straight view",
        "With the combination straight and secured, ask your instructor to help adjust mirrors and identify the trailer side and any visible rear corner or rear wheels in each mirror. Learn your normal view on this truck."
      ],
      [
        "Watch change, not a single picture",
        "Compare the trailer with a fixed lane boundary on each side. Is a gap getting narrower? Is the trailer changing angle relative to the lane? A narrow gap alone does not prove a developing drift."
      ],
      [
        "Use more than the target view",
        "Check both mirrors, tractor-front space and people in the movement area. The trailer is important, but staring only at it misses other hazards. Equal-looking mirror gaps do not prove alignment."
      ],
      [
        "A hidden area is still unknown",
        "Mirrors and cameras do not show every part of the path. If clearance is uncertain, stop and secure before getting out to inspect. Do not continue using memory of what was clear earlier."
      ]
    ],
    "tryIntro": "Select a reference. These highlights show parts to check, not the actual view your mirrors provide.",
    "controls": [
      [
        "driver",
        "Driver-side reference"
      ],
      [
        "passenger",
        "Passenger-side reference"
      ],
      [
        "rear",
        "Rear corners"
      ],
      [
        "front",
        "Tractor-front space"
      ],
      [
        "unseen",
        "Area behind: inspect"
      ]
    ],
    "coach": "Look for a changing relationship, and stop when the picture is unclear.",
    "questions": [
      {
        "prompt": "You cannot confirm the path directly behind the trailer. What comes first?",
        "options": [
          "Continue slowly because it was clear earlier",
          "Stop; secure before inspecting or getting help"
        ],
        "answer": 1,
        "why": "A previous inspection or a clear side mirror does not confirm a hidden rear path now."
      },
      {
        "prompt": "One mirror shows more trailer than the other. Does that alone prove the combination is crooked?",
        "options": [
          "Yes. Both mirrors must always look identical",
          "No. Learn the baseline and compare actual alignment and changes"
        ],
        "answer": 1,
        "why": "Mirror adjustment and equipment affect the image. Check trailer-to-lane and tractor-to-trailer alignment separately."
      }
    ],
    "guides": [
      "straight",
      "blind"
    ],
    "practice": [],
    "instructor": "Which rear areas can I not see from this seat, and what is my normal straight view in each mirror?"
  },
  {
    "id": "directions",
    "title": "Turn or drift?",
    "kicker": "Two different situations",
    "objective": "Distinguish starting an intentional trailer turn from correcting unwanted straight-back drift.",
    "learn": [
      [
        "First identify the situation",
        "An intentional turn means you want the trailer rear to start toward a new direction. A drift is an unwanted departure from an intended straight-back path. Do not use the same slogan for both."
      ],
      [
        "Starting a trailer turn from an aligned combination",
        "The initial top-of-wheel input is opposite the intended trailer-rear direction. For example, to start the trailer rear toward the seated driver’s right, the initial steering input is left."
      ],
      [
        "Correcting a confirmed straight-back drift",
        "For an unwanted right drift, the initial small top-of-wheel correction is right, toward the drift. A left drift mirrors that example. Observe and adjust as alignment returns; this is not a command to hold that input."
      ],
      [
        "Following is another phase",
        "After initiating a trailer turn, steering changes the other way to follow the trailer. An already-angled combination needs your instructor’s assessment; do not automatically replay the aligned-start rule. Steering directions refer to the top of the wheel from the driver’s seat."
      ]
    ],
    "tryIntro": "Compare the situations. The headings are independent concept pictures, not predicted movement or wheel-turn amounts.",
    "controls": [
      [
        "turn",
        "Start a right trailer turn"
      ],
      [
        "drift",
        "Correct a right drift"
      ],
      [
        "follow",
        "Follow the turn"
      ]
    ],
    "coach": "Name the situation before choosing a correction.",
    "questions": [
      {
        "prompt": "From an aligned combination, you want to START the trailer rear turning toward the driver’s right. What is the initial top-of-wheel direction?",
        "options": [
          "Left",
          "Right"
        ],
        "answer": 0,
        "why": "For this intentional trailer turn from an aligned combination, the initial input is opposite the intended rear direction: left."
      },
      {
        "prompt": "During an intended straight back, the trailer rear is confirmed drifting right. What is the initial small top-of-wheel correction?",
        "options": [
          "Left, away from the drift",
          "Right, toward the drift"
        ],
        "answer": 1,
        "why": "Straight-back drift correction initially goes toward the drift. That is a different situation from starting an intentional trailer turn."
      }
    ],
    "guides": [
      "straight",
      "offset"
    ],
    "practice": [
      "straight",
      "straight-left"
    ],
    "instructor": "How do I recognize an intentional turn versus straight-back drift on this truck?"
  },
  {
    "id": "control",
    "title": "Correct, observe, ease",
    "kicker": "Avoid chasing the trailer",
    "objective": "Use observed response and both alignments to guide a small straight-back correction.",
    "learn": [
      [
        "Move slowly enough to observe and stop",
        "Use the reverse and speed-control procedure your instructor teaches for this transmission and site. Slow movement gives time to notice changes, but does not make an unseen path clear."
      ],
      [
        "Small input, then active observation",
        "In a straight-back correction, watch the response instead of adding large repeated inputs. There is no universal instruction to turn once and wait a fixed number of seconds. Stop if the response or clearance is unclear."
      ],
      [
        "Ease as alignment returns",
        "Holding the correction too long can create another drift. As alignment improves, bring steering toward center and continue observing; further small adjustments may be needed with instructor guidance."
      ],
      [
        "Check two alignments",
        "Is the trailer parallel with the lane? Is the tractor aligned with the trailer? A centered wheel does not by itself straighten the combination or return it to the lane center. If already parallel but mispositioned, stop and plan a reposition."
      ]
    ],
    "tryIntro": "Inspect a right-drift example at three observation points. These are stationary reference poses, not a simulated path.",
    "controls": [
      [
        "notice",
        "Notice right drift"
      ],
      [
        "correct",
        "Small correction"
      ],
      [
        "ease",
        "Ease & verify alignment"
      ]
    ],
    "coach": "Observe the result of an input; do not assume it worked.",
    "questions": [
      {
        "prompt": "The trailer is responding and alignment is improving. Should the initial correction be held for a fixed number of seconds?",
        "options": [
          "No. Adjust or ease based on the response and instruction",
          "Yes. The same delay works with every rig"
        ],
        "answer": 0,
        "why": "Response depends on equipment and setup. A held correction can create a new angle; there is no universal time delay."
      },
      {
        "prompt": "The steering wheel is centered, but tractor and trailer still form an angle. Is the combination straight?",
        "options": [
          "Yes. Wheel center proves it",
          "No. Vehicle alignment still needs checking"
        ],
        "answer": 1,
        "why": "Wheel position, tractor-to-trailer alignment and trailer-to-lane alignment are separate references."
      }
    ],
    "guides": [
      "straight"
    ],
    "practice": [
      "straight",
      "straight-left",
      "center"
    ],
    "instructor": "What response should I watch for, and when should I ease the correction on this equipment?"
  },
  {
    "id": "reset",
    "title": "Know when to stop",
    "kicker": "A reset is a decision",
    "objective": "Recognize stop conditions and inspect a reset before making another movement.",
    "learn": [
      [
        "Stop when the path becomes uncertain",
        "Stop for a person entering the movement area, uncertain clearance, an unclear signal or a vehicle angle you do not understand. Near completion is not an exception."
      ],
      [
        "If you are using a spotter",
        "A spotter is a trained outside helper, not automatically any instructor observing you. If you are using one, agree on signals, keep the helper visible and clear of the movement area, and stop immediately if visual contact is lost. Follow any site or training rules for assistance. You still check the path and clearances."
      ],
      [
        "Get out and look with the vehicle secured",
        "A useful outside inspection replaces assumptions with observed references. Secure using the correct parking procedure before leaving the cab and follow safe entry and exit practices. Do not enter pinch points."
      ],
      [
        "A pull-up also needs a clear path",
        "A pull-up is forward repositioning. Inspect that path before moving and plan it with your instructor. If contact may have occurred, secure and follow incident procedures. Remain stopped if no clear next move is available."
      ]
    ],
    "tryIntro": "Choose a situation and name the decision before steering again.",
    "controls": [
      [
        "unseen",
        "Rear path uncertain"
      ],
      [
        "unclear",
        "Next move unclear"
      ],
      [
        "person",
        "Person enters area"
      ],
      [
        "reset",
        "Considering a pull-up"
      ]
    ],
    "coach": "You can stop. A reset is a decision, not a failure.",
    "questions": [
      {
        "prompt": "You cannot confirm the rear path while backing. What should you do?",
        "options": [
          "Continue slowly and assume the hidden area is clear",
          "Stop; secure before getting out to inspect"
        ],
        "answer": 1,
        "why": "An uncertain rear path is a reason to stop. Secure before leaving the cab and inspect before planning another movement."
      },
      {
        "prompt": "What must happen before a forward pull-up?",
        "options": [
          "Inspect its path and agree on a clear next move",
          "Assume forward movement is always clear"
        ],
        "answer": 0,
        "why": "Forward repositioning is another vehicle movement. Check the area and do not assume it stayed clear."
      }
    ],
    "guides": [
      "panic",
      "blind"
    ],
    "practice": [],
    "instructor": "What signals and stop points will we use, and where can I safely inspect a reset?"
  },
  {
    "id": "practice",
    "title": "Choose one practice focus",
    "kicker": "Take understanding into instruction",
    "objective": "Connect a reviewed concept to a guide, decision exercise and question for your instructor.",
    "learn": [
      [
        "Choose one clear learning goal",
        "Examples: identify a narrowing gap, distinguish drift from an intentional turn, or recognize returning alignment. Work on that goal with qualified instruction and the actual equipment."
      ],
      [
        "Use the guide that matches the task",
        "Straight backing, offset and docking involve different phases and references. A 45° or 90° approach label is not a steering-wheel angle or an instruction to create that articulation."
      ],
      [
        "Know the actual exercise",
        "Confirm your current state’s test layout, required finish and instructions with your instructor or examiner. Generic drawings do not supply universal distances, allowed looks, pull-ups or a passing position."
      ],
      [
        "Reflect honestly",
        "Reviewing these topics or answering screen questions does not demonstrate behind-the-wheel skill. Record what you understood, what remains confusing and what you want your instructor to demonstrate."
      ]
    ],
    "tryIntro": "Pick a guide below when you know your next focus. The truck drawing is a reference, not a readiness assessment.",
    "controls": [
      [
        "ready",
        "Plan one supervised focus"
      ],
      [
        "reset",
        "Unsure? Revisit the reset plan"
      ]
    ],
    "coach": "Understanding comes before memorizing.",
    "questions": [
      {
        "prompt": "You answered the questions correctly. Does that demonstrate real driving skill?",
        "options": [
          "No. Practical ability still needs supervised assessment",
          "Yes. Correct screen answers certify readiness"
        ],
        "answer": 0,
        "why": "The Hub provides learning support. It cannot assess actual clearances, equipment control or driving readiness."
      },
      {
        "prompt": "Before a real exercise, what should you confirm?",
        "options": [
          "Only the picture on this screen",
          "The instructor’s setup, references, stop plan and actual finish"
        ],
        "answer": 1,
        "why": "Equipment, site conditions and current exercise requirements determine the real plan."
      }
    ],
    "guides": [
      "straight",
      "offset",
      "alley",
      "45",
      "90",
      "blind",
      "truckstop",
      "panic"
    ],
    "practice": [
      "straight",
      "straight-left",
      "center"
    ],
    "instructor": "What is one suitable practice focus for me today, and how will you assess it?"
  }
];
const lessonGlossary={backing:['Backing / reverse','Moving the vehicle backward. Your instructor teaches the controls for the actual transmission.'],tractor:['Tractor','The powered front unit with the driver’s cab.'],trailer:['Trailer','The separate unit coupled behind the tractor.'],coupling:['Coupling','The connection holding tractor and trailer together; on this type, the fifth-wheel coupling on the tractor secures the kingpin under the trailer front.'],wheels:['Rear wheel group','The rear wheels of the trailer; a two-axle group is often called the tandems.'],clearance:['Clearance','The space between any part of the vehicle and a person, object or boundary.'],alignment:['Alignment','How the tractor and trailer line up with each other and with the intended lane. Parallel to the lane means pointing in the same direction as its boundaries.'],drift:['Drift','An unwanted departure from the intended straight-back path.'],articulation:['Articulation','The angle between tractor and trailer. The picture gives no safe maximum angle.'],follow:['Follow the trailer','Change the tractor heading to come into line with the trailer’s heading during a developing turn, using instructor-guided steering and timing.'],top:['Top-of-wheel direction','Left or right refers to moving the top of the steering wheel from the seated driver’s viewpoint, not the screen’s left or right.'],response:['Vehicle response','What the actual tractor and trailer do after a control input; it is something to observe, not assume.'],spotter:['Spotter','A trained helper using agreed signals, staying visible and outside the movement area and pinch points.'],pinch:['Pinch point','A space where a person could be caught or crushed between moving equipment or an obstacle. Stay out.'],secure:['Secure before leaving the cab','Follow the proper parking procedure for the equipment before getting out; your instructor must teach it.'],pullup:['Pull-up','Moving forward to improve the position before another backing attempt; inspect that path first.'],bay:['Bay','The target parking or docking space. Its entrance and actual stopping point need to be identified.'],approach:['Approach','The setup and space used to bring the combination toward its target.'],review:['Reviewed this visit','A mark for this screen activity only, not proof of driving ability or certification.']};
const lessonWordKeys={meet:['backing','tractor','trailer','coupling','wheels'],look:['clearance','alignment','drift'],directions:['top','alignment','drift','follow'],control:['response','alignment','articulation','pullup'],reset:['spotter','pinch','secure','pullup'],practice:['bay','approach','articulation','review']};
function lessonWordHelp(){return '<details class="lesson-glossary"><summary>New words in this topic</summary><dl>'+lessonWordKeys[currentHubLesson().id].map(key=>'<dt>'+lessonEscape(lessonGlossary[key][0])+'</dt><dd>'+lessonEscape(lessonGlossary[key][1])+'</dd>').join('')+'</dl></details>';}
const lessonGuideLabels={straight:'Straight Backing',offset:'Offset Backing',alley:'Alley Dock','45':'45° Backing','90':'90° Backing',blind:'Blind Side',truckstop:'Truck Stop Parking',panic:'I Lost My Setup'};
function newLessonVisit(){return {current:0,tab:'learn',examples:{},answers:{},reviewed:[],notice:''};}
let lessonVisit=newLessonVisit();
function lessonEscape(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function currentHubLesson(){return hubLessons[lessonVisit.current];}
function lessonExample(){const l=currentHubLesson();return lessonVisit.examples[l.id]||l.controls[0][0];}
function lessonExampleInfo(){
 const l=currentHubLesson(),v=lessonExample();
 const info={tractor:['The tractor is the powered front unit with the driver’s cab. Notice its front corners as well as the trailer.','tractor'],trailer:['The trailer is the separate unit behind the tractor. Its rear corners and rear wheels are different references.','trailer'],rear:['These are the two back corners of the trailer. Locate the actual visible corner or side with your instructor.','rear'],wheels:['This is the trailer rear wheel group. It sits forward of the rear corners; both need clearance.','wheels'],coupling:['The coupling joins the units. On this combination, the tractor’s fifth-wheel coupling secures the kingpin under the trailer front. This picture is not a coupling-inspection procedure.','coupling'],driver:['The seated driver’s left is screen right here. Use the actual driver-side mirror to locate visible trailer references and compare them with the boundary.','driver'],passenger:['The seated driver’s right is screen left here. Check the actual passenger-side view as well; it may show different references.','passenger'],front:['The tractor nose and front corners also need room as headings change. The rear target view alone does not confirm that space.','tractor'],unseen:['Stop if you cannot confirm the rear path. Secure before getting out to inspect. This callout is not a map of the real blind area.','unseen'],turn:['Intentional right trailer turn, starting aligned: the initial top-of-wheel input is LEFT. The drawing shows a developing relationship, not wheel rotation or a fixed amount.','turn'],drift:['Unwanted right drift during a straight back: the initial small top-of-wheel correction is RIGHT. Observe and ease as alignment returns.','drift'],follow:['After starting the right trailer turn, steering changes the other way to follow it. Your instructor must teach the timing and amount on this truck.','follow'],notice:['The rear is angled toward the seated driver’s right: screen left in this top view. Confirm a changing gap and alignment before diagnosing drift.','notice'],correct:['A small initial right steering correction addresses this confirmed right drift. Check both sides and the tractor front while watching the response.','correct'],ease:['As alignment returns, ease the correction and verify both alignments. A centered wheel alone does not prove the rig is straight.','ease'],unclear:['STOP when the next move is unclear. Check alignment, clearance and the full path; secure before getting out to look. Ask your instructor to help plan the next move.','stop'],person:['STOP when a person enters the movement area. Do not rely on them to notice the truck or move clear.','stop'],reset:['A forward pull-up needs an inspected path and a clear plan. If either is uncertain, remain stopped and ask your instructor.','stop'],ready:['Choose one learning focus and ask your instructor to demonstrate the references, response and stop plan on your actual equipment.','ready']};
 return {text:info[v][0],focus:info[v][1]};
}
function lessonRigFigure(){
 const {focus}=lessonExampleInfo(),recovery=currentHubLesson().id==='control';
 let t=0,c=0,y=325;if(focus==='turn'){t=-4;c=8;}if(focus==='drift'||focus==='correct'){t=-4;c=-8;}if(focus==='follow'){t=-4;c=-2;}if(focus==='notice'){t=-6;}if(focus==='ease'){t=-1;c=-2;}if(recovery&&focus==='correct')y=315;if(recovery&&focus==='ease')y=305;
 const trailerMark=focus==='trailer'?'<rect x="-32" y="-181" width="64" height="188" rx="7" fill="none" stroke="#d17a22" stroke-width="4"/>':focus==='rear'?'<circle cx="-23" cy="-168" r="10" fill="#00867a" stroke="white" stroke-width="3"/><circle cx="23" cy="-168" r="10" fill="#00867a" stroke="white" stroke-width="3"/>':focus==='wheels'?'<rect x="-33" y="-155" width="66" height="35" rx="5" fill="none" stroke="#d17a22" stroke-width="5"/>':focus==='driver'?'<path d="M31 -164V-5" stroke="#d17a22" stroke-width="6"/>':focus==='passenger'?'<path d="M-31 -164V-5" stroke="#d17a22" stroke-width="6"/>':'';
 const tractorMark=focus==='tractor'?'<rect x="-40" y="-20" width="80" height="133" rx="15" fill="none" stroke="#d17a22" stroke-width="4"/>':'';
 return `<figure class="lesson-figure"><svg viewBox="0 0 600 530" role="img" aria-labelledby="lessonRigTitle lessonRigDesc"><title id="lessonRigTitle">Maricel truck reference: ${lessonEscape(lessonExample())}</title><desc id="lessonRigDesc">Top view of the existing Maricel tractor and trailer, with the tractor front facing down. Driver right is screen left and driver left is screen right. The selected part or relationship is highlighted. Independent stationary concept, not a mirror image, connected path, exact steering amount or clearance calculation.</desc><rect width="600" height="530" rx="18" fill="#edf5f6"/><path d="M200 85V460M400 85V460" stroke="#6b9b92" stroke-width="3" stroke-dasharray="9 7"/><text x="28" y="42" fill="#324d60" font-size="18">Driver’s right</text><text x="572" y="42" text-anchor="end" fill="#324d60" font-size="18">Driver’s left</text><g transform="translate(300 ${y})"><g transform="rotate(${t})"><image href="assets/maricel-success-hub-trailer.png" x="-25" y="-174" width="50" height="174"/>${trailerMark}</g><g transform="rotate(${c})"><image href="assets/maricel-tractor.png" x="-31" y="-14" width="62" height="117"/>${tractorMark}</g>${focus==='coupling'?'<circle r="20" fill="none" stroke="#d17a22" stroke-width="5"/>':''}</g>${focus==='unseen'||focus==='stop'?'<rect x="105" y="67" width="390" height="58" rx="12" fill="#fff0e4" stroke="#b4642b" stroke-width="2"/><text x="300" y="103" text-anchor="middle" fill="#853e16" font-size="21">STOP · confirm the path and plan</text>':''}<text x="300" y="492" text-anchor="middle" fill="#324d60" font-size="20">Truck front ↓ · top view, not a mirror</text><text x="300" y="518" text-anchor="middle" fill="#526278" font-size="17">Stationary concept · not to scale</text></svg><figcaption>These pictures identify references and decisions. They do not simulate vehicle movement or establish real clearance, wheel turns or timing.</figcaption></figure>`;
}
function lessonChecksPassed(){const l=currentHubLesson();return l.questions.every((q,i)=>lessonVisit.answers[l.id]?.[i]===q.answer);}
function renderLessons(focusId){
 const root=document.getElementById('lessonRoot');if(!root)return;const l=currentHubLesson(),count=lessonVisit.reviewed.length,done=lessonVisit.reviewed.includes(l.id);
 root.innerHTML=`<div class="lesson-hero"><div><span class="lesson-eyebrow">Your first steps in the yard</span><h2>Backing Fundamentals</h2><p class="lesson-hero-lead">New to trucks? Start with what you can see.</p><p>Learn the parts, build a useful view, then connect what you notice to a decision. No trucking experience assumed.</p><div class="lesson-hero-actions"><button class="btn" onclick="focusCurrentLesson()">${count===0&&lessonVisit.current===0?'Start with the truck':'Open this topic'} <span aria-hidden="true">→</span></button><button class="btn light" onclick="selectHubLesson(5,'try')">Choose a practice focus</button></div><p class="lesson-hero-caption">Coach Maricel · Understanding comes before memorizing.</p></div><div class="lesson-hero-art" aria-hidden="true"><span class="lesson-art-label">Learn with your Maricel truck</span><div class="lesson-decor-rig"><img src="assets/maricel-success-hub-trailer.png" alt="" class="lesson-decor-trailer"><img src="assets/maricel-tractor.png" alt="" class="lesson-decor-tractor"></div></div></div><div class="lesson-visit"><div><strong>${count} of ${hubLessons.length} topics reviewed this visit</strong><span>Review marks and answers reset on sign-out, account change or refresh. They do not assess driving skill.</span></div><progress max="6" value="${count}" aria-label="Topics reviewed this visit">${count}/6</progress></div><div class="lesson-path-heading"><h3>Your learning path</h3><p>Start at 1. You can revisit any topic at your own pace.</p></div><nav class="lesson-path" aria-label="Backing fundamentals learning path">${hubLessons.map((m,i)=>`<button type="button" class="lesson-path-card ${i===lessonVisit.current?'current':''}" ${i===lessonVisit.current?'aria-current="step"':''} onclick="selectHubLesson(${i})"><span class="lesson-path-number">${i+1}</span><span><strong>${lessonEscape(m.title)}</strong><small>${lessonEscape(m.kicker)}</small><span class="lesson-path-status">${lessonVisit.reviewed.includes(m.id)?'Reviewed this visit':'Open topic'}</span></span></button>`).join('')}</nav><article class="lesson-detail card"><div class="lesson-detail-head"><div><span class="lesson-eyebrow">Topic ${lessonVisit.current+1} of ${hubLessons.length} · ${lessonEscape(l.kicker)}</span><h3 id="hubLessonTitle" tabindex="-1">${lessonEscape(l.title)}</h3><p>${lessonEscape(l.objective)}</p></div><span class="lesson-parked">Parked learning<br>No timer</span></div>${lessonWordHelp()}<div class="lesson-tabs" role="group" aria-label="Learning activity">${[['learn','1. Learn it'],['try','2. Explore it'],['check','3. Check understanding']].map(([tab,label])=>`<button id="lessonTab-${tab}" class="btn ${lessonVisit.tab===tab?'':'light'}" aria-pressed="${lessonVisit.tab===tab}" onclick="setHubLessonTab('${tab}')">${label}</button>`).join('')}</div><div id="lessonActivity">${lessonVisit.tab==='learn'?`<div class="lesson-read-grid"><div class="lesson-read-copy">${l.learn.map(([heading,text])=>`<div><h4>${lessonEscape(heading)}</h4><p>${lessonEscape(text)}</p></div>`).join('')}</div><aside class="lesson-coach-note"><span class="lesson-eyebrow">Coach’s focus</span><p>${lessonEscape(l.coach)}</p><p class="small">Use while parked. Real practice needs qualified instruction, your equipment’s procedures and a confirmed clear path.</p><button class="btn light" onclick="setHubLessonTab('try')">Explore the references →</button></aside></div>`:lessonVisit.tab==='try'?`<p>${lessonEscape(l.tryIntro)}</p><div class="lesson-example-controls" role="group" aria-label="Explore this topic">${l.controls.map(([key,label])=>`<button id="lessonExample-${key}" class="btn light" aria-pressed="${lessonExample()===key}" onclick="selectLessonExample('${key}')">${lessonEscape(label)}</button>`).join('')}</div><div class="lesson-try-grid">${lessonRigFigure()}<div class="lesson-observation" role="status"><span class="lesson-eyebrow">What to notice</span><p>${lessonEscape(lessonExampleInfo().text)}</p><h4>Ask your instructor</h4><p>${lessonEscape(l.instructor)}</p><button class="btn light" onclick="setHubLessonTab('check')">Check my understanding →</button></div></div>`:`<p>Try both questions. Each answer has an explanation; you can retry without a timer.</p>${l.questions.map((q,qi)=>{const answer=lessonVisit.answers[l.id]?.[qi],answered=Number.isInteger(answer),correct=answer===q.answer;return `<div class="lesson-question"><h4>${qi+1}. ${lessonEscape(q.prompt)}</h4><div class="lesson-answer-options">${q.options.map((option,oi)=>`<button class="btn light" aria-pressed="${answer===oi}" onclick="answerHubLesson(${qi},${oi})">${lessonEscape(option)}</button>`).join('')}</div><div id="lessonFeedback-${qi}" role="status" aria-live="polite">${answered?`<div class="${correct?'success':'warning'}"><strong>${correct?'Good observation.':'Pause and reconsider.'}</strong> ${lessonEscape(q.why)}${correct?'':' You can try again.'}</div>`:''}</div></div>`;}).join('')}<div class="lesson-review-action"><button class="btn" onclick="markHubLessonReviewed()" ${lessonChecksPassed()?'':'disabled'}>${done?'Reviewed this visit ✓':'Mark this topic reviewed'}</button><p class="small">Available after both correct answers. A review mark records this screen activity only; it is not certification or a practical assessment.</p></div>`}</div><div id="lessonNotice" role="status" aria-live="polite">${lessonEscape(lessonVisit.notice)}</div><div class="lesson-next-actions"><button class="btn light" onclick="selectHubLesson(${lessonVisit.current-1})" ${lessonVisit.current===0?'disabled':''}>Previous topic</button><button class="btn" onclick="selectHubLesson(${lessonVisit.current===hubLessons.length-1?0:lessonVisit.current+1})">${lessonVisit.current===hubLessons.length-1?'Review from the beginning':'Next topic →'}</button></div><details class="lesson-next-tools" ${l.id==='practice'?'open':''}><summary>Connect this topic to practice</summary><p>Review a matching guide, try a screen decision exercise, then plan real practice with your instructor.</p><div class="lesson-tool-links">${l.guides.map(key=>`<button class="btn light" onclick="openHubLessonGuide('${key}')">${lessonEscape(lessonGuideLabels[key])} guide</button>`).join('')}${l.practice.map(key=>`<button class="btn light" onclick="openHubLessonPractice('${key}')">${key==='straight'?'Test 1 · Right drift':key==='straight-left'?'Test 2 · Left drift':'Test 3 · Straighten and Hold'}</button>`).join('')}</div><button class="btn light" onclick="prepareHubLessonReflection()">Prepare a reflection in My Progress</button><p class="small">This prepares a draft only. Review and choose Save Progress on that page to store a private entry. Existing drafts are preserved.</p></details><details class="lesson-sources"><summary>Official references &amp; learning limits</summary><p>Original Hub teaching text and your existing Maricel tractor/trailer illustrations. No school footage or materials are used. Topics cover a left-hand-drive tractor with one semitrailer; actual equipment, site conditions and state exercise requirements vary.</p><ul><li><a href="https://www.oregon.gov/odot/DMV/Pages/Online_CDL_Manual_2/Section_2.aspx" target="_blank" rel="noopener noreferrer">Oregon CDL manual §2.2.4 · backing preparation, mirrors and speed</a></li><li><a href="https://www.oregon.gov/odot/DMV/Pages/Online_CDL_Manual_2/Section_6.aspx" target="_blank" rel="noopener noreferrer">Oregon CDL manual §6.1.7 · trailer turns, following and drift correction</a></li><li><a href="https://www.osha.gov/preventing-backovers/solutions" target="_blank" rel="noopener noreferrer">OSHA · helper communication and stopping on loss of contact</a></li><li><a href="https://www.dmv.ca.gov/portal/driver-education-and-safety/special-interest-driver-guides/truck-drivers/" target="_blank" rel="noopener noreferrer">California DMV · commercial backing and test resources</a></li></ul><p class="small"><a href="https://www.dmv.ca.gov/portal/driver-education-and-safety/special-interest-driver-guides/truck-drivers/commercial-driver-information/" target="_blank" rel="noopener noreferrer">California DMV current commercial skills-test information</a>. General backing guidance does not establish your current local test layout. References reviewed October 30, 2026. These sources support general principles, not agency approval of the illustrations. No fixed steering amount, time delay, safe path, mastery or certification is promised. <a href="disclaimer.html">Disclaimer &amp; Source Credits</a>.</p></details></article>${count===hubLessons.length?'<div class="lesson-finish card"><h3>You reviewed the foundation topics this visit.</h3><p>Choose one question or observation to take to your instructor. Screen review does not demonstrate behind-the-wheel ability.</p><button class="btn" onclick="prepareHubLessonReflection()">Prepare my next practice focus</button></div>':''}`;
 if(focusId){const element=document.getElementById(focusId);if(element){if(!element.matches?.('button,a[href],input,select,textarea'))element.setAttribute('tabindex','-1');element.focus({preventScroll:true});const scrollTarget=focusId==='hubLessonTitle'?(element.closest?.('.lesson-detail')||element):element;scrollTarget.scrollIntoView({block:focusId==='hubLessonTitle'?'start':'nearest'});}}
}
function selectHubLesson(index,tab='learn'){if(!Number.isInteger(index)||index<0||index>=hubLessons.length||!['learn','try','check'].includes(tab))return;lessonVisit.current=index;lessonVisit.tab=tab;lessonVisit.notice='';window.hubRememberView?.('lesson',{current:lessonVisit.current,tab:lessonVisit.tab});renderLessons('hubLessonTitle');}
function focusCurrentLesson(){renderLessons('hubLessonTitle');}
function setHubLessonTab(tab){if(!['learn','try','check'].includes(tab))return;lessonVisit.tab=tab;lessonVisit.notice='';window.hubRememberView?.('lesson',{current:lessonVisit.current,tab:lessonVisit.tab});renderLessons('lessonTab-'+tab);}
function selectLessonExample(key){if(!currentHubLesson().controls.some(([id])=>id===key))return;lessonVisit.examples[currentHubLesson().id]=key;renderLessons('lessonExample-'+key);}
function answerHubLesson(qi,choice){const l=currentHubLesson();if(lessonVisit.tab!=='check'||!Number.isInteger(qi)||qi<0||qi>=l.questions.length||!Number.isInteger(choice)||choice<0||choice>=l.questions[qi].options.length)return;lessonVisit.answers[l.id]??={};lessonVisit.answers[l.id][qi]=choice;lessonVisit.notice='';renderLessons('lessonFeedback-'+qi);}
function markHubLessonReviewed(){if(lessonVisit.tab!=='check'||!lessonChecksPassed())return;const l=currentHubLesson();if(!lessonVisit.reviewed.includes(l.id))lessonVisit.reviewed.push(l.id);lessonVisit.notice='Topic reviewed in this visit. Choose the next topic or take a question to your instructor.';renderLessons('lessonNotice');}
function openHubLessonGuide(key){if(!currentHubLesson().guides.includes(key))return;openScreen('backing');showBacking(key);if(key!=='panic')setBackingGuideMode('learn');}
function openHubLessonPractice(key){if(!currentHubLesson().practice.includes(key))return;openScreen('practiceyard');window.showPracticeLesson(key);}
function prepareHubLessonReflection(){const l=currentHubLesson(),topic=document.getElementById('progressBacking'),win=document.getElementById('progressWin'),improve=document.getElementById('progressImprove');if(!topic||!win||!improve)return;const kept=Boolean(topic.value.trim()||win.value.trim()||improve.value.trim());if(!topic.value.trim())topic.value='Lesson review: '+l.title;if(!improve.value.trim())improve.value='Question for my instructor: '+l.instructor;const notice=document.getElementById('guideProgressNotice');if(notice){notice.hidden=false;notice.textContent=(kept?'Existing draft text was preserved. ':'')+'Lesson reflection prepared as a draft. Reviewing a topic is not a completed driving exercise. Edit your entry and choose Save Progress to save it.';}openScreen('progress');improve.focus({preventScroll:true});}
window.renderLessons=renderLessons;
window.lessonsReset=function(){lessonVisit=newLessonVisit();document.body?.classList.remove('lessons-open');const notice=document.getElementById('betaNoticeDetails');if(notice)notice.open=true;renderLessons();};
renderLessons();

window.restoreLessonView=()=>{const v=window.hubReadView?.('lesson');if(!v||!hubLessons[v.current]||!['learn','try','check'].includes(v.tab))return;lessonVisit.current=v.current;lessonVisit.tab=v.tab;renderLessons('hubLessonTitle');};
