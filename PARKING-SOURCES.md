# Official public-access parking sources

Parking and service discovery now uses a fixed set of official operator and government directory links. Generic Google Maps keyword parking searches, and the misleading claim of searching along a calculated route, were removed. Directions to a user-entered destination remain separate.

The state selector includes all 50 states and Washington, D.C., with agency URLs sourced from the Federal Highway Administration's State Transportation Web Sites directory: https://www.fhwa.dot.gov/about/webstate.cfm . Nine states also have deeper official rest-area links. Every state has the federal directory as a fallback if its agency URL changes. The agency list is a directory, not an inventory of parking spaces.

Truck-stop operators: Love's Travel Stops, Pilot/Flying J, TA/Petro. Scales use the official CAT Scale locator and are marked service-only. Operator results must be filtered to travel centers with truck-parking amenities; the app does not claim all branches have parking or that any specific site is open, permits overnight stays, has vacancy, or is safe. The app does not fetch location results or rank nearby stops. The user enters their reminder city in the chosen operator's locator.

Member Safe Haven reports are preserved under a collapsed, unverified suggestions panel, separate from official sources. No database or auth changes were made.

Validation: nine parking tests cover all 51 entries, state resources and fallback links, category separation, routing to the official finder, escaping, and removal of keyword searches. Existing authentication/training regression checks pass. Desktop route-to-parking and state selection, plus a 375px phone layout, were checked with synthetic local data; no fixtures are included in deployment.

Colorado and Texas agency links use direct HTTPS CDOT/TxDOT addresses, bypassing FHWA exit redirects. Regression coverage rejects exit.cfm URLs in every state entry.
