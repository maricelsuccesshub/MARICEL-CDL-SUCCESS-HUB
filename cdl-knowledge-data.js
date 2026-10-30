// Original Hub study content; no school materials or internal procedures.
const cdlKnowledgeTopics=[
  {
    "id": "path",
    "title": "Your CDL learning path",
    "kicker": "Permit, training and testing",
    "objective": "Build understanding, explain your reasoning, then take equipment and test questions to qualified instruction.",
    "learn": [
      [
        "Choose the work and vehicle first",
        "A license class describes the vehicle category you may operate; endorsements add particular privileges, while restrictions limit them. Start with your licensing state and intended vehicle and work. A Class A tractor-semitrailer learning example does not cover every Class B, passenger, school bus, tanker or hazardous-material operation."
      ],
      [
        "Understand the permit",
        "A commercial learner’s permit (CLP) is for learning under its restrictions, not independent commercial driving. Review the state’s eligibility, identity/residency, medical/self-certification, knowledge-test and permit instructions. Do not upload identity or medical documents to the Hub."
      ],
      [
        "Keep training and licensing separate",
        "Applicants subject to entry-level driver training (ELDT) must complete the applicable registered-provider training before the relevant test. The federal path generally requires holding the CLP for at least 14 days before the skills test; additional state requirements can apply. This Hub does not submit training completion or award ELDT credit."
      ],
      [
        "Build a study plan",
        "For a typical Class A tractor-semitrailer with air brakes, the study areas include general knowledge, combination vehicles and air brakes; endorsements add other material when applicable. Use your state’s current manual to confirm the tests you need. The skills test has vehicle inspection, basic vehicle control and on-road driving components. Explain ideas in your own words, then practice with qualified supervision. Hub marks do not establish test readiness."
      ]
    ],
    "terms": [
      [
        "CLP",
        "Commercial learner’s permit; learning privileges subject to restrictions."
      ],
      [
        "ELDT",
        "Entry-level driver training required for covered applicants through registered providers."
      ],
      [
        "Restriction",
        "A limitation on the vehicles or operations permitted by a license."
      ]
    ],
    "board": [
      [
        "Your goal",
        "Vehicle and work"
      ],
      [
        "Your state",
        "Current requirements"
      ],
      [
        "Your training",
        "Registered provider"
      ],
      [
        "Your test",
        "Confirm the format"
      ]
    ],
    "scenario": {
      "prompt": "A learner finishes these Hub topics. Can they treat that as completed required training?",
      "options": [
        "Yes, an online review mark replaces the provider record",
        "No, verify and complete applicable training through a registered provider"
      ],
      "answer": 1,
      "why": "Hub study does not replace required training or state licensing."
    },
    "questions": [
      {
        "prompt": "Where should you verify your application requirements?",
        "options": [
          "Your current licensing agency instructions",
          "Another student’s old checklist"
        ],
        "answer": 0,
        "why": "Use the agency responsible for issuing your license."
      },
      {
        "prompt": "Does a CLP mean unrestricted solo commercial driving?",
        "options": [
          "Yes",
          "No, its supervision and other restrictions still apply"
        ],
        "answer": 1,
        "why": "A learning permit has limits; verify the requirements before practice."
      }
    ],
    "coach": "Name it. Explain its purpose. Check the evidence. Resolve uncertainty before proceeding.",
    "instructor": "Which class, knowledge tests, endorsements, restrictions and training requirements apply to my intended vehicle?",
    "sources": [
      "path",
      "eldt",
      "states",
      "drivers"
    ],
    "tools": [
      "starter"
    ]
  },
  {
    "id": "inspection",
    "title": "Vehicle inspection: know what you check",
    "kicker": "Identify, explain, evaluate",
    "objective": "Build understanding, explain your reasoning, then take equipment and test questions to qualified instruction.",
    "learn": [
      [
        "Learn the part before the phrase",
        "Start with the name, location and purpose. Tires support the vehicle; wheels and their fasteners secure the rotating assembly; steering directs it; suspension supports and controls movement; brakes slow and hold it. Learn actual components on the vehicle with your instructor, not by assuming every truck matches a drawing."
      ],
      [
        "Organize the inspection",
        "Build a consistent walk-through of the cab/controls, engine area when safely accessible, tractor exterior, connection area and trailer. Include lights, visibility equipment and required emergency equipment. Use the complete current state checklist and equipment procedure; these zones are an organizing aid, not a complete inspection list."
      ],
      [
        "Describe evidence, not a memorized chant",
        "For each item, explain what condition matters and how it is checked. For example, a damaged tire and a loose wheel fastener are different observations needing appropriate evaluation. Learn the applicable measurements and limits from your current manual and equipment guidance; an illustration cannot establish that a component meets them."
      ],
      [
        "Respond to a defect",
        "An inspection is a decision about condition, not a performance of reassuring words. Report concerns using the required process and obtain qualified evaluation before use when safety is uncertain. Do not operate unsafe equipment. Do not crawl under, touch hot/moving parts, release stored pressure or perform repairs without the required preparation and training."
      ]
    ],
    "terms": [
      [
        "Defect",
        "A condition that may require evaluation or repair."
      ],
      [
        "Inspection criteria",
        "The conditions or measurements used to judge an item."
      ],
      [
        "Emergency equipment",
        "Required equipment for specified emergency situations; verify the applicable items."
      ]
    ],
    "board": [
      [
        "Cab",
        "Controls and visibility"
      ],
      [
        "Tractor",
        "Systems and condition"
      ],
      [
        "Connection",
        "Attachment checks"
      ],
      [
        "Trailer",
        "Body, wheels, lights"
      ]
    ],
    "scenario": {
      "prompt": "You remember the inspection words but cannot identify the part on this truck. What should you do?",
      "options": [
        "Say the words and move on",
        "Locate it with qualified instruction and learn its purpose and check"
      ],
      "answer": 1,
      "why": "Words alone do not show that you can identify or evaluate the actual equipment."
    },
    "questions": [
      {
        "prompt": "What is the best inspection explanation?",
        "options": [
          "Name, purpose, actual condition and applicable check",
          "The same phrase for every part"
        ],
        "answer": 0,
        "why": "Different parts have different functions and criteria."
      },
      {
        "prompt": "A possible safety defect is found before departure. What comes next?",
        "options": [
          "Ignore it if the truck ran yesterday",
          "Report it and resolve the safety concern before use"
        ],
        "answer": 1,
        "why": "A previous trip does not establish present condition."
      }
    ],
    "coach": "Name it. Explain its purpose. Check the evidence. Resolve uncertainty before proceeding.",
    "instructor": "Can I identify each required item on this vehicle and explain its check and defect response?",
    "sources": [
      "inspection",
      "caTests",
      "waSupplement"
    ],
    "tools": [
      "lesson"
    ]
  },
  {
    "id": "air",
    "title": "Air brakes: understand the system",
    "kicker": "Pressure, warnings and checks",
    "objective": "Build understanding, explain your reasoning, then take equipment and test questions to qualified instruction.",
    "learn": [
      [
        "Start with the energy source",
        "Compressed air carries the energy used to operate air-brake equipment. A compressor supplies air, reservoirs store it and controls direct it. Gauges help monitor pressure; warning devices alert the driver to specified conditions. Learn which gauges, warnings and controls are fitted to the actual vehicle."
      ],
      [
        "Separate the braking functions",
        "Service braking is used for normal slowing and stopping. Parking and emergency functions have different purposes, and many heavy vehicles use spring-applied brakes. Do not assume every vehicle, axle or trailer has identical equipment. Air pressure readings alone do not prove that every brake is functioning."
      ],
      [
        "Know what a check is trying to establish",
        "Study pressure build-up/control, leakage, low-pressure warnings, applicable automatic brake application, and parking/service-brake checks. Their setup, sequence, pressure/time limits and required demonstrations must come from the current manual and actual equipment instruction. Do not carry out a pressure-depletion or moving check from this page."
      ],
      [
        "Do not normalize a warning",
        "Understand normal indications before travel and the trained response to abnormal ones. A low-air warning while moving requires prompt trained action to bring the vehicle to a safe stop, not continuing until it stops itself. ABS helps manage wheel lock during braking; it does not create traction or eliminate stopping-distance needs."
      ]
    ],
    "terms": [
      [
        "Reservoir",
        "A tank that stores compressed air."
      ],
      [
        "Service brake",
        "The braking function used during normal slowing and stopping."
      ],
      [
        "ABS",
        "Antilock braking system; it helps control wheel lock but does not remove traction limits."
      ]
    ],
    "board": [
      [
        "Supply",
        "Compressor and tanks"
      ],
      [
        "Monitor",
        "Gauges and warnings"
      ],
      [
        "Check",
        "Purpose and limits"
      ],
      [
        "Respond",
        "Trained safe action"
      ]
    ],
    "scenario": {
      "prompt": "A learner knows a pressure number from another vehicle but not the required check for this one. What is the better choice?",
      "options": [
        "Use that number for all equipment",
        "Verify the current requirements and learn this vehicle’s check with an instructor"
      ],
      "answer": 1,
      "why": "Do not substitute a remembered number for the correct equipment and test requirements."
    },
    "questions": [
      {
        "prompt": "Does a normal-looking gauge prove all brakes work?",
        "options": [
          "No, the full applicable checks still matter",
          "Yes, no other checks are needed"
        ],
        "answer": 0,
        "why": "Pressure is one indication, not a complete brake evaluation."
      },
      {
        "prompt": "Should a driver ignore a low-air warning until automatic braking occurs?",
        "options": [
          "Yes",
          "No, use the trained response to stop safely"
        ],
        "answer": 1,
        "why": "A warning is a reason to act promptly, not to wait for a more severe condition."
      }
    ],
    "coach": "Name it. Explain its purpose. Check the evidence. Resolve uncertainty before proceeding.",
    "instructor": "Can you demonstrate each required brake check, its setup, limits, meaning and abnormal-result response?",
    "sources": [
      "waAir",
      "waSupplement",
      "drivers",
      "caGeneral"
    ],
    "tools": [
      "lesson"
    ]
  },
  {
    "id": "combination",
    "title": "Combination vehicles and connections",
    "kicker": "Attachment is something to verify",
    "objective": "Build understanding, explain your reasoning, then take equipment and test questions to qualified instruction.",
    "learn": [
      [
        "Understand the connection",
        "On a typical tractor-semitrailer, the trailer’s kingpin connects with the tractor’s fifth-wheel locking mechanism. Landing gear supports an uncoupled trailer; air and electrical connections serve separate systems. Other coupling types require their own instruction. The truck artwork is an orientation reference, not a lock-inspection diagram."
      ],
      [
        "Recognize the stages",
        "Qualified practice covers preparing and securing the equipment, inspecting compatibility and condition, establishing alignment/height, making the connection, verifying it, and completing departure checks. Uncoupling includes suitable support and ground, securing the trailer, and the approved separation procedure. This overview does not supply an executable coupling sequence."
      ],
      [
        "Verify instead of assuming",
        "A sound, dashboard indication or resistance during a tug check alone does not establish a correct coupling. Learn the manufacturer’s full verification, including direct visual checks of the actual locking engagement and plate contact as applicable. Some improper connections can resist a tug. Do not depart with an uncertain connection."
      ],
      [
        "Think about the whole combination",
        "The trailer’s wheels can track inside the tractor’s path in a turn, while other parts sweep outward. Connections, lines, support equipment and clearances all matter. Learn these effects at controlled speed with qualified supervision; a generic sketch cannot determine the clearance or turning path of your vehicle."
      ]
    ],
    "terms": [
      [
        "Fifth wheel",
        "A tractor coupling device used with a compatible semitrailer kingpin."
      ],
      [
        "Kingpin",
        "The semitrailer component engaged by the fifth-wheel locking system."
      ],
      [
        "Offtracking",
        "Rear wheels following a path inside the front-wheel path during a turn."
      ]
    ],
    "board": [
      [
        "Prepare",
        "Secure and inspect"
      ],
      [
        "Connect",
        "Approved procedure"
      ],
      [
        "Verify",
        "Full visual checks"
      ],
      [
        "Depart",
        "Complete all checks"
      ]
    ],
    "scenario": {
      "prompt": "You hear a click and feel resistance during a coupling check, but cannot confirm the required visual inspection. What next?",
      "options": [
        "Depart because resistance proves the lock",
        "Keep the equipment secured and obtain the required verification before departure"
      ],
      "answer": 1,
      "why": "Sound and resistance alone can be misleading; complete the equipment-specific verification."
    },
    "questions": [
      {
        "prompt": "Is the Hub truck picture a coupling-lock inspection diagram?",
        "options": [
          "No, inspect the actual equipment under qualified instruction",
          "Yes, it proves the lock is secure"
        ],
        "answer": 0,
        "why": "The illustration shows orientation, not locking engagement."
      },
      {
        "prompt": "Before uncoupling, does the support surface matter?",
        "options": [
          "No",
          "Yes, the trailer must be secured and properly supported"
        ],
        "answer": 1,
        "why": "Support and securement must be established through the approved procedure."
      }
    ],
    "coach": "Name it. Explain its purpose. Check the evidence. Resolve uncertainty before proceeding.",
    "instructor": "Can you show the approved coupling/uncoupling procedure and how I verify this exact locking system?",
    "sources": [
      "waCombination",
      "fontaine",
      "inspection"
    ],
    "tools": [
      "backing"
    ]
  },
  {
    "id": "controls",
    "title": "Basic vehicle control and your test format",
    "kicker": "Understand the task before moving",
    "objective": "Build understanding, explain your reasoning, then take equipment and test questions to qualified instruction.",
    "learn": [
      [
        "Distinguish practice from the state test",
        "Backing Guides and Practice Yard help develop observation and decision habits. They are not the official course layout or scoring system. State testing may use a modernized format; do not assume an alley dock, offset diagram or another student’s cone spacing is your assigned exercise."
      ],
      [
        "Learn forward control too",
        "Prepare for accurate stopping, controlled forward tracking, turns and positioning as required by your test. Look at the whole combination and its boundaries. A successful rear position does not establish clearance for the tractor nose, trailer sides or other equipment."
      ],
      [
        "Listen, clarify, then act",
        "Learn the actual instructions, boundaries, stopping signal and finish position before beginning. Verify permitted looks, pull-ups/back-ups and their scoring through the current test materials and examiner. Do not invent nationwide allowances or continue through uncertainty to avoid a possible point."
      ],
      [
        "Connect observation to movement",
        "Use your existing Hub foundation lessons to understand mirrors, rear corners, wheels, angle and small deliberate corrections. Practice the actual maneuvers with qualified supervision. If the path or clearance cannot be confirmed, stop and reassess using the approved procedure."
      ]
    ],
    "terms": [
      [
        "Boundary",
        "The defined edge of a test or movement area."
      ],
      [
        "Pull-up",
        "Forward repositioning during a backing exercise; scoring depends on the test."
      ],
      [
        "Modernized test",
        "An updated testing format adopted by participating states/locations."
      ]
    ],
    "board": [
      [
        "Instructions",
        "Understand the task"
      ],
      [
        "Boundaries",
        "Whole combination"
      ],
      [
        "Position",
        "Track and stop"
      ],
      [
        "Reassess",
        "Resolve uncertainty"
      ]
    ],
    "scenario": {
      "prompt": "A video shows an alley dock, but your test location publishes a different modernized exercise list. What should guide preparation?",
      "options": [
        "The current official format for your location",
        "The video must be the nationwide format"
      ],
      "answer": 0,
      "why": "Use your actual test requirements; the Hub’s general maneuver library is broader than one test."
    },
    "questions": [
      {
        "prompt": "Are pull-up and look allowances identical everywhere?",
        "options": [
          "No, verify your test instructions",
          "Yes"
        ],
        "answer": 0,
        "why": "Do not transfer one format’s scoring to another."
      },
      {
        "prompt": "Does a rear corner inside the target prove all vehicle clearance?",
        "options": [
          "Yes",
          "No, monitor the whole combination"
        ],
        "answer": 1,
        "why": "Other parts can reach hazards while the rear approaches the target."
      }
    ],
    "coach": "Name it. Explain its purpose. Check the evidence. Resolve uncertainty before proceeding.",
    "instructor": "Which test version and exercises will I take, and can we practice its actual instructions?",
    "sources": [
      "caTests",
      "waSupplement",
      "states"
    ],
    "tools": [
      "practiceyard",
      "backing"
    ]
  },
  {
    "id": "road",
    "title": "On-road driving fundamentals",
    "kicker": "Observe, communicate, manage space",
    "objective": "Build understanding, explain your reasoning, then take equipment and test questions to qualified instruction.",
    "learn": [
      [
        "Build an observation habit",
        "Recognize signs, signals, traffic movement and changing space early. Use mirrors and forward observation without fixating on one place. Learn the blind areas of the actual combination. Seeing a vehicle earlier does not mean it remains in the same position during a maneuver."
      ],
      [
        "Prepare for turns and lane changes",
        "Plan position and speed before a turn; understand trailer offtracking and outward sweep. Communicate intentions, check the intended space and use the trained maneuver procedure. A signal requests awareness; it does not create a gap or right of way. Never use a fixed steering landmark as a universal turning prescription."
      ],
      [
        "Practice varied situations",
        "Qualified road practice should address intersections, curves, merges, exits, lane position, grades and railroad crossings as applicable. At crossings, learn vehicle-specific stopping rules, signs/signals, required space beyond the tracks and low-ground-clearance hazards. Do not enter when you cannot clear the tracks."
      ],
      [
        "Keep decisions calm and lawful",
        "Choose speed and following space for the vehicle and conditions. If a direction cannot be followed safely or lawfully, communicate rather than making an abrupt move. Continue road-readiness study for grades, weather and fatigue. The Hub is for parked study; an instructor must assess performance in the actual vehicle."
      ]
    ],
    "terms": [
      [
        "Blind area",
        "Space the driver cannot directly see through available views."
      ],
      [
        "Outward sweep",
        "A vehicle part moving outward as the combination turns."
      ],
      [
        "Following space",
        "Room behind traffic ahead for observation and response."
      ]
    ],
    "board": [
      [
        "Observe",
        "Traffic and signs"
      ],
      [
        "Communicate",
        "Intent, not priority"
      ],
      [
        "Manage space",
        "Whole combination"
      ],
      [
        "Reassess",
        "Lawful next action"
      ]
    ],
    "scenario": {
      "prompt": "An instruction arrives too late for a safe, legal lane change. What is the better response?",
      "options": [
        "Force the lane change to avoid missing the turn",
        "Maintain control and communicate; do not make an unsafe move"
      ],
      "answer": 1,
      "why": "An instruction does not remove the driver’s responsibility for a safe and lawful maneuver."
    },
    "questions": [
      {
        "prompt": "Does using a turn signal guarantee a usable gap?",
        "options": [
          "No",
          "Yes"
        ],
        "answer": 0,
        "why": "You must still verify the space and conditions."
      },
      {
        "prompt": "Traffic is stopped just beyond a railroad crossing and your combination cannot fit clear of the tracks. Should you enter?",
        "options": [
          "Yes, wait on the tracks",
          "No, do not enter without enough space to clear"
        ],
        "answer": 1,
        "why": "The entire combination needs space beyond the tracks; follow applicable crossing rules."
      }
    ],
    "coach": "Name it. Explain its purpose. Check the evidence. Resolve uncertainty before proceeding.",
    "instructor": "Which observation, positioning and control habits should I practice before the road test?",
    "sources": [
      "tips",
      "waRoad",
      "curriculum",
      "rail"
    ],
    "tools": [
      "starter",
      "lesson"
    ]
  },
  {
    "id": "testday",
    "title": "Prepare for test day and licensing",
    "kicker": "Verify, demonstrate, review",
    "objective": "Build understanding, explain your reasoning, then take equipment and test questions to qualified instruction.",
    "learn": [
      [
        "Use the agency checklist",
        "Confirm appointment/location, permit validity and holding period, required identification and medical/self-certification records, applicable training record, fees and the test vehicle’s required documents and condition. Requirements change and vary; verify with the licensing agency rather than relying on this summary."
      ],
      [
        "Know the vehicle implications",
        "Test in a vehicle suitable for the license and privileges you seek. Equipment such as transmission, brakes and coupling can affect resulting restrictions. Confirm with your agency before arranging a vehicle; passing in one configuration does not authorize every commercial vehicle."
      ],
      [
        "Demonstrate understanding",
        "Prepare to identify inspection items, explain their checks, follow basic-control instructions and drive lawfully through the road test. Use only aids expressly allowed for your test. A practice quiz result is feedback for study, not an examiner score or prediction of passing."
      ],
      [
        "After the result",
        "Follow the agency’s instructions for issuance or any retest, and check the license class, endorsements and restrictions when issued. Continue supervised development and employer-required qualification as applicable. Passing a licensing test is a milestone; unfamiliar equipment, loads and routes still require preparation."
      ]
    ],
    "terms": [
      [
        "Endorsement",
        "An additional privilege for specified vehicles or cargo."
      ],
      [
        "Test aid",
        "A checklist or other aid allowed only under the applicable test rules."
      ],
      [
        "Issuance",
        "The licensing agency’s process for granting the license after requirements are met."
      ]
    ],
    "board": [
      [
        "Documents",
        "Current checklist"
      ],
      [
        "Vehicle",
        "Class and equipment"
      ],
      [
        "Demonstration",
        "Approved test rules"
      ],
      [
        "License",
        "Check restrictions"
      ]
    ],
    "scenario": {
      "prompt": "Your practice scores are strong, but you have not checked your training record or test-vehicle requirements. Are you ready to book based on the scores alone?",
      "options": [
        "No, verify the full agency requirements and practical preparation",
        "Yes, the quiz is enough"
      ],
      "answer": 0,
      "why": "Study scores do not establish eligibility, vehicle suitability or practical proficiency."
    },
    "questions": [
      {
        "prompt": "Can test-vehicle equipment affect license restrictions?",
        "options": [
          "Yes, verify before arranging the vehicle",
          "No"
        ],
        "answer": 0,
        "why": "The tested vehicle can limit resulting privileges."
      },
      {
        "prompt": "Who issues the CDL?",
        "options": [
          "The Hub",
          "The state licensing agency"
        ],
        "answer": 1,
        "why": "The Hub provides supplemental study, not licensing."
      }
    ],
    "coach": "Name it. Explain its purpose. Check the evidence. Resolve uncertainty before proceeding.",
    "instructor": "Can we review my official test-day checklist and the privileges/restrictions for this vehicle?",
    "sources": [
      "path",
      "drivers",
      "states",
      "caTests"
    ],
    "tools": [
      "starter"
    ]
  }
];
