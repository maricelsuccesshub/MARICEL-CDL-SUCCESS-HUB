/* Destination forecasts: UTC instants formatted in the returned destination zone. */
let tripLookupSequence=0;
window.cancelTripLookup=()=>{tripLookupSequence++;};
function validCoordinatePair(lat,lon){return lat===null&&lon===null||Number.isFinite(lat)&&Number.isFinite(lon)&&Math.abs(lat)<=90&&Math.abs(lon)<=180;}
function destinationTime(seconds,zone){
  if(!Number.isFinite(seconds))return 'Not available';
  return new Intl.DateTimeFormat('en-US',{timeZone:zone,month:'short',day:'numeric',hour:'numeric',minute:'2-digit',timeZoneName:'short'}).format(new Date(seconds*1000));
}
async function autoPlanDestination(){
  const sequence=++tripLookupSequence,generation=memberGeneration;
  const result=document.getElementById('autoPlanResult');
  const address=document.getElementById('deliveryAddress').value.trim();
  const latText=document.getElementById('manualLat').value.trim(),lonText=document.getElementById('manualLon').value.trim();
  const manual=Boolean(latText||lonText),latInput=latText===''?null:Number(latText),lonInput=lonText===''?null:Number(lonText);
  if(manual&&(!validCoordinatePair(latInput,lonInput)||latInput===null)){result.innerHTML='<div class="danger">Enter both coordinates. Latitude must be −90 to 90 and longitude −180 to 180.</div>';return;}
  if(!manual&&!address){result.innerHTML='<div class="danger">Enter a destination address or both coordinates.</div>';return;}
  const date=document.getElementById('appointmentDate').value;
  if(date&&!/^\d{4}-\d{2}-\d{2}$/.test(date)){result.innerHTML='<div class="danger">Choose a valid appointment date.</div>';return;}
  result.innerHTML='<div class="warning">Looking up the destination and forecast…</div>';
  const current=()=>sequence===tripLookupSequence&&generation===memberGeneration;
  try{
    const location=manual?{lat:latInput,lon:lonInput,displayName:'Manual coordinates'}:await geocodeAddress(address);
    if(!current())return;
    if(!validCoordinatePair(location.lat,location.lon)||location.lat===null)throw Error('The matched location has invalid coordinates.');
    const params=new URLSearchParams({latitude:location.lat,longitude:location.lon,daily:'sunrise,sunset,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max',timezone:'auto',timeformat:'unixtime',temperature_unit:'fahrenheit',wind_speed_unit:'mph'});
    if(date){params.set('start_date',date);params.set('end_date',date);}else params.set('forecast_days','1');
    const response=await fetch('https://api.open-meteo.com/v1/forecast?'+params);
    if(!response.ok)throw Error('Forecast unavailable for this date. Choose a date within the available forecast range or use Weather by State.');
    const w=await response.json();if(!current())return;
    if(!w.daily||!w.timezone)throw Error('No destination forecast was returned.');
    const sun=w.daily.sunset?.[0],rise=w.daily.sunrise?.[0];
    const format=x=>esc(destinationTime(x,w.timezone));
    const metric=(key,unit)=>{const value=w.daily[key]?.[0];return Number.isFinite(value)?Math.round(value)+unit:'Not available';};
    const buffer=Number.isFinite(sun)?format(sun-7200):'Not available';
    result.innerHTML=`<div class="success"><strong>Matched destination:</strong> ${esc(location.displayName)}<br><strong>Coordinates:</strong> ${location.lat.toFixed(5)}, ${location.lon.toFixed(5)}<br><strong>Destination timezone:</strong> ${esc(w.timezone)}<p>Confirm this is your intended destination. An address match may be approximate.</p></div><div class="list-item"><h3>Destination daylight & parking plan</h3><strong>Sunrise:</strong> ${format(rise)}<br><strong>Sunset:</strong> ${format(sun)}<br><strong>Suggested parking target:</strong> ${buffer}<p class="small">All times use the destination timezone shown above. The target is a planning buffer of two hours before sunset, not a legal deadline, safe-driving cutoff or parking reservation. Plan earlier when conditions or your hours require it.</p></div><div class="list-item"><h3>Destination weather · daily summary</h3><strong>High / Low:</strong> ${metric('temperature_2m_max','°F')} / ${metric('temperature_2m_min','°F')}<br><strong>Precipitation chance:</strong> ${metric('precipitation_probability_max','%')}<br><strong>Maximum wind:</strong> ${metric('wind_speed_10m_max',' mph')}<div class="warning">This is a destination forecast, not a route-wide forecast or truck wind limit. Verify location, current alerts, wind gusts, snow/ice, commercial-vehicle restrictions, closures and conditions along your route with official sources.</div></div>`;
  }catch(error){if(current())result.innerHTML='<div class="danger"><strong>Lookup unavailable.</strong><br>'+esc(error.message)+'<br>Check the destination or coordinates and date. Weather by State provides official local forecasts.</div>';}
}
