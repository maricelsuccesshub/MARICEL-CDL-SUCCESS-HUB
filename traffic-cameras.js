// Official camera destinations; no streams, snapshots or third-party assets are copied or embedded.
const trafficCameraSources=[
  {
    "code": "AL",
    "name": "Alabama",
    "service": "ALGO camera browser",
    "url": "https://algotraffic.com/Cameras",
    "roadUrl": "https://algotraffic.com/",
    "kind": "Camera list / map",
    "hint": "Choose a region or highway, then a traffic camera."
  },
  {
    "code": "AK",
    "name": "Alaska",
    "service": "Alaska 511 · camera list",
    "url": "https://511.alaska.gov/cctv",
    "roadUrl": "https://511.alaska.gov/",
    "kind": "Camera list",
    "hint": "Use the official camera list’s search or filters to find your highway, then open a camera."
  },
  {
    "code": "AZ",
    "name": "Arizona",
    "service": "AZ 511 · camera list",
    "url": "https://az511.gov/cctv",
    "roadUrl": "https://az511.gov/",
    "kind": "Camera list",
    "hint": "Use the official camera list’s search or filters to find your highway, then open a camera."
  },
  {
    "code": "AR",
    "name": "Arkansas",
    "service": "IDrive Arkansas",
    "url": "https://www.idrivearkansas.com/",
    "roadUrl": "https://www.idrivearkansas.com/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "CA",
    "name": "California",
    "service": "QuickMap · Cameras on",
    "url": "https://quickmap.dot.ca.gov/?layers=cameras%2Cfull_closures%2Cchain_controls%2Cspeed",
    "roadUrl": "https://quickmap.dot.ca.gov/?layers=rest_areas%2Cfull_closures%2Clane_closures%2Cspeed",
    "kind": "Camera list / map",
    "hint": "Camera, full-closure, chain-control and traffic-speed layers are enabled. Search a city or highway, then tap a camera."
  },
  {
    "code": "CO",
    "name": "Colorado",
    "service": "COtrip",
    "url": "https://www.cotrip.org/",
    "roadUrl": "https://www.cotrip.org/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "CT",
    "name": "Connecticut",
    "service": "CTroads · camera list",
    "url": "https://ctroads.org/cctv",
    "roadUrl": "https://ctroads.org/",
    "kind": "Camera list",
    "hint": "Use the official camera list’s search or filters to find your highway, then open a camera."
  },
  {
    "code": "DE",
    "name": "Delaware",
    "service": "DelDOT · Traffic Cameras",
    "url": "https://deldot.gov/map/index.shtml?tab=TrafficCameras",
    "roadUrl": "https://deldot.gov/map/",
    "kind": "Camera list / map",
    "hint": "Opens Delaware’s Traffic Cameras tab directly. Select a camera on the map."
  },
  {
    "code": "DC",
    "name": "District of Columbia",
    "service": "Maryland CHART · DC-area approaches",
    "url": "https://www.chart.maryland.gov/InteractiveMap/GetInteractiveMap",
    "roadUrl": "https://www.chart.maryland.gov/InteractiveMap/GetInteractiveMap",
    "kind": "Regional camera map",
    "hint": "Regional alternative showing Maryland approaches to DC, not complete DC street coverage. Enable the camera layer and choose a location."
  },
  {
    "code": "FL",
    "name": "Florida",
    "service": "FL511 · camera list",
    "url": "https://fl511.com/cctv",
    "roadUrl": "https://fl511.com/",
    "kind": "Camera list",
    "hint": "Use the official camera list’s search or filters to find your highway, then open a camera."
  },
  {
    "code": "GA",
    "name": "Georgia",
    "service": "511GA · camera list",
    "url": "https://511ga.org/cctv",
    "roadUrl": "https://511ga.org/",
    "kind": "Camera list",
    "hint": "Use the official camera list’s search or filters to find your highway, then open a camera."
  },
  {
    "code": "HI",
    "name": "Hawaii",
    "service": "GoAkamai cameras",
    "url": "https://www.goakamai.org/cameras/",
    "roadUrl": "https://www.goakamai.org/",
    "kind": "Camera list / map",
    "hint": "Start with GoAkamai’s camera view. Coverage varies by island and road; do not assume a camera is available everywhere."
  },
  {
    "code": "ID",
    "name": "Idaho",
    "service": "Idaho 511 · camera list",
    "url": "https://511.idaho.gov/cctv",
    "roadUrl": "https://511.idaho.gov/",
    "kind": "Camera list",
    "hint": "Use the official camera list’s search or filters to find your highway, then open a camera."
  },
  {
    "code": "IL",
    "name": "Illinois",
    "service": "Travel Midwest · regional cameras",
    "url": "https://travelmidwest.com/",
    "roadUrl": "https://travelmidwest.com/",
    "kind": "Camera list / map",
    "hint": "Regional expressway, tollway and limited-access highway coverage, not every Illinois road. Enable Cameras on the map and choose a location."
  },
  {
    "code": "IN",
    "name": "Indiana",
    "service": "INDOT Trafficwise",
    "url": "https://511in.org/",
    "roadUrl": "https://511in.org/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "IA",
    "name": "Iowa",
    "service": "Iowa 511",
    "url": "https://511ia.org/",
    "roadUrl": "https://511ia.org/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "KS",
    "name": "Kansas",
    "service": "KanDrive",
    "url": "https://www.kandrive.gov/",
    "roadUrl": "https://www.kandrive.gov/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "KY",
    "name": "Kentucky",
    "service": "KYTC Traffic Cameras",
    "url": "https://maps.kytc.ky.gov/trafficcameras/",
    "roadUrl": "https://goky.ky.gov/",
    "kind": "Camera list / map",
    "hint": "Opens the dedicated camera map. Select a camera for a periodically refreshed snapshot."
  },
  {
    "code": "LA",
    "name": "Louisiana",
    "service": "511LA · camera list",
    "url": "https://511la.org/cctv",
    "roadUrl": "https://511la.org/",
    "kind": "Camera list",
    "hint": "Use the official camera list’s search or filters to find your highway, then open a camera."
  },
  {
    "code": "ME",
    "name": "Maine",
    "service": "New England 511 · camera list",
    "url": "https://newengland511.org/cctv",
    "roadUrl": "https://newengland511.org/",
    "kind": "Camera list",
    "hint": "Shared New England 511 camera list. Filter or search for Maine and your highway; cameras from neighboring states may also appear."
  },
  {
    "code": "MD",
    "name": "Maryland",
    "service": "Maryland CHART",
    "url": "https://www.chart.maryland.gov/InteractiveMap/GetInteractiveMap",
    "roadUrl": "https://www.chart.maryland.gov/InteractiveMap/GetInteractiveMap",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "MA",
    "name": "Massachusetts",
    "service": "Mass511",
    "url": "https://mass511.com/",
    "roadUrl": "https://mass511.com/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "MI",
    "name": "Michigan",
    "service": "Mi Drive",
    "url": "https://mdotjboss.state.mi.us/MiDrive/map",
    "roadUrl": "https://mdotjboss.state.mi.us/MiDrive/map",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "MN",
    "name": "Minnesota",
    "service": "Minnesota 511",
    "url": "https://511mn.org/",
    "roadUrl": "https://511mn.org/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "MS",
    "name": "Mississippi",
    "service": "MDOTtraffic",
    "url": "https://www.mdottraffic.com/default.aspx?showMain=true",
    "roadUrl": "https://www.mdottraffic.com/default.aspx?showMain=true",
    "kind": "Camera map",
    "hint": "Select Camera List or enable Cameras in Map Legend, then choose your highway or location."
  },
  {
    "code": "MO",
    "name": "Missouri",
    "service": "MoDOT Traveler Map",
    "url": "https://traveler.modot.org/map/",
    "roadUrl": "https://traveler.modot.org/map/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "MT",
    "name": "Montana",
    "service": "511MT",
    "url": "https://www.511mt.net/",
    "roadUrl": "https://www.511mt.net/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "NE",
    "name": "Nebraska",
    "service": "Nebraska 511",
    "url": "https://511.nebraska.gov/",
    "roadUrl": "https://511.nebraska.gov/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "NV",
    "name": "Nevada",
    "service": "Nevada 511 · camera list",
    "url": "https://www.nvroads.com/cctv",
    "roadUrl": "https://www.nvroads.com/",
    "kind": "Camera list",
    "hint": "Use the official camera list’s search or filters to find your highway, then open a camera."
  },
  {
    "code": "NH",
    "name": "New Hampshire",
    "service": "New England 511 · camera list",
    "url": "https://newengland511.org/cctv",
    "roadUrl": "https://newengland511.org/",
    "kind": "Camera list",
    "hint": "Shared New England 511 camera list. Filter or search for New Hampshire and your highway; cameras from neighboring states may also appear."
  },
  {
    "code": "NJ",
    "name": "New Jersey",
    "service": "511NJ",
    "url": "https://511nj.org/",
    "roadUrl": "https://511nj.org/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "NM",
    "name": "New Mexico",
    "service": "NMRoads",
    "url": "https://nmroads.com/",
    "roadUrl": "https://nmroads.com/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "NY",
    "name": "New York",
    "service": "511NY",
    "url": "https://511ny.org/",
    "roadUrl": "https://511ny.org/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "NC",
    "name": "North Carolina",
    "service": "DriveNC · camera list",
    "url": "https://drivenc.gov/cctv",
    "roadUrl": "https://drivenc.gov/",
    "kind": "Camera list",
    "hint": "Use the official camera list’s search or filters to find your highway, then open a camera."
  },
  {
    "code": "ND",
    "name": "North Dakota",
    "service": "ND Roads",
    "url": "https://travel.dot.nd.gov/",
    "roadUrl": "https://travel.dot.nd.gov/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "OH",
    "name": "Ohio",
    "service": "OHGO",
    "url": "https://ohgo.com/",
    "roadUrl": "https://ohgo.com/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "OK",
    "name": "Oklahoma",
    "service": "OK Traffic",
    "url": "https://oktraffic.org/",
    "roadUrl": "https://oktraffic.org/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "OR",
    "name": "Oregon",
    "service": "TripCheck roadside cameras",
    "url": "https://www.tripcheck.com/DynamicReports/Report/Cameras",
    "roadUrl": "https://www.tripcheck.com/",
    "kind": "Camera list / map",
    "hint": "Choose a road or camera name to open its current still image."
  },
  {
    "code": "PA",
    "name": "Pennsylvania",
    "service": "511PA · camera list",
    "url": "https://511pa.com/cctv",
    "roadUrl": "https://511pa.com/",
    "kind": "Camera list",
    "hint": "Use the official camera list’s search or filters to find your highway, then open a camera."
  },
  {
    "code": "RI",
    "name": "Rhode Island",
    "service": "RIDOT regional cameras",
    "url": "https://www.dot.ri.gov/travel/index.php",
    "roadUrl": "https://dot.ri.gov/travel/wazetravel.php",
    "kind": "Camera list / map",
    "hint": "Use Find Traffic Cameras by Region, then choose a camera. This is the camera page, not the Waze traffic map."
  },
  {
    "code": "SC",
    "name": "South Carolina",
    "service": "511SC",
    "url": "https://www.511sc.org/",
    "roadUrl": "https://www.511sc.org/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "SD",
    "name": "South Dakota",
    "service": "SD511",
    "url": "https://sd511.org/",
    "roadUrl": "https://sd511.org/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "TN",
    "name": "Tennessee",
    "service": "TDOT SmartWay",
    "url": "https://smartway.tn.gov/traffic",
    "roadUrl": "https://smartway.tn.gov/traffic",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "TX",
    "name": "Texas",
    "service": "TxDOT metro cameras",
    "url": "https://www.txdot.gov/discover/live-traffic-cameras.html",
    "roadUrl": "https://drivetexas.org/",
    "kind": "Camera list / map",
    "hint": "Choose your metro area below for a direct camera map. Camera coverage is concentrated in supported districts and metro areas."
  },
  {
    "code": "UT",
    "name": "Utah",
    "service": "UDOT Traffic · camera list",
    "url": "https://udottraffic.utah.gov/cctv",
    "roadUrl": "https://udottraffic.utah.gov/",
    "kind": "Camera list",
    "hint": "Use the official camera list’s search or filters to find your highway, then open a camera."
  },
  {
    "code": "VT",
    "name": "Vermont",
    "service": "New England 511 · camera list",
    "url": "https://newengland511.org/cctv",
    "roadUrl": "https://newengland511.org/",
    "kind": "Camera list",
    "hint": "Shared New England 511 camera list. Filter or search for Vermont and your highway; cameras from neighboring states may also appear."
  },
  {
    "code": "VA",
    "name": "Virginia",
    "service": "Virginia 511",
    "url": "https://511.vdot.virginia.gov/",
    "roadUrl": "https://511.vdot.virginia.gov/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "WA",
    "name": "Washington",
    "service": "WSDOT Travel Center Map",
    "url": "https://wsdot.com/Travel/Real-time/Map/",
    "roadUrl": "https://wsdot.com/Travel/Real-time/Map/",
    "kind": "Camera map",
    "hint": "Enable Cameras in the official map’s layers or legend, then choose a camera near your highway. Coverage and refresh rates vary."
  },
  {
    "code": "WV",
    "name": "West Virginia",
    "service": "WV511 camera list",
    "url": "https://wv511.org/CameraListing.aspx",
    "roadUrl": "https://wv511.org/",
    "kind": "Camera list / map",
    "hint": "Choose a route to view its traffic cameras."
  },
  {
    "code": "WI",
    "name": "Wisconsin",
    "service": "511WI · camera list",
    "url": "https://511wi.gov/cctv",
    "roadUrl": "https://511wi.gov/",
    "kind": "Camera list",
    "hint": "Use the official camera list’s search or filters to find your highway, then open a camera."
  },
  {
    "code": "WY",
    "name": "Wyoming",
    "service": "WYDOT statewide web cameras",
    "url": "https://webcams.wyoroad.info/pls/Browse/WRR.Cameras",
    "roadUrl": "https://map.wyoroad.info/511-map/",
    "kind": "Camera list / map",
    "hint": "Choose a highway camera by route, town and milepost. Images include some road-surface views and refresh periodically."
  }
];
const texasCameraDistricts=[
  {
    "name": "Abilene",
    "url": "https://its.txdot.gov/its/District/ABL"
  },
  {
    "name": "Amarillo",
    "url": "https://its.txdot.gov/its/District/AMA"
  },
  {
    "name": "Atlanta",
    "url": "https://its.txdot.gov/its/District/ATL"
  },
  {
    "name": "Austin",
    "url": "https://its.txdot.gov/its/District/AUS"
  },
  {
    "name": "Beaumont",
    "url": "https://its.txdot.gov/its/District/BMT"
  },
  {
    "name": "Bryan",
    "url": "https://its.txdot.gov/its/District/BRY"
  },
  {
    "name": "Childress",
    "url": "https://its.txdot.gov/its/District/CHS"
  },
  {
    "name": "Corpus Christi",
    "url": "https://its.txdot.gov/its/District/CRP"
  },
  {
    "name": "Dallas",
    "url": "https://its.txdot.gov/its/District/DAL"
  },
  {
    "name": "Del Rio",
    "url": "https://its.txdot.gov/its/District/LRD"
  },
  {
    "name": "Eastland",
    "url": "https://its.txdot.gov/its/District/BWD"
  },
  {
    "name": "El Paso",
    "url": "https://its.txdot.gov/its/District/ELP"
  },
  {
    "name": "Fort Worth",
    "url": "https://its.txdot.gov/its/District/FTW"
  },
  {
    "name": "Houston",
    "url": "https://its.txdot.gov/its/District/HOU"
  },
  {
    "name": "Laredo",
    "url": "https://its.txdot.gov/its/District/LRD"
  },
  {
    "name": "Lubbock",
    "url": "https://its.txdot.gov/its/District/LBB"
  },
  {
    "name": "Odessa",
    "url": "https://its.txdot.gov/its/District/ODA"
  },
  {
    "name": "Paris",
    "url": "https://its.txdot.gov/its/District/PAR"
  },
  {
    "name": "Pharr",
    "url": "https://its.txdot.gov/its/District/PHR"
  },
  {
    "name": "San Angelo",
    "url": "https://its.txdot.gov/its/District/SJT"
  },
  {
    "name": "San Antonio",
    "url": "https://its.txdot.gov/its/District/SAT"
  },
  {
    "name": "Tyler",
    "url": "https://its.txdot.gov/its/District/TYL"
  },
  {
    "name": "Waco",
    "url": "https://its.txdot.gov/its/District/WAC"
  },
  {
    "name": "Wichita Falls",
    "url": "https://its.txdot.gov/its/District/WFS"
  },
  {
    "name": "Yoakum",
    "url": "https://its.txdot.gov/its/District/YKM"
  }
];
let selectedTexasCamera='';
function cameraEscape(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function cameraLink(url,label,light=false){return '<a class="btn '+(light?'light':'')+'" href="'+cameraEscape(url)+'" target="_blank" rel="noopener noreferrer">'+cameraEscape(label)+' ↗<span class="sr-only"> (opens a new tab)</span></a>'}
function renderTrafficCameras(){
 const select=document.getElementById('cameraState'),result=document.getElementById('cameraResult');if(!select||!result)return;
 const source=trafficCameraSources.find(item=>item.code===select.value);
 if(!source){result.innerHTML='<div class="camera-empty"><strong>Which state are you traveling through?</strong><p>Select a state to see its direct camera link. No camera images have been loaded in this app.</p></div>';return}
 const district=source.code==='TX'?texasCameraDistricts.find(item=>item.name===selectedTexasCamera):null;
 let content='<span class="badge">'+cameraEscape(source.kind)+'</span><h3>'+cameraEscape(source.name)+'</h3><p class="camera-service">'+cameraEscape(source.service)+'</p><p>'+cameraEscape(source.hint)+'</p>';
 if(source.code==='TX')content+='<label for="texasCameraDistrict">Texas metro / district</label><select id="texasCameraDistrict" onchange="selectedTexasCamera=this.value;renderTrafficCameras()"><option value="">Choose a metro area (or open all TxDOT camera links)</option>'+texasCameraDistricts.map(item=>'<option value="'+cameraEscape(item.name)+'"'+(item.name===selectedTexasCamera?' selected':'')+'>'+cameraEscape(item.name)+'</option>').join('')+'</select>';
 content+='<div class="camera-actions">'+cameraLink(district?district.url:source.url,district?'Open '+district.name+' cameras':'Open '+source.name+' cameras')+cameraLink(source.roadUrl,'Road conditions & closures',true)+'</div><p class="small">Opens the agency’s site in a new tab. Cameras may be live video or refreshed snapshots; individual feeds may be delayed, obscured or offline. This hub does not verify feed status.</p>';
 result.innerHTML=content;
}
function openTrafficCameras(code){const select=document.getElementById('cameraState');if(typeof code==='string'){select.value=trafficCameraSources.some(item=>item.code===code)?code:'';selectedTexasCamera=''}openScreen('cameras');renderTrafficCameras()}
function openRouteCameras(){const value=document.getElementById('deliveryAddress').value.trim()||document.getElementById('currentLocation').value.trim();const match=value.toUpperCase().match(/(?:,|\s)([A-Z]{2})(?:\s+\d{5}(?:-\d{4})?)?$/);openTrafficCameras(match?match[1]:'')}
const cameraStateSelect=document.getElementById('cameraState');
if(cameraStateSelect){cameraStateSelect.innerHTML='<option value="">Choose a state</option>'+trafficCameraSources.map(source=>'<option value="'+source.code+'">'+cameraEscape(source.name)+'</option>').join('');renderTrafficCameras()}
