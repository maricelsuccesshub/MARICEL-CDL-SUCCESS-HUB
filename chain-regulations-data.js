/* Claim-specific official-source review; never a live road-status feed. */
(function(root){
const data=[
  {
    "code": "AL",
    "name": "Alabama",
    "roadUrl": "https://algotraffic.com/",
    "source": "https://alison.legislature.state.al.us/code-of-alabama?section=32-5-210",
    "summary": "32-5-210 permits proportionate chains for safety under skid-producing conditions.",
    "scope": "permission excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "AK",
    "name": "Alaska",
    "roadUrl": "https://511.alaska.gov/",
    "source": "https://dot.alaska.gov/stwddes/dcstraffic/assets/pdf/atm/current/2026_atm.pdf",
    "summary": "The 2026 Alaska Traffic Manual Supplement describes chain-required signs used when conditions and an official order warrant them.",
    "scope": "limited operational summary",
    "verifiedOn": "2026-11-04",
    "carry": "Not established by this source review.",
    "season": "Condition/order-based signing; seasonal carry rules are not established here.",
    "configuration": "This signing source does not establish a complete commercial axle-placement rule.",
    "note": "",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Carry, installation, season, configuration, exemptions and active orders have not all been reconciled against operative primary sources.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": "https://dot.alaska.gov/stwddes/dcstraffic/assets/pdf/atm/current/2026_atm.pdf"
      },
      "season": {
        "status": "unresolved",
        "source": "https://dot.alaska.gov/stwddes/dcstraffic/assets/pdf/atm/current/2026_atm.pdf"
      },
      "configuration": {
        "status": "limited",
        "source": "https://dot.alaska.gov/stwddes/dcstraffic/assets/pdf/atm/current/2026_atm.pdf"
      },
      "installation": {
        "status": "limited",
        "source": "https://dot.alaska.gov/stwddes/dcstraffic/assets/pdf/atm/current/2026_atm.pdf"
      }
    }
  },
  {
    "code": "AZ",
    "name": "Arizona",
    "roadUrl": "https://az511.gov/",
    "source": "https://www.azleg.gov/viewDocument/?docName=http%3A%2F%2Fwww.azleg.gov%2Fars%2F28%2F00958.htm",
    "summary": "28-958 permits proportionate chains for snow, ice or other skid-producing conditions.",
    "scope": "permission excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "AR",
    "name": "Arkansas",
    "roadUrl": "https://www.idrivearkansas.com/",
    "source": null,
    "summary": "Commercial chain requirements have not been verified for this state. Consult the official transportation/enforcement agency before travel.",
    "scope": "unverified",
    "verifiedOn": null,
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Official 2023 compilation reproduces §27-37-401 permission. Confirm current operative text and any later amendments before promoting it to a current verified rule.",
    "researchLeads": [
      {
        "url": "https://media.ark.org/ardot/AR-Motor-Vehicle-2023-PDF.pdf",
        "checkedOn": "2026-11-04",
        "finding": "Official 2023 compilation reproduces §27-37-401 permission. Confirm current operative text and any later amendments before promoting it to a current verified rule."
      }
    ],
    "reviewStatus": "unresolved",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Official 2023 compilation reproduces §27-37-401 permission. Confirm current operative text and any later amendments before promoting it to a current verified rule.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "CA",
    "name": "California",
    "roadUrl": "https://quickmap.dot.ca.gov/?layers=rest_areas%2Cfull_closures%2Clane_closures%2Cspeed",
    "source": "https://dot.ca.gov/travel/winter-driving-tips/chain-requirements",
    "summary": "Heavy-duty commercial vehicles must install chains when applicable chain controls are posted; snow tires do not create a commercial-vehicle exemption. Check the linked official placement chart.",
    "scope": "limited operational summary",
    "verifiedOn": "2026-11-04",
    "carry": "Required chains must be available for screening and chain-control entry.",
    "season": "Caltrans describes no fixed statewide chain-carry dates; weather controls can occur outside winter.",
    "configuration": "Exact axle and tire placement depends on the official truck chart and current control; alternative devices may be restricted locally.",
    "note": "",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Carry, installation, season, configuration, exemptions and active orders have not all been reconciled against operative primary sources.",
    "fieldReview": {
      "carry": {
        "status": "limited",
        "source": "https://dot.ca.gov/travel/winter-driving-tips/chain-requirements"
      },
      "season": {
        "status": "limited",
        "source": "https://dot.ca.gov/travel/winter-driving-tips/chain-requirements"
      },
      "configuration": {
        "status": "limited",
        "source": "https://dot.ca.gov/travel/winter-driving-tips/chain-requirements"
      },
      "installation": {
        "status": "limited",
        "source": "https://dot.ca.gov/travel/winter-driving-tips/chain-requirements"
      }
    }
  },
  {
    "code": "CO",
    "name": "Colorado",
    "roadUrl": "https://www.cotrip.org/",
    "source": "https://www.codot.gov/safety/traffic-safety/assets/documents/must-carry-chains-signage-guidelines_20251029.pdf",
    "summary": "Commercial seasonal carry coverage extends beyond the older Morrison–Dotsero I-70 description. Verify current chain-up orders separately.",
    "scope": "limited operational summary",
    "verifiedOn": "2026-11-04",
    "carry": "Carry chains for qualifying commercial vehicles on the designated corridors.",
    "season": "September 1–May 31 on designated corridors.",
    "configuration": "The 2025 signage guide lists qualifying heavy vehicles and designated routes: I-70 west of MP259 to Utah; CO9 MP63–97; US40 west of MP256; US50 west of MP225; US160 west of MP304; US285 south/west of MP250; all US550.",
    "note": "Source discrepancy: an older CDOT overview still lists only I-70 Morrison–Dotsero. Do not use that shorter route description. Confirm borderline weight classifications with CSP; this overview is not a complete installation rule.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Source discrepancy: an older CDOT overview still lists only I-70 Morrison–Dotsero. Do not use that shorter route description. Confirm borderline weight classifications with CSP; this overview is not a complete installation rule.",
    "fieldReview": {
      "carry": {
        "status": "limited",
        "source": "https://www.codot.gov/safety/traffic-safety/assets/documents/must-carry-chains-signage-guidelines_20251029.pdf"
      },
      "season": {
        "status": "limited",
        "source": "https://www.codot.gov/safety/traffic-safety/assets/documents/must-carry-chains-signage-guidelines_20251029.pdf"
      },
      "configuration": {
        "status": "limited",
        "source": "https://www.codot.gov/safety/traffic-safety/assets/documents/must-carry-chains-signage-guidelines_20251029.pdf"
      },
      "installation": {
        "status": "limited",
        "source": "https://www.codot.gov/safety/traffic-safety/assets/documents/must-carry-chains-signage-guidelines_20251029.pdf"
      }
    }
  },
  {
    "code": "CT",
    "name": "Connecticut",
    "roadUrl": "https://ctroads.org/",
    "source": null,
    "summary": "Commercial chain requirements have not been verified for this state. Consult the official transportation/enforcement agency before travel.",
    "scope": "unverified",
    "verifiedOn": null,
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Current official chapter is indexed but repeated text retrieval returned 502. Need the operative §14-98 and related regulations; do not substitute school-bus rules for truck rules.",
    "researchLeads": [
      {
        "url": "https://cga.ct.gov/current/PUB/chap_246.htm",
        "checkedOn": "2026-11-04",
        "finding": "Current official chapter is indexed but repeated text retrieval returned 502. Need the operative §14-98 and related regulations; do not substitute school-bus rules for truck rules."
      }
    ],
    "reviewStatus": "unresolved",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Current official chapter is indexed but repeated text retrieval returned 502. Need the operative §14-98 and related regulations; do not substitute school-bus rules for truck rules.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "DE",
    "name": "Delaware",
    "roadUrl": "https://deldot.gov/map/",
    "source": "https://delcode.delaware.gov/title21/c043/sc01/index.html",
    "summary": "21 §4302 permits proportionate chains when conditions make them necessary for safety.",
    "scope": "permission excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "FL",
    "name": "Florida",
    "roadUrl": "https://fl511.com/",
    "source": null,
    "summary": "Commercial chain requirements have not been verified for this state. Consult the official transportation/enforcement agency before travel.",
    "scope": "unverified",
    "verifiedOn": null,
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "§316.299 addresses road-damaging wheel surfaces without an explicit commercial snow-chain determination in the reviewed text. Need authoritative interpretation or a chain-specific provision.",
    "researchLeads": [
      {
        "url": "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.299.html",
        "checkedOn": "2026-11-04",
        "finding": "§316.299 addresses road-damaging wheel surfaces without an explicit commercial snow-chain determination in the reviewed text. Need authoritative interpretation or a chain-specific provision."
      }
    ],
    "reviewStatus": "unresolved",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "§316.299 addresses road-damaging wheel surfaces without an explicit commercial snow-chain determination in the reviewed text. Need authoritative interpretation or a chain-specific provision.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "GA",
    "name": "Georgia",
    "roadUrl": "https://511ga.org/",
    "source": null,
    "summary": "Commercial chain requirements have not been verified for this state. Consult the official transportation/enforcement agency before travel.",
    "scope": "unverified",
    "verifiedOn": null,
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Older DPS handout says at least four drive tires; newer reproduced statute wording refers to outermost drive tires. Resolve current official §32-6-5 and exceptions before showing a placement rule.",
    "researchLeads": [
      {
        "url": "https://dps.georgia.gov/document/publication/tire-chain-requirements-georgia-0/download",
        "checkedOn": "2026-11-04",
        "finding": "Older DPS handout says at least four drive tires; newer reproduced statute wording refers to outermost drive tires. Resolve current official §32-6-5 and exceptions before showing a placement rule."
      }
    ],
    "reviewStatus": "unresolved",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Older DPS handout says at least four drive tires; newer reproduced statute wording refers to outermost drive tires. Resolve current official §32-6-5 and exceptions before showing a placement rule.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "HI",
    "name": "Hawaii",
    "roadUrl": "https://www.goakamai.org/",
    "source": "https://hilo.hawaii.edu/maunakea/stewardship/admin-rules",
    "summary": "HAR 20-26-28 requires compliance with posted equipment conditions on UH-managed Maunakea lands, including carry/use chains when posted. It also restricts two-wheel-drive access north of Halepohaku. This is a local land-management rule, not a statewide truck route authorization.",
    "scope": "limited statutory excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": "Applies to UH management areas. Do not infer that a commercial tractor-trailer is permitted on the summit road.",
    "note": "This is a limited source review, not a complete commercial chain-law determination. Other vehicle, route and emergency rules may apply.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "This is a limited source review, not a complete commercial chain-law determination. Other vehicle, route and emergency rules may apply.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "limited",
        "source": "https://hilo.hawaii.edu/maunakea/stewardship/admin-rules"
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "ID",
    "name": "Idaho",
    "roadUrl": "https://511.idaho.gov/",
    "source": "https://adminrules.idaho.gov/rules/current/39/390341.pdf",
    "summary": "Current IDAPA 39.03.41 §004, 2B.69a (PDF pages 9–10) describes chain-required signs and non-exempt commercial vehicles over 26,000 lb, with enumerated exemptions. This source does not supply every tire-placement or carry requirement.",
    "scope": "limited statutory excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": "The rule lists commercial weight thresholds and exemptions. A sign rule is not an axle-placement diagram.",
    "note": "This is a limited source review, not a complete commercial chain-law determination. Other vehicle, route and emergency rules may apply.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "This is a limited source review, not a complete commercial chain-law determination. Other vehicle, route and emergency rules may apply.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "limited",
        "source": "https://adminrules.idaho.gov/rules/current/39/390341.pdf"
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "IL",
    "name": "Illinois",
    "roadUrl": "https://travelmidwest.com/",
    "source": "https://ilga.gov/legislation/ILCS/details?ActID=1815&ActName=Illinois+Vehicle+Code.&ChapAct=625+ILCS+5%2F&Chapter=&ChapterID=49&MajorTopic=&Print=True&SeqEnd=149200000&SeqStart=146500000",
    "summary": "625 ILCS 5/12-401 permits proportionate chains for safety in skid-producing conditions.",
    "scope": "permission excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "IN",
    "name": "Indiana",
    "roadUrl": "https://511in.org/",
    "source": "https://faqs.in.gov/hc/en-us/articles/115005063487-Are-tire-chains-and-studs-legal-in-Indiana",
    "summary": "Indiana’s official FAQ permits tire chains when needed for safety. Its October–May dates concern studs; those dates are not presented here as chain dates. The FAQ does not establish a full commercial installation rule.",
    "scope": "limited statutory excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "This is a limited source review, not a complete commercial chain-law determination. Other vehicle, route and emergency rules may apply.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "This is a limited source review, not a complete commercial chain-law determination. Other vehicle, route and emergency rules may apply.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "IA",
    "name": "Iowa",
    "roadUrl": "https://511ia.org/",
    "source": "https://www.legis.iowa.gov/docs/code/321.442.pdf",
    "summary": "Iowa Code 2026 §321.442 permits proportionate tire chains when snow, ice or other skid-producing conditions require them for safety.",
    "scope": "limited statutory excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "This excerpt does not establish every commercial carry, placement or emergency restriction. Verify the remaining fields with the responsible agency.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "This excerpt does not establish every commercial carry, placement or emergency restriction. Verify the remaining fields with the responsible agency.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "KS",
    "name": "Kansas",
    "roadUrl": "https://www.kandrive.gov/",
    "source": "https://kansashighwaypatrol.gov/find-a-troop/troop-location-map/technical-operations-bureau/troop-i/commercial-vehicle-faqs/",
    "summary": "Kansas Highway Patrol’s commercial FAQ says chains may be used for skid-producing conditions and are not generally required. Closures and official emergency directions still need separate checking.",
    "scope": "limited operational summary",
    "verifiedOn": "2026-11-04",
    "carry": "The reviewed commercial FAQ does not impose a general carry duty.",
    "season": "No chain season is specified in the reviewed FAQ.",
    "configuration": "The FAQ is not a vehicle-specific installation diagram.",
    "note": "",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Carry, installation, season, configuration, exemptions and active orders have not all been reconciled against operative primary sources.",
    "fieldReview": {
      "carry": {
        "status": "limited",
        "source": "https://kansashighwaypatrol.gov/find-a-troop/troop-location-map/technical-operations-bureau/troop-i/commercial-vehicle-faqs/"
      },
      "season": {
        "status": "limited",
        "source": "https://kansashighwaypatrol.gov/find-a-troop/troop-location-map/technical-operations-bureau/troop-i/commercial-vehicle-faqs/"
      },
      "configuration": {
        "status": "limited",
        "source": "https://kansashighwaypatrol.gov/find-a-troop/troop-location-map/technical-operations-bureau/troop-i/commercial-vehicle-faqs/"
      },
      "installation": {
        "status": "limited",
        "source": "https://kansashighwaypatrol.gov/find-a-troop/troop-location-map/technical-operations-bureau/troop-i/commercial-vehicle-faqs/"
      }
    }
  },
  {
    "code": "KY",
    "name": "Kentucky",
    "roadUrl": "https://goky.ky.gov/",
    "source": "https://apps.legislature.ky.gov/Law/statutes/statute.aspx?id=6319",
    "summary": "KRS 189.190 restricts chained wheels on highways not covered with ice unless its ice-shoe condition is met. For rubber tires it also limits cross-chain thickness to 3/4 inch and spacing to 10 inches. This does not mandate chain use whenever ice is present.",
    "scope": "limited statutory excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "This excerpt does not establish every commercial carry, placement or emergency restriction. Verify the remaining fields with the responsible agency.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "This excerpt does not establish every commercial carry, placement or emergency restriction. Verify the remaining fields with the responsible agency.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "LA",
    "name": "Louisiana",
    "roadUrl": "https://511la.org/",
    "source": "https://legis.la.gov/legis/Law.aspx?d=88297",
    "summary": "RS 32:362 permits proportionate chains when slippery conditions make them necessary for safety.",
    "scope": "permission excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "ME",
    "name": "Maine",
    "roadUrl": "https://newengland511.org/",
    "source": "https://www.legis.maine.gov/statutes/29-A/title29-Asec2381.html",
    "summary": "29-A §2381 includes an exception for proportionate chains needed for snowy, icy or slippery conditions.",
    "scope": "permission excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "MD",
    "name": "Maryland",
    "roadUrl": "https://www.chart.maryland.gov/InteractiveMap/GetInteractiveMap",
    "source": "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?archived=False&article=gtr&enactments=False&section=22-405.2",
    "summary": "Transportation §22-405.2 permits proportionate chains for safety in snow, ice or other skid-producing conditions. Snow-emergency route duties need separate review.",
    "scope": "permission excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "MA",
    "name": "Massachusetts",
    "roadUrl": "https://mass511.com/",
    "source": "https://www.mass.gov/doc/700-cmr-7-use-of-the-massachusetts-turnpike-and-the-metropolitan-highway-system/download",
    "summary": "700 CMR 7.08(11)(c) describes seasonal chain equipment for tractors in large tandem units on the specified system. This narrow provision must not be generalized to every Massachusetts truck.",
    "scope": "limited statutory excerpt",
    "verifiedOn": "2026-11-04",
    "carry": "For the covered large-tandem operation, one set for at least one driving wheel on each side.",
    "season": "Covered large-tandem equipment provision: October 15–May 1; not a general statewide chain season.",
    "configuration": "Only the defined large tandem units and highway system covered by 700 CMR 7.08. Search excerpt retrieved; direct PDF access returned 403, so full context remains unresolved.",
    "note": "This is a limited source review, not a complete commercial chain-law determination. Other vehicle, route and emergency rules may apply.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Narrow large-tandem provision verified from an official search excerpt; full PDF context and general-truck duties remain unresolved.",
    "fieldReview": {
      "carry": {
        "status": "limited",
        "source": "https://www.mass.gov/doc/700-cmr-7-use-of-the-massachusetts-turnpike-and-the-metropolitan-highway-system/download"
      },
      "season": {
        "status": "limited",
        "source": "https://www.mass.gov/doc/700-cmr-7-use-of-the-massachusetts-turnpike-and-the-metropolitan-highway-system/download"
      },
      "configuration": {
        "status": "unresolved",
        "source": "https://www.mass.gov/doc/700-cmr-7-use-of-the-massachusetts-turnpike-and-the-metropolitan-highway-system/download"
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "MI",
    "name": "Michigan",
    "roadUrl": "https://mdotjboss.state.mi.us/MiDrive/map",
    "source": null,
    "summary": "Commercial chain requirements have not been verified for this state. Consult the official transportation/enforcement agency before travel.",
    "scope": "unverified",
    "verifiedOn": null,
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Official §257.710 includes chain permission, but the patrol FAQ says chains must not contact the road. Agency clarification is required before giving a practical truck-use conclusion.",
    "researchLeads": [
      {
        "url": "https://zeus-milenia.legislature.mi.gov/documents/mcl/pdf/MCL-257-710.pdf",
        "checkedOn": "2026-11-04",
        "finding": "Official §257.710 includes chain permission, but the patrol FAQ says chains must not contact the road. Agency clarification is required before giving a practical truck-use conclusion."
      }
    ],
    "reviewStatus": "unresolved",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Official §257.710 includes chain permission, but the patrol FAQ says chains must not contact the road. Agency clarification is required before giving a practical truck-use conclusion.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "MN",
    "name": "Minnesota",
    "roadUrl": "https://511mn.org/",
    "source": "https://www.revisor.mn.gov/statutes/cite/169.72",
    "summary": "169.72 permits proportionate chains when snow, ice or other skid-producing conditions require them for safety.",
    "scope": "permission excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "MS",
    "name": "Mississippi",
    "roadUrl": "https://www.mdottraffic.com/default.aspx?showMain=true",
    "source": null,
    "summary": "Commercial chain requirements have not been verified for this state. Consult the official transportation/enforcement agency before travel.",
    "scope": "unverified",
    "verifiedOn": null,
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "SOS identifies the official code publisher. The §63-7-67 text found in secondary sources was not promoted; need the current official provision and related orders.",
    "researchLeads": [
      {
        "url": "https://sos.ms.gov/publications-external-affairs/mississippi-law",
        "checkedOn": "2026-11-04",
        "finding": "SOS identifies the official code publisher. The §63-7-67 text found in secondary sources was not promoted; need the current official provision and related orders."
      }
    ],
    "reviewStatus": "unresolved",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "SOS identifies the official code publisher. The §63-7-67 text found in secondary sources was not promoted; need the current official provision and related orders.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "MO",
    "name": "Missouri",
    "roadUrl": "https://traveler.modot.org/map/",
    "source": null,
    "summary": "Commercial chain requirements have not been verified for this state. Consult the official transportation/enforcement agency before travel.",
    "scope": "unverified",
    "verifiedOn": null,
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "The official provision found concerns studded tires only. It does not verify truck-chain permissions, carry duties or placement.",
    "researchLeads": [
      {
        "url": "https://revisor.mo.gov/main/OneSection.aspx?section=307.171",
        "checkedOn": "2026-11-04",
        "finding": "The official provision found concerns studded tires only. It does not verify truck-chain permissions, carry duties or placement."
      }
    ],
    "reviewStatus": "unresolved",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "The official provision found concerns studded tires only. It does not verify truck-chain permissions, carry duties or placement.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "MT",
    "name": "Montana",
    "roadUrl": "https://www.511mt.net/",
    "source": "https://mdt.mt.gov/travinfo/chains.aspx",
    "summary": "When activated, towing units must chain the driver wheels of one axle or use an approved alternative. Check the designated-area list.",
    "scope": "limited operational summary",
    "verifiedOn": "2026-11-04",
    "carry": "Towing units ≥26,001 GVW must carry chains/approved devices in areas where chains may be required, subject to the listed four-wheel-drive exception.",
    "season": "Carry: October 1–April 30 in designated areas. Chain-use orders can occur year-round.",
    "configuration": "Towing units; do not apply this summary’s exception to an ordinary highway tractor without verifying applicability.",
    "note": "",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Carry, installation, season, configuration, exemptions and active orders have not all been reconciled against operative primary sources.",
    "fieldReview": {
      "carry": {
        "status": "limited",
        "source": "https://mdt.mt.gov/travinfo/chains.aspx"
      },
      "season": {
        "status": "limited",
        "source": "https://mdt.mt.gov/travinfo/chains.aspx"
      },
      "configuration": {
        "status": "limited",
        "source": "https://mdt.mt.gov/travinfo/chains.aspx"
      },
      "installation": {
        "status": "limited",
        "source": "https://mdt.mt.gov/travinfo/chains.aspx"
      }
    }
  },
  {
    "code": "NE",
    "name": "Nebraska",
    "roadUrl": "https://511.nebraska.gov/",
    "source": "https://dot.nebraska.gov/safety/winter/",
    "summary": "NDOT describes proportionate chains as permissible when slippery conditions require them for safety.",
    "scope": "permission excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "NV",
    "name": "Nevada",
    "roadUrl": "https://www.nvroads.com/",
    "source": "https://www.leg.state.nv.us/Division/Legal/LawLibrary/NRS/NRS-484D.html",
    "summary": "NRS 484D.515–.520 require the posted traction equipment; under the described control, vehicles/combinations over 10,000 lb require chains.",
    "scope": "limited operational summary",
    "verifiedOn": "2026-11-04",
    "carry": "Seasonal/configuration-specific carry provisions require additional review; do not assume none.",
    "season": "Posted icy/snowy-road controls apply; fixed carry dates are not established here.",
    "configuration": "Use NDOT’s current vehicle-specific placement guidance, including trailer braking-wheel requirements; this statute excerpt does not specify every tire position.",
    "note": "",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Carry, installation, season, configuration, exemptions and active orders have not all been reconciled against operative primary sources.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": "https://www.leg.state.nv.us/Division/Legal/LawLibrary/NRS/NRS-484D.html"
      },
      "season": {
        "status": "unresolved",
        "source": "https://www.leg.state.nv.us/Division/Legal/LawLibrary/NRS/NRS-484D.html"
      },
      "configuration": {
        "status": "limited",
        "source": "https://www.leg.state.nv.us/Division/Legal/LawLibrary/NRS/NRS-484D.html"
      },
      "installation": {
        "status": "limited",
        "source": "https://www.leg.state.nv.us/Division/Legal/LawLibrary/NRS/NRS-484D.html"
      }
    }
  },
  {
    "code": "NH",
    "name": "New Hampshire",
    "roadUrl": "https://newengland511.org/",
    "source": null,
    "summary": "Commercial chain requirements have not been verified for this state. Consult the official transportation/enforcement agency before travel.",
    "scope": "unverified",
    "verifiedOn": null,
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Saf-C 1313.21 permits chains for school buses. That is not sufficient evidence for general commercial tractor-trailer rules.",
    "researchLeads": [
      {
        "url": "https://gc.nh.gov/rules/state_agencies/saf-c1300.html",
        "checkedOn": "2026-11-04",
        "finding": "Saf-C 1313.21 permits chains for school buses. That is not sufficient evidence for general commercial tractor-trailer rules."
      }
    ],
    "reviewStatus": "unresolved",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Saf-C 1313.21 permits chains for school buses. That is not sufficient evidence for general commercial tractor-trailer rules.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "NJ",
    "name": "New Jersey",
    "roadUrl": "https://511nj.org/",
    "source": null,
    "summary": "Commercial chain requirements have not been verified for this state. Consult the official transportation/enforcement agency before travel.",
    "scope": "unverified",
    "verifiedOn": null,
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Official statute-search results were found for tire equipment, but the operative chain-specific §39:3-73 text was not retrieved. Need the current official provision and emergency-route rules.",
    "researchLeads": [
      {
        "url": "https://www.njleg.state.nj.us/",
        "checkedOn": "2026-11-04",
        "finding": "Official statute-search results were found for tire equipment, but the operative chain-specific §39:3-73 text was not retrieved. Need the current official provision and emergency-route rules."
      }
    ],
    "reviewStatus": "unresolved",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Official statute-search results were found for tire equipment, but the operative chain-specific §39:3-73 text was not retrieved. Need the current official provision and emergency-route rules.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "NM",
    "name": "New Mexico",
    "roadUrl": "https://nmroads.com/",
    "source": null,
    "summary": "Commercial chain requirements have not been verified for this state. Consult the official transportation/enforcement agency before travel.",
    "scope": "unverified",
    "verifiedOn": null,
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Secondary §66-3-847 text was located, but no usable operative official text was retrieved. Need official current text and any posted commercial restrictions.",
    "researchLeads": [
      {
        "url": "https://nmonesource.com/",
        "checkedOn": "2026-11-04",
        "finding": "Secondary §66-3-847 text was located, but no usable operative official text was retrieved. Need official current text and any posted commercial restrictions."
      }
    ],
    "reviewStatus": "unresolved",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Secondary §66-3-847 text was located, but no usable operative official text was retrieved. Need official current text and any posted commercial restrictions.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "NY",
    "name": "New York",
    "roadUrl": "https://511ny.org/",
    "source": "https://www.nysenate.gov/legislation/laws/VAT/145-C",
    "summary": "VAT §145-c defines signed snow-emergency routes where snow tires and/or chains are required during a declared snow emergency. Confirm the specific declaration and vehicle restrictions before travel.",
    "scope": "limited statutory excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "This excerpt does not establish every commercial carry, placement or emergency restriction. Verify the remaining fields with the responsible agency.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "This excerpt does not establish every commercial carry, placement or emergency restriction. Verify the remaining fields with the responsible agency.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "NC",
    "name": "North Carolina",
    "roadUrl": "https://drivenc.gov/",
    "source": "https://library.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_20/GS_20-122.html",
    "summary": "20-122 permits proportionate chains for snow, ice and other skid-producing conditions.",
    "scope": "permission excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "ND",
    "name": "North Dakota",
    "roadUrl": "https://travel.dot.nd.gov/",
    "source": "https://www.statepatrol.nd.gov/NDHPFAQ",
    "summary": "North Dakota Highway Patrol states there is no mandatory chain law. This does not mean a closed highway is open or that conditions are safe.",
    "scope": "limited operational summary",
    "verifiedOn": "2026-11-04",
    "carry": "No mandatory chain law identified in the reviewed patrol FAQ.",
    "season": "Studded-tire dates are a different topic; do not use them as chain-use dates.",
    "configuration": "No commercial chain placement pattern established by this FAQ.",
    "note": "",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Carry, installation, season, configuration, exemptions and active orders have not all been reconciled against operative primary sources.",
    "fieldReview": {
      "carry": {
        "status": "limited",
        "source": "https://www.statepatrol.nd.gov/NDHPFAQ"
      },
      "season": {
        "status": "limited",
        "source": "https://www.statepatrol.nd.gov/NDHPFAQ"
      },
      "configuration": {
        "status": "limited",
        "source": "https://www.statepatrol.nd.gov/NDHPFAQ"
      },
      "installation": {
        "status": "limited",
        "source": "https://www.statepatrol.nd.gov/NDHPFAQ"
      }
    }
  },
  {
    "code": "OH",
    "name": "Ohio",
    "roadUrl": "https://ohgo.com/",
    "source": "https://codes.ohio.gov/ohio-revised-code/section-5589.081",
    "summary": "5589.081 excludes chain use from that section’s studded-tire restrictions when snow/ice is present on the roadway or nearby.",
    "scope": "permission excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "OK",
    "name": "Oklahoma",
    "roadUrl": "https://oktraffic.org/",
    "source": null,
    "summary": "Commercial chain requirements have not been verified for this state. Consult the official transportation/enforcement agency before travel.",
    "scope": "unverified",
    "verifiedOn": null,
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Official §47-12-405 includes two-ton and November–April qualifications. Do not assert unrestricted heavy-truck permission without resolving their applicability.",
    "researchLeads": [
      {
        "url": "https://govt.westlaw.com/okjc/Document/ND74D6D70EE6711EBAEBABD965111B44B?viewType=FullText",
        "checkedOn": "2026-11-04",
        "finding": "Official §47-12-405 includes two-ton and November–April qualifications. Do not assert unrestricted heavy-truck permission without resolving their applicability."
      }
    ],
    "reviewStatus": "unresolved",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Official §47-12-405 includes two-ton and November–April qualifications. Do not assert unrestricted heavy-truck permission without resolving their applicability.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "OR",
    "name": "Oregon",
    "roadUrl": "https://www.tripcheck.com/",
    "source": "https://www.oregon.gov/odot/mct/pages/chains-and-traction-tires.aspx",
    "summary": "Observe carry/use signs. Conditional closures may impose stricter requirements than normal chain-control categories.",
    "scope": "limited operational summary",
    "verifiedOn": "2026-11-04",
    "carry": "Carry the correct type, size and number where signed.",
    "season": "Weather/sign-based requirements; this summary does not establish a fixed statewide carry season.",
    "configuration": "Example only: a ≥26,001 lb tandem-drive tractor/semitrailer uses four drive-tire chains under the allowed drive-axle patterns, plus two on one semitrailer axle, one each side. Other combinations differ.",
    "note": "",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Carry, installation, season, configuration, exemptions and active orders have not all been reconciled against operative primary sources.",
    "fieldReview": {
      "carry": {
        "status": "limited",
        "source": "https://www.oregon.gov/odot/mct/pages/chains-and-traction-tires.aspx"
      },
      "season": {
        "status": "limited",
        "source": "https://www.oregon.gov/odot/mct/pages/chains-and-traction-tires.aspx"
      },
      "configuration": {
        "status": "limited",
        "source": "https://www.oregon.gov/odot/mct/pages/chains-and-traction-tires.aspx"
      },
      "installation": {
        "status": "limited",
        "source": "https://www.oregon.gov/odot/mct/pages/chains-and-traction-tires.aspx"
      }
    }
  },
  {
    "code": "PA",
    "name": "Pennsylvania",
    "roadUrl": "https://511pa.com/",
    "source": "https://www.palegis.us/statutes/consolidated/view-statute?chpt=45&div=0&iFrame=true&sctn=25&subsctn=0&ttl=75&txtType=HTM",
    "summary": "75 §4525 allows temporary chain use in snow/ice emergencies subject to department regulations. Emergency tier restrictions need separate review.",
    "scope": "permission excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "RI",
    "name": "Rhode Island",
    "roadUrl": "https://dot.ri.gov/travel/wazetravel.php",
    "source": "https://webserver.rilegislature.gov/Statutes/TITLE31/31-23/31-23-20.HTM",
    "summary": "31-23-20 permits proportionate chains for safety in snow, ice or skid-producing conditions.",
    "scope": "permission excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "SC",
    "name": "South Carolina",
    "roadUrl": "https://www.511sc.org/",
    "source": "https://www.scstatehouse.gov/code/t56c005.php",
    "summary": "Current §56-5-5040 permits appropriately proportioned chains for snow, ice or skid-producing conditions. This permission does not establish the absence of carry, placement or emergency rules.",
    "scope": "limited statutory excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "This is a limited source review, not a complete commercial chain-law determination. Other vehicle, route and emergency rules may apply.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "This is a limited source review, not a complete commercial chain-law determination. Other vehicle, route and emergency rules may apply.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "SD",
    "name": "South Dakota",
    "roadUrl": "https://sd511.org/",
    "source": "https://sdlegislature.gov/api/Statutes/32-19.html?all=true",
    "summary": "32-19-2 permits proportionate chains for safety; 32-19-3.1 authorizes signed weather-related travel restrictions.",
    "scope": "permission excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "TN",
    "name": "Tennessee",
    "roadUrl": "https://smartway.tn.gov/traffic",
    "source": null,
    "summary": "Commercial chain requirements have not been verified for this state. Consult the official transportation/enforcement agency before travel.",
    "scope": "unverified",
    "verifiedOn": null,
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Secondary §55-9-106(c) permission was located, but no operative primary text was retrieved. Need official current provision or agency confirmation.",
    "researchLeads": [
      {
        "url": "https://www.tn.gov/safety.html",
        "checkedOn": "2026-11-04",
        "finding": "Secondary §55-9-106(c) permission was located, but no operative primary text was retrieved. Need official current provision or agency confirmation."
      }
    ],
    "reviewStatus": "unresolved",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Secondary §55-9-106(c) permission was located, but no operative primary text was retrieved. Need official current provision or agency confirmation.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "TX",
    "name": "Texas",
    "roadUrl": "https://drivetexas.org/",
    "source": "https://tcss.legis.texas.gov/docs/TN/htm/TN.547.htm",
    "summary": "Transportation Code §547.612 permits proportionate tire chains when a skid-producing condition makes them necessary for safety.",
    "scope": "limited statutory excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "This excerpt does not establish every commercial carry, placement or emergency restriction. Verify the remaining fields with the responsible agency.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "This excerpt does not establish every commercial carry, placement or emergency restriction. Verify the remaining fields with the responsible agency.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "UT",
    "name": "Utah",
    "roadUrl": "https://udottraffic.utah.gov/",
    "source": "https://connect.udot.utah.gov/public/snow-tire-and-chain-up-requirements/",
    "summary": "UDOT determines when designated road segments require traction equipment. The public guidance describes traction devices on drive tires for heavy vehicles.",
    "scope": "limited operational summary",
    "verifiedOn": "2026-11-04",
    "carry": "Not established by this source review.",
    "season": "Weather and designated-segment controls; check the current R920-6 class and order.",
    "configuration": "For heavy-vehicle dual mountings, UDOT explains one tire per dual pair. Confirm the segment class, vehicle weight and applicable exceptions.",
    "note": "UDOT business and public summaries use slightly different weight/class wording; use the current rule/order for borderline cases.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "UDOT business and public summaries use slightly different weight/class wording; use the current rule/order for borderline cases.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": "https://connect.udot.utah.gov/public/snow-tire-and-chain-up-requirements/"
      },
      "season": {
        "status": "limited",
        "source": "https://connect.udot.utah.gov/public/snow-tire-and-chain-up-requirements/"
      },
      "configuration": {
        "status": "limited",
        "source": "https://connect.udot.utah.gov/public/snow-tire-and-chain-up-requirements/"
      },
      "installation": {
        "status": "limited",
        "source": "https://connect.udot.utah.gov/public/snow-tire-and-chain-up-requirements/"
      }
    }
  },
  {
    "code": "VT",
    "name": "Vermont",
    "roadUrl": "https://newengland511.org/",
    "source": "https://legislature.vermont.gov/statutes/section/23/013/01006c",
    "summary": "Officials may require chains on specified state highway sections in winter weather for vehicles exceeding 26,000 lb GVWR/GCWR. Posted notice activates the requirement.",
    "scope": "limited operational summary",
    "verifiedOn": "2026-11-04",
    "carry": "Not established as a separate seasonal carry duty by this section.",
    "season": "Posted winter-weather controls.",
    "configuration": "The law lists distinct solo, trailer and semitrailer patterns. Tandem-drive/semitrailer example: four drive chains under permitted patterns plus two on one semitrailer axle, one each side.",
    "note": "",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Carry, installation, season, configuration, exemptions and active orders have not all been reconciled against operative primary sources.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": "https://legislature.vermont.gov/statutes/section/23/013/01006c"
      },
      "season": {
        "status": "limited",
        "source": "https://legislature.vermont.gov/statutes/section/23/013/01006c"
      },
      "configuration": {
        "status": "limited",
        "source": "https://legislature.vermont.gov/statutes/section/23/013/01006c"
      },
      "installation": {
        "status": "limited",
        "source": "https://legislature.vermont.gov/statutes/section/23/013/01006c"
      }
    }
  },
  {
    "code": "VA",
    "name": "Virginia",
    "roadUrl": "https://511.vdot.virginia.gov/",
    "source": "https://law.lis.virginia.gov/vacode/title46.2/chapter10/section46.2-1044/",
    "summary": "46.2-1044 permits proportionate chains for safety in snow, ice or skid-producing conditions. Local snow-route duties require separate review.",
    "scope": "permission excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "WA",
    "name": "Washington",
    "roadUrl": "https://wsdot.com/Travel/Real-time/Map/",
    "source": "https://apps.leg.wa.gov/wac/default.aspx?cite=204-24-050",
    "summary": "Commercial chain placement is configuration-specific. Use WAC 204-24-050 and the WSDOT diagram; passenger-vehicle exceptions do not establish a truck exemption.",
    "scope": "limited operational summary",
    "verifiedOn": "2026-11-04",
    "carry": "Vehicles/combinations over 10,000 lb GVWR on listed routes must carry sufficient chains, including required spare chains under the rule.",
    "season": "November 1–April 1 on the routes listed in the rule, and other times when required.",
    "configuration": "The rule provides separate solo, trailer and tandem-drive patterns; do not infer placement from axle count alone.",
    "note": "Other WSDOT summary pages use differing season wording. This entry uses the regulation; check its current route list and exceptions.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Other WSDOT summary pages use differing season wording. This entry uses the regulation; check its current route list and exceptions.",
    "fieldReview": {
      "carry": {
        "status": "limited",
        "source": "https://apps.leg.wa.gov/wac/default.aspx?cite=204-24-050"
      },
      "season": {
        "status": "limited",
        "source": "https://apps.leg.wa.gov/wac/default.aspx?cite=204-24-050"
      },
      "configuration": {
        "status": "limited",
        "source": "https://apps.leg.wa.gov/wac/default.aspx?cite=204-24-050"
      },
      "installation": {
        "status": "limited",
        "source": "https://apps.leg.wa.gov/wac/default.aspx?cite=204-24-050"
      }
    }
  },
  {
    "code": "WV",
    "name": "West Virginia",
    "roadUrl": "https://wv511.org/",
    "source": "https://code.wvlegislature.gov/17c-15-37/",
    "summary": "17C-15-37 permits proportionate chains for safety in snow, ice or skid-producing conditions.",
    "scope": "permission excerpt",
    "verifiedOn": "2026-11-04",
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Permission to use chains is not proof that no carry, installation or emergency restriction applies. Full commercial requirements remain unverified.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "WI",
    "name": "Wisconsin",
    "roadUrl": "https://511wi.gov/",
    "source": null,
    "summary": "Commercial chain requirements have not been verified for this state. Consult the official transportation/enforcement agency before travel.",
    "scope": "unverified",
    "verifiedOn": null,
    "carry": null,
    "season": null,
    "configuration": null,
    "note": "Official §347.45 page was inaccessible to the research tool. Secondary text was not promoted; obtain a readable current official copy.",
    "researchLeads": [
      {
        "url": "https://docs.legis.wisconsin.gov/statutes/statutes/347/iii/45",
        "checkedOn": "2026-11-04",
        "finding": "Official §347.45 page was inaccessible to the research tool. Secondary text was not promoted; obtain a readable current official copy."
      }
    ],
    "reviewStatus": "unresolved",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Official §347.45 page was inaccessible to the research tool. Secondary text was not promoted; obtain a readable current official copy.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": null
      },
      "season": {
        "status": "unresolved",
        "source": null
      },
      "configuration": {
        "status": "unresolved",
        "source": null
      },
      "installation": {
        "status": "unresolved",
        "source": null
      }
    }
  },
  {
    "code": "WY",
    "name": "Wyoming",
    "roadUrl": "https://map.wyoroad.info/511-map/",
    "source": "https://www.dot.state.wy.us/home/travel/winter/chain_law.html",
    "summary": "Level 2 requires commercial vehicles to chain at least two drive wheels, one at each end of the same drive axle. Do not stop in a travel lane to chain up.",
    "scope": "limited operational summary",
    "verifiedOn": "2026-11-04",
    "carry": "Not established by this source review.",
    "season": "Restrictions activated on specific highway sections when conditions warrant.",
    "configuration": "Commercial-vehicle Level 2 example only; closures and instructions may further restrict travel.",
    "note": "",
    "reviewStatus": "limited",
    "reviewAttemptOn": "2026-11-04",
    "fullyReviewed": false,
    "reviewBlocker": "Carry, installation, season, configuration, exemptions and active orders have not all been reconciled against operative primary sources.",
    "fieldReview": {
      "carry": {
        "status": "unresolved",
        "source": "https://www.dot.state.wy.us/home/travel/winter/chain_law.html"
      },
      "season": {
        "status": "limited",
        "source": "https://www.dot.state.wy.us/home/travel/winter/chain_law.html"
      },
      "configuration": {
        "status": "limited",
        "source": "https://www.dot.state.wy.us/home/travel/winter/chain_law.html"
      },
      "installation": {
        "status": "limited",
        "source": "https://www.dot.state.wy.us/home/travel/winter/chain_law.html"
      }
    }
  }
];
root.HubChainRegulations=data;if(typeof module!=="undefined")module.exports=data;
})(typeof window!=="undefined"?window:globalThis);
