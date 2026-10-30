// Original Hub explanations; public-reference study example, not an exam script.
const airBrakeSteps=[
  {
    "title": "Air gauges and governor cut-out",
    "state": "Engine running \u00b7 vehicle secured \u00b7 parking brakes initially applied",
    "do": "Identify both reservoir (supply) pressure readings; an application-pressure gauge, if fitted, shows brake-application pressure instead of stored reservoir pressure. Start the engine using the approved starting procedure and build air until the governor stops the pressure increase. Watch the gauges and identify the actual cut-out pressure; an air-dryer purge sound alone is not the whole check.",
    "watch": "The California and Washington modernized examples describe approximately 120\u2013140 psi. Use the specified cut-out for the actual vehicle, not an invented target. If pressure does not build, keeps rising abnormally or a gauge does not work, stop the check and obtain qualified help.",
    "say": "I am checking the gauges and governor control. I will identify this vehicle\u2019s specified cut-out and compare it with the observed pressure.",
    "why": "Cut-out controls the supply of compressed air. It does not turn the engine off, and a full gauge does not prove every wheel brake works."
  },
  {
    "title": "Applied leakage: hold, stabilize, then time",
    "state": "Engine OFF \u00b7 electrical power ON \u00b7 wheels chocked \u00b7 parking brakes released \u00b7 trailer supplied as required",
    "do": "After reaching cut-out, shut off the engine and retain electrical power for the gauges and warnings. With the secured vehicle stationary, release the parking brakes and place the trailer air-supply control in its normal supply position as required for the combination. On the conventional two-knob arrangement, the parking and trailer air-supply knobs are pushed IN for this check; verify the actual labels and equipment procedure first. Fully apply and steadily hold the service foot brake. Let the initial pressure drop stabilize, then observe both gauges for one full minute without pumping or releasing the pedal.",
    "watch": "For the example tractor plus ONE air-braked semitrailer: no more than 4 psi lost in one minute after stabilization. The cited modernized guides use 3 psi for a single vehicle or a power unit towing a trailer without air brakes. Other configurations need their own criteria. Listen for leaks too. Excess loss requires resolution before driving.",
    "say": "This is the applied test, with the foot brake held. I will identify the correct vehicle limit, time one minute after stabilization and state the actual loss.",
    "why": "An initial drop fills the brake system. Timing before it settles, pumping the pedal or leaving the engine building air can distort the leakage result."
  },
  {
    "title": "Low-air warning: observe the actual activation",
    "state": "Engine remains OFF for this study example \u00b7 electrical power ON \u00b7 secured vehicle stationary",
    "do": "Release the held foot brake, then apply and release it repeatedly to reduce reservoir pressure. Watch both gauges and identify when the fitted low-air warning devices activate. State the observed pressure and compare it with the verified criterion for this vehicle and test.",
    "watch": "California and Washington modernized inspection examples specify warning before pressure falls below 55 psi, or the manufacturer-specified level. New York\u2019s general air-brake chapter describes warning before pressure falls below 60 psi. These are labeled source contexts, not interchangeable nationwide exam answers. Resolve which applies BEFORE hands-on practice; do not lower a vehicle\u2019s warning setting to match a study number. A warning may activate at a higher pressure than the manual\u2019s stated minimum. \u201cBefore pressure falls below 55\u201d is not an instruction to wait until 55 or a universal warning setting; compare the actual activation with the documented vehicle specification as well.",
    "say": "I will identify the required warning devices, the applicable criterion and the actual pressure at which they activate.",
    "why": "A warning is an early indication of a serious pressure problem. During driving, act promptly to stop safely; never wait for automatic spring-brake application. Pressure depletion here is a stationary supervised check, not a road technique."
  },
  {
    "title": "Automatic spring-brake / protection response",
    "state": "Engine OFF \u00b7 electrical power ON \u00b7 vehicle secured against rolling throughout depletion",
    "do": "Continue reducing pressure with the foot brake only as instructed for the actual equipment. Observe the automatic parking-brake control and trailer air-supply/protection response. The red cab control operates the tractor protection system; it is not a visual inspection of the internal protection valve. Identify which controls respond and the observed pressure for each. Stop reducing pressure once the required responses are observed. Do not hold a control in to prevent automatic operation.",
    "watch": "The modernized examples describe 20\u201345 psi, subject to documented manufacturer specifications. On the air-operated trailer arrangement described, the trailer protection/parking response occurs at the same time as or before the truck/tractor parking response. Different designs may use other indications or backup systems; not every control physically pops out. Learn the required demonstration for that design.",
    "say": "I will compare each applicable automatic response with the equipment specification and explain any design-specific indication.",
    "why": "Air normally holds spring brakes released; reducing air permits spring application. A knob\u2019s movement does not establish every brake\u2019s condition. If the expected response is absent or uncertain, stop and obtain qualified help; do not improvise a low-air driving test."
  }
];
const airBrakeQuestions=[
  [
    "You are studying a tractor and one air-braked semitrailer. During the applied test, when does the one-minute observation start?",
    [
      "As soon as you touch the pedal",
      "After full application and initial gauge stabilization"
    ],
    1,
    "Keep the pedal steadily held and start timing after the initial drop settles. Pumping and continued engine air supply change the result."
  ],
  [
    "That combination loses 5 psi during the timed applied minute. What follows?",
    [
      "Stop and have the abnormal result resolved before driving",
      "Accept it because the brakes still feel strong"
    ],
    0,
    "The example limit is no more than 4 psi in one minute. A strong pedal feel does not clear an excessive leakage result."
  ],
  [
    "During the secured stationary check, this vehicle\u2019s documented low-air warning setting is about 70 psi. It activates at 70 psi; the applicable modernized example says before pressure falls below 55 psi. What is the better interpretation?",
    [
      "Ignore the warning until the gauge reaches exactly 55 psi",
      "Record the actual activation and compare it with the vehicle specification and applicable test criterion"
    ],
    1,
    "A minimum test criterion is not an exact activation target. An earlier warning can match the documented equipment setting; never delay a real warning response or change a setting to make every vehicle warn at 55 psi."
  ],
  [
    "Both dash controls move during the stationary depletion check. Can you depart immediately?",
    [
      "Yes, this proves the whole brake system works",
      "No; restore and verify pressure, resolve findings and complete all applicable checks"
    ],
    1,
    "Automatic response is only one check. Recharge, control restoration, other required inspections and supervised holding/stopping checks still matter."
  ],
  [
    "During a real trip a low-air warning begins. Should you fan the pedal to make the knobs pop out?",
    [
      "No. Use the trained response to bring the vehicle to a safe stop promptly",
      "Yes, repeat the stationary study exercise on the road"
    ],
    0,
    "Fanning depletes available air. Never deliberately perform a stationary pressure-depletion test while driving or wait for automatic application."
  ]
];
