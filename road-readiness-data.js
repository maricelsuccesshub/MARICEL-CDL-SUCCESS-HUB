// Original Coach Maricel road-readiness study scenarios. No member data or official exam questions.
const roadReadinessTopics=[
  {
    "id": "prepare",
    "title": "Before the wheels roll",
    "kicker": "Build a trip picture",
    "objective": "Identify what must be checked before departure and what this Hub cannot verify for you.",
    "learn": [
      [
        "Start with the driver and equipment",
        "Confirm that you are fit to drive and that the vehicle inspection, defect reporting and load checks required for this trip are complete. The Hub’s short reminders are not an inspection procedure or permission to use defective equipment. Have your instructor demonstrate the actual checks."
      ],
      [
        "Plan for this combination",
        "Know the actual vehicle/load dimensions, weight and operating limits. Verify truck restrictions, grades, detours and the last part of the approach with suitable official and carrier resources. A passenger-car navigation route does not establish truck clearance or suitability."
      ],
      [
        "Check conditions along the trip",
        "Look beyond the destination forecast. Review weather, road restrictions and available stopping options along the route, including passes and exposed areas. Check source times and plan how you will obtain updates while parked."
      ],
      [
        "Discuss the gaps before departure",
        "Explain your route, stopping plan and unresolved questions to your instructor or carrier. A schedule does not resolve a restriction, an equipment problem or a skill you have not learned. Delay departure when essential information or preparation is missing."
      ]
    ],
    "terms": [
      [
        "Vehicle/load dimensions",
        "The complete combination’s actual height, width and length, including its load and equipment."
      ],
      [
        "Restriction",
        "An official limit or condition on use of a road; it can depend on vehicle, weight, equipment or current conditions."
      ]
    ],
    "board": [
      [
        "Driver",
        "Fitness and alertness"
      ],
      [
        "Equipment",
        "Inspection and limits"
      ],
      [
        "Route",
        "Restrictions and grades"
      ],
      [
        "Stop options",
        "Permission and access"
      ]
    ],
    "scenario": {
      "prompt": "A car-navigation app offers a shorter route with an unfamiliar low crossing. You have not checked the truck restrictions. What is the better next decision?",
      "options": [
        "Use it because the map shows a continuous road",
        "While parked, verify the complete truck route and resolve the crossing before committing"
      ],
      "answer": 1,
      "why": "A route line is not a clearance check. Confirm the actual equipment/load limits and the relevant road restrictions; do not assume another vehicle’s successful trip proves this combination fits."
    },
    "questions": [
      {
        "prompt": "Does opening a route in Google Maps establish that it is suitable for this truck and load?",
        "options": [
          "No. Truck suitability and restrictions need separate verification",
          "Yes. A route line is approval for any vehicle"
        ],
        "answer": 0,
        "why": "The Hub’s general map link does not calculate truck dimensions, permits, road restrictions or current clearance."
      },
      {
        "prompt": "The delivery schedule is tight, but an important preparation question remains unresolved. What belongs in your plan?",
        "options": [
          "Leave first and hope to answer it while driving",
          "Resolve it with qualified guidance before committing; change the plan if needed"
        ],
        "answer": 1,
        "why": "Time pressure does not fix missing information, equipment defects or an unlearned procedure."
      }
    ],
    "coach": "Tell me what you checked, where the information came from, and what remains uncertain.",
    "instructor": "Can we review this truck’s inspection, limits, route and stopping options before departure?",
    "tools": [
      "planner",
      "clearances",
      "safehaven"
    ],
    "sources": [
      "tips",
      "curriculum"
    ]
  },
  {
    "id": "grades",
    "title": "Mountains and long grades",
    "kicker": "Prepare before the descent",
    "objective": "Recognize the factors that make a grade demanding and the controls that require equipment-specific training.",
    "learn": [
      [
        "Read the grade before you reach it",
        "Learn the route’s grade length, steepness, curves and truck warnings before committing. Consider the actual vehicle/load, road surface and weather together. A posted limit is a ceiling, not proof that the speed is suitable for current conditions."
      ],
      [
        "Know the controls before the hill",
        "Have a qualified instructor demonstrate the speed selection, gear/range, engine-braking or retarder controls and service-brake technique approved for this vehicle. Establish the instructed speed and gear/range before the descent; do not wait for speed to build or experiment with unfamiliar controls on the hill. Retarder use has limits, including reduced-traction conditions; confirm the permitted use for this equipment rather than assuming it is suitable everywhere."
      ],
      [
        "Understand heat without memorizing a recipe",
        "Braking creates heat. Excessive heat can reduce braking effectiveness; brake condition and adjustment also matter. The service brakes are not an unlimited way to hold a long descent. This topic provides no universal gear, RPM, brake-application interval or downhill speed."
      ],
      [
        "Plan for abnormal conditions",
        "Know the route’s warnings and designated emergency escape facilities before travel. An escape ramp is for an emergency, not ordinary parking. If control or braking becomes abnormal, follow your trained emergency response; do not wait for complete failure or consult this screen while moving."
      ]
    ],
    "terms": [
      [
        "Grade",
        "The road’s uphill or downhill slope; length and steepness both affect the task."
      ],
      [
        "Brake fade",
        "Reduced braking effectiveness associated with excessive heat. It is not a problem this page can diagnose or clear."
      ],
      [
        "Retarder / engine braking",
        "Equipment that helps slow the vehicle; operation and use in reduced traction require the actual vehicle’s instructions."
      ]
    ],
    "board": [
      [
        "Grade",
        "Length, slope, curves"
      ],
      [
        "Vehicle / load",
        "Weight and limits"
      ],
      [
        "Controls",
        "Demonstrate first"
      ],
      [
        "Conditions",
        "Surface and weather"
      ]
    ],
    "scenario": {
      "prompt": "Before your first long downgrade in an unfamiliar truck, you do not understand its engine-braking or range controls. What is the better plan?",
      "options": [
        "Before committing to the grade, obtain qualified instruction and a suitable plan for this equipment",
        "Try different controls on the descent and see what happens"
      ],
      "answer": 0,
      "why": "The descent is not the place to discover unfamiliar controls. Confirm the equipment procedure and your preparation before the grade; this scenario does not authorize a particular speed or technique."
    },
    "questions": [
      {
        "prompt": "Which factors belong in planning for a long downgrade?",
        "options": [
          "Only the posted speed number",
          "Vehicle/load, grade length and steepness, road conditions, weather and the actual equipment procedure"
        ],
        "answer": 1,
        "why": "A single number or another driver’s gear choice cannot describe the complete situation for your combination."
      },
      {
        "prompt": "Can this page give one gear, RPM or timed braking pattern for every truck and grade?",
        "options": [
          "No. Those decisions require qualified instruction and equipment-specific procedures",
          "Yes. One pattern is enough for all combinations"
        ],
        "answer": 0,
        "why": "The lesson teaches recognition and preparation. The actual transmission, braking system, load and conditions must guide the demonstrated procedure."
      }
    ],
    "coach": "Before the grade, explain the plan and the controls. Do not discover them on the descent.",
    "instructor": "Can you demonstrate this vehicle’s grade procedure, control limits and emergency response before I use them?",
    "tools": [
      "planner",
      "cameras",
      "weather"
    ],
    "sources": [
      "caHandbook",
      "waGuide",
      "tips"
    ]
  },
  {
    "id": "weather",
    "title": "Weather, wind and traction",
    "kicker": "Conditions can change the plan",
    "objective": "Distinguish forecasts and camera views from restrictions, traction and vehicle-specific operating limits.",
    "learn": [
      [
        "Read more than one point on the route",
        "Check official forecasts and alerts for the route, passes and intended stops. Review gusts, visibility, precipitation and changing temperatures, then check current road and commercial-vehicle restrictions. A daily destination summary is not a route-wide condition report."
      ],
      [
        "Treat the image as a limited view",
        "A camera shows one place and moment. A clear-looking picture cannot establish traction, rule out ice or cancel a closure or chain requirement. Conditions may differ beyond the frame or change after the image was captured."
      ],
      [
        "Do not invent a universal wind limit",
        "High-profile combinations can be vulnerable to strong gusts. Vehicle/load, exposure and conditions matter. Follow official restrictions and the equipment/carrier procedure; a wind number found online does not establish that travel is suitable for your truck."
      ],
      [
        "Prepare an alternative while parked",
        "Know the applicable traction-device requirements and get practical instruction before needing to use the equipment. Plan suitable stopping options and delays. When conditions become too dangerous for operation, discontinue travel using trained procedures and a suitable location; do not make an abrupt stop in a traffic lane because of a screen message."
      ]
    ],
    "terms": [
      [
        "Traction",
        "The tire-to-road grip available in the actual conditions; a forecast or photograph cannot measure it for you."
      ],
      [
        "Gust",
        "A brief increase in wind speed that can differ from the sustained wind report."
      ],
      [
        "Traction device",
        "Equipment such as approved chains where required; fit, installation, use and restrictions need specific instruction."
      ]
    ],
    "board": [
      [
        "Forecast / alerts",
        "Route and timing"
      ],
      [
        "Road agency",
        "Current restrictions"
      ],
      [
        "Actual conditions",
        "Grip and visibility"
      ],
      [
        "Alternative",
        "Stop, delay, reassess"
      ]
    ],
    "scenario": {
      "prompt": "An official commercial-vehicle restriction remains posted, but a nearby camera looks clear. What is the better decision?",
      "options": [
        "Treat the camera image as permission to ignore the restriction",
        "Honor the restriction, verify current official information and revise the plan"
      ],
      "answer": 1,
      "why": "A photograph does not override an official restriction or establish traction for your truck. Check authoritative updates while parked; the Hub does not clear the route for travel."
    },
    "questions": [
      {
        "prompt": "Does one wind-speed number guarantee that every truck can continue?",
        "options": [
          "No. Restrictions, equipment/load, exposure and actual conditions still matter",
          "Yes. Use the same threshold for every combination"
        ],
        "answer": 0,
        "why": "No universal operating limit is supplied here. Gusts and the actual vehicle/load can change the risk."
      },
      {
        "prompt": "What should a changing forecast trigger in your preparation?",
        "options": [
          "Rely on the original plan because it was already made",
          "Recheck the route, restrictions and suitable stopping alternatives while parked"
        ],
        "answer": 1,
        "why": "A plan needs reassessment when relevant conditions change. A forecast cannot certify the road or authorize operation."
      }
    ],
    "coach": "Use the information to ask better questions. A clear-looking screen is not an all-clear for the truck.",
    "instructor": "What weather, traction-device and wind procedures apply to this equipment, load and route?",
    "tools": [
      "weather",
      "cameras",
      "safehaven"
    ],
    "sources": [
      "weatherRule",
      "weatherFAQ",
      "nwsWind",
      "nwsWinter"
    ]
  },
  {
    "id": "space",
    "title": "Space, visibility and attention",
    "kicker": "Leave room for the next change",
    "objective": "Recognize why the whole driving picture matters, not only the vehicle directly ahead.",
    "learn": [
      [
        "Look for developing changes",
        "Scan ahead for slowing traffic, lane changes, work zones, ramps and curves. Check mirrors and blind-area risks as part of the trained scan. Seeing a gap now does not prove it will stay available or that another road user sees the truck."
      ],
      [
        "Leave space to respond",
        "Stopping needs time and distance, and road surface, speed and conditions affect the task. If another vehicle reduces the gap, rebuild space using your trained driving procedure rather than treating the smaller gap as acceptable. No single illustrated gap or fixed distance on this page proves sufficient room."
      ],
      [
        "Plan changes before the tight point",
        "Truck turns, curves and ramps need an appropriate approach and room for the entire combination. Follow posted warnings, lane controls and equipment-specific training. A passenger vehicle’s pace or successful turn is not a truck operating limit."
      ],
      [
        "Protect attention",
        "Set up route information and study this Hub while parked. Do not read a lesson, enter a search or handle messages while operating the vehicle. When a task needs your attention away from driving, arrange a suitable place to stop under your trained procedures."
      ]
    ],
    "terms": [
      [
        "Blind area",
        "A space not usefully visible from the driving position or aids at that moment."
      ],
      [
        "Stopping space",
        "Room needed to recognize a change, respond and bring the actual vehicle under control."
      ]
    ],
    "board": [
      [
        "Ahead",
        "Traffic and warnings"
      ],
      [
        "Both sides",
        "Blind-area risks"
      ],
      [
        "Response room",
        "Gap and conditions"
      ],
      [
        "Attention",
        "Park for screen tasks"
      ]
    ],
    "scenario": {
      "prompt": "Another vehicle moves into the space ahead of your truck. What is the better response to plan for?",
      "options": [
        "Use trained speed/space management to rebuild room while monitoring traffic",
        "Keep the shortened gap because the other vehicle chose it"
      ],
      "answer": 0,
      "why": "The other driver’s action does not establish adequate room for your combination. The lesson does not prescribe an abrupt maneuver or calculate a safe gap; practice the actual response with qualified instruction."
    },
    "questions": [
      {
        "prompt": "Does one clear mirror view prove that every area around the truck is clear?",
        "options": [
          "Yes. One view is enough",
          "No. Views have limits and the wider situation must be checked"
        ],
        "answer": 1,
        "why": "Different views show different areas, and conditions can change between observations."
      },
      {
        "prompt": "When should you read the Hub’s next lesson or enter a route search?",
        "options": [
          "While parked in a suitable location",
          "While driving if the road looks quiet"
        ],
        "answer": 0,
        "why": "The Hub is a parked learning/planning tool. A quiet-looking road does not remove the need to attend to driving."
      }
    ],
    "coach": "Tell me what could change next, and where your room to respond will come from.",
    "instructor": "Can you coach my scanning, following-space and curve/turn preparation in this combination?",
    "tools": [
      "planner",
      "cameras"
    ],
    "sources": [
      "following",
      "tips"
    ]
  },
  {
    "id": "fatigue",
    "title": "Fatigue and schedule pressure",
    "kicker": "A legal clock is not a fitness check",
    "objective": "Recognize fatigue-related reasons to stop, rest and discuss the plan before pressure becomes a driving decision.",
    "learn": [
      [
        "Check the person as well as the clock",
        "Plan enough rest and assess alertness before departure and throughout the trip. Being within permitted driving hours does not by itself prove fitness to drive. Illness, poor sleep and demanding work can still affect attention and judgment."
      ],
      [
        "Recognize the warning signs",
        "Repeated yawning, heavy eyes, blurred focus or difficulty staying attentive need action, not reassurance from the schedule. Do not wait for a near miss to take fatigue seriously. Plan a suitable stopping/rest option under your trained procedures."
      ],
      [
        "Do not substitute a trick for rest",
        "Opening a window, loud music or coffee does not establish that a fatigued driver is fit to continue. Medication can also affect alertness. Read warnings and consult an appropriate clinician or pharmacist about driving-related effects; do not change prescribed treatment based on this lesson."
      ],
      [
        "Communicate the changed plan",
        "Tell your instructor or carrier when fatigue, illness or conditions prevent suitable operation. Follow applicable duty/rest rules and equipment procedures. This Hub does not calculate hours of service, provide a medical assessment or approve an exception because a load is urgent."
      ]
    ],
    "terms": [
      [
        "Fatigue",
        "Tiredness that can impair attention, reactions and judgment."
      ],
      [
        "Fitness to drive",
        "Whether you can operate appropriately now; a schedule or remaining legal hours does not establish this by itself."
      ]
    ],
    "board": [
      [
        "Rest",
        "Plan before departure"
      ],
      [
        "Warning signs",
        "Notice early"
      ],
      [
        "Schedule",
        "Pressure is not fitness"
      ],
      [
        "Next decision",
        "Rest and communicate"
      ]
    ],
    "scenario": {
      "prompt": "You are struggling to stay alert even though you believe legal driving time remains. What is the better plan?",
      "options": [
        "Continue because time remains on the clock",
        "Arrange a suitable stop/rest plan and communicate; do not use the clock as proof of fitness"
      ],
      "answer": 1,
      "why": "Hours compliance and current alertness are different checks. Do not rely on remaining time or an alertness trick to dismiss signs of fatigue."
    },
    "questions": [
      {
        "prompt": "What does loud music or an open window establish about driving fitness?",
        "options": [
          "Neither proves that fatigue has been resolved",
          "Either can replace needed rest"
        ],
        "answer": 0,
        "why": "Feeling briefly stimulated is not proof of restored alertness or driving fitness."
      },
      {
        "prompt": "A medicine carries a drowsiness warning. Which response fits this lesson?",
        "options": [
          "Ignore it if the route is familiar",
          "Check the warning and obtain appropriate professional guidance about driving effects"
        ],
        "answer": 1,
        "why": "This lesson cannot determine medication suitability. Do not drive impaired or independently change prescribed treatment based on the Hub."
      }
    ],
    "coach": "The schedule can change. Do not ask fatigue to make the decision for you.",
    "instructor": "How should I report fatigue and arrange rest or a changed assignment under our procedures?",
    "tools": [
      "safehaven",
      "planner"
    ],
    "sources": [
      "fatigue",
      "illnessRule"
    ]
  },
  {
    "id": "reassess",
    "title": "When the plan must change",
    "kicker": "Recognize, communicate, reassess",
    "objective": "Prepare a response to changed conditions without treating a web lesson as emergency control training.",
    "learn": [
      [
        "Recognize a reason to reassess",
        "A new closure, loss of useful visibility, equipment warning, braking change or fatigue can invalidate an earlier plan. Do not treat having started the trip as proof that it must continue unchanged."
      ],
      [
        "Distinguish stopping from stopping anywhere",
        "Planning to discontinue travel includes choosing a suitable location and following the trained vehicle procedure. Do not stop abruptly in a traffic lane, blind curve or another place that increases immediate danger simply to use the Hub. An unfolding emergency needs the response taught for that equipment and situation."
      ],
      [
        "Know who needs the information",
        "For an immediate threat to life or an urgent roadway hazard, contact emergency services when safe to do so. For operating or dispatch changes, use the appropriate instructor/carrier channel. Give the information needed for help, including location and direction when relevant; do not broadcast private live-trip details in Community."
      ],
      [
        "Prepare the response before it is needed",
        "Have qualified instruction in warning equipment, breakdown procedures, equipment-specific emergency controls and relevant route escape facilities. This activity asks you to recognize a problem and plan for help; it does not teach a complete brake-failure, skid-recovery or roadside-deployment procedure."
      ]
    ],
    "terms": [
      [
        "Reassessment",
        "Checking whether the original plan still fits the actual conditions."
      ],
      [
        "Emergency escape ramp",
        "A designated emergency facility for a vehicle that cannot be controlled on a downgrade; not an ordinary parking place."
      ]
    ],
    "board": [
      [
        "Change",
        "Recognize the warning"
      ],
      [
        "Location",
        "Avoid increasing danger"
      ],
      [
        "Communication",
        "Use the right channel"
      ],
      [
        "Training",
        "Know the response first"
      ]
    ],
    "scenario": {
      "prompt": "Conditions are deteriorating. Someone suggests stopping immediately in a blind curve so you can check the app. What is the better planning principle?",
      "options": [
        "Use the trained response and a suitable location; do not add a new hazard just to use a screen",
        "Stop anywhere as soon as an app needs attention"
      ],
      "answer": 0,
      "why": "The location and circumstances matter. Do not create a new danger in order to consult the Hub. In an emergency, use your equipment-specific training and contact appropriate emergency help when safe."
    },
    "questions": [
      {
        "prompt": "Can finishing these screen topics approve a real trip or certify emergency-control skills?",
        "options": [
          "Yes. Reviewed topics authorize operation",
          "No. Practical preparation, conditions and qualified assessment still matter"
        ],
        "answer": 1,
        "why": "A review mark records study activity only. It cannot assess vehicle control, road conditions or readiness."
      },
      {
        "prompt": "Where does a complete brake-failure or skid-response procedure come from?",
        "options": [
          "Qualified training and the actual equipment’s procedures",
          "A generic two-choice screen scenario alone"
        ],
        "answer": 0,
        "why": "These are high-consequence practical skills. The Hub primer does not supply a complete emergency-control procedure."
      }
    ],
    "coach": "Changing the plan is part of responsible driving. Prepare the response before the emergency.",
    "instructor": "Can we rehearse the reporting, stopping and equipment-emergency procedures I need for this route?",
    "tools": [
      "safehaven",
      "weather",
      "cameras"
    ],
    "sources": [
      "weatherRule",
      "weatherFAQ",
      "illnessRule",
      "caHandbook"
    ]
  }
];
