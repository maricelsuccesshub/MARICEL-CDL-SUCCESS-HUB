# Low Bridges & Clearance Checks

Added under Trip Tools and as a Plan My Route shortcut. The destination’s two-letter state can preselect the tool; no route or vehicle data is sent by this shortcut. Users choose official external resources. This is not an internal bridge inventory, height comparison, route certification, GPS or safe-to-pass calculator. No bridge numbers or heights are cached or copied into a proprietary database.

All 50 states and DC are selectable. The beta has nine source-specific entries, with explicit distinctions between clearance data and advisories:

| State | Primary source | Scope / steps |
|---|---|---|
| CA | https://dot.ca.gov/programs/traffic-operations/legal-truck-access/height | State-route list (14 feet or less), location map links; excludes local roads underneath state routes. |
| TX | https://www.dot.state.tx.us/apps/statewide_mapping/statewideplanningmap.html | Enable Vertical Clearance overlay. Secondary district lists at https://www.txdmv.gov/motor-carriers/low-clearance cover 14 feet or less. |
| WA | https://wsdot.wa.gov/data/tools/bridgeclearance/ | Agency height/route tool; local roads beneath state routes excluded. |
| IN | https://experience.arcgis.com/experience/805e4b21863b412f8200d70a7fcca18b | Official map linked by https://www.in.gov/indot/travel-conditions/restrictionsclosings ; direction-specific structure data, not local roads. |
| IL | https://www.gettingaroundillinois.com/MapViewer/?config=OBSconfig.json | Official Obstructions/Restrictions map; Vertical Clearance layer. |
| OR | https://www.oregon.gov/odot/Forms/Motcarr/8119.pdf | ODOT Route Map 3, linked by https://www.oregon.gov/odot/mct/pages/oregon-route-maps.aspx ; permit-height reference, not automatic permission. |
| PA | https://511pa.com/ | PennDOT Bridges → Low Bridges; excludes PA Turnpike roadways. APRAS required for relevant permit routing. |
| MA | https://truckcheck.mass.gov/height | Selected MassDOT tunnels and routes only, not every bridge. |
| NY | https://www.dot.ny.gov/programs/brochures/parkway-brochure | Parkway low-bridge prohibition advisory, explicitly not a statewide clearance inventory. NYC commercial-road guidance separately linked. |

For other states, no clearance-specific source has been verified in this beta. The UI says so; a general state road map is labeled as conditions only, never clearance proof. The FHWA state permit/routing directory (https://ops.fhwa.dot.gov/freight/sw/permit_report/) is provided for follow-up, not as a bridge map. Its older state links/contact details may require current-agency verification. Do not claim complete national clearance coverage.

Preparation wording is original to Maricel CDL Success Hub. Actual vehicle/load height is to be confirmed during pre-trip using appropriate procedures and qualified assistance. Pre-trip does not certify a structure’s available clearance. Road/direction/lane, ramps, local streets, detours and changing conditions require separate verification. No instruction to climb onto equipment, rely on a standard trailer height, subtract a universal margin, or proceed on the strength of an app result is included.

Sources reviewed October 28, 2026 through official agency pages. External mapping applications may require JavaScript, agency notices, layer selection, or a different supported browser. They control freshness and availability. The Hub does not embed or copy these maps. Check source notices and current route restrictions every trip.

Validation: 43 site tests pass, including source count/type, fallback wording, pre-trip wording, unknown selector safety, and resetting a stale route state. Desktop and 390px fixture checks cover rendering and state selection. Production database and Community permissions unchanged.
