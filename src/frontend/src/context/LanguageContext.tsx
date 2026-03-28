import { createContext, useContext, useState } from "react";

type Lang = "en" | "ml";

const translations = {
  en: {
    heroTitle: "Welcome to BioCare Pest & Termite Solutions",
    heroSubtitle:
      "Professional pest control and termite pre-construction treatment for homes, hotels, restaurants, offices, hospitals, and construction sites across Thiruvananthapuram.",
    ourServices: "Our Services",
    bookFreeInspection: "Book Free Inspection",
    customerReviews: "Customer Reviews",
    contactBiocare: "Contact BioCare",
    getInTouch: "Get in Touch",
    heroCta: "Request a Free Inspection",
    whatsappUs: "WhatsApp Us",
    langToggle: "ML",

    // Services page
    servicesPageTitle: "Our Pest & Termite Control Services",
    servicesPageSubtitle:
      "Complete pest and termite protection for homes, hotels, restaurants, offices, hospitals, and new construction sites.",
    servicesReadyTitle: "Ready to get started?",
    servicesReadyDesc:
      "Contact us for a free site inspection and quotation within 24 hours.",
    whyChooseEcocare: "Why choose EcoCare?",
    serviceTypes: "Service types:",
    fullDetails: "Full Details",
    fullDetailsPricing: "Full Details & Pricing",
    generalTitle: "General Pest Control",
    generalSubtitle: "Home & Commercial Pest Control",
    generalDesc: "We control common pests including:",
    generalBullets: [
      "Cockroaches",
      "Ants",
      "Spiders",
      "Bed bugs",
      "Lizards",
      "Rodents (rats and mice)",
      "Mosquitoes and flies",
    ],
    generalServiceTypes: [
      "One-time complete pest treatment",
      "Monthly or quarterly AMC for homes, offices, and commercial buildings",
      "Eco-friendly / low-toxicity options available for hotels, restaurants, and family homes",
    ],
    termiteTitle: "Termite Pre-Construction Treatment",
    termiteSubtitleShort: "For New Construction Sites",
    termiteDesc:
      "Professional termite pre-construction treatment for new buildings, done before the concrete slab is cast to protect for up to 10 years.",
    termiteBullets: [
      "Soil treatment around foundation, plinth, and under the slab using IS-approved termiticides",
      "Detailed treatment certificate for builders, banks, and loan applications",
      "Suitable for individual houses, villas, apartments, hotels, and commercial complexes",
      "Optional eco-friendly barrier and monitoring methods in our EcoCare package",
    ],
    hotelTitle: "Hotel & Restaurant Pest Control",
    hotelSubtitle: "Specialised Hospitality Services",
    hotelDesc: "We cover:",
    hotelBullets: [
      "Kitchens, storage areas, and food-preparation zones",
      "Dining halls, guest rooms, bathrooms, and lobbies",
      "Drains, utility areas, and outdoor spaces",
      "Regular inspection and treatment to meet hygiene and audit standards",
    ],
    hotelServiceTypes: [
      "Monthly pest control AMC for hotels and restaurants",
      "Quarterly or bi-monthly inspection and treatment plans",
      "Eco-friendly / low-chemical options for sensitive kitchen and guest areas",
    ],
    ecocareTitle: "EcoCare – Eco-Friendly Pest Control",
    ecocareSubtitle: "Low-Toxicity Treatment Options",
    ecocareDesc: "Techniques include:",
    ecocareBullets: [
      "Neem-based and botanical insecticide sprays",
      "Silica / diatomaceous earth (DE) dust for ant and cockroach areas",
      "Sticky traps, pheromone traps, and monitoring devices",
      "Non-chemical measures such as sealing, sanitation, and exclusion",
    ],
    ecocareServiceTypes: [
      "Less chemical exposure for guests, staff, and families",
      "Suitable for children's areas, hospitals, and kitchens",
      "Can be combined with minimal chemical treatment for maximum effectiveness",
    ],

    // About page
    aboutTitle: "About BioCare Pest & Termite Solutions",
    aboutSubtitle:
      "Based in Thiruvananthapuram (Trivandrum), Kerala. We specialise in protecting homes, hotels, restaurants, offices, hospitals, and new construction sites from pests and termites.",
    ourMission: "Our Mission",
    missionText:
      "To provide safe, effective, and affordable pest and termite control services using modern techniques, trained technicians, and both chemical and eco-friendly options — giving our clients peace of mind and a pest-free environment.",
    servicesWeOffer: "Services We Offer",
    servicesListItems: [
      "General pest control for homes and commercial properties",
      "Termite pre-construction treatment for new buildings",
      "Hotel and restaurant pest-control AMC",
      "EcoCare eco-friendly low-toxicity treatments",
      "Rodent, cockroach, ant, bed bug, lizard, and mosquito control",
    ],
    whyTrustBiocare: "Why Trust BioCare?",
    licensedLabel: "Licensed & Trained Technicians",
    licensedText:
      "Our pest control technicians are fully licensed, trained, and insured to carry out all treatments safely.",
    approvedLabel: "IS-Approved Chemicals",
    approvedText:
      "We use only IS-approved and government-recommended chemicals for all pest and termite treatments.",
    transparentLabel: "Transparent Pricing",
    transparentText:
      "Clear documentation and transparent pricing with no hidden charges — we explain everything upfront.",
    quickLabel: "Quick Response",
    quickText:
      "Free inspection within 24 hours in Thiruvananthapuram and nearby areas. We value your time.",

    // Termite page
    termitePageBadge: "New Construction Protection",
    termitePageTitle: "Termite Pre-Construction Treatment",
    termitePageSubtitle:
      "Thiruvananthapuram — Protect your new building from termites with professional pre-construction treatment.",
    getFreeInspection: "Get Free Inspection",
    howItWorks: "How It Works",
    step1Title: "1. Site Inspection",
    step1Desc:
      "Our technician checks soil condition, moisture, drainage, and nearby vegetation.",
    step2Title: "2. Soil Treatment",
    step2Desc:
      "IS-approved termiticide applied around the foundation, plinth, and under the slab before concrete casting.",
    step3Title: "3. Documentation",
    step3Desc:
      "You receive a treatment certificate showing treated area, date, and protection period — typically 10 years.",
    idealFor: "Ideal For",
    idealForItems: [
      "Individual Houses & Villas",
      "Apartments & Commercial Complexes",
      "Hotels & Resorts",
      "Hospitals & Offices",
    ],
    ecoFriendlyAddons: "Eco-Friendly Add-ons",
    ecoAddonItems: [
      "Physical barriers (mesh, sealing)",
      "Monitoring traps and non-chemical inspection methods",
      "Reduced chemical load with smart application",
    ],
    locationsWeServe: "Locations We Serve",
    locationsText:
      "We serve Thiruvananthapuram city and nearby suburbs including all major residential areas, townships, and construction zones.",
  },
  ml: {
    heroTitle: "ബയോകെയർ പെസ്റ്റ് & ടെർമൈറ്റ് സൊല്യൂഷൻസിലേക്ക് സ്വാഗതം",
    heroSubtitle:
      "തിരുവനന്തപുരത്തിലെ വീടുകൾ, ഹോട്ടലുകൾ, റസ്റ്റോറന്റുകൾ, ഓഫീസുകൾ, ആശുപത്രികൾ, നിർമ്മാണ സൈറ്റുകൾ എന്നിവയ്ക്കുള്ള പ്രൊഫഷണൽ കീടനിയന്ത്രണ ചികിത്സ.",
    ourServices: "ഞങ്ങളുടെ സേവനങ്ങൾ",
    bookFreeInspection: "ഫ്രീ ഇൻസ്പെക്ഷൻ ബുക്ക് ചെയ്യുക",
    customerReviews: "കസ്റ്റമർ റിവ്യൂകൾ",
    contactBiocare: "ബയോകെയർ ബന്ധപ്പെടുക",
    getInTouch: "ബന്ധപ്പെടുക",
    heroCta: "ഫ്രീ ഇൻസ്പെക്ഷൻ അഭ്യർത്ഥിക്കുക",
    whatsappUs: "വാട്സ്ആപ്പ് ചെയ്യുക",
    langToggle: "EN",

    // Services page
    servicesPageTitle: "ഞങ്ങളുടെ കീട & ടെർമൈറ്റ് നിയന്ത്രണ സേവനങ്ങൾ",
    servicesPageSubtitle:
      "വീടുകൾ, ഹോട്ടലുകൾ, റസ്റ്റോറന്റുകൾ, ഓഫീസുകൾ, ആശുപത്രികൾ, നിർമ്മാണ സൈറ്റുകൾ എന്നിവയ്ക്ക് സമ്പൂർണ്ണ കീടനിയന്ത്രണ സംരക്ഷണം.",
    servicesReadyTitle: "തുടങ്ങാൻ തയ്യാറാണോ?",
    servicesReadyDesc:
      "24 മണിക്കൂറിനുള്ളിൽ സൗജന്യ സൈറ്റ് പരിശോധനയ്ക്കും ഉദ്ധരണിക്കും ഞങ്ങളെ ബന്ധപ്പെടുക.",
    whyChooseEcocare: "എന്തുകൊണ്ട് ഇക്കോകെയർ തിരഞ്ഞെടുക്കണം?",
    serviceTypes: "സേവന തരങ്ങൾ:",
    fullDetails: "പൂർണ്ണ വിവരങ്ങൾ",
    fullDetailsPricing: "പൂർണ്ണ വിവരങ്ങളും വിലനിർണ്ണയവും",
    generalTitle: "പൊതു കീടനിയന്ത്രണം",
    generalSubtitle: "വീട്ടിലും വ്യാവസായിക കീടനിയന്ത്രണം",
    generalDesc: "ഞങ്ങൾ നിയന്ത്രിക്കുന്ന സാധാരണ കീടങ്ങൾ:",
    generalBullets: [
      "പാറ്റകൾ",
      "ഉറുമ്പുകൾ",
      "ചിലന്തികൾ",
      "മൂട്ട",
      "പല്ലി",
      "എലി (എലിയും ഇലിയും)",
      "കൊതുകും ഈച്ചയും",
    ],
    generalServiceTypes: [
      "ഒറ്റത്തവണ സമ്പൂർണ്ണ കീടചികിത്സ",
      "വീടുകൾ, ഓഫീസുകൾ, വ്യാവസായിക കെട്ടിടങ്ങൾക്ക് മാസത്തിലൊരിക്കൽ അല്ലെങ്കിൽ ത്രൈമാസ AMC",
      "ഹോട്ടലുകൾ, റസ്റ്റോറന്റുകൾ, കുടുംബ വീടുകൾക്ക് ഇക്കോ-ഫ്രണ്ട്‌ലി / കുറഞ്ഞ വിഷ ഓപ്ഷനുകൾ",
    ],
    termiteTitle: "ടെർമൈറ്റ് പ്രീ-കൺസ്ട്രക്ഷൻ ചികിത്സ",
    termiteSubtitleShort: "പുതിയ നിർമ്മാണ സൈറ്റുകൾക്ക്",
    termiteDesc:
      "കോൺക്രീറ്റ് സ്ലാബ് ഇടുന്നതിന് മുമ്പ് 10 വർഷം വരെ സംരക്ഷിക്കുന്ന പ്രൊഫഷണൽ ടെർമൈറ്റ് പ്രീ-കൺസ്ട്രക്ഷൻ ചികിത്സ.",
    termiteBullets: [
      "IS-അംഗീകൃത ടെർമിറ്റൈഡ് ഉപയോഗിച്ച് അടിത്തറ, പ്ലിൻത്ത്, സ്ലാബിന് കീഴ് എന്നിവയ്ക്ക് ചുറ്റും മണ്ണ് ചികിത്സ",
      "ബിൽഡർ, ബാങ്ക്, ലോൺ അപ്ലിക്കേഷനുകൾക്കായി വിശദമായ ചികിത്സ സർട്ടിഫിക്കറ്റ്",
      "ഒറ്റ വീടുകൾ, വില്ലകൾ, അപ്പാർട്ട്‌മെന്റുകൾ, ഹോട്ടലുകൾ, വ്യാവസായിക സമുച്ചയങ്ങൾക്ക് അനുയോജ്യം",
      "ഞങ്ങളുടെ ഇക്കോകെയർ പാക്കേജിൽ ഓപ്ഷണൽ ഇക്കോ-ഫ്രണ്ട്‌ലി ബാരിയർ, മോണിറ്ററിംഗ് രീതികൾ",
    ],
    hotelTitle: "ഹോട്ടൽ & റസ്റ്റോറന്റ് കീടനിയന്ത്രണം",
    hotelSubtitle: "ആതിഥ്യ സേവനങ്ങൾ",
    hotelDesc: "ഞങ്ങൾ ഉൾക്കൊള്ളുന്നത്:",
    hotelBullets: [
      "അടുക്കളകൾ, സ്റ്റോറേജ് ഏരിയകൾ, ഭക്ഷണം തയ്യാറാക്കുന്ന സ്ഥലങ്ങൾ",
      "ഡൈനിംഗ് ഹാളുകൾ, ഗസ്റ്റ് റൂമുകൾ, ബാത്ത്‌റൂമുകൾ, ലോബികൾ",
      "ഡ്രെയിനുകൾ, യൂട്ടിലിറ്റി ഏരിയകൾ, ഔട്ട്ഡോർ സ്ഥലങ്ങൾ",
      "ശുചിത്വ, ഓഡിറ്റ് മാനദണ്ഡങ്ങൾ പാലിക്കാൻ പതിവ് പരിശോധനയും ചികിത്സയും",
    ],
    hotelServiceTypes: [
      "ഹോട്ടലുകൾക്കും റസ്റ്റോറന്റുകൾക്കും മാസ്ക കീടനിയന്ത്രണ AMC",
      "ത്രൈമാസ അല്ലെങ്കിൽ ദ്വൈമാസ പരിശോധന, ചികിത്സ പദ്ധതികൾ",
      "സെൻസിറ്റീവ് അടുക്കള, ഗസ്റ്റ് ഏരിയകൾക്ക് ഇക്കോ-ഫ്രണ്ട്‌ലി ഓപ്ഷനുകൾ",
    ],
    ecocareTitle: "ഇക്കോകെയർ – പ്രകൃതിസൌഹൃദ കീടനിയന്ത്രണം",
    ecocareSubtitle: "കുറഞ്ഞ വിഷ ചികിത്സ ഓപ്ഷനുകൾ",
    ecocareDesc: "സാങ്കേതിക വിദ്യകൾ:",
    ecocareBullets: [
      "വേപ്പ് അടിസ്ഥാനമാക്കിയ സസ്യ കീടനാശിനി സ്പ്രേകൾ",
      "ഉറുമ്പ്, പാറ്റ ഏരിയകൾക്ക് ഡയറ്റൊം ഭൂമി (DE) പൊടി",
      "സ്റ്റിക്കി ട്രാപ്പുകൾ, ഫെറോമോൺ ട്രാപ്പുകൾ, മോണിറ്ററിംഗ് ഉപകരണങ്ങൾ",
      "സീലിംഗ്, ശുചിത്വം, ഒഴിവാക്കൽ തുടങ്ങിയ രാസരഹിത നടപടികൾ",
    ],
    ecocareServiceTypes: [
      "അതിഥികൾ, ജീവനക്കാർ, കുടുംബങ്ങൾക്ക് കുറഞ്ഞ രാസ സമ്പർക്കം",
      "കുട്ടികളുടെ ഇടങ്ങൾ, ആശുപത്രികൾ, അടുക്കളകൾക്ക് അനുയോജ്യം",
      "പരമാവധി ഫലപ്രാപ്തിക്ക് കുറഞ്ഞ രാസ ചികിത്സയുമായി സംയോജിപ്പിക്കാം",
    ],

    // About page
    aboutTitle: "ബയോകെയർ പെസ്റ്റ് & ടെർമൈറ്റ് സൊല്യൂഷൻസിനെ കുറിച്ച്",
    aboutSubtitle:
      "തിരുവനന്തപുരം (ട്രിവാൻഡ്രം), കേരള ആസ്ഥാനമായി. വീടുകൾ, ഹോട്ടലുകൾ, റസ്റ്റോറന്റുകൾ, ഓഫീസുകൾ, ആശുപത്രികൾ, നിർമ്മാണ സൈറ്റുകൾ എന്നിവ കീടങ്ങളിൽ നിന്ന് സംരക്ഷിക്കാൻ ഞങ്ങൾ വിദഗ്ദ്ധരാണ്.",
    ourMission: "ഞങ്ങളുടെ ദൗത്യം",
    missionText:
      "ആധുനിക സാങ്കേതിക വിദ്യകൾ, പരിശീലിപ്പിക്കപ്പെട്ട ടെക്‌നിഷ്യൻ, രാസ, ഇക്കോ-ഫ്രണ്ട്‌ലി ഓപ്ഷനുകൾ ഉപയോഗിച്ച് സുരക്ഷിതവും ഫലപ്രദവും താങ്ങാനാവുന്നതുമായ കീടനിയന്ത്രണ സേവനങ്ങൾ നൽകാൻ — ഞങ്ങളുടെ ഉപഭോക്താക്കൾക്ക് മനസ്സ് ശാന്തിയും കീടരഹിത പരിസ്ഥിതിയും നൽകാൻ.",
    servicesWeOffer: "ഞങ്ങൾ വാഗ്ദാനം ചെയ്യുന്ന സേവനങ്ങൾ",
    servicesListItems: [
      "വീടുകൾക്കും വ്യാവസായിക സ്വത്തുക്കൾക്കും പൊതു കീടനിയന്ത്രണം",
      "പുതിയ കെട്ടിടങ്ങൾക്ക് ടെർമൈറ്റ് പ്രീ-കൺസ്ട്രക്ഷൻ ചികിത്സ",
      "ഹോട്ടൽ, റസ്റ്റോറന്റ് കീടനിയന്ത്രണ AMC",
      "ഇക്കോകെയർ ഇക്കോ-ഫ്രണ്ട്‌ലി കുറഞ്ഞ വിഷ ചികിത്സ",
      "എലി, പാറ്റ, ഉറുമ്പ്, മൂട്ട, പല്ലി, കൊതുക് നിയന്ത്രണം",
    ],
    whyTrustBiocare: "എന്തുകൊണ്ട് ബയോകെയർ വിശ്വസിക്കണം?",
    licensedLabel: "ലൈസൻസ്ഡ് & പരിശീലിപ്പിക്കപ്പെട്ട ടെക്‌നിഷ്യൻ",
    licensedText:
      "ഞങ്ങളുടെ കീടനിയന്ത്രണ ടെക്‌നിഷ്യൻ സുരക്ഷിതമായ എല്ലാ ചികിത്സകളും നടത്താൻ പൂർണ്ണ ലൈസൻസ്, പരിശീലനം, ഇൻഷുറൻസ് ഉള്ളവർ.",
    approvedLabel: "IS-അംഗീകൃത രാസവസ്തുക്കൾ",
    approvedText:
      "എല്ലാ കീടം, ടെർമൈറ്റ് ചികിത്സകൾക്കും IS-അംഗീകൃത, സർക്കാർ ശുപാർശ ചെയ്ത രാസവസ്തുക്കൾ മാത്രം ഉപയോഗിക്കുന്നു.",
    transparentLabel: "സുതാര്യ വിലനിർണ്ണയം",
    transparentText:
      "മറഞ്ഞ ചാർജ് ഇല്ലാതെ വ്യക്തമായ രേഖകളും സുതാര്യ വിലനിർണ്ണയവും — എല്ലാം മുൻകൂർ വിശദീകരിക്കുന്നു.",
    quickLabel: "വേഗ പ്രതികരണം",
    quickText:
      "തിരുവനന്തപുരത്തും പരിസരത്തും 24 മണിക്കൂറിനുള്ളിൽ സൗജന്യ പരിശോധന. ഞങ്ങൾ നിങ്ങളുടെ സമയം വില മതിക്കുന്നു.",

    // Termite page
    termitePageBadge: "പുതിയ നിർമ്മാണ സംരക്ഷണം",
    termitePageTitle: "ടെർമൈറ്റ് പ്രീ-കൺസ്ട്രക്ഷൻ ചികിത്സ",
    termitePageSubtitle:
      "തിരുവനന്തപുരം — പ്രൊഫഷണൽ പ്രീ-കൺസ്ട്രക്ഷൻ ചികിത്സ ഉപയോഗിച്ച് നിങ്ങളുടെ പുതിയ കെട്ടിടം ടെർമൈറ്റ്കളിൽ നിന്ന് സംരക്ഷിക്കുക.",
    getFreeInspection: "സൗജന്യ പരിശോധന നേടുക",
    howItWorks: "ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു",
    step1Title: "1. സൈറ്റ് പരിശോധന",
    step1Desc:
      "ഞങ്ങളുടെ ടെക്‌നിഷ്യൻ മണ്ണിന്റെ അവസ്ഥ, ഈർപ്പം, ഡ്രെയിനേജ്, സമീപ സസ്യങ്ങൾ എന്നിവ പരിശോധിക്കുന്നു.",
    step2Title: "2. മണ്ണ് ചികിത്സ",
    step2Desc:
      "കോൺക്രീറ്റ് ഇടുന്നതിന് മുമ്പ് അടിത്തറ, പ്ലിൻത്ത്, സ്ലാബ് എന്നിവയ്ക്ക് ചുറ്റും IS-അംഗീകൃത ടെർമിറ്റൈഡ് ഉപയോഗിക്കുന്നു.",
    step3Title: "3. രേഖകൾ",
    step3Desc:
      "ചികിത്സ ചെയ്ത ഏരിയ, തീയതി, സംരക്ഷണ കാലയളവ് — സാധാരണ 10 വർഷം — കാണിക്കുന്ന ചികിത്സ സർട്ടിഫിക്കറ്റ് ലഭിക്കും.",
    idealFor: "അനുകൂലം",
    idealForItems: [
      "ഒറ്റ വീടുകൾ & വില്ലകൾ",
      "അപ്പാർട്ട്‌മെന്റുകൾ & വ്യാവസായിക സമുച്ചയങ്ങൾ",
      "ഹോട്ടലുകൾ & റിസോർട്ടുകൾ",
      "ആശുപത്രികൾ & ഓഫീസുകൾ",
    ],
    ecoFriendlyAddons: "ഇക്കോ-ഫ്രണ്ട്‌ലി ആഡ്-ഓണുകൾ",
    ecoAddonItems: [
      "ഭൗതിക തടസ്സങ്ങൾ (മെഷ്, സീലിംഗ്)",
      "മോണിറ്ററിംഗ് ട്രാപ്പുകളും രാസരഹിത പരിശോധന രീതികളും",
      "ബുദ്ധിസ്ഥിര ഉപയോഗം ഉപയോഗിച്ച് കുറഞ്ഞ രാസ ഭാരം",
    ],
    locationsWeServe: "ഞങ്ങൾ സേവിക്കുന്ന സ്ഥലങ്ങൾ",
    locationsText:
      "തിരുവനന്തപുരം നഗരവും, പ്രധാന റെസിഡൻഷ്യൽ ഏരിയകൾ, ടൗൺഷിപ്പുകൾ, നിർമ്മാണ മേഖലകൾ ഉൾപ്പെടുന്ന സമീപ പ്രദേശങ്ങളും ഞങ്ങൾ സേവിക്കുന്നു.",
  },
};

type Translations = typeof translations.en;

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggleLang = () => setLang((l) => (l === "en" ? "ml" : "en"));
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
