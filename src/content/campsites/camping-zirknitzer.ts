import type { CampsiteConfig } from "../types";

/**
 * Camping Gasthof Zirknitzer — Döllach, Großkirchheim, Kärnten.
 * Alle Texte/Fakten belegt aus camping-zirknitzer.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Zirknitzer-Fotos in /public/campsites/camping-zirknitzer/.
 * EHRLICH: der Platz liegt AM UFER DES FLUSSES MÖLL (kein See → kein `see`-Feld),
 * mitten im Nationalpark Hohe Tauern. Preise sind REAL (Preisliste 2026 der Website).
 * Kein eigenes Marken-Logo (Website nutzt ein generisches "Camping"-Logo) → `logo`
 * weggelassen, Footer zeigt die Wortmarke. Keine eindeutige Auszeichnung belegt → awards leer.
 */
const IMG = "/campsites/camping-zirknitzer";

export const campingZirknitzer: CampsiteConfig = {
  name: "Camping Gasthof Zirknitzer",
  shortName: "Zirknitzer",
  slug: "camping-zirknitzer",
  ort: "Döllach · Großkirchheim",
  region: "Kärnten",
  brandKind: "Camping & Gasthof",
  regionLong: "Nationalpark Hohe Tauern · Kärnten · Österreich",

  claim: "Gemütliches Camping am Ufer der Möll – mitten im Nationalpark Hohe Tauern",
  claimEmphasis: "mitten im Nationalpark Hohe Tauern",
  intro:
    "Ein familiär geführter Betrieb mit Campingplatz, Gasthof, Restaurant, Hütten und Ferienhaus – am Ortsrand von Döllach, am Ufer der kleinen Möll, umgeben von den Bergen des Nationalparks Hohe Tauern.",

  statement: {
    text: "Bei uns ist Urlaub noch Familiensache – ein persönlich geführter Platz mit Gasthof und Restaurant, mitten in der Bergwelt der Hohen Tauern.",
    emphasis: "noch Familiensache",
  },

  pillars: [
    {
      title: "Mitten im Nationalpark Hohe Tauern",
      text: "Eingebettet in die Bergwelt rund um den Großglockner – am Ortsrand von Döllach in der Gemeinde Großkirchheim.",
      image: { src: `${IMG}/pillar-hohe-tauern.webp`, alt: "Verschneite Gipfel und herbstliche Lärchenwälder im Nationalpark Hohe Tauern" },
    },
    {
      title: "Im grünen Mölltal",
      text: "Am Ufer des kleinen Flusses Möll, ruhig zwischen Wiesen, Wald und Bergen – das Dorfzentrum ist nur rund 500 m entfernt.",
      image: { src: `${IMG}/pillar-moelltal.webp`, alt: "Blick über das Mölltal mit Großkirchheim und den Bergen der Hohen Tauern" },
    },
    {
      title: "Stellplatz, Hütte oder Ferienhaus",
      text: "Vom ebenen Stellplatz über urige Holzhütten bis zum eigenen Ferienhaus – für jeden die passende Unterkunft.",
      image: { src: `${IMG}/pillar-huetten.webp`, alt: "Urige Blockhütte am Campingplatz Zirknitzer" },
    },
  ],

  usps: [
    "Freibad Großkirchheim gratis",
    "Restaurant am Platz",
    "Mitten im Nationalpark Hohe Tauern",
    "Ganzjährig geöffnet",
    "Direkt am Glocknerradweg R8",
    "Hunde willkommen",
    "Familiär geführt",
    "300 m zur Sport- & Freizeitanlage",
  ],

  trust: {
    heading: "Worauf du dich bei Camping Zirknitzer verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Familie Zirknitzer, mit Gasthof und Restaurant am Platz, gratis Eintritt ins Naturschwimmbad Großkirchheim und einer ruhigen Lage am Ufer der Möll – mitten im Nationalpark Hohe Tauern.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle (nur ADAC-/Camping-Führer-Badges im Footer,
  // nicht eindeutig zuordenbar) → ehrlich leer; das Vertrauens-Band zeigt nur die USP-Pills.
  awards: [],

  // Ganzjährig geöffnet (Hauptsaison laut Preisliste: Winter, Juli, August).
  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/hero-luftaufnahme.webp`, alt: "Luftaufnahme des Campingplatzes Zirknitzer im Mölltal, umgeben von Wald und Bergen" },
  },

  camping: {
    heading: "Camping am Ufer der Möll",
    intro:
      "Gemütliche Stellplätze direkt am Ufer der kleinen Möll – mit Komfort-WC-Anlage (3 Familienbäder, eines behindertengerecht), Warmwasser-Duschen, CEE-Stromanschlüssen, chemischer Entsorgung, Waschmaschine, Trockner und Trinkwasser überall. Restaurant und Gasthof gehören dazu, das Dorfzentrum ist nur rund 500 m entfernt.",
    features: [
      {
        title: "Großzügige Stellplätze",
        text: "Große, mittlere und kleine Stellplätze für Wohnmobil, Caravan, Zelt, Motorrad oder Fahrrad – eben, ruhig und mit CEE-Stromanschluss.",
        image: { src: `${IMG}/camp-stellplatz.webp`, alt: "Stellplätze mit Wohnmobil und Wohnwagen auf der Wiese am Campingplatz Zirknitzer" },
      },
      {
        title: "Direkt am Glocknerradweg R8",
        text: "Der Platz liegt direkt am Glocknerradweg R8 – zugleich Wanderweg und Tal-Linie des Alpe-Adria-Trails.",
        image: { src: `${IMG}/camp-glocknerradweg.webp`, alt: "Weg am Campingplatz entlang des Glocknerradwegs R8" },
      },
      {
        title: "Familiär geführt – mit Restaurant",
        text: "Campingplatz, Gasthof und Restaurant aus einer Hand – persönlich geführt von Familie Zirknitzer.",
        image: { src: `${IMG}/camp-zirknitzer-schild.webp`, alt: "Handgemaltes Schild „Camping Zirknitzer“" },
      },
    ],
  },

  mobilheime: {
    heading: "Hütten, Zimmer & Ferienhaus",
    intro:
      "Lieber feste Wände als Zelt? Wir vermieten drei Komfortzimmer, eine Ferienwohnung, zwei urige Hütten und ein eigenes Ferienhaus – gemütlich eingerichtet, mitten in den Bergen.",
    items: [
      {
        name: "Ferienhaus „Haus Julia“",
        kind: "Ferienhaus · 2–4 Personen",
        text: "Unser freistehendes Ferienhaus für 2 bis 4 Personen mit eigener Küche – ideal für Familien.",
        image: { src: `${IMG}/unterkunft-ferienhaus.webp`, alt: "Ferienhaus „Haus Julia“ am Campingplatz Zirknitzer" },
        priceFrom: 100,
        features: ["2–4 Personen", "eigene Küche", "Hund erlaubt"],
      },
      {
        name: "Ferienwohnung",
        kind: "Wohnung · für 2 Personen",
        text: "Gemütliche Ferienwohnung mit eigenem Schlaf- und Wohnbereich – komfortabel für einen längeren Aufenthalt.",
        image: { src: `${IMG}/unterkunft-ferienwohnung.webp`, alt: "Schlafzimmer der Ferienwohnung" },
        priceFrom: 90,
        features: ["2 Personen", "Schlaf- & Wohnbereich", "ruhige Lage"],
      },
      {
        name: "Komfortzimmer",
        kind: "Zimmer · mit Bad",
        text: "Drei Komfortzimmer mit Dusche/WC oder Badewanne, Sat-TV und Radio – Frühstück auf Wunsch.",
        image: { src: `${IMG}/unterkunft-komfortzimmer.webp`, alt: "Komfortzimmer mit Doppelbett" },
        priceFrom: 90,
        features: ["Dusche/WC od. Bad", "Sat-TV & Radio", "Frühstück möglich"],
      },
      {
        name: "Treckinghütte",
        kind: "Hütte · 2–4 Personen",
        text: "Urige Holzhütte für 2 bis 4 Personen mit kleiner Küche – warmes Naturholz, mitten in der Natur.",
        image: { src: `${IMG}/unterkunft-treckinghuette.webp`, alt: "Innenraum der Treckinghütte aus Naturholz mit kleiner Küche" },
        priceFrom: 50,
        features: ["2–4 Personen", "kleine Küche", "Naturholz"],
      },
      {
        name: "Übernachtungshütte",
        kind: "Hütte · 2 Personen",
        text: "Die kleine Übernachtungshütte für 2 Personen – einfach, gemütlich und ruhig gelegen.",
        image: { src: `${IMG}/unterkunft-uebernachtungshuette.webp`, alt: "Übernachtungshütte mit zwei Betten" },
        priceFrom: 40,
        features: ["2 Personen", "gemütlich", "ruhige Lage"],
      },
    ],
  },

  aktivitaeten: {
    heading: "Erlebnisse im Nationalpark Hohe Tauern",
    intro:
      "Ob Sommer oder Winter – rund um Döllach und Großkirchheim wird es nie langweilig. Vom Naturschwimmbad über Wanderungen bis zur Großglockner Hochalpenstraße.",
    items: [
      {
        title: "Naturschwimmbad & Sportanlage",
        text: "Nur rund 300 m entfernt: Naturschwimmbad mit Springturm und Rutsche, Beachvolleyball, Tennis, Kletterturm und Kinderspielplatz – für unsere Gäste gratis.",
        image: { src: `${IMG}/aktiv-naturschwimmbad.webp`, alt: "Naturschwimmbad der Sport- und Freizeitanlage Großkirchheim" },
      },
      {
        title: "Wandern & Bergsteigen",
        text: "Touren für Anfänger, Familien und Experten in der Bergwelt der Hohen Tauern rund um den Großglockner.",
        image: { src: `${IMG}/aktiv-wandern.webp`, alt: "Wanderer vor dem Gletscher im Nationalpark Hohe Tauern" },
      },
      {
        title: "Großglockner Hochalpenstraße",
        text: "Ein Naturerlebnis für die ganze Familie – die berühmte Panoramastraße liegt direkt vor der Tür.",
        image: { src: `${IMG}/aktiv-grossglockner.webp`, alt: "Großglockner mit Pasterze-Gletscher an der Großglockner Hochalpenstraße" },
      },
      {
        title: "Zirknitzgrotte",
        text: "Der Zirknitzbach bildet hier eine imposante Schlucht – ein lohnendes Ausflugsziel ganz in der Nähe.",
        image: { src: `${IMG}/aktiv-zirknitzgrotte.webp`, alt: "An der Zirknitzgrotte" },
      },
      {
        title: "Winterspaß & Pferdeschlitten",
        text: "Langlaufen, Eislaufen, Schneeschuhwandern, Rodeln und gemütliche Pferdeschlittenfahrten – Winterurlaub mitten in den Bergen.",
        image: { src: `${IMG}/aktiv-winter.webp`, alt: "Pferdeschlittenfahrt im Winter" },
      },
      {
        title: "Skifahren in Heiligenblut",
        text: "Das Skigebiet Heiligenblut ist nur 8,5 km entfernt und gratis mit dem Skibus erreichbar; in Großkirchheim gibt es zusätzlich einen kleinen Skilift.",
        image: { src: `${IMG}/aktiv-skifahren.webp`, alt: "Skigebiet Großglockner Heiligenblut mit Blick aufs Schareck" },
      },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      { title: "Mit dem Auto", text: "Über die Großglockner Bundesstraße B107 bis Großkirchheim. Aus allen Richtungen über die A10 (Knoten Spittal/Drau), weiter über die B100 und B106/B107." },
      { title: "Über die Tauernbahn", text: "Aus dem Norden bequem mit der ÖBB-Autoschleuse Böckstein–Mallnitz, dann über Obervellach Richtung Heiligenblut." },
      { title: "Großglockner Hochalpenstraße", text: "Von der Salzburger Seite über die mautpflichtige Großglockner Hochalpenstraße nach Heiligenblut, dann auf der B107 nach Großkirchheim." },
    ],
  },

  galerie: {
    heading: "Berge, Hütten & stille Momente",
    headingEmphasis: "stille Momente",
    intro:
      "Ein paar Eindrücke vom Campingplatz Zirknitzer und aus der Bergwelt rund um Döllach und Großkirchheim.",
    tag: "Nationalpark Hohe Tauern",
    images: [
      { src: `${IMG}/galerie-gipfel.webp`, alt: "Bergpanorama der Hohen Tauern" },
      { src: `${IMG}/galerie-almen.webp`, alt: "Herbstliche Lärchen und verschneite Gipfel bei den Mittner Almen" },
      { src: `${IMG}/galerie-pasterze.webp`, alt: "Pasterze-Gletscher mit Johannisberg" },
      { src: `${IMG}/galerie-blockhuette.webp`, alt: "Blockhütte am Campingplatz Zirknitzer" },
      { src: `${IMG}/galerie-katze.webp`, alt: "Katze auf einem blumengeschmückten Balkon am Platz" },
      { src: `${IMG}/galerie-bergsee.webp`, alt: "Bergsee in den Hohen Tauern" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum, Unterkunft und Personen – Familie Zirknitzer meldet sich mit deiner persönlichen Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote: "ab-Preise Nebensaison für 2 Personen · zzgl. Aufenthaltsabgabe (4–4,50 €/Person) · Stand 2026, Irrtümer vorbehalten",
    highlight: {
      title: "Freibad inklusive",
      text: "Die Benutzung des Naturschwimmbads im Freibad Großkirchheim ist für alle Gäste gratis.",
    },
    categories: [
      // Reale Preisliste 2026 (Nebensaison, 2 Personen). Stellplatz = Großer Stellplatz.
      { id: "stellplatz", label: "Stellplatz", perNight: 28 },
      { id: "huette", label: "Hütte", perNight: 40 },
      { id: "zimmer", label: "Komfortzimmer", perNight: 90 },
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
    // Keine Koordinaten in der Quelle, kein Internet zum Geocoden → coords weggelassen (Karte aus, Adresse sichtbar).
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Glocknerradweg R8", href: "#camping" },
        { label: "Ausstattung", href: "#camping" },
      ],
    },
    {
      label: "Unterkünfte",
      href: "#mobilheime",
      children: [
        { label: "Ferienhaus", href: "#mobilheime" },
        { label: "Hütten", href: "#mobilheime" },
        { label: "Zimmer & Wohnung", href: "#mobilheime" },
      ],
    },
    {
      label: "Erlebnisse",
      href: "#aktivitaeten",
      children: [
        { label: "Naturschwimmbad", href: "#aktivitaeten" },
        { label: "Wandern & Bergsteigen", href: "#aktivitaeten" },
        { label: "Winter & Ski", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default campingZirknitzer;
