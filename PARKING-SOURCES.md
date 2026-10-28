# Direct state travel maps and official parking sources

The state selector now opens a travel map directly, rather than an agency homepage or the federal agency directory. All 50 states plus DC are represented. California opens Caltrans QuickMap with `rest_areas`, `full_closures`, `lane_closures`, and `speed` enabled. No fixed Southern California center is imposed; the driver can search any California city. Illinois uses IDOT’s Rest Areas map configuration. Other maps have a short layer / coverage instruction; parking layers are not assumed to be present or enabled on every map.

Coverage exceptions are visible beside the buttons: GoAkamai covers Oʻahu, not all Hawaii islands; DC uses the nearby Maryland CHART regional map, not a DC overnight-parking database. Maine, New Hampshire and Vermont share New England 511. Rhode Island uses RIDOT’s embedded Waze traffic map. These are not all Caltrans products and are not all truck-parking maps.

Maps supplement the official Love’s, Pilot/Flying J and TA/Petro locators. CAT Scale remains service-only. A traffic marker, open rest area, or operator listing does not confirm overnight truck access or a vacant space. Generic keyword parking searches and unverified member reports are excluded from official map results. No schema, member records or authentication changes were made.

## Source verification · October 27, 2026

Primary provenance: FHWA’s current National Traffic and Road Closure Information state pages (https://highways.dot.gov/traffic-info), direct state map pages, and state transportation guidance. Updated services were checked against INDOT Trafficwise, KanDrive, NDDOT ND Roads, SCDOT 511, TxDOT DriveTexas and WYDOT documentation. California’s Rest Areas layer ID was verified from its current public app bundle and its rendered map displayed Rest Areas markers after opening the parameterized URL. Illinois’s RWCconfig link comes from the official Getting Around Illinois Rest Areas navigation. HTTP success is a reachability check, not a guarantee of all JavaScript features or live parking data. Some government endpoints reject automated HTTP retrieval; their official provenance and public page content were separately checked where available.

Regression checks cover all 51 direct map entries, California enabled layers, Illinois rest-area configuration, regional limitations, no FHWA exit redirects / generic homepages, category separation, route-to-finder, escaping and preserved authentication / training features. External maps can change independently of this app.

## Direct map inventory

| State | Service | Direct map |
| --- | --- | --- |
| Alabama | ALGO Traffic | https://algotraffic.com/ |
| Alaska | Alaska 511 | https://511.alaska.gov/ |
| Arizona | AZ 511 | https://az511.gov/ |
| Arkansas | IDrive Arkansas | https://www.idrivearkansas.com/ |
| California | Caltrans QuickMap · Rest Areas on | https://quickmap.dot.ca.gov/?layers=rest_areas%2Cfull_closures%2Clane_closures%2Cspeed |
| Colorado | COtrip | https://www.cotrip.org/ |
| Connecticut | CTroads | https://ctroads.org/ |
| Delaware | DelDOT Live Map | https://deldot.gov/map/ |
| District of Columbia | CHART · nearby Maryland / DC region | https://www.chart.maryland.gov/InteractiveMap/GetInteractiveMap |
| Florida | FL511 | https://fl511.com/ |
| Georgia | 511GA | https://511ga.org/ |
| Hawaii | GoAkamai · Oʻahu | https://www.goakamai.org/ |
| Idaho | Idaho 511 | https://511.idaho.gov/ |
| Illinois | Illinois Rest Areas Map | https://www.gettingaroundillinois.com/MapViewer/?config=RWCconfig.json |
| Indiana | INDOT Trafficwise | https://511in.org/ |
| Iowa | Iowa 511 | https://511ia.org/ |
| Kansas | KanDrive | https://www.kandrive.gov/ |
| Kentucky | GoKY | https://goky.ky.gov/ |
| Louisiana | 511LA | https://511la.org/ |
| Maine | New England 511 · Maine | https://newengland511.org/ |
| Maryland | Maryland CHART | https://www.chart.maryland.gov/InteractiveMap/GetInteractiveMap |
| Massachusetts | Mass511 | https://mass511.com/ |
| Michigan | Mi Drive | https://mdotjboss.state.mi.us/MiDrive/map |
| Minnesota | Minnesota 511 | https://511mn.org/ |
| Mississippi | MDOTtraffic | https://www.mdottraffic.com/default.aspx?showMain=true |
| Missouri | MoDOT Traveler Map | https://traveler.modot.org/map/ |
| Montana | 511MT | https://www.511mt.net/ |
| Nebraska | Nebraska 511 | https://511.nebraska.gov/ |
| Nevada | Nevada 511 | https://www.nvroads.com/ |
| New Hampshire | New England 511 · New Hampshire | https://newengland511.org/ |
| New Jersey | 511NJ | https://511nj.org/ |
| New Mexico | NMRoads | https://nmroads.com/ |
| New York | 511NY | https://511ny.org/ |
| North Carolina | DriveNC | https://drivenc.gov/ |
| North Dakota | ND Roads | https://travel.dot.nd.gov/ |
| Ohio | OHGO | https://ohgo.com/ |
| Oklahoma | OK Traffic | https://oktraffic.org/ |
| Oregon | TripCheck | https://www.tripcheck.com/ |
| Pennsylvania | 511PA | https://511pa.com/ |
| Rhode Island | RIDOT / Waze Traffic Map | https://dot.ri.gov/travel/wazetravel.php |
| South Carolina | 511SC | https://www.511sc.org/ |
| South Dakota | SD511 | https://sd511.org/ |
| Tennessee | TDOT SmartWay | https://smartway.tn.gov/traffic |
| Texas | DriveTexas | https://drivetexas.org/ |
| Utah | UDOT Traffic | https://udottraffic.utah.gov/ |
| Vermont | New England 511 · Vermont | https://newengland511.org/ |
| Virginia | Virginia 511 | https://511.vdot.virginia.gov/ |
| Washington | WSDOT Travel Center Map | https://wsdot.com/Travel/Real-time/Map/ |
| West Virginia | WV511 | https://wv511.org/ |
| Wisconsin | 511WI | https://511wi.gov/ |
| Wyoming | WYDOT 511 Map | https://map.wyoroad.info/511-map/ |
