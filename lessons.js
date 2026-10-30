// Original beginner learning content for Maricel CDL Success Hub. No school materials or database access.
const hubLessons=[
  {
    "id": "meet",
    "title": "Meet your truck",
    "kicker": "Start with the names",
    "objective": "Identify the tractor, trailer, rear wheels and the two sides before learning a steering rule.",
    "learn": [
      [
        "Start with the cab",
        "Find the cab where the driver sits. It belongs to the tractor, the powered unit. When the tractor changes heading, its nose and front corners need room as well as the trailer."
      ],
      [
        "Find where the two units connect",
        "The trailer joins the tractor at a coupling. On the combination shown here, the fifth-wheel locking mechanism secures the trailer’s kingpin. Learn the names now; inspection, coupling and uncoupling need a separate demonstration on the actual equipment."
      ],
      [
        "Point to the corners, then the wheels",
        "The back corners are the two rear edges of the trailer. The rear wheel group sits farther forward; a two-axle group is often called the tandems. Point to each reference separately. Space beside a corner does not tell you whether the wheels or tractor will clear."
      ],
      [
        "Check which way you are looking",
        "The Hub’s truck pictures look down from above, with the tractor nose at the bottom. Imagine sitting in that cab: the driver’s right is screen left, and the driver’s left is screen right. A top view is not a mirror view."
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
    "coach": "Before we talk steering, name the parts and tell me which view you are looking at.",
    "questions": [
      {
        "prompt": "You point to the unit with the cab and engine. What do we call that unit?",
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
        "Learn this truck’s starting picture",
        "With the combination straight and secured, have your instructor help set the mirrors and show you the useful references on each side. Identify which trailer edges, corners or wheels you can actually see. That is your starting picture for this truck, not a view that every truck must match."
      ],
      [
        "Describe the change you can observe",
        "Compare a visible trailer reference with a fixed lane edge or cone. Is the space shrinking over successive observations? Is the trailer side changing its angle to the lane? Describe the change before naming a drift; one narrow-looking gap is not enough."
      ],
      [
        "Keep the whole combination in your scan",
        "Check both sides and the tractor-front space, and watch for people entering the movement area. The target behind you is only one part of the picture. Equal-looking mirror gaps do not prove alignment."
      ],
      [
        "A hidden area is still unknown",
        "You may not be able to see both rear corners or the rear wheels at the same time. Mirrors and cameras leave areas unseen. Use the references actually visible on this truck; if clearance is uncertain, stop and secure before getting out to inspect. An earlier clear view does not prove the path is still clear."
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
    "coach": "Tell me what changed, which reference shows it, and what you still cannot see.",
    "questions": [
      {
        "prompt": "The area behind the trailer was clear earlier, but you cannot confirm it now. What comes first?",
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
        "Name the situation before the wheel direction",
        "Ask what you are trying to do. Are you deliberately starting the trailer rear toward a new direction, or has it wandered away from an intended straight-back path? Those questions lead to different initial steering decisions."
      ],
      [
        "Picture an intentional right turn from alignment",
        "Start with tractor and trailer aligned. In this example you want the trailer rear to begin toward the seated driver’s right, so the initial top-of-wheel input is left. For an intended rear turn to the left, the initial input is right. The example gives a direction, not a number of wheel turns."
      ],
      [
        "Now picture an unwanted right drift",
        "This time the task is straight backing, and the trailer rear is confirmed drifting right. The initial small top-of-wheel correction is right, toward that drift. A confirmed left drift calls for an initial small left correction. Observe the response and ease as alignment returns; do not hold the input by habit."
      ],
      [
        "Recognize the next phase",
        "Once an intentional trailer turn develops, steering changes the other way to follow it. Your instructor teaches when and how much on this equipment. If the combination is already angled, stop guessing from the aligned-start example and have the actual position assessed. All wheel directions use the seated driver’s viewpoint."
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
    "coach": "Name the situation first: are you starting a turn or correcting a drift?",
    "questions": [
      {
        "prompt": "Your planned move starts with tractor and trailer aligned. You want the trailer rear to begin toward the driver’s right. Which initial top-of-wheel direction fits that plan?",
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
        "Make room for observation",
        "Use the reverse and speed-control procedure demonstrated for this transmission and practice area. Movement needs to be slow and controlled enough to observe the response and stop. Going slowly does not make an unseen space clear."
      ],
      [
        "Check the effect instead of stacking corrections",
        "During a straight-back correction, keep checking what the tractor and trailer are actually doing. Adding large repeated inputs can create a back-and-forth chase. There is no universal wheel-turn count or waiting time. Stop if the response or clearance is unclear."
      ],
      [
        "Ease as the relationship improves",
        "When alignment starts returning, ease the correction toward wheel center while continuing to observe. Further small adjustments may be needed with instructor guidance. Holding an earlier correction too long can produce a new problem."
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
    "coach": "A useful correction is one you can observe and reassess.",
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
        "You can pause before the next decision",
        "Stop for a person in the movement area, a clearance you cannot confirm, an unclear signal or an angle you do not understand. Being close to the finish is not a reason to guess. Build the next plan with the vehicle stationary."
      ],
      [
        "If you are using a spotter",
        "A spotter is a trained outside helper, not automatically any instructor observing you. If you are using one, agree on signals, keep the helper visible and clear of the movement area, and stop immediately if visual contact is lost. Follow any site or training rules for assistance. You still check the path and clearances."
      ],
      [
        "Get out and look with the vehicle secured",
        "Stop completely before leaving the cab. Apply the parking brake(s) and use the transmission setting required for this equipment, such as neutral or park as applicable. Your instructor must demonstrate the complete parking and exit procedure; the service-brake (foot-brake) pedal alone is not a parking procedure. Inspect from a suitable position without entering pinch points."
      ],
      [
        "Treat a pull-up as a new movement",
        "Moving forward may help create a better position, but first check that forward path and agree on the plan with your instructor. Do not assume it stayed clear. If contact may have occurred, secure and follow incident procedures. If there is no clear next move, remain stopped and ask for help."
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
    "coach": "You do not need to rescue a confusing setup while it is moving. Stop and build a new plan.",
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
        "Take one observation into supervised practice",
        "Choose a focus you can describe: a changing side gap, the difference between a turn and drift, or how returning alignment looks. Ask your instructor to demonstrate that focus on the real equipment, then assess your execution."
      ],
      [
        "Choose the guide for the actual task",
        "A straight back, an offset and a docking approach ask you to watch different relationships. Open the matching guide. A 45° or 90° approach label is not an instruction to turn the wheel that amount or create that angle between tractor and trailer."
      ],
      [
        "Separate the lesson from your test instructions",
        "The Hub teaches general concepts. For your exam, identify the current test version, layout, stopping position and instructions with your state licensing agency, testing location or instructor. A Hub drawing does not set allowed looks, pull-ups or a passing position."
      ],
      [
        "Record understanding honestly",
        "A screen answer shows what you chose in this activity; it does not demonstrate truck control or real clearance. In your reflection, name what you understood, what is still unclear and what you need demonstrated before trying it on the equipment."
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
    "coach": "Bring one clear observation and one useful question to your next supervised practice.",
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
const lessonGlossary={backing:['Backing / reverse','Moving the vehicle backward. Your instructor teaches the controls for the actual transmission.'],tractor:['Tractor','The powered front unit with the driver’s cab.'],trailer:['Trailer','The separate unit coupled behind the tractor.'],coupling:['Coupling','The connection holding tractor and trailer together; on this type, the fifth-wheel coupling on the tractor secures the kingpin under the trailer front.'],wheels:['Rear wheel group','The rear wheels of the trailer; a two-axle group is often called the tandems.'],clearance:['Clearance','The space between any part of the vehicle and a person, object or boundary.'],alignment:['Alignment','How the tractor and trailer line up with each other and with the intended lane. Parallel to the lane means pointing in the same direction as its boundaries.'],drift:['Drift','An unwanted departure from the intended straight-back path.'],articulation:['Articulation','The angle between tractor and trailer. The picture gives no safe maximum angle.'],follow:['Follow the trailer','Change the tractor heading to come into line with the trailer’s heading during a developing turn, using instructor-guided steering and timing.'],top:['Top-of-wheel direction','Left or right refers to moving the top of the steering wheel from the seated driver’s viewpoint, not the screen’s left or right.'],response:['Vehicle response','What the actual tractor and trailer do after a control input; it is something to observe, not assume.'],spotter:['Spotter','A trained helper using agreed signals, staying visible and outside the movement area and pinch points.'],pinch:['Pinch point','A space where a person could be caught or crushed between moving equipment or an obstacle. Stay out.'],secure:['Secure before leaving the cab','Stop completely, apply parking brake(s) and use the transmission setting required for this equipment. Have your instructor demonstrate the complete procedure before getting out; do not rely on the service-brake (foot-brake) pedal alone.'],pullup:['Pull-up','Moving forward to improve the position before another backing attempt; inspect that path first.'],bay:['Bay','The target parking or docking space. Its entrance and actual stopping point need to be identified.'],approach:['Approach','The setup and space used to bring the combination toward its target.'],review:['Reviewed this visit','A mark for this screen activity only, not proof of driving ability or certification.']};
const lessonWordKeys={meet:['backing','tractor','trailer','coupling','wheels'],look:['clearance','alignment','drift','secure'],directions:['top','alignment','drift','follow'],control:['response','alignment','articulation','pullup'],reset:['spotter','pinch','secure','pullup'],practice:['bay','approach','articulation','review']};
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
 root.innerHTML=`<div class="lesson-hero"><div><span class="lesson-eyebrow">Your first steps in the yard</span><h2>Backing Fundamentals</h2><p class="lesson-hero-lead">New to trucks? Start with what you can see.</p><p>Learn the parts, build a useful view, then connect what you notice to a decision. No trucking experience assumed.</p><div class="lesson-hero-actions"><button class="btn" onclick="focusCurrentLesson()">${count===0&&lessonVisit.current===0?'Start with the truck':'Open this topic'} <span aria-hidden="true">→</span></button><button class="btn light" onclick="selectHubLesson(5,'try')">Choose a practice focus</button></div><p class="lesson-hero-caption"><strong>Coach Maricel’s learning approach:</strong> Notice → Understand → Decide → Check. Identify the reference, name the situation, choose a response with qualified guidance, then observe again. Stop whenever the path or next move is unclear.</p><p class="lesson-hero-caption">General U.S. backing principles. Use your state’s current CDL manual and testing-location instructions for the exact test. <a href="disclaimer.html#state-specific-testing">Find the right requirements</a>.</p></div><div class="lesson-hero-art" aria-hidden="true"><span class="lesson-art-label">Learn with your Maricel truck</span><div class="lesson-decor-rig"><img src="assets/maricel-success-hub-trailer.png" alt="" class="lesson-decor-trailer"><img src="assets/maricel-tractor.png" alt="" class="lesson-decor-tractor"></div></div></div><div class="lesson-visit"><div><strong>${count} of ${hubLessons.length} topics reviewed this visit</strong><span>Review marks and answers reset on sign-out, account change or refresh. They do not assess driving skill.</span></div><progress max="6" value="${count}" aria-label="Topics reviewed this visit">${count}/6</progress></div><div class="lesson-path-heading"><h3>Your learning path</h3><p>Start at 1. You can revisit any topic at your own pace.</p></div><nav class="lesson-path" aria-label="Backing fundamentals learning path">${hubLessons.map((m,i)=>`<button type="button" class="lesson-path-card ${i===lessonVisit.current?'current':''}" ${i===lessonVisit.current?'aria-current="step"':''} onclick="selectHubLesson(${i})"><span class="lesson-path-number">${i+1}</span><span><strong>${lessonEscape(m.title)}</strong><small>${lessonEscape(m.kicker)}</small><span class="lesson-path-status">${lessonVisit.reviewed.includes(m.id)?'Reviewed this visit':'Open topic'}</span></span></button>`).join('')}</nav><article class="lesson-detail card"><div class="lesson-detail-head"><div><span class="lesson-eyebrow">Topic ${lessonVisit.current+1} of ${hubLessons.length} · ${lessonEscape(l.kicker)}</span><h3 id="hubLessonTitle" tabindex="-1">${lessonEscape(l.title)}</h3><p>${lessonEscape(l.objective)}</p></div><span class="lesson-parked">Parked learning<br>No timer</span></div>${lessonWordHelp()}<div class="lesson-tabs" role="group" aria-label="Learning activity">${[['learn','1. Learn it'],['try','2. Explore it'],['check','3. Check understanding']].map(([tab,label])=>`<button id="lessonTab-${tab}" class="btn ${lessonVisit.tab===tab?'':'light'}" aria-pressed="${lessonVisit.tab===tab}" onclick="setHubLessonTab('${tab}')">${label}</button>`).join('')}</div><div id="lessonActivity">${lessonVisit.tab==='learn'?`<div class="lesson-read-grid"><div class="lesson-read-copy">${l.learn.map(([heading,text])=>`<div><h4>${lessonEscape(heading)}</h4><p>${lessonEscape(text)}</p></div>`).join('')}</div><aside class="lesson-coach-note"><span class="lesson-eyebrow">Coach’s focus</span><p>${lessonEscape(l.coach)}</p><p class="small">Use while parked. Real practice needs qualified instruction, your equipment’s procedures and a confirmed clear path.</p><button class="btn light" onclick="setHubLessonTab('try')">Explore the references →</button></aside></div>`:lessonVisit.tab==='try'?`<p>${lessonEscape(l.tryIntro)}</p><div class="lesson-example-controls" role="group" aria-label="Explore this topic">${l.controls.map(([key,label])=>`<button id="lessonExample-${key}" class="btn light" aria-pressed="${lessonExample()===key}" onclick="selectLessonExample('${key}')">${lessonEscape(label)}</button>`).join('')}</div><div class="lesson-try-grid">${lessonRigFigure()}<div class="lesson-observation" role="status"><span class="lesson-eyebrow">What to notice</span><p>${lessonEscape(lessonExampleInfo().text)}</p><h4>Ask your instructor</h4><p>${lessonEscape(l.instructor)}</p><button class="btn light" onclick="setHubLessonTab('check')">Check my understanding →</button></div></div>`:`<p>Try both questions. Each answer has an explanation; you can retry without a timer.</p>${l.questions.map((q,qi)=>{const answer=lessonVisit.answers[l.id]?.[qi],answered=Number.isInteger(answer),correct=answer===q.answer;return `<div class="lesson-question"><h4>${qi+1}. ${lessonEscape(q.prompt)}</h4><div class="lesson-answer-options">${q.options.map((option,oi)=>`<button class="btn light" aria-pressed="${answer===oi}" onclick="answerHubLesson(${qi},${oi})">${lessonEscape(option)}</button>`).join('')}</div><div id="lessonFeedback-${qi}" role="status" aria-live="polite">${answered?`<div class="${correct?'success':'warning'}"><strong>${correct?'Good observation.':'Pause and reconsider.'}</strong> ${lessonEscape(q.why)}${correct?'':' You can try again.'}</div>`:''}</div></div>`;}).join('')}<div class="lesson-review-action"><button class="btn" onclick="markHubLessonReviewed()" ${lessonChecksPassed()?'':'disabled'}>${done?'Reviewed this visit ✓':'Mark this topic reviewed'}</button><p class="small">Available after both correct answers. A review mark records this screen activity only; it is not certification or a practical assessment.</p></div>`}</div><div id="lessonNotice" role="status" aria-live="polite">${lessonEscape(lessonVisit.notice)}</div><div class="lesson-next-actions"><button class="btn light" onclick="selectHubLesson(${lessonVisit.current-1})" ${lessonVisit.current===0?'disabled':''}>Previous topic</button><button class="btn" onclick="selectHubLesson(${lessonVisit.current===hubLessons.length-1?0:lessonVisit.current+1})">${lessonVisit.current===hubLessons.length-1?'Review from the beginning':'Next topic →'}</button></div><details class="lesson-next-tools" ${l.id==='practice'?'open':''}><summary>Connect this topic to practice</summary><p>Review a matching guide, try a screen decision exercise, then plan real practice with your instructor.</p><div class="lesson-tool-links">${l.guides.map(key=>`<button class="btn light" onclick="openHubLessonGuide('${key}')">${lessonEscape(lessonGuideLabels[key])} guide</button>`).join('')}${l.practice.map(key=>`<button class="btn light" onclick="openHubLessonPractice('${key}')">${key==='straight'?'Test 1 · Right drift':key==='straight-left'?'Test 2 · Left drift':'Test 3 · Straighten and Hold'}</button>`).join('')}</div><button class="btn light" onclick="prepareHubLessonReflection()">Prepare a reflection in My Progress</button><p class="small">This prepares a draft only. Review and choose Save Progress on that page to store a private entry. Existing drafts are preserved.</p></details><details class="lesson-sources"><summary>Learning references &amp; scope</summary><p>Original educational content and visual learning materials by Coach Maricel — Maricel CDL Success Hub. Existing Maricel artwork and custom diagrams show concepts for a left-hand-drive tractor with one semitrailer. No school footage or school materials are used; official exam diagrams are not reproduced. Mirror drawings are generic references, not exact optics or predictions. These are not vehicle-physics simulations.</p><p><strong>General principles; local test rules.</strong> Backing references, observation and vehicle response are taught as general concepts. Confirm your current test layout with your state licensing agency and testing location: cone layouts, permitted looks/pull-ups, scoring, inspection checklists and finish instructions are state test requirements, not universal Hub rules. No fixed wheel turns, steering timing, safe path, exact distances or guaranteed result are supplied by these diagrams.</p><ul><li><a href="https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt" target="_blank" rel="noopener noreferrer">FMCSA · national entry-level training scope</a> and <a href="https://tpr.fmcsa.dot.gov/content/Resources/ELDT-Curriculum-Summary_508.pdf" target="_blank" rel="noopener noreferrer">federal curriculum topics (PDF)</a> — context only; Hub activities do not award ELDT completion or behind-the-wheel credit.</li><li><a href="https://www.dmv.ca.gov/portal/driver-education-and-safety/special-interest-driver-guides/truck-drivers/" target="_blank" rel="noopener noreferrer">California DMV · general backing preparation, trailer turns and drift correction</a></li><li><a href="https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/commercial-driver-guide-text-only" target="_blank" rel="noopener noreferrer">Washington DOL · general commercial backing guidance, §6.1.7</a></li><li><a href="https://www.osha.gov/preventing-backovers/solutions" target="_blank" rel="noopener noreferrer">OSHA · conditional spotter communication and backover prevention</a></li><li><a href="https://www.fmcsa.dot.gov/registration/commercial-drivers-license/state-resources-and-programs" target="_blank" rel="noopener noreferrer">Find your state driver licensing agency</a> — obtain its current CDL manual and testing-location instructions.</li></ul><p class="small">References checked October 29, 2026 (Pacific). These sources support the principles; source credit implies no agency endorsement or certification. Use while parked and practice with qualified instruction. <a href="disclaimer.html#learning-source-credits" target="_blank" rel="noopener noreferrer">Learning source notes &amp; state-specific limits</a>.</p></details></article>${count===hubLessons.length?'<div class="lesson-finish card"><h3>You reviewed the foundation topics this visit.</h3><p>Choose one question or observation to take to your instructor. Screen review does not demonstrate behind-the-wheel ability.</p><button class="btn" onclick="prepareHubLessonReflection()">Prepare my next practice focus</button></div>':''}`;
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
