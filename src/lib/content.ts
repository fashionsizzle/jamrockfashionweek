export const EVENT = {
  edition: "Eighth Edition",
  dates: "TBA",
  city: "Kingston, Jamaica",
  year: "2026",
  startISO: "2026-11-11",
  endISO: "2026-11-15",
  /** Jamaica observes EST year-round (no DST). */
  tz: "-05:00",
};

export const NAV = [
  { label: "Shows", href: "#shows" },
  { label: "Designers", href: "#designers" },
  { label: "Looks", href: "#looks" },
  { label: "Schedule", href: "#schedule" },
  { label: "Press", href: "#press" },
] as const;

export type Designer = {
  index: string;
  slug: string;
  name: string;
  origin: string;
  discipline: string;
  established: string;
  collection: string;
  note: string;
  bio: string;
  looks: { no: string; title: string; tone: "ash" | "noir" | "bone" }[];
  /** Optional local or remote photograph; falls back to an art-directed plate. */
  src?: string;
};

export const DESIGNERS: Designer[] = [
  {
    index: "01",
    slug: "anaya-clarke",
    name: "Anaya Clarke",
    origin: "Trench Town",
    discipline: "Tailoring",
    established: "2019",
    collection: "Hard Yard",
    note: "Deconstructed suiting cut from reclaimed denim and dancehall print.",
    bio: "Clarke learned to sew on her grandmother's treadle machine and never traded it for anything faster. The studio works almost entirely in reclaimed denim — old jeans taken apart and rebuilt as suiting, the seams left raw and showing. Hard Yard, her 2025 collection, set folded dancehall flyers under resin buttons and walked it to a sound-system mix.",
    looks: [
      { no: "01", title: "Reclaimed denim, look 4", tone: "noir" },
      { no: "02", title: "Three-piece, raw seam", tone: "ash" },
      { no: "03", title: "Resin button, detail", tone: "bone" },
      { no: "04", title: "Dancehall print, close", tone: "noir" },
    ],
  },
  {
    index: "02",
    slug: "devon-marsh",
    name: "Devon Marsh",
    origin: "Port Antonio",
    discipline: "Knitwear",
    established: "2021",
    collection: "Tide Lines",
    note: "Hand-loomed pieces dyed with indigo and roadside hibiscus.",
    bio: "Marsh hand-looms every piece on the north coast, dyeing the yarn himself with indigo and hibiscus gathered along the road to Boston Bay. Tide Lines reads the colour of the sea at six different hours, knit into open-gauge sweaters meant to be worn wet from the water.",
    looks: [
      { no: "01", title: "Indigo open-gauge, look 7", tone: "bone" },
      { no: "02", title: "Hibiscus dip-dye", tone: "ash" },
      { no: "03", title: "Salt-dried knit", tone: "noir" },
    ],
  },
  {
    index: "03",
    slug: "soraya-bennett",
    name: "Soraya Bennett",
    origin: "Kingston",
    discipline: "Couture",
    established: "2014",
    collection: "Salt Architecture",
    note: "Architectural evening wear built on a foundation of raffia and silk.",
    bio: "Trained in Paris and returned for good in 2014, Bennett builds evening wear like buildings — raffia armatures under silk, boned so lightly the dresses hold a shape and still move. Salt Architecture closed the Ward Theatre with a single ivory gown that took the atelier four months.",
    looks: [
      { no: "01", title: "Raffia gown, finale", tone: "ash" },
      { no: "02", title: "Silk architecture", tone: "noir" },
      { no: "03", title: "Boned ivory, detail", tone: "bone" },
      { no: "04", title: "Ward Theatre, close", tone: "ash" },
    ],
  },
  {
    index: "04",
    slug: "kemar-lyttle",
    name: "Kemar Lyttle",
    origin: "Montego Bay",
    discipline: "Menswear",
    established: "2020",
    collection: "Day Labour",
    note: "A working wardrobe for the island — linen, mesh, and salt-washed cotton.",
    bio: "Lyttle makes clothes for the heat and means it — linen cut wide, cotton mesh, everything washed in seawater until it gives. Day Labour is a wardrobe for people who work outside, with the dignity of tailoring and none of its weight.",
    looks: [
      { no: "01", title: "Salt-washed linen", tone: "noir" },
      { no: "02", title: "Cotton mesh, look 3", tone: "bone" },
      { no: "03", title: "Wide trouser, detail", tone: "ash" },
    ],
  },
  {
    index: "05",
    slug: "imani-rose-studio",
    name: "Imani Rose Studio",
    origin: "Spanish Town",
    discipline: "Accessories",
    established: "2017",
    collection: "Conch & Brass",
    note: "Jewellery forged from brass offcuts and the shell of the queen conch.",
    bio: "A two-person studio working in salvaged brass and the discarded shell of the queen conch, carved and set by hand. Conch & Brass was shown as an installation at the National Gallery — pieces hung at eye level, lit like specimens rather than product.",
    looks: [
      { no: "01", title: "Conch and brass cuff", tone: "bone" },
      { no: "02", title: "Carved shell, detail", tone: "ash" },
      { no: "03", title: "Installation, National Gallery", tone: "noir" },
    ],
  },
  {
    index: "06",
    slug: "house-of-pinnacle",
    name: "House of Pinnacle",
    origin: "Ocho Rios",
    discipline: "Collective",
    established: "2023",
    collection: "In The Round",
    note: "Six graduates, one collection, presented in the round at dusk.",
    bio: "Six graduates of Edna Manley College who refused to split into separate labels, Pinnacle shows one collection authored by all of them. In The Round was staged at dusk in Emancipation Park, the audience seated on every side, with no front row and no back.",
    looks: [
      { no: "01", title: "In the round, dusk", tone: "ash" },
      { no: "02", title: "Six hands, one coat", tone: "noir" },
      { no: "03", title: "Emancipation Park, close", tone: "bone" },
    ],
  },
];

export function getDesigner(slug: string): Designer | undefined {
  return DESIGNERS.find((d) => d.slug === slug);
}

/** Previous/next designer for footer navigation on a profile page (wraps). */
export function designerNeighbours(slug: string): {
  prev: Designer;
  next: Designer;
} {
  const i = DESIGNERS.findIndex((d) => d.slug === slug);
  const n = DESIGNERS.length;
  return {
    prev: DESIGNERS[(i - 1 + n) % n],
    next: DESIGNERS[(i + 1) % n],
  };
}

export type Show = { time: string; title: string; venue: string; tag: string };
export type Day = { date: string; day: string; shows: Show[] };

export const SCHEDULE: Day[] = [
  {
    date: "11 Nov",
    day: "Wednesday",
    shows: [
      { time: "18:00", title: "Opening Address", venue: "Devon House", tag: "Ceremony" },
      { time: "19:30", title: "Anaya Clarke", venue: "Devon House Lawn", tag: "Runway" },
      { time: "21:00", title: "First Night", venue: "The Courtyard", tag: "Reception" },
    ],
  },
  {
    date: "12 Nov",
    day: "Thursday",
    shows: [
      { time: "17:00", title: "Graduate Showcase", venue: "Edna Manley College", tag: "Presentation" },
      { time: "19:00", title: "Devon Marsh", venue: "Hope Gardens", tag: "Runway" },
      { time: "20:30", title: "Kemar Lyttle", venue: "Hope Gardens", tag: "Runway" },
    ],
  },
  {
    date: "13 Nov",
    day: "Friday",
    shows: [
      { time: "18:30", title: "Imani Rose Studio", venue: "National Gallery", tag: "Installation" },
      { time: "20:00", title: "Soraya Bennett", venue: "Ward Theatre", tag: "Runway" },
      { time: "22:00", title: "After Hours", venue: "Harbour Street", tag: "Reception" },
    ],
  },
  {
    date: "14 Nov",
    day: "Saturday",
    shows: [
      { time: "16:00", title: "Trade Day", venue: "Kingston Creative", tag: "Industry" },
      { time: "19:00", title: "House of Pinnacle", venue: "Emancipation Park", tag: "Runway" },
      { time: "21:30", title: "Honours", venue: "Emancipation Park", tag: "Awards" },
    ],
  },
  {
    date: "15 Nov",
    day: "Sunday",
    shows: [
      { time: "11:00", title: "Archive Brunch", venue: "Devon House", tag: "Industry" },
      { time: "18:00", title: "Closing Collection", venue: "Devon House Lawn", tag: "Runway" },
    ],
  },
];

export type Quote = { text: string; source: string; place: string };

export const PRESS: Quote[] = [
  {
    text: "The most considered fashion week in the region — and the least interested in imitating anyone.",
    source: "Vogue",
    place: "Runway",
  },
  {
    text: "Kingston has quietly built a calendar that designers now plan their year around.",
    source: "Business of Fashion",
    place: "Reports",
  },
  {
    text: "Tailoring with a memory. Clarke's denim suiting was the collection everyone left talking about.",
    source: "The Cut",
    place: "Review",
  },
  {
    text: "An event run by people who clearly love clothes more than they love a step-and-repeat.",
    source: "i-D",
    place: "Notebook",
  },
];

export const STATS = [
  { figure: "32", label: "Designers" },
  { figure: "14", label: "Venues across Kingston" },
  { figure: "5", label: "Evenings" },
  { figure: "2012", label: "Founded" },
];

/**
 * The full-bleed campaign image. Leave `src` undefined to show the
 * art-directed placeholder; once you add a photo to /public/images/, set
 * `src` (e.g. "/images/campaign.jpg") and it goes live.
 */
export const CAMPAIGN = {
  kicker: "The Campaign — 2026",
  headline: "Cloth as armour",
  credit: "Photographed in Kingston for Jamrock Fashion Week",
  src: undefined as string | undefined,
  focus: "50% 30%",
};

export type Venue = { no: string; name: string; area: string; use: string };

export const VENUES: Venue[] = [
  {
    no: "01",
    name: "Devon House",
    area: "St Andrew",
    use: "The 1881 great house and its lawns — the week's ceremonial home and opening night.",
  },
  {
    no: "02",
    name: "Ward Theatre",
    area: "North Parade",
    use: "A 1912 playhouse downtown; couture shown under the proscenium.",
  },
  {
    no: "03",
    name: "National Gallery",
    area: "Downtown",
    use: "The oldest public gallery in the Anglophone Caribbean; installations after hours.",
  },
  {
    no: "04",
    name: "Hope Gardens",
    area: "Liguanea",
    use: "Royal botanical gardens — an open-air runway among the palms.",
  },
  {
    no: "05",
    name: "Emancipation Park",
    area: "New Kingston",
    use: "Lawn and bronze; collections staged in the round at dusk.",
  },
  {
    no: "06",
    name: "Edna Manley College",
    area: "Arthur Wint Drive",
    use: "The island's school of the visual and performing arts; the graduate showcase.",
  },
  {
    no: "07",
    name: "Kingston Creative",
    area: "Water Lane",
    use: "A downtown creative hub; the industry trade day.",
  },
  {
    no: "08",
    name: "Harbour Street",
    area: "Waterfront",
    use: "Late receptions along the working harbour.",
  },
];

/** Phrases for the running ticker band, separated by a typographic mark. */
export const TICKER = [
  "Jamrock Fashion Week",
  "Kingston, Jamaica",
  "TBA",
  "Eighth Edition",
  "Invitation only",
];

export type Look = {
  no: string;
  designer: string;
  look: string;
  tone: "ash" | "noir" | "bone";
  src?: string;
};

/** The runway archive — a horizontal lookbook. Pass `src` to use real photos. */
export const LOOKS: Look[] = [
  { no: "01", designer: "Anaya Clarke", look: "Reclaimed denim, look 4", tone: "noir" },
  { no: "02", designer: "Soraya Bennett", look: "Raffia gown, finale", tone: "ash" },
  { no: "03", designer: "Devon Marsh", look: "Indigo knit, look 7", tone: "bone" },
  { no: "04", designer: "Kemar Lyttle", look: "Salt-washed linen", tone: "noir" },
  { no: "05", designer: "House of Pinnacle", look: "In the round, dusk", tone: "ash" },
  { no: "06", designer: "Imani Rose Studio", look: "Conch and brass", tone: "bone" },
  { no: "07", designer: "Soraya Bennett", look: "Silk architecture", tone: "noir" },
  { no: "08", designer: "Anaya Clarke", look: "Dancehall print, close", tone: "ash" },
];
