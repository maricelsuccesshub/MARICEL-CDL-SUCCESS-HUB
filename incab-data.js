// Original Hub parked-study content. No school curriculum or official exam questions.
const incabUnits=[
  {
    "title": "Prepare the cab and yourself",
    "intro": "Learn the setup before starting an engine or operating controls. Use a clear, approved practice area and qualified instruction on the actual vehicle.",
    "cards": [
      {
        "name": "Safe entry and exit",
        "where": "Steps, grab handles, doorway and ground beside the cab.",
        "check": "Check for slippery or damaged steps, insecure handles and traffic or obstacles around the door. Face the cab and use three points of contact when climbing. Keep your hands available; do not jump down. Secure the vehicle before leaving the seat.",
        "why": "A fall or unplanned vehicle movement can happen before the inspection begins.",
        "say": "I identify the handholds, steps and clear ground, and enter or exit using three points of contact.",
        "visual": [
          "prepare",
          3
        ]
      },
      {
        "name": "Seat, safety belt and seating position",
        "where": "Driver\u2019s seat, seat mounts, belt webbing, anchor points and buckle.",
        "check": "Look for insecure mounting or damage. Inspect the belt for cuts or fraying, adjustment, proper latching and release; check retraction where fitted. Set the seat so you can reach the controls and see the instruments. Fasten the belt before vehicle movement.",
        "why": "A belt must fit and latch, not simply be present.",
        "say": "I check mounting, condition, adjustment and latch function, then fit the belt correctly.",
        "visual": [
          "cab",
          0
        ]
      },
      {
        "name": "Secure vehicle and clear the workspace",
        "where": "Parking controls, transmission selector, pedals, floor, doors and stored items.",
        "check": "Apply the parking brakes and select the manufacturer\u2019s safe starting position, usually neutral on a truck. Use chocks when the procedure requires them, especially before brake release. Identify actual controls; an automated manual may not have a Park position. Clear items that could interfere with pedals and secure loose objects.",
        "why": "A safe control state and clear pedals reduce unintended movement.",
        "say": "I verify roll prevention and the correct transmission position before starting; I will not release brakes just to identify a control.",
        "visual": [
          "cab",
          8
        ]
      }
    ],
    "decision": {
      "prompt": "A floor mat or loose item can interfere with the brake pedal. What comes first?",
      "choices": [
        "Start driving to see if it causes trouble",
        "Secure the vehicle and remove or resolve the obstruction before operation"
      ],
      "answer": 1,
      "why": "A clear pedal area is part of preparing the cab. Do not test a suspected obstruction in motion."
    }
  },
  {
    "title": "Safe engine start and instrument readings",
    "intro": "Read the vehicle\u2019s starting procedure first. Use the required clutch, transmission and interlock procedure; do not bypass an interlock or assume every dashboard has the same range.",
    "cards": [
      {
        "name": "Safe engine start",
        "where": "Ignition/start control, transmission indication and clutch if fitted.",
        "check": "With the vehicle secured, confirm the required transmission position. On a conventional manual, use the prescribed clutch procedure before cranking and release it as instructed after the engine stabilizes. For automated transmissions and push-button systems, use their own procedure. Observe startup warnings and listen for unusual sounds.",
        "why": "Starting in the wrong state can cause movement or equipment damage.",
        "say": "I verify the starting conditions and follow this vehicle\u2019s starting instructions while watching the instruments.",
        "visual": [
          "cab",
          8
        ]
      },
      {
        "name": "Engine oil pressure",
        "where": "Oil-pressure gauge or warning indication; this is not the oil-level dipstick.",
        "check": "After starting, verify pressure rises promptly to the manufacturer\u2019s normal range and the appropriate warning clears. If pressure is absent, abnormal or the warning persists, follow the shutdown/defect procedure promptly; do not keep running the engine hoping it will improve.",
        "why": "Engine oil pressure supplies lubrication. A correct oil level does not prove adequate pressure.",
        "say": "I identify the oil-pressure reading and compare the actual indication with this engine\u2019s specification.",
        "visual": [
          "cab",
          7
        ]
      },
      {
        "name": "Coolant and oil temperature",
        "where": "Temperature display, gauges and associated warning lights, where fitted.",
        "check": "Observe the expected progression from cold toward the normal operating range. A cold engine need not instantly show a warmed-up reading. Watch for abnormal high temperature, warnings or an implausible indication. Follow the vehicle\u2019s response procedure. Never open a hot or pressurized coolant cap.",
        "why": "Temperature readings help reveal overheating or sensing problems.",
        "say": "I know which temperature is displayed and what range and warning behavior this vehicle requires.",
        "visual": [
          "cab",
          7
        ]
      },
      {
        "name": "Charging system",
        "where": "Voltmeter, ammeter, battery/charging light or electronic charging display.",
        "check": "Verify the instrument or indicator shows the expected charging behavior for this vehicle. Compare with manufacturer criteria; do not invent one voltage or ammeter position for every truck. A persistent charging warning or abnormal reading needs evaluation.",
        "why": "A running engine does not prove the electrical charging system is working.",
        "say": "I identify the charging indication and compare it with the specified operating behavior.",
        "visual": [
          "cab",
          7
        ]
      },
      {
        "name": "Air pressure: primary and secondary systems",
        "where": "Both air-system readings on separate gauges, a dual needle gauge or electronic display.",
        "check": "Identify each reading and monitor air build-up and governor operation under the proper procedure. Do not treat one normal reading as proof both systems work. Use the Air Brake Check Guide for the separately explained leakage, warning, automatic-response and holding/stopping checks.",
        "why": "Stored air and functioning controls are essential; normal gauge readings alone do not verify every wheel brake.",
        "say": "I identify both system readings and use the correct pressure/time criteria for this vehicle and test.",
        "visual": [
          "cab",
          7
        ]
      }
    ],
    "decision": {
      "prompt": "The oil-pressure warning remains on after startup. Should you simply let the engine warm up?",
      "choices": [
        "No; follow the vehicle\u2019s prompt shutdown and defect-response procedure",
        "Yes; a warning is normal for the entire warm-up"
      ],
      "answer": 0,
      "why": "Do not confuse temperature warm-up with establishing oil pressure. A persistent oil-pressure warning needs prompt action under the actual engine procedure."
    }
  },
  {
    "title": "Visibility and cab climate",
    "intro": "Identify the part, inspect its condition, then verify its function. Adjust visibility devices while stationary.",
    "cards": [
      {
        "name": "Windshield and other glazing",
        "where": "Windshield and relevant cab windows.",
        "check": "Check cleanliness, damage, obstructions and prohibited stickers in the viewing area using applicable criteria. Clean or resolve the problem before operation. Do not assume a small obstruction is harmless because you can see around it.",
        "why": "The view must support noticing traffic, pedestrians and changing conditions.",
        "say": "I inspect the glass and required viewing areas for condition, cleanliness and obstructions.",
        "visual": [
          "cab",
          1
        ]
      },
      {
        "name": "Mirrors and traffic-monitoring cameras",
        "where": "Side mirrors, mirror mounts and any camera lenses/displays fitted.",
        "check": "Verify clean surfaces, secure mounting, condition and adjustment from the driving position. Check camera image/display function where fitted. Understand blind areas and limitations; a working screen does not remove them.",
        "why": "A clear view behind and beside the combination is needed, but no mirror or camera shows everything.",
        "say": "I check mounting, condition, cleanliness, adjustment and fitted display function.",
        "visual": [
          "cab",
          2
        ]
      },
      {
        "name": "Wipers and windshield washers",
        "where": "Wiper arms, blades, washer controls and spray coverage.",
        "check": "Inspect secure arms and sound blades; demonstrate smooth wiper operation and effective washer delivery as equipped. Check washer supply using the proper access procedure. Do not run blades across an obstructed or dry windshield contrary to instructions.",
        "why": "The windshield may need immediate cleaning during bad weather.",
        "say": "I check the arms and blades, then show the wipers and washers function correctly.",
        "visual": [
          "cab",
          3
        ]
      },
      {
        "name": "Heater and defroster",
        "where": "Cab climate controls and windshield airflow outlets.",
        "check": "Operate the appropriate controls and verify airflow and function, allowing for the equipment\u2019s operating conditions. Locate the windshield-defrost setting rather than assuming any warm cab airflow reaches the glass.",
        "why": "Comfort airflow and a clear windshield are different checks.",
        "say": "I identify the defroster and heater controls and verify their required operation.",
        "visual": [
          "cab",
          4
        ]
      }
    ],
    "decision": {
      "prompt": "A camera screen works, but a mirror is dirty or insecure. Is the visibility check complete?",
      "choices": [
        "Yes; the screen replaces every other check",
        "No; check all fitted and required visibility equipment and resolve the defect"
      ],
      "answer": 1,
      "why": "A working camera does not establish the condition of other required equipment or remove blind areas."
    }
  },
  {
    "title": "Controls, lamps and warning systems",
    "intro": "A control must be identified and checked correctly. An illuminated dashboard symbol alone is not proof the corresponding outside lamp works.",
    "cards": [
      {
        "name": "Steering wheel, column and pedal controls",
        "where": "Steering wheel/column; accelerator, clutch if fitted and brake controls.",
        "check": "Check mounting, damage, looseness, sticking and improper settings using the actual procedure. Learn the prescribed steering-play method and allowable value for the system; do not apply one guessed tolerance to every wheel diameter or steering design. Do not press pedals or change drivetrain settings at random.",
        "why": "A usable control requires proper response and freedom from interference.",
        "say": "I identify the controls, inspect their condition and use the specified function/play check with instruction.",
        "visual": [
          "cab",
          5
        ]
      },
      {
        "name": "Air and electric horns",
        "where": "Fitted horn switches, pull cord or steering-wheel control.",
        "check": "Identify and demonstrate the fitted horns in an appropriate clear area. Confirm they sound; do not sound them unnecessarily near people. A working electric horn does not automatically establish an installed air horn works.",
        "why": "A horn provides a warning, not a substitute for observation or braking.",
        "say": "I identify and check the required fitted horn functions.",
        "visual": [
          "cab",
          6
        ]
      },
      {
        "name": "Lighting switches and dashboard indicators",
        "where": "Turn-signal, hazard, high/low beam and other required light controls.",
        "check": "Operate the corresponding switches and verify left/right turn, four-way and high-beam indicators. Inspect required exterior lamp operation separately under a secured-vehicle procedure; include brake, marker/clearance and other applicable lights. Never leave the vehicle unsecured to look at a lamp.",
        "why": "Switch position or a flashing arrow does not prove an exterior bulb and circuit work.",
        "say": "I demonstrate the dash indicators, then verify the corresponding exterior functions through the proper inspection process.",
        "visual": [
          "tractor",
          7
        ]
      },
      {
        "name": "ABS, engine and emissions indicators",
        "where": "ABS lamp(s), engine warning/stop lamps, and DEF/DPF indications where fitted.",
        "check": "Identify each symbol and its specified startup/self-check behavior. Some systems clear certain ABS indications only under specified conditions; learn those conditions without driving merely to dismiss an unexplained warning. A persistent or abnormal indication needs the required evaluation. Identify low air separately from ABS. Do not assume every warning should disappear immediately, and do not start a regeneration procedure from this study card.",
        "why": "Different warnings have different meanings and responses. ABS and low-air warnings do not indicate the same condition.",
        "say": "I identify the warning, know its expected behavior and follow the correct response if the indication is abnormal.",
        "visual": [
          "brakes",
          9
        ]
      }
    ],
    "decision": {
      "prompt": "The turn arrow flashes on the dash. Does that prove the trailer turn lamp works?",
      "choices": [
        "No; the exterior function must be checked separately",
        "Yes; the dash arrow proves every lamp in the combination works"
      ],
      "answer": 0,
      "why": "The dash indicator and exterior lamp check establish different things. Verify actual outside operation while the vehicle is properly secured."
    }
  },
  {
    "title": "Emergency equipment: locate and evaluate",
    "intro": "Learn where the equipment is stored, whether it is accessible and whether it suits the operation. Do not open electrical panels or handle flame devices without training.",
    "cards": [
      {
        "name": "Fire extinguisher",
        "where": "Secured extinguisher storage and its label/charge indicator.",
        "check": "Check suitable rating, charge indication, visible condition, secure mounting and access. Under the cited federal rule, a non-hazardous-materials power unit needs at least one 5 B:C extinguisher or two rated at least 4 B:C each; a power unit carrying hazardous materials requiring placards needs at least 10 B:C. Confirm applicability and any additional requirements.",
        "why": "A loose, empty, inaccessible or incorrectly rated unit is not ready for its intended use.",
        "say": "I locate the extinguisher and verify its rating, charge, condition, accessibility and mounting.",
        "visual": [
          "cab",
          9
        ]
      },
      {
        "name": "Emergency warning devices",
        "where": "Approved warning-device storage, often a case of reflective triangles.",
        "check": "For the reflective-triangle option in the current federal rule, check three compliant bidirectional triangles are present and usable. Confirm the actual operation\u2019s required devices. Fusees are flame-producing road-warning devices with restrictions; do not substitute electrical fuses, ordinary reflectors or unapproved lights. This is an inventory/condition check, not a roadside placement demonstration.",
        "why": "The right devices must be available before a breakdown.",
        "say": "I identify the required warning devices, check the number and condition, and know where they are stored.",
        "visual": [
          "prepare",
          0
        ]
      },
      {
        "name": "Electrical fuses, circuit breakers and other required items",
        "where": "Vehicle electrical protection information and approved spare-equipment storage.",
        "check": "Where the current state checklist or vehicle procedure calls for it, identify appropriate spare electrical fuses or the use of circuit breakers. Do not claim every truck must carry spare electrical fuses under the current federal emergency-equipment rule. Know any additional equipment required for the operation. Never bypass a fuse or install a higher rating to stop it blowing.",
        "why": "Electrical fuses protect circuits; fusees are different road-warning devices.",
        "say": "I identify this vehicle\u2019s electrical protection and any spare items required by its current checklist or procedure.",
        "visual": [
          "tractor",
          2
        ]
      }
    ],
    "decision": {
      "prompt": "Are electrical fuses and roadside fusees the same item?",
      "choices": [
        "No; electrical fuses protect circuits, while fusees are flame-producing warning devices",
        "Yes; either item counts as a reflective warning triangle"
      ],
      "answer": 0,
      "why": "Similar spelling does not mean the same function. Check the required equipment for the operation and current test format."
    }
  },
  {
    "title": "Connect the brake checks and close the inspection",
    "intro": "The cab study leads into required brake demonstrations and the complete vehicle inspection; it does not replace either.",
    "cards": [
      {
        "name": "Identify the brake system and open the correct guide",
        "where": "Foot/service brake, parking control and applicable trailer supply/parking controls.",
        "check": "Identify whether this vehicle uses full air, hydraulic or another system. Air-brake checks must be explained and performed with the correct setup and limits; the cited CA/WA modernized format treats an incorrect required air-brake check as automatic inspection-test failure. Use the dedicated Air Brake Check Guide. Never apply an air-system depletion procedure to a hydraulic system.",
        "why": "Different systems need different checks and control states.",
        "say": "I identify the system and use its required procedure rather than a memorized universal script.",
        "visual": [
          "cab",
          8
        ]
      },
      {
        "name": "Parking, trailer holding and service stopping checks",
        "where": "Verified clear practice area and actual brake controls.",
        "check": "Use qualified instruction for any brake release or movement. Restore normal air pressure after depletion and resolve findings before moving. Learn the separate tractor/trailer holding checks and controlled service stopping check in the Air Brake Check Guide. Wear the belt, manage chocks under controlled conditions and do not count pulling against chocks as proof the brakes hold.",
        "why": "These are controlled function checks, not permission to enter traffic.",
        "say": "I establish the safe setup and verify each applicable holding/stopping function using the correct procedure.",
        "visual": [
          "cab",
          8
        ]
      },
      {
        "name": "Explain findings and complete the required inspection",
        "where": "Your observations, defect-reporting procedure and remaining vehicle areas.",
        "check": "Describe what you actually observed. Secure the vehicle and obtain qualified resolution for an unsafe or uncertain result before driving. Continue all applicable outside, connection, trailer and special-equipment checks. Know the current test format and explain items as directed; ask if instructions are unclear.",
        "why": "Finishing the cab or answering a quiz does not establish the entire vehicle is fit for travel.",
        "say": "I identify the item, explain the check, state the actual result and respond appropriately to any defect.",
        "visual": [
          "prepare",
          4
        ]
      }
    ],
    "decision": {
      "prompt": "You completed the cab study and the screen decisions. Is the truck now cleared to depart?",
      "choices": [
        "Yes; finishing this page completes the actual inspection",
        "No; actual checks, defect resolution and the remaining required vehicle inspection still apply"
      ],
      "answer": 1,
      "why": "Hub study is not a completed inspection, defect clearance, practical test or permission to depart."
    }
  }
];
