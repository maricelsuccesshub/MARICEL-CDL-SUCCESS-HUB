// Original Coach Maricel component-study library; public principles, no school scripts.
const pretripZones=[
  {
    "id": "prepare",
    "title": "Before the walk-around",
    "where": "Start outside, in a suitable inspection area.",
    "focus": "Secure the vehicle under its approved procedure before inspection. Learn appropriate wheel-chock use, engine-off precautions and safe access with your instructor. No part of this library directs you to crawl under a vehicle, release stored pressure or touch hot/moving equipment.",
    "parts": [
      {
        "id": "prepare-1",
        "name": "Surroundings and ground",
        "purpose": "The work area around the combination.",
        "look": "Look for traffic, people, slopes, soft ground, overhead hazards and fluid beneath the vehicle.",
        "why": "Inspection needs a suitable location and a controlled vehicle."
      },
      {
        "id": "prepare-2",
        "name": "Vehicle identity and configuration",
        "purpose": "The actual tractor, trailer, load and equipment you will use.",
        "look": "Confirm which vehicle you are inspecting and identify any configuration changes.",
        "why": "A familiar model can have different controls, limits and equipment."
      },
      {
        "id": "prepare-3",
        "name": "Inspection/repair information",
        "purpose": "Records used to communicate vehicle condition.",
        "look": "Review the previous report when required and verify the required repair certification and applicable inspection documentation.",
        "why": "A reported defect is not resolved simply because the vehicle is available."
      },
      {
        "id": "prepare-4",
        "name": "Safe entry and exit",
        "purpose": "Steps, handholds and the cab access path.",
        "look": "Observe step and handhold condition, footing and obstructions; learn three-point-contact entry/exit.",
        "why": "Falls and unintended vehicle movement are inspection hazards too."
      },
      {
        "id": "prepare-5",
        "name": "Complete vehicle coverage",
        "purpose": "A method for checking all required areas.",
        "look": "Plan both sides, front, rear, tractor and trailer, including each applicable axle and special equipment.",
        "why": "A limited test demonstration is not the full daily vehicle inspection."
      }
    ],
    "scenario": {
      "prompt": "The truck is familiar, but a previous report lists a safety defect and you cannot confirm its resolution. What next?",
      "choices": [
        "Assume the last driver took care of it",
        "Resolve the defect/repair status through the required process before use"
      ],
      "answer": 1,
      "why": "Familiarity does not establish current condition. Obtain qualified evaluation and the required repair verification before operating."
    },
    "sources": [
      "inspection",
      "records",
      "ca",
      "wa"
    ]
  },
  {
    "id": "cab",
    "title": "Cab, visibility and controls",
    "where": "Inside the secured cab.",
    "focus": "Learn the manufacturer’s normal indications and the correct setup before checking controls. Brake checks involving vehicle movement or pressure reduction need qualified instruction; this library does not provide a complete executable brake-test procedure.",
    "parts": [
      {
        "id": "cab-1",
        "name": "Seat and seat belt",
        "purpose": "Position and restrain the driver.",
        "look": "Look for damage, insecure mounting, belt fraying, buckle problems and adjustment issues.",
        "why": "Poor restraint or seating can affect protection and control."
      },
      {
        "id": "cab-2",
        "name": "Windshield and glazing",
        "purpose": "Provide a view of the driving scene.",
        "look": "Observe damage, obstructions and cleanliness using applicable visibility criteria.",
        "why": "A blocked or distorted view can hide developing hazards."
      },
      {
        "id": "cab-3",
        "name": "Mirrors and traffic-monitoring cameras",
        "purpose": "Provide additional views around the combination.",
        "look": "Check mounting, condition, adjustment and function where fitted; understand blind areas.",
        "why": "A clear display is not proof that every area is visible."
      },
      {
        "id": "cab-4",
        "name": "Wipers and washers",
        "purpose": "Help maintain windshield visibility.",
        "look": "Check blade condition, mounting and operation, with an adequate washer supply.",
        "why": "Bad-weather visibility depends on functioning equipment."
      },
      {
        "id": "cab-5",
        "name": "Heater and defroster",
        "purpose": "Help control interior temperature and windshield fogging.",
        "look": "Verify the required controls and airflow function.",
        "why": "A windshield can become obscured during the trip."
      },
      {
        "id": "cab-6",
        "name": "Steering wheel and column",
        "purpose": "Transmit the driver’s steering input.",
        "look": "Observe condition and learn the permitted movement/play check for this system.",
        "why": "Excessive play or binding needs evaluation, not a guessed tolerance."
      },
      {
        "id": "cab-7",
        "name": "Horn controls",
        "purpose": "Provide an audible warning.",
        "look": "Identify and check the fitted warning devices under the vehicle’s procedure.",
        "why": "A missing warning function can reduce communication options."
      },
      {
        "id": "cab-8",
        "name": "Gauges and warning indicators",
        "purpose": "Report conditions such as oil pressure, temperature, charging and air pressure.",
        "look": "Know expected readings and warning/self-check behavior; investigate abnormal indications.",
        "why": "A lit lamp or normal-looking gauge must be interpreted for that vehicle."
      },
      {
        "id": "cab-9",
        "name": "Brake controls and system checks",
        "purpose": "Control service, parking and applicable trailer/emergency functions.",
        "look": "Identify controls and learn the complete prescribed leakage, warning, automatic-application and holding/stopping checks as applicable.",
        "why": "Correct setup, limits and demonstrated function all matter; no universal pressure sequence is supplied here."
      },
      {
        "id": "cab-10",
        "name": "Emergency equipment",
        "purpose": "Supports required emergency response.",
        "look": "Confirm the appropriate extinguisher, warning devices and spare fuses where required, with condition, accessibility and secure storage.",
        "why": "Having an item aboard does not establish that it is usable or correctly rated."
      }
    ],
    "scenario": {
      "prompt": "A low-air warning behaves differently from the vehicle’s required check. Can you dismiss it because other gauges look normal?",
      "choices": [
        "No; stop the check safely and obtain qualified evaluation",
        "Yes; one normal gauge proves the brakes are fine"
      ],
      "answer": 0,
      "why": "A warning-system concern cannot be cleared by another gauge. Follow the proper check and defect-response process."
    },
    "sources": [
      "wa",
      "ca",
      "inspection",
      "equipment"
    ]
  },
  {
    "id": "engine",
    "title": "Engine area, fluids and accessories",
    "where": "Accessible engine-area components, with the vehicle prepared for inspection.",
    "focus": "Engine layouts vary. Identify the correct reservoirs and access points on the actual truck. Never remove a hot or pressurized coolant cap. Stay clear of belts, fans, moving parts and hot exhaust components.",
    "parts": [
      {
        "id": "engine-1",
        "name": "Engine oil system",
        "purpose": "Lubricates engine components.",
        "look": "Identify the approved level-check point and method; observe level and signs of leakage.",
        "why": "Low level or leakage can indicate a problem requiring evaluation."
      },
      {
        "id": "engine-2",
        "name": "Cooling system and coolant reservoir",
        "purpose": "Carry heat away from the engine.",
        "look": "Use the approved cold/sight-level check; inspect accessible hoses, reservoir and connections for damage or leaks.",
        "why": "Hot coolant can scald; fluid level alone does not establish system condition."
      },
      {
        "id": "engine-3",
        "name": "Power-steering reservoir and hoses, if fitted",
        "purpose": "Supply fluid for steering assistance.",
        "look": "Identify the correct fluid-level check, mounting, connections and visible leaks.",
        "why": "Loss of assistance or leaking components can affect steering."
      },
      {
        "id": "engine-4",
        "name": "Drive belts, if fitted",
        "purpose": "Transfer power to driven accessories.",
        "look": "With equipment safely prepared, observe accessible belts for damage and learn the manufacturer’s tension check.",
        "why": "Some accessories are gear-driven; do not assume every truck has the same belts."
      },
      {
        "id": "engine-5",
        "name": "Alternator and mounting",
        "purpose": "Support the electrical charging system.",
        "look": "Observe accessible mounting, wiring and belt condition where applicable.",
        "why": "Damage or insecure connections can affect the electrical supply."
      },
      {
        "id": "engine-6",
        "name": "Air compressor and drive",
        "purpose": "Supply compressed air for an air-brake system.",
        "look": "Identify its drive type, accessible mounting and lines; connect this to the required air-system performance checks.",
        "why": "Seeing the compressor does not prove correct pressure build-up or brake performance."
      },
      {
        "id": "engine-7",
        "name": "Water pump and connections",
        "purpose": "Circulate coolant through the cooling system.",
        "look": "Observe accessible mounting and signs of leakage; identify the drive if applicable.",
        "why": "A leak or drive problem can affect engine cooling."
      },
      {
        "id": "engine-8",
        "name": "Hoses, tubing and wiring",
        "purpose": "Carry fluid, air or electrical power/signals.",
        "look": "Observe abrasion, leaks, heat damage, loose routing and contact with moving or hot parts.",
        "why": "A line can be damaged even if no warning is currently illuminated."
      },
      {
        "id": "engine-9",
        "name": "Air intake/filter assembly",
        "purpose": "Provide an air path to the engine.",
        "look": "Observe accessible housing, connections and the fitted restriction indicator as instructed.",
        "why": "Insecure or damaged intake equipment needs evaluation."
      },
      {
        "id": "engine-10",
        "name": "Leaks and fluid identification",
        "purpose": "Evidence of a possible system problem.",
        "look": "Look for fresh drips, wet components or puddles and report their location; do not taste or touch unknown fluid.",
        "why": "The source and significance must be identified rather than guessed."
      }
    ],
    "scenario": {
      "prompt": "You want to check coolant immediately after a hot trip. What fits this study guidance?",
      "choices": [
        "Remove the cap quickly",
        "Use the approved safe method; never open a hot or pressurized coolant cap"
      ],
      "answer": 1,
      "why": "Coolant checks require the equipment’s safe temperature and access procedure. A hot/pressurized cap can cause serious burns."
    },
    "sources": [
      "wa",
      "ny",
      "ca"
    ]
  },
  {
    "id": "steering",
    "title": "Steering and suspension",
    "where": "Steering-axle area and the applicable suspension at every axle.",
    "focus": "Study the visible components without entering pinch points or going under unsupported equipment. Some trucks use leaf springs, air suspension or a combination. Driver observation does not replace trained measurement or repair.",
    "parts": [
      {
        "id": "steering-1",
        "name": "Steering gear/box and mounting",
        "purpose": "Convert steering input into linkage movement.",
        "look": "Observe mounting, housing condition and visible leaks.",
        "why": "Loose or damaged steering equipment can affect directional control."
      },
      {
        "id": "steering-2",
        "name": "Pitman arm and drag link, where fitted",
        "purpose": "Transmit movement from the steering gear into the linkage.",
        "look": "Identify attachments, damage and missing retaining hardware.",
        "why": "A disconnected or worn linkage can impair steering."
      },
      {
        "id": "steering-3",
        "name": "Tie rod, steering arms and joints",
        "purpose": "Coordinate the steering wheels.",
        "look": "Observe bends, cracks, loose joints and missing fasteners or retaining devices.",
        "why": "A joint or attachment defect can affect wheel direction."
      },
      {
        "id": "steering-4",
        "name": "Steering knuckle/spindle area",
        "purpose": "Support the steering-wheel pivot assembly.",
        "look": "Identify the accessible area and observe obvious damage or leakage; have movement checks demonstrated.",
        "why": "Not all wear is visible from a walk-around."
      },
      {
        "id": "steering-5",
        "name": "Leaf springs, where fitted",
        "purpose": "Support the vehicle and allow suspension movement.",
        "look": "Look for broken, missing, displaced or visibly damaged leaves.",
        "why": "A spring defect can affect support and axle positioning."
      },
      {
        "id": "steering-6",
        "name": "Spring hangers, brackets and fasteners",
        "purpose": "Attach suspension components to the vehicle.",
        "look": "Observe cracked mounts and loose or missing hardware, including applicable U-bolts.",
        "why": "Suspension attachments carry significant loads."
      },
      {
        "id": "steering-7",
        "name": "Air springs/bags, where fitted",
        "purpose": "Support the vehicle using air pressure.",
        "look": "Observe damage, leakage and insecure mounting from an appropriate position.",
        "why": "Loss of support can change vehicle height and handling."
      },
      {
        "id": "steering-8",
        "name": "Shock absorbers",
        "purpose": "Dampen suspension movement.",
        "look": "Observe mounting, damage and leakage.",
        "why": "Damaged or ineffective damping can affect suspension control."
      },
      {
        "id": "steering-9",
        "name": "Torque/radius rods and bushings, where fitted",
        "purpose": "Help locate axles and control movement.",
        "look": "Observe damaged rods, mounts, fasteners and visibly deteriorated bushings.",
        "why": "Axle-location problems require qualified evaluation."
      }
    ],
    "scenario": {
      "prompt": "A suspension mounting bracket appears cracked. Is repeating “securely mounted” an adequate inspection?",
      "choices": [
        "No; report the actual condition and resolve the safety concern",
        "Yes; that is the phrase the examiner expects"
      ],
      "answer": 0,
      "why": "Inspection must describe the actual component and condition. A memorized phrase cannot resolve a possible structural defect."
    },
    "sources": [
      "wa",
      "ny",
      "equipment"
    ]
  },
  {
    "id": "wheels",
    "title": "Tires, wheels and hubs",
    "where": "Steer, drive and trailer wheel positions on both sides.",
    "focus": "Use the actual vehicle’s tire, load and inflation requirements and current inspection criteria. Learn measurement methods rather than relying on appearance or sound. Inspect every applicable position; one axle shown for a test is not the entire combination.",
    "parts": [
      {
        "id": "wheels-1",
        "name": "Tire tread",
        "purpose": "Provides the running surface against the road.",
        "look": "Check wear, damage and required tread depth using an appropriate gauge and criteria.",
        "why": "A visual impression does not establish adequate depth or condition."
      },
      {
        "id": "wheels-2",
        "name": "Tire sidewalls",
        "purpose": "Form part of the tire’s structure.",
        "look": "Look for cuts, bulges, exposed material and other damage.",
        "why": "Structural damage may exist even with air still in the tire."
      },
      {
        "id": "wheels-3",
        "name": "Inflation and valve stems",
        "purpose": "Maintain the tire’s operating air pressure.",
        "look": "Use an appropriate pressure-check method; observe stem damage and missing/damaged caps where applicable.",
        "why": "A kick or thump does not establish the correct inflation pressure."
      },
      {
        "id": "wheels-4",
        "name": "Dual tires and spacing",
        "purpose": "Provide paired tire support where fitted.",
        "look": "Observe contact between tires, trapped objects, damage and suitable matching/spacing.",
        "why": "Contact or trapped debris can damage tires and surrounding equipment."
      },
      {
        "id": "wheels-5",
        "name": "Wheel/rim",
        "purpose": "Support and retain the tire assembly.",
        "look": "Observe cracks, damage, unauthorized repairs and relevant mounting condition.",
        "why": "Wheel damage can compromise the assembly."
      },
      {
        "id": "wheels-6",
        "name": "Lug nuts, studs and mounting holes",
        "purpose": "Fasten the wheel assembly.",
        "look": "Look for missing or damaged fasteners, elongation and signs such as rust trails needing evaluation.",
        "why": "A visual sign does not replace the correct torque/maintenance procedure."
      },
      {
        "id": "wheels-7",
        "name": "Hub and axle seals",
        "purpose": "Help retain lubricant at the wheel/axle assembly.",
        "look": "Observe leakage and check the applicable lubricant level by the approved method.",
        "why": "Leakage can indicate lubrication loss and may contaminate brakes."
      },
      {
        "id": "wheels-8",
        "name": "Wheel-bearing area",
        "purpose": "Allows wheel rotation on its support.",
        "look": "Report abnormal indications and have any play, noise or heat concern evaluated using the approved procedure.",
        "why": "Do not touch a hot hub or assume that all wear is visible."
      }
    ],
    "scenario": {
      "prompt": "A tire sounds firm when struck. Does that establish its correct inflation?",
      "choices": [
        "Yes, no gauge is needed",
        "No; use the appropriate pressure measurement and requirements"
      ],
      "answer": 1,
      "why": "Sound and appearance do not measure inflation pressure. Learn the correct check for this tire and load."
    },
    "sources": [
      "ny",
      "wa",
      "equipment"
    ]
  },
  {
    "id": "brakes",
    "title": "Foundation brakes and air equipment",
    "where": "Brake components and air-system equipment on the tractor and trailer.",
    "focus": "Learn the fitted drum/disc and air-system arrangement. No spring-brake chamber disassembly, manual slack-adjuster adjustment, pressure-release sequence or brake-stroke measurement procedure is supplied here. Those tasks require the appropriate qualified instruction and safeguards.",
    "parts": [
      {
        "id": "brakes-1",
        "name": "Air lines, hoses and fittings",
        "purpose": "Carry compressed air between system components.",
        "look": "Observe leakage, abrasion, cracks, insecure connections and poor routing.",
        "why": "Air loss or damaged lines can affect braking."
      },
      {
        "id": "brakes-2",
        "name": "Brake chambers and mounting",
        "purpose": "Convert air/spring force into brake actuation.",
        "look": "Observe accessible mounting, external damage and leaks. Never open a spring-brake chamber.",
        "why": "Stored spring energy can cause severe injury; external appearance alone is not a performance check."
      },
      {
        "id": "brakes-3",
        "name": "Pushrods and slack adjusters, where fitted",
        "purpose": "Transmit and adjust actuation in applicable drum-brake systems.",
        "look": "Identify the components and look for visible damage or missing hardware; qualified checks determine permitted stroke/adjustment.",
        "why": "Automatic adjustment is not proof that the brakes are correctly adjusted; do not make a DIY adjustment."
      },
      {
        "id": "brakes-4",
        "name": "Brake drums or rotors",
        "purpose": "Provide a friction surface for braking.",
        "look": "Observe accessible damage and contamination under the correct inspection method.",
        "why": "Cracks, damage or contamination can affect braking performance."
      },
      {
        "id": "brakes-5",
        "name": "Linings or pads",
        "purpose": "Provide friction against the drum or rotor.",
        "look": "Check accessible condition, contamination and required thickness using the proper method.",
        "why": "Appearance from one angle may not establish wear throughout the assembly."
      },
      {
        "id": "brakes-6",
        "name": "Air reservoirs/tanks and drains",
        "purpose": "Store air and provide a way to manage collected contaminants.",
        "look": "Observe mounting, external damage and leaks; learn the correct drain/service procedure for the equipment.",
        "why": "Do not release pressure simply because a drain is present."
      },
      {
        "id": "brakes-7",
        "name": "Governor and air-pressure control",
        "purpose": "Control compressor loading and system pressure.",
        "look": "Learn how the correct build-up/cut-in/cut-out checks apply to this vehicle.",
        "why": "Do not substitute another vehicle’s pressure numbers or sequence."
      },
      {
        "id": "brakes-8",
        "name": "Air dryer, where fitted",
        "purpose": "Help remove moisture from the compressed-air supply.",
        "look": "Observe accessible mounting and leaks; learn normal versus abnormal operation.",
        "why": "An audible air discharge alone does not establish system condition."
      },
      {
        "id": "brakes-9",
        "name": "Protection, relay and brake-control valves",
        "purpose": "Route or control air for the system’s functions.",
        "look": "Identify the fitted arrangement and learn its complete required checks.",
        "why": "A dashboard control label does not prove a valve functions correctly."
      },
      {
        "id": "brakes-10",
        "name": "ABS equipment and warning lamps",
        "purpose": "Help manage wheel lock during braking and signal faults.",
        "look": "Observe applicable lamp/self-check behavior and accessible wiring condition.",
        "why": "ABS does not create traction or remove the need for full brake inspection."
      }
    ],
    "scenario": {
      "prompt": "An automatic slack adjuster is fitted. Does that mean adjustment-related checks can be skipped?",
      "choices": [
        "No; required condition/performance checks still apply",
        "Yes, automatic means it cannot have a problem"
      ],
      "answer": 0,
      "why": "Automatic equipment can still develop faults. Have the proper inspection and any repair performed using qualified procedures."
    },
    "sources": [
      "wa",
      "ca",
      "equipment",
      "waGeneral"
    ]
  },
  {
    "id": "tractor",
    "title": "Tractor sides, frame and exterior",
    "where": "Both sides and the exterior of the tractor.",
    "focus": "Use safe access only. Vehicle systems, exhaust/aftertreatment, batteries and tanks may be hot, pressurized or electrically hazardous. Observe and report; this library does not direct servicing or fuel-system work.",
    "parts": [
      {
        "id": "tractor-1",
        "name": "Fuel tanks, caps, straps and lines",
        "purpose": "Store and supply the engine’s fuel.",
        "look": "Observe secure mounting, caps, damage and signs of leakage.",
        "why": "A leaking or insecure fuel system requires prompt evaluation."
      },
      {
        "id": "tractor-2",
        "name": "DEF tank and lines, where fitted",
        "purpose": "Supply diesel exhaust fluid for applicable emissions systems.",
        "look": "Identify the correct tank and observe mounting, caps, lines and leaks.",
        "why": "DEF and fuel are different fluids; do not interchange their fill points."
      },
      {
        "id": "tractor-3",
        "name": "Battery box, cover and accessible connections",
        "purpose": "House the electrical storage equipment.",
        "look": "Observe secure mounting, cover condition, visible corrosion or damage under the approved access method.",
        "why": "Avoid shorts, sparks and contact with battery chemicals."
      },
      {
        "id": "tractor-4",
        "name": "Frame rails and crossmembers",
        "purpose": "Carry and connect structural loads.",
        "look": "Look for cracks, damage, loose attachments and signs of structural alteration needing evaluation.",
        "why": "A structural defect can affect more than the component nearest it."
      },
      {
        "id": "tractor-5",
        "name": "Driveshaft and related supports, where visible",
        "purpose": "Transmit power through the drivetrain.",
        "look": "Observe accessible damage and loose/missing attachments from a safe position.",
        "why": "Do not enter beneath the vehicle or near rotating driveline parts to inspect from this page."
      },
      {
        "id": "tractor-6",
        "name": "Exhaust and aftertreatment components",
        "purpose": "Route and treat engine exhaust.",
        "look": "Observe visible damage, insecure mounting and signs of leakage; keep away from hot surfaces.",
        "why": "Leaks and heat can create hazards to occupants and nearby materials."
      },
      {
        "id": "tractor-7",
        "name": "Steps, catwalk and access surfaces",
        "purpose": "Provide access where designed.",
        "look": "Observe damage, secure mounting and slippery or obstructed surfaces.",
        "why": "Not every surface is a step or a safe standing platform."
      },
      {
        "id": "tractor-8",
        "name": "Headlights, signals, lamps, lenses and reflectors",
        "purpose": "Help the truck be seen and communicate movement.",
        "look": "Check required operation, proper color, mounting, cleanliness and damage; include both front and side equipment.",
        "why": "A dashboard indicator does not prove the exterior lamp is working."
      },
      {
        "id": "tractor-9",
        "name": "Mudflaps/splash guards and body panels",
        "purpose": "Provide required protection or enclosure where fitted.",
        "look": "Observe condition, secure attachment, clearance and applicable requirements.",
        "why": "Loose parts must not fall onto the road or interfere with tires."
      }
    ],
    "scenario": {
      "prompt": "The dashboard turn indicator works, but the exterior turn lamp is dark. Is the indicator enough?",
      "choices": [
        "Yes, it proves the lamp works",
        "No; verify the actual exterior light and resolve the defect"
      ],
      "answer": 1,
      "why": "The dashboard and exterior light are different observations. Required lighting must be checked on the vehicle."
    },
    "sources": [
      "wa",
      "ny",
      "equipment"
    ]
  },
  {
    "id": "coupling",
    "title": "Coupling and tractor–trailer connections",
    "where": "The connection area between tractor and semitrailer.",
    "focus": "Identify the exact coupling type and manufacturer’s procedure. This is component study, not a coupling/uncoupling sequence. A sound or tug resistance alone does not establish correct engagement. Keep the equipment secured and use the required complete verification.",
    "parts": [
      {
        "id": "coupling-1",
        "name": "Fifth-wheel mounting and support",
        "purpose": "Attach the coupling assembly to the tractor.",
        "look": "Observe mounting, hardware and visible structural condition.",
        "why": "An intact lock does not compensate for defective mounting."
      },
      {
        "id": "coupling-2",
        "name": "Fifth-wheel plate/skid surface",
        "purpose": "Support the trailer’s upper coupling surface.",
        "look": "Observe damage, contact/gap and the required lubrication or low-lube surface condition for this design.",
        "why": "Do not assume every fifth wheel should receive the same lubricant."
      },
      {
        "id": "coupling-3",
        "name": "Kingpin and trailer apron/upper plate",
        "purpose": "Provide the trailer-side coupling connection and support surface.",
        "look": "Learn how to inspect accessible damage and engagement with the correct locking mechanism.",
        "why": "For common fifth-wheel designs, locking engagement must be around the kingpin shank, not merely catch its head. Confirm the actual manufacturer’s verification method."
      },
      {
        "id": "coupling-4",
        "name": "Locking mechanism and release handle",
        "purpose": "Retain and release the coupled connection.",
        "look": "Verify the manufacturer’s required lock, handle and safety-device positions with a direct visual check.",
        "why": "Some improper couplings can resist a tug check."
      },
      {
        "id": "coupling-5",
        "name": "Sliding fifth-wheel locks, if fitted",
        "purpose": "Retain an adjustable fifth wheel in position.",
        "look": "Observe required pin/lock engagement and mounting condition by the approved method.",
        "why": "Do not operate a release or reposition the assembly from these study notes."
      },
      {
        "id": "coupling-6",
        "name": "Air couplers/glad hands and seals",
        "purpose": "Join compatible tractor and trailer air lines.",
        "look": "Observe correct connections, sealing, damage and leakage under the proper check.",
        "why": "Wrong or leaking connections can affect trailer braking."
      },
      {
        "id": "coupling-7",
        "name": "Electrical connector and cord",
        "purpose": "Carry lighting and other electrical connections to the trailer.",
        "look": "Observe seating, locking where fitted, damage and routing.",
        "why": "Connected appearance does not establish all trailer lighting/ABS functions."
      },
      {
        "id": "coupling-8",
        "name": "Line supports and clearance",
        "purpose": "Support connections through normal combination movement.",
        "look": "Observe chafing, pinching, dragging, stretch and inadequate clearance.",
        "why": "Lines must not become damaged as the combination changes angle."
      }
    ],
    "scenario": {
      "prompt": "You hear the fifth wheel close, but cannot verify the required lock engagement. What next?",
      "choices": [
        "Keep the equipment secured and obtain full correct verification",
        "Depart because the sound proves the coupling"
      ],
      "answer": 0,
      "why": "Sound is not sufficient verification. Use qualified instruction and the actual coupling manufacturer’s checks before departure."
    },
    "sources": [
      "wa",
      "fontaine",
      "equipment",
      "waGeneral"
    ]
  },
  {
    "id": "trailer",
    "title": "Trailer structure, landing gear and lighting",
    "where": "Both trailer sides, front and rear.",
    "focus": "Inspect the trailer as a vehicle in its own right. Door, load, support and access hazards depend on the trailer type. Do not open doors against a possible shifted load or enter an unsafe trailer to follow this study library.",
    "parts": [
      {
        "id": "trailer-1",
        "name": "Trailer frame and crossmembers",
        "purpose": "Support the trailer structure and load.",
        "look": "Observe visible cracks, damage, loose attachments and deterioration needing evaluation.",
        "why": "Structural condition affects load support and securement."
      },
      {
        "id": "trailer-2",
        "name": "Landing gear, braces, feet and crank",
        "purpose": "Support the trailer when properly uncoupled.",
        "look": "Observe damage, mounting, braces and approved travel/stow position; consider support-ground suitability when uncoupling.",
        "why": "Landing gear is not a substitute for the complete support and uncoupling procedure."
      },
      {
        "id": "trailer-3",
        "name": "Trailer body, front wall, sides and roof",
        "purpose": "Enclose or form the load-carrying body where fitted.",
        "look": "Observe visible damage, loose panels and conditions that may compromise containment or structure.",
        "why": "Trailer types differ; a van-body check does not cover every specialized trailer."
      },
      {
        "id": "trailer-4",
        "name": "Doors, hinges, latches and retainers",
        "purpose": "Close and secure trailer openings where fitted.",
        "look": "Observe damage, closure and secure attachment using the correct load/door procedure.",
        "why": "Shifted cargo can create a hazard when doors are opened."
      },
      {
        "id": "trailer-5",
        "name": "Rear impact guard, where required",
        "purpose": "Provide the required rear protective structure.",
        "look": "Observe presence, mounting and visible damage using applicable criteria.",
        "why": "Not every trailer has identical guard requirements or geometry."
      },
      {
        "id": "trailer-6",
        "name": "Reflective tape and reflectors",
        "purpose": "Improve vehicle conspicuity.",
        "look": "Observe required coverage, condition, color, cleanliness and attachment.",
        "why": "Reflective material and powered lamps perform different functions."
      },
      {
        "id": "trailer-7",
        "name": "Rear, side and clearance lamps",
        "purpose": "Communicate presence, braking and intended movement.",
        "look": "Verify applicable turn, brake, tail, marker and clearance lamps on the actual trailer.",
        "why": "A connected electrical cord alone does not establish light operation."
      },
      {
        "id": "trailer-8",
        "name": "Trailer ABS lamp, where fitted",
        "purpose": "Communicate applicable trailer ABS indications.",
        "look": "Know the required self-check and fault behavior for that trailer.",
        "why": "Do not dismiss an abnormal lamp because the tractor’s lamp looks normal."
      },
      {
        "id": "trailer-9",
        "name": "Spare tire/carrier and attached equipment, if fitted",
        "purpose": "Carry equipment outside the trailer body.",
        "look": "Observe secure attachment, damage and clearance.",
        "why": "A loose spare or attached item can become a roadway hazard."
      }
    ],
    "scenario": {
      "prompt": "The tractor’s lights work. Does that establish the trailer’s lights are working?",
      "choices": [
        "Yes, they share the same test",
        "No; check the required trailer lights on the actual trailer"
      ],
      "answer": 1,
      "why": "Tractor indications and connections do not establish every trailer lamp’s function."
    },
    "sources": [
      "wa",
      "ny",
      "equipment"
    ]
  },
  {
    "id": "traileraxles",
    "title": "Trailer running gear, cargo and closeout",
    "where": "Trailer axle area, load-related equipment and final review.",
    "focus": "Repeat applicable wheel, tire, suspension and brake checks at the trailer’s actual positions. Cargo and specialized equipment require their own complete procedures; this library does not calculate securement or authorize opening a sealed load.",
    "parts": [
      {
        "id": "traileraxles-1",
        "name": "Trailer axles and suspension",
        "purpose": "Support and locate the trailer’s running gear.",
        "look": "Apply the appropriate spring/air-bag, mount, shock, rod and visible axle-condition checks to this trailer.",
        "why": "Do not assume that inspecting the tractor covers trailer running gear."
      },
      {
        "id": "traileraxles-2",
        "name": "Trailer tires, wheels and hubs",
        "purpose": "Support and allow trailer movement.",
        "look": "Repeat the applicable tread, inflation, sidewall, dual spacing, fastener, rim and seal checks at all positions.",
        "why": "A trailer wheel defect may be out of sight from the cab."
      },
      {
        "id": "traileraxles-3",
        "name": "Trailer brake equipment",
        "purpose": "Provide trailer service/parking/emergency functions as fitted.",
        "look": "Identify lines, chambers, foundation brakes and ABS equipment; complete the correct trailer brake-function checks with qualified instruction.",
        "why": "A tug or tractor service-brake check alone is not the complete trailer brake inspection."
      },
      {
        "id": "traileraxles-4",
        "name": "Sliding tandem locks and rails, if fitted",
        "purpose": "Retain an adjustable trailer axle assembly.",
        "look": "Observe mounting, rails and required pin/lock engagement using the approved verification method.",
        "why": "No slide-release or adjustment procedure is supplied here."
      },
      {
        "id": "traileraxles-5",
        "name": "Load-supporting floor/deck and anchor points",
        "purpose": "Support cargo and securement equipment.",
        "look": "Observe accessible damage and suitability for the actual load when inspection/access is authorized.",
        "why": "Damaged support or anchor equipment can undermine load restraint."
      },
      {
        "id": "traileraxles-6",
        "name": "Cargo restraint devices",
        "purpose": "Control cargo movement when properly selected and applied.",
        "look": "Verify the required system’s condition and arrangement under the complete applicable securement procedure.",
        "why": "A door seal or closed trailer does not itself establish securement; load-specific rules matter."
      },
      {
        "id": "traileraxles-7",
        "name": "Specialized equipment, if fitted",
        "purpose": "Serve trailer-specific functions such as refrigeration, liftgates or tank systems.",
        "look": "Identify the additional required checks and obtain the appropriate equipment training.",
        "why": "This common van-style overview does not cover every special vehicle, cargo or endorsement."
      },
      {
        "id": "traileraxles-8",
        "name": "Final condition review and defect reporting",
        "purpose": "Bring the full inspection findings into the departure decision.",
        "look": "Resolve safety concerns, confirm the required checks are complete and report/document findings under applicable requirements.",
        "why": "A completed study mark is not a completed vehicle inspection or permission to depart."
      }
    ],
    "scenario": {
      "prompt": "You checked one axle during a test demonstration. Is that enough for the daily combination inspection?",
      "choices": [
        "No; inspect every required area and applicable axle on the actual combination",
        "Yes; one axle represents the entire truck and trailer"
      ],
      "answer": 0,
      "why": "A test’s limited demonstration and the complete operational inspection have different scopes. Do not leave other applicable equipment unchecked."
    },
    "sources": [
      "wa",
      "cargo",
      "records",
      "equipment"
    ]
  }
];
