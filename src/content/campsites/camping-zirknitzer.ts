import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-zirknitzer";

const campingZirknitzer: CampsiteConfig = {
  name: "Camping Gasthof Zirknitzer",
  shortName: "Zirknitzer",
  slug: "camping-zirknitzer",
  ort: "Döllach, Großkirchheim",
  region: "Kärnten",
  brandKind: "Camping & Gasthof",
  regionLong: "Nationalpark Hohe Tauern · Kärnten · Österreich",

  heroVariant: "center",

  claim: "Am Ufer der Möll, mitten im Nationalpark Hohe Tauern",
  claimEmphasis: "mitten im Nationalpark",
  emailDetail: "euer Platz direkt am Glocknerradweg R8",
  intro:
    "Am Ortsrand von Döllach, am Ufer der kleinen Möll und mitten im Nationalpark Hohe Tauern liegt unser familiär geführter Campingplatz mit Gasthof, Hütten und Ferienhaus — 500 Meter ins Dorf, 300 Meter zur Freizeitanlage.",

  logo: { src: `${IMG}/logo-953cb4ec24.png`, alt: "Camping Gasthof Zirknitzer Logo" },

  statement: {
    text: "Bei uns campst du am Ufer der Möll — der Glocknerradweg R8 führt direkt am Platz vorbei.",
    emphasis: "am Ufer der Möll",
  },

  pillars: [
    {
      title: "Nationalpark vor der Haustür",
      text: "Der Campingplatz liegt inmitten des Nationalparks Hohe Tauern — Gletscher, Almwiesen und Gipfel beginnen direkt hinter dem Ortsrand.",
      image: { src: `${IMG}/gallery-4f7e5ae21c.webp`, alt: "Herbstliche Lärchen und verschneite Gipfel der Hohen Tauern bei den Mittner Almen" },
    },
    {
      title: "Hütten & Ferienhaus zum Mieten",
      text: "Wer es fester mag, übernachtet im gemütlichen Blockhaus, in der Hütte oder im Ferienhaus „Haus Julia“.",
      image: { src: `${IMG}/gallery-4324ea8fa7.webp`, alt: "Gemütliches Blockhaus zum Mieten bei Camping Zirknitzer" },
    },
    {
      title: "Familienbetrieb mit Gasthof",
      text: "Campingplatz, Gasthof, Restaurant und Ferienhaus — alles in einer Hand und persönlich geführt.",
      image: { src: `${IMG}/gallery-7c698f34de.webp`, alt: "Handgemaltes Schild „Camping Zirknitzer“ an der Hauswand" },
    },
  ],

  usps: [
    "Am Glocknerradweg R8",
    "Eigenes Restaurant",
    "Hütten & Ferienhaus",
    "Freibad gratis",
    "CEE-Stromanschlüsse",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Klein, familiär und mittendrin in den Bergen",
    headingEmphasis: "familiär",
    intro:
      "Seit Generationen führt Familie Zirknitzer Camping, Gasthof und Ferienhaus in Döllach persönlich. Ruhige Lage im Nationalpark, kurze Wege ins Dorf und zur Freizeitanlage — und das Freibad Großkirchheim ist für Gäste gratis.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-f9396d272a.webp`, alt: "Camping Zirknitzer: Wohnmobil und Zelte auf der Wiese vor den Bergen" },
  },

  breather: {
    image: { src: `${IMG}/gallery-cb21eed187.webp`, alt: "Abendrot über den verschneiten Gipfeln der Hohen Tauern" },
    line: "Wenn die Hohen Tauern im Abendlicht glühen.",
  },

  camping: {
    heading: "Camping am Ufer der Möll",
    intro:
      "Ebene Wiese, alter Baumbestand und der Fluss vor der Tür: Komfort-WC mit drei Familienbädern, Warmwasser, Waschmaschine, Trockner, chemische Entsorgung und überall Trinkwasser inklusive.",
    features: [
      {
        title: "Direkt am Glocknerradweg R8",
        text: "Der Radweg R8 — zugleich Wanderweg und Talroute des Alpe-Adria-Trails — führt unmittelbar am Platz vorbei.",
        image: { src: `${IMG}/gallery-e8a07e247d.webp`, alt: "Weg am Zaun des Campingplatzes entlang, dahinter die Berge" },
      },
      {
        title: "Mitten im Grünen",
        text: "Eingebettet zwischen Wiese, Wald und Berghängen am Ortsrand von Döllach — 500 Meter sind es ins Dorfzentrum.",
        image: { src: `${IMG}/gallery-687aadab17.webp`, alt: "Blick über den begrünten Campingplatz Zirknitzer mit Hütten und Zelten" },
      },
    ],
  },

  mobilheime: {
    heading: "Unsere Unterkünfte zum Mieten",
    intro:
      "Lieber ein festes Dach? Wir vermieten Komfortzimmer, zwei Hütten und das Ferienhaus „Haus Julia“ — alle direkt am Platz.",
    items: [
      {
        name: "Ferienhaus „Haus Julia“",
        kind: "Ferienhaus für 2–4 Personen",
        text: "Eigenes kleines Ferienhaus mit Wohnküche, Schlafzimmer und Bad — ideal für Familien, die mehr Raum möchten.",
        image: { src: `${IMG}/gallery-f64b28d8ff.webp`, alt: "Ferienhaus Haus Julia am Camping Zirknitzer" },
        priceFrom: 100,
        features: ["2–4 Personen", "Wohnküche", "Eigenes Bad & WC"],
      },
      {
        name: "Trekkinghütte",
        kind: "Blockhaus für 2–4 Personen",
        text: "Urige Blockhütte mit kleiner Küche und überdachter Terrasse — mitten im Grünen am Platzrand.",
        image: { src: `${IMG}/gallery-36cc33aafa.webp`, alt: "Trekkinghütte aus Holz mit überdachter Terrasse am Camping Zirknitzer" },
        features: ["2–4 Personen", "Kleine Küche", "Eigene Terrasse"],
      },
      {
        name: "Übernachtungshütte",
        kind: "Hütte für 2 Personen",
        text: "Gemütliche, ganz in Holz gehaltene Stube mit zwei Schlafplätzen — einfach und urig für eine kurze Auszeit.",
        image: { src: `${IMG}/gallery-4337b2c2b9.webp`, alt: "Holzvertäfelte Übernachtungshütte mit zwei Betten am Camping Zirknitzer" },
        features: ["2 Personen", "Gemütliche Holzstube"],
      },
      {
        name: "Komfortzimmer",
        kind: "Doppelzimmer mit Dusche/WC",
        text: "Drei Komfortzimmer mit Dusche/WC oder Badewanne, Sat-TV und Radio — bequem direkt beim Gasthof.",
        image: { src: `${IMG}/accommodation-bfe05e7e0d.webp`, alt: "Komfortzimmer mit Doppelbett am Camping Gasthof Zirknitzer" },
        priceFrom: 90,
        features: ["Dusche/WC oder Bad", "Sat-TV", "Radio"],
      },
    ],
  },

  kinder: {
    heading: "Wasserspaß an der Freizeitanlage",
    intro:
      "Nur rund 300 Meter entfernt liegt die Sport- und Freizeitanlage Großkirchheim — das Freibad ist für unsere Gäste gratis.",
    features: [
      {
        title: "Naturschwimmbad mit Sprungturm & Rutsche",
        text: "Schwimmen im Naturbad mit Springturm und Rutsche — dazu Kletterturm und ein großer Kinderspielplatz.",
        image: { src: `${IMG}/gallery-f3055a134e.webp`, alt: "Naturschwimmbad mit Kletterturm an der Freizeitanlage Großkirchheim" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um den Großglockner",
    intro:
      "Wandern, Radfahren, der Großglockner und im Winter Langlauf und Schlittenfahrten — der Nationalpark beginnt direkt vor dem Vorzelt.",
    items: [
      {
        title: "Wandern & Bergsteigen",
        text: "Wege für Anfänger, Familien und Profis — von gemütlichen Tälern bis hinauf zu klaren Bergseen.",
        image: { src: `${IMG}/gallery-05ff7ce7fb.webp`, alt: "Wanderer an einem Bergsee in den Hohen Tauern" },
      },
      {
        title: "Großglockner Hochalpenstraße",
        text: "Ein Naturerlebnis für die ganze Familie: hinauf zur Pasterze und zum höchsten Berg Österreichs.",
        image: { src: `${IMG}/gallery-3172f359a7.webp`, alt: "Glocknerblick-Aussichtsterrasse an der Großglockner Hochalpenstraße mit verschneitem Gipfelpanorama" },
      },
      {
        title: "Schluchten & Wasserfälle",
        text: "Der Zirknitzbach bildet eine imposante Schlucht — rund um den Park rauschen zahlreiche Wasserfälle.",
        image: { src: `${IMG}/gallery-67e4118f77.webp`, alt: "Eingang der Zirknitzgrotte mit historischem Arsenik-Röstofen in der Zirknitzschlucht" },
      },
      {
        title: "Winterzauber",
        text: "Langlaufen, geräumte Wanderwege, Eislaufen, Schneeschuhwandern, Rodeln und Pferdeschlittenfahrten.",
        image: { src: `${IMG}/gallery-11b736ae5a.webp`, alt: "Das Camping Zirknitzer im tiefen Winter — Eingangsschild unter meterhohem Schnee" },
      },
      {
        title: "Skifahren in Heiligenblut",
        text: "Das Skigebiet Heiligenblut ist nur 8,5 Kilometer entfernt und gratis mit dem Skibus erreichbar.",
        image: { src: `${IMG}/gallery-330ae35a95.webp`, alt: "Blick vom Hang auf das verschneite Mölltal und Großkirchheim im Winter" },
      },
    ],
  },

  anreise: {
    heading: "Über die Großglockner Bundesstraße B107 zu uns",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Tauernautobahn A10 bis Knoten Spittal, weiter über B100/B106 ins Mölltal und auf der B107 nach Großkirchheim — oder von Salzburg über die Großglockner Hochalpenstraße.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Spittal-Millstättersee, von dort mit dem Bus ins Mölltal nach Großkirchheim/Döllach.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Flughafen Klagenfurt rund 100 km, Salzburg rund 150 km — weiter mit Mietwagen oder Bahn.",
      },
    ],
  },

  galerie: {
    heading: "Impressionen rund um Döllach",
    headingEmphasis: "Döllach",
    intro:
      "Almen, Kapellen, das Dorf und die Gipfel der Hohen Tauern — ein paar Eindrücke aus unserer Umgebung.",
    tag: "Nationalpark Hohe Tauern",
    moreCount: 30,
    images: [
      { src: `${IMG}/gallery-c259c6ba8b.webp`, alt: "Aussichtsplatz Mittner Almen mit Bank, goldenen Herbstlärchen und verschneiten Gipfeln" },
      { src: `${IMG}/gallery-5ba3e97fa7.webp`, alt: "Heißluftballon über dem verschneiten Großkirchheim im Mölltal" },
      { src: `${IMG}/gallery-9eb80f3917.webp`, alt: "Blick auf Döllach mit Kirche im Mölltal" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz in Döllach",
    headingEmphasis: "in Döllach",
    intro:
      "Sende uns Zeitraum und Personenzahl — Familie Zirknitzer meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise Vorsaison 2026, für 2 Personen — Strom (€ 0,70/kWh) und Aufenthaltsabgabe (€ 4 p. P.) extra · Zimmer- und Ferienhauspreise bitte bei der Anfrage bestätigen.",
    highlight: {
      title: "Freibad gratis",
      text: "Die Benutzung des Freibades Großkirchheim ist für alle Gäste gratis.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 28 },
      { id: "komfortzimmer", label: "Komfortzimmer", perNight: 90 },
      { id: "ferienhaus", label: "Ferienhaus", perNight: 100 },
    ],
  },

  kontakt: {
    coords: { lat: 46.978732, lng: 12.885667 },
    tel: "+43 664 4929624",
    telHref: "tel:+436644929624",
    mail: "camping.zirknitzer@utanet.at",
    facebook: "https://www.facebook.com/Camping-Zirknitzer-701480439889024/",
    adresse: "Döllach 107 · 9843 Großkirchheim · Kärnten",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Unterkünfte", href: "#mobilheime" },
    { label: "Freizeit", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingZirknitzer;
