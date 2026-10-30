from pathlib import Path
from html import escape
import base64,textwrap,json
from PIL import ImageFont
r=Path(__file__).resolve().parents[1];d=r/'dist';out=[]
W,H=1800,2700
NAVY='#101f46';GOLD='#c8932b';GREEN='#226946';RED='#b42c33';INK='#1e293b';MUTED='#4b5f75'
normal=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',24)
bold=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',24)
def add(s):out.append(s)
def text(x,y,s,size=24,color=INK,weight='normal',anchor='start'):
 add(f'<text x="{x}" y="{y}" font-size="{size}" fill="{color}" font-weight="{weight}" text-anchor="{anchor}">{escape(s)}</text>')
def wrap(s,width,size=24,weight='normal'):
 font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans'+('-Bold' if weight=='bold' else '')+'.ttf',size)
 lines=[];line=''
 for word in s.split():
  test=line+' '+word if line else word
  if font.getlength(test)>width and line:lines.append(line);line=word
  else:line=test
 if line:lines.append(line)
 return lines
def para(x,y,s,width,size=24,weight='normal',color=INK,leading=None):
 leading=leading or size*1.38
 for line in wrap(s,width,size,weight):text(x,y,line,size,color,weight);y+=leading
 return y

def rect(x,y,w,h,fill='white',stroke='#cdd7e4',radius=14):add(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{radius}" fill="{fill}" stroke="{stroke}" stroke-width="2"/>')
def card(x,y,w,h,title,color=NAVY):
 rect(x,y,w,h);add(f'<path d="M{x+14} {y}H{x+w-14}Q{x+w} {y} {x+w} {y+14}V{y+62}H{x}V{y+14}Q{x} {y} {x+14} {y}Z" fill="{color}"/>');text(x+20,y+41,title,25,'white','bold')
def rig(x,y,scale=.8,t=0,c=0,marks=False,ghost=False):
 # Coupling-centered independent top-view reference; front points down.
 add(f'<g transform="translate({x} {y}) scale({scale})">')
 if ghost:add('<g opacity=".18"><use href="#trailer" x="-30" y="-210"/><use href="#tractor" x="-37" y="-14"/></g>')
 add(f'<g transform="rotate({t})"><use href="#trailer" x="-30" y="-210"/>')
 if marks:add('<circle cx="-27" cy="-203" r="7" fill="#00877d" stroke="white" stroke-width="2"/><circle cx="27" cy="-203" r="7" fill="#00877d" stroke="white" stroke-width="2"/><rect x="-36" y="-185" width="72" height="38" rx="5" fill="none" stroke="#bc671d" stroke-width="4"/>')
 add(f'</g><g transform="rotate({c})"><use href="#tractor" x="-37" y="-14"/></g></g>')
def wheel(x,y,direction,size=55):
 add(f'<g transform="translate({x} {y})"><circle r="{size}" fill="#fff" stroke="{NAVY}" stroke-width="9"/><circle r="12" fill="{NAVY}"/><path d="M-10 -5L-{size-5} -18M10 -5L{size-5} -18M0 10V{size-4}" fill="none" stroke="{NAVY}" stroke-width="9" stroke-linecap="round"/>')
 if direction=='right':add(f'<path d="M-5 -{size+22}A{size+22} {size+22} 0 0 1 {size+22} 0" fill="none" stroke="{RED}" stroke-width="7" marker-end="url(#arrow-red)"/>')
 if direction=='left':add(f'<path d="M5 -{size+22}A{size+22} {size+22} 0 0 0 -{size+22} 0" fill="none" stroke="{RED}" stroke-width="7" marker-end="url(#arrow-red)"/>')
 add('</g>')
def line(x1,y1,x2,y2,color=GREEN):add(f'<path d="M{x1} {y1}L{x2} {y2}" fill="none" stroke="{color}" stroke-width="6" marker-end="url(#arrow-{ "red" if color==RED else "green"})"/>')
assets={k:base64.b64encode((d/'assets'/v).read_bytes()).decode() for k,v in {'trailer':'maricel-success-hub-trailer.png','tractor':'maricel-tractor.png'}.items()}
add(f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-labelledby="posterTitle posterDesc"><title id="posterTitle">Maricel CDL Success Hub Visual Mastery</title><desc id="posterDesc">Beginner backing poster with Maricel truck diagrams. Driver-view directions distinguish starting an intentional trailer turn from correcting straight-back drift. GOAL, mirror references, alignment, following and stop decisions. Educational support for instructor-supervised practice, not a vehicle simulation.</desc><defs>')
for name,width,height in [('trailer',60,210),('tractor',74,140)]:add(f'<image id="{name}" width="{width}" height="{height}" href="data:image/png;base64,{assets[name]}"/>')
for name,color in [('green',GREEN),('red',RED)]:add(f'<marker id="arrow-{name}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="3.5" markerHeight="3.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="{color}"/></marker>')
add('</defs><rect width="1800" height="2700" rx="20" fill="#f3f6fb" stroke="#101f46" stroke-width="5"/><g font-family="DejaVu Sans, Arial, sans-serif">')
rect(20,20,1760,215,NAVY,NAVY)
text(60,83,'MARICEL CDL SUCCESS HUB',61,'white','bold')
text(60,149,'VISUAL MASTERY',60,'#f2c46e','bold')
text(62,198,'Start from zero. Understand what you see. Practice with your instructor.',27,'white')
rig(1640,142,.48)
rect(25,255,1750,120,'#fff8e8','#dfbc68')
text(50,293,'READ THE VIEW FIRST',25,NAVY,'bold')
text(50,332,'Top view: truck front ↓. Driver RIGHT = screen LEFT. Driver LEFT = screen RIGHT.',25,INK,'bold')
text(50,362,'Left/right wheel inputs mean moving the TOP of the wheel from the seated driver’s viewpoint. These are not mirror views.',21,MUTED)
xs=[25,615,1205];cw=570
# Row 1: intentional turns — aligned poses, intended direction arrows rather than invented trajectories.
for x,dest,inp in [(xs[0],'LEFT','RIGHT'),(xs[1],'RIGHT','LEFT')]:
 y=395;add(f'<g id="turn-{dest.lower()}" aria-label="Starting aligned: desired rear {dest.lower()}, initial top-of-wheel input {inp.lower()}">');card(x,y,cw,600,'START AN INTENTIONAL TURN',GREEN)
 text(x+22,y+101,'STARTING FROM ALIGNED',24,GREEN,'bold')
 para(x+22,y+141,f'Want the trailer rear {dest}? Initial top-of-wheel input: {inp}.',cw-44,26,'bold')
 wheel(x+115,y+310,inp.lower(),49)
 text(x+115,y+403,'Wheel '+inp,23,RED,'bold','middle')
 rig(x+382,y+385,.73)
 ay=y+215
 if dest=='LEFT':line(x+387,ay,x+503,ay);text(x+449,ay-17,'Rear LEFT',19,GREEN,'bold','middle')
 else:line(x+377,ay,x+263,ay);text(x+320,ay-17,'Rear RIGHT',19,GREEN,'bold','middle')
 text(x+383,y+496,'Truck front ↓',20,MUTED,'normal','middle')
 para(x+22,y+534,'Arrow = intended rear direction, not a path. Once the turn develops, change steering the other way to follow.',cw-44,21)
 add('</g>')
# GOAL checklist, no automatic preliminary pull-up.
x=xs[2];y=395;card(x,y,cw,600,'BEFORE YOU REVERSE — GOAL')
text(x+24,y+101,'GET OUT AND LOOK',27,GREEN,'bold')
yy=y+147
for n,title,body in [(1,'STOP & SECURE','Use the parking procedure taught for this equipment before leaving the cab.'),(2,'EXIT WITH CARE','Use handholds and three points of contact; face the vehicle.'),(3,'LOOK AT THE WHOLE PATH','Check behind, both sides, overhead, ground conditions, people and obstacles.'),(4,'PLAN & RECHECK','Identify the target and stopping area. If the next move is unclear, remain stopped and ask for help.')]:
 add(f'<circle cx="{x+40}" cy="{yy-8}" r="19" fill="{NAVY}"/>');text(x+40,yy,n.__str__(),20,'white','bold','middle');text(x+73,yy,title,23,NAVY,'bold');yy=para(x+73,yy+34,body,cw-100,21)+20
# Row 2: confirmed straight-back drift, independent angled poses, no fixed increments.
for x,side,angle in [(xs[0],'LEFT',8),(xs[1],'RIGHT',-8)]:
 y=1015;add(f'<g id="drift-{side.lower()}" aria-label="Unwanted straight-back {side.lower()} drift: initial small top-of-wheel correction {side.lower()}">');card(x,y,cw,600,'UNWANTED '+side+' DRIFT',RED)
 text(x+22,y+100,'DURING A STRAIGHT BACK',24,RED,'bold')
 para(x+22,y+141,f'Confirmed {side.lower()} drift? Initial SMALL top-of-wheel correction: {side}.',cw-44,26,'bold')
 wheel(x+115,y+316,side.lower(),49);text(x+115,y+408,'Wheel '+side,23,RED,'bold','middle')
 add(f'<path d="M{x+300} {y+213}V{y+492}M{x+482} {y+213}V{y+492}" stroke="#9aaaaf" stroke-width="3" stroke-dasharray="9 7"/>')
 rig(x+390,y+385,.73,t=angle,marks=True,ghost=True)
 ay=y+218
 if side=='LEFT':line(x+419,ay,x+511,ay);text(x+468,ay-16,'Drift LEFT',18,GREEN,'bold','middle')
 else:line(x+362,ay,x+267,ay);text(x+315,ay-16,'Drift RIGHT',18,GREEN,'bold','middle')
 para(x+22,y+529,'Observe actual response. Ease as alignment returns. This is different from starting an intentional turn.',cw-44,22)
 add('</g>')
# Alignment: two clearly separate independent poses.
x=xs[2];y=1015;card(x,y,cw,600,'WHEEL CENTER ≠ ALIGNMENT')
para(x+24,y+107,'A centered wheel does not automatically straighten an angled combination.',cw-48,25,'bold')
rig(x+146,y+358,.58)
rig(x+410,y+358,.58,t=-10,c=8)
text(x+146,y+462,'Aligned units',20,GREEN,'bold','middle');text(x+410,y+462,'Still angled',20,RED,'bold','middle')
para(x+24,y+507,'Check TWO relationships: tractor with trailer, and trailer with lane. Parallel can still be off-center.',cw-48,23)
# Row 3: observation, follow and stop.
y=1635
x=xs[0];card(x,y,cw,435,'WATCH MORE THAN THE TIRES')
rig(x+138,y+236,.58,marks=True)
text(x+267,y+112,'Teal dots:',22,'#00877d','bold');para(x+267,y+144,'Rear corners',cw-290,22)
text(x+267,y+203,'Orange box:',22,'#a35317','bold');para(x+267,y+235,'Rear wheel group',cw-290,22)
para(x+267,y+294,'Each needs its own clearance check.',cw-290,22)
para(x+24,y+366,'Scan both mirrors, boundaries, rear path and tractor-front space. Mirrors do not show everything.',cw-48,22)
x=xs[1];card(x,y,cw,435,'TURN → WATCH → FOLLOW')
wheel(x+110,y+165,'left',34);wheel(x+420,y+165,'right',34);line(x+194,y+165,x+333,y+165)
text(x+110,y+236,'Start turn',21,NAVY,'bold','middle');text(x+420,y+236,'Follow',21,NAVY,'bold','middle')
para(x+24,y+282,'After the trailer starts turning, change steering the other way to follow. Your instructor teaches when and how much.',cw-48,22)
para(x+24,y+389,'Example: rear RIGHT → initial LEFT → follow RIGHT. Not a timed steering recipe.',cw-48,20)
x=xs[2];card(x,y,cw,435,'STOP — THEN REASSESS',RED)
rect(x+24,y+87,110,74,'#fff0ee','#f4c5c6');text(x+79,y+135,'STOP',27,RED,'bold','middle')
para(x+154,y+108,'Stop immediately if you lose sight of your spotter.',cw-180,23,'bold')
para(x+24,y+207,'Also stop for a person in the movement area, uncertain clearance or an angle you do not understand.',cw-48,23)
para(x+24,y+318,'Secure before getting out to look. Inspect the forward path and plan before any pull-up. Never pull up automatically.',cw-48,23,'bold')
# Row 4: progression and decision table.
y=2090
card(25,y,865,365,'BEGINNER PRACTICE — ONE FOCUS AT A TIME')
for n,title,body,yy in [(1,'NAME IT','Find tractor, trailer, rear corners and wheels.',y+106),(2,'SEE IT','Learn the straight view and changing gaps.',y+175),(3,'PRACTICE IT','Begin with supervised straight backing and small drift corrections.',y+244)]:
 add(f'<circle cx="68" cy="{yy-9}" r="20" fill="{GREEN}"/>');text(68,yy,str(n),20,'white','bold','middle');text(105,yy,title,23,GREEN,'bold');para(315,yy,body,540,22)
para(49,y+321,'Progress to offsets and bays when your instructor judges you ready. A fixed repetition count does not prove readiness.',817,21)
card(910,y,865,365,'QUICK DECISION CHECK')
for yy,label,result in [(y+110,'Intentional rear turn, starting aligned','Initial wheel input OPPOSITE the intended rear direction'),(y+205,'Confirmed unwanted straight-back drift','Initial SMALL wheel input TOWARD the drift'),(y+300,'Already angled or unsure of the path','STOP. Use instructor guidance and an inspected plan')]:
 text(934,yy,label,22,NAVY,'bold');para(934,yy+34,result,815,22,color=GREEN if yy<y+300 else RED)
# Footer carries limits and sources with every download.
rect(25,2475,1750,70,NAVY,NAVY)
text(900,2519,'BE PATIENT. UNDERSTAND THE RESPONSE. SAFETY BEFORE SPEED.',29,'#f2c46e','bold','middle')
para(44,2582,'Educational support for a left-hand-drive tractor and one semitrailer. Independent concept drawings, not to scale: no fixed wheel turns, timing, safe angle, vehicle trajectory or guaranteed outcome. Practice with qualified instruction and follow equipment, site and current state test procedures.',1710,21)
add('<a href="https://maricelcdlsuccesshub.com/backing-poster#sources">')
text(44,2674,'Coach Maricel • Sources: Oregon CDL Manual §§2.2.4, 6.1.7 & 12; OSHA spotter guidance • maricelcdlsuccesshub.com/backing-poster',19,MUTED)
add('</a>')
add('</g></svg>')
(d/'assets/maricel-visual-mastery.svg').write_text(''.join(out))
