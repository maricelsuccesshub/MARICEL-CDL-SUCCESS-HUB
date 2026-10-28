# Live Traffic Cameras · member trip tool

The member menu adds Trip Tools → Live Traffic Cameras. A prominent Home shortcut, a Plan My Route action and a camera button on selected-state parking resources lead to the same state selector. All 50 states and DC are represented. A two-letter state suffix in the entered destination (or current city if the destination is empty) preselects the camera state; unknown destinations clear a stale state. No route, precise location, user profile or API request is sent to a camera service automatically.

Sources open as normal external links. No camera images, videos, logos, streams or source code are copied or embedded. This is a directory of official/public-agency camera services, not a live feed aggregator or a representation that all feeds are functioning. Users may need to enable a camera layer and choose a highway / camera. External services may show video or periodically updated snapshots.

Delaware uses the exact supplied TrafficCameras tab. California QuickMap enables cameras, full closures, chain controls and traffic speed. Camera-list URLs were taken from the state services’ current navigation where available. Dedicated sources are used for Kentucky, Oregon, Rhode Island, West Virginia and Wyoming. Illinois uses Travel Midwest regional highway coverage. DC links to Maryland approaches. Maine / New Hampshire / Vermont share New England 511. Hawaii coverage varies by road and island. Texas has a native metro selector with 25 direct TxDOT links taken from TxDOT’s camera directory.

The original Coach Maricel winter check tells members to check timestamps, compare views along their road and read official closures / wind / commercial-vehicle restrictions. It does not infer ice-free roads, truck clearance or safe passage from camera images. The page says to use it while parked and links back to trip planning and parking.

## Verification · October 27, 2026

46 of 51 primary destinations returned HTTP 200 to automated reachability checks. MD / DC, MI, NJ and OK rejected automated HTTP retrieval with 403 responses; their official provenance and page descriptions were checked through other primary sources during the earlier state-map work. These responses do not establish that a user’s browser will be blocked. A 200 response does not prove that every JavaScript map, video or camera is working. Current individual camera status is deliberately not claimed.

Primary references:
- DelDOT map navigation: https://deldot.gov/map/index.shtml?tab=TrafficCameras
- Caltrans QuickMap documentation: https://quickmap.dot.ca.gov/faq
- TxDOT camera directory: https://www.txdot.gov/discover/live-traffic-cameras.html
- KYTC camera directory / map: https://transportation.ky.gov/Maps/Pages/All-Maps.aspx and https://maps.kytc.ky.gov/trafficcameras/
- TripCheck camera report: https://www.tripcheck.com/DynamicReports/Report/Cameras
- WYDOT statewide cameras: https://webcams.wyoroad.info/pls/Browse/WRR.Cameras
- Travel Midwest coverage: https://travelmidwest.com/Help/FAQs
- Original winter-check wording informed by basic hazard awareness: https://www.osha.gov/winter-weather/hazards

Tests verify all 51 entries, correct Delaware / California presets, valid route preselection and stale-selection clearing, Texas allowlisted links, regional notes, external-link safety and all four entry points. Full existing authentication, privacy, parking and backing-guide tests are run. Browser QA uses a synthetic local member only; temporary fixtures are removed before packaging.

## Primary camera destinations

| State | Camera service | Destination |
| --- | --- | --- |
| Alabama | ALGO camera browser | https://algotraffic.com/Cameras |
| Alaska | Alaska 511 · camera list | https://511.alaska.gov/cctv |
| Arizona | AZ 511 · camera list | https://az511.gov/cctv |
| Arkansas | IDrive Arkansas | https://www.idrivearkansas.com/ |
| California | QuickMap · Cameras on | https://quickmap.dot.ca.gov/?layers=cameras%2Cfull_closures%2Cchain_controls%2Cspeed |
| Colorado | COtrip | https://www.cotrip.org/ |
| Connecticut | CTroads · camera list | https://ctroads.org/cctv |
| Delaware | DelDOT · Traffic Cameras | https://deldot.gov/map/index.shtml?tab=TrafficCameras |
| District of Columbia | Maryland CHART · DC-area approaches | https://www.chart.maryland.gov/InteractiveMap/GetInteractiveMap |
| Florida | FL511 · camera list | https://fl511.com/cctv |
| Georgia | 511GA · camera list | https://511ga.org/cctv |
| Hawaii | GoAkamai cameras | https://www.goakamai.org/cameras/ |
| Idaho | Idaho 511 · camera list | https://511.idaho.gov/cctv |
| Illinois | Travel Midwest · regional cameras | https://travelmidwest.com/ |
| Indiana | INDOT Trafficwise | https://511in.org/ |
| Iowa | Iowa 511 | https://511ia.org/ |
| Kansas | KanDrive | https://www.kandrive.gov/ |
| Kentucky | KYTC Traffic Cameras | https://maps.kytc.ky.gov/trafficcameras/ |
| Louisiana | 511LA · camera list | https://511la.org/cctv |
| Maine | New England 511 · camera list | https://newengland511.org/cctv |
| Maryland | Maryland CHART | https://www.chart.maryland.gov/InteractiveMap/GetInteractiveMap |
| Massachusetts | Mass511 | https://mass511.com/ |
| Michigan | Mi Drive | https://mdotjboss.state.mi.us/MiDrive/map |
| Minnesota | Minnesota 511 | https://511mn.org/ |
| Mississippi | MDOTtraffic | https://www.mdottraffic.com/default.aspx?showMain=true |
| Missouri | MoDOT Traveler Map | https://traveler.modot.org/map/ |
| Montana | 511MT | https://www.511mt.net/ |
| Nebraska | Nebraska 511 | https://511.nebraska.gov/ |
| Nevada | Nevada 511 · camera list | https://www.nvroads.com/cctv |
| New Hampshire | New England 511 · camera list | https://newengland511.org/cctv |
| New Jersey | 511NJ | https://511nj.org/ |
| New Mexico | NMRoads | https://nmroads.com/ |
| New York | 511NY | https://511ny.org/ |
| North Carolina | DriveNC · camera list | https://drivenc.gov/cctv |
| North Dakota | ND Roads | https://travel.dot.nd.gov/ |
| Ohio | OHGO | https://ohgo.com/ |
| Oklahoma | OK Traffic | https://oktraffic.org/ |
| Oregon | TripCheck roadside cameras | https://www.tripcheck.com/DynamicReports/Report/Cameras |
| Pennsylvania | 511PA · camera list | https://511pa.com/cctv |
| Rhode Island | RIDOT regional cameras | https://www.dot.ri.gov/travel/index.php |
| South Carolina | 511SC | https://www.511sc.org/ |
| South Dakota | SD511 | https://sd511.org/ |
| Tennessee | TDOT SmartWay | https://smartway.tn.gov/traffic |
| Texas | TxDOT metro cameras | https://www.txdot.gov/discover/live-traffic-cameras.html |
| Utah | UDOT Traffic · camera list | https://udottraffic.utah.gov/cctv |
| Vermont | New England 511 · camera list | https://newengland511.org/cctv |
| Virginia | Virginia 511 | https://511.vdot.virginia.gov/ |
| Washington | WSDOT Travel Center Map | https://wsdot.com/Travel/Real-time/Map/ |
| West Virginia | WV511 camera list | https://wv511.org/CameraListing.aspx |
| Wisconsin | 511WI · camera list | https://511wi.gov/cctv |
| Wyoming | WYDOT statewide web cameras | https://webcams.wyoroad.info/pls/Browse/WRR.Cameras |
