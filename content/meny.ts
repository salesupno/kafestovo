export type MenuItem = {
  name: string;
  price: string | number;
};

export type MenuKategori = {
  slug: string;
  title: string;
  priceFrom: string;
  description: string;
  longDescription: string;
  items: MenuItem[];
};

export const menuKategoriar: MenuKategori[] = [
  {
    slug: "husmannskost",
    title: "Husmannskost",
    priceFrom: "Fra 189 kr",
    description:
      "Råkomle og komle slik dei skal væra — dampande, med tilbehør. Søndagsbuffet av og te.",
    longDescription:
      "Hjå oss e husmannskost ikkje berre mat — det e ein tradisjon. Råkomle og komle laga frå botn, oksestek som har fått tid på seg, og svinesteik med ailla tilbehøret. Det e slik bestamor laga det, og slik me lagar det i dag.",
    items: [
      { name: "Råkomle m/ tilbehør", price: 219 },
      { name: "Komle (mørtag)", price: 189 },
      { name: "Oksestek m/ saus", price: 289 },
      { name: "Svinesteik", price: 259 },
    ],
  },
  {
    slug: "pub-og-bar",
    title: "Pub & Bar",
    priceFrom: "Ailla rettigheter",
    description:
      "50–80 ulike sortar konjakk, lokalt øl, vin og brennevin. Eneste i Vigrestad ope etter 18 med skjenking.",
    longDescription:
      "Me har ailla rettigheter og e den einaste på Vigrestad som hølder ope etter klokka 18 med skjenking. Konjakk-hylla vår tel mellom 50 og 80 ulike sortar — ein av dei mest varierte samlingar på Jæren. Kom innom og finn din favoritt.",
    items: [
      { name: "Konjakk (utvalg)", price: "frå 89" },
      { name: "Pils 0,5 l", price: 89 },
      { name: "Glas husets vin", price: 119 },
      { name: "Cognac-smaking", price: "spør oss" },
    ],
  },
  {
    slug: "smorbrod-og-snitter",
    title: "Smørbrød & Snitter",
    priceFrom: "Catering",
    description:
      "Klassiske jærske smørbrød og fine snitter — på fat te selskap, lunsjmøte og minnesamvær.",
    longDescription:
      "Smørbrøda og snittene våre e laga med godt råstoff og ordentleg handverk. Perfekt til selskap, lunsjmøter, konfirmasjonar og minnesamvær. Me lagar fat i alle storleikar — sei kor mange de e og kå tid, så ordnar me resten.",
    items: [
      { name: "Smørbrødfat (10 stk.)", price: 590 },
      { name: "Snittefat (15 stk.)", price: 790 },
      { name: "Roastbiff-rundstykke", price: 89 },
      { name: "Reker m/ majones", price: 119 },
    ],
  },
  {
    slug: "kaffi-og-te",
    title: "Kaffi & Te",
    priceFrom: "Fra 32 kr",
    description:
      "Fersk traktet kaffi, espresso og våre faste favorittar — alltid friskmalt. Dagens kaka på disken.",
    longDescription:
      "Kaffien vår e alltid fersk og friskmalt. Me serverer filterkaffi, espresso-baserte drikkar og eit godt utvalg te og urteinfusjonar. Kom innom for ein kopp og slå av ein prat — det e det me e best på.",
    items: [
      { name: "Filterkaffi", price: 32 },
      { name: "Cappuccino", price: 52 },
      { name: "Latte / mocca", price: 58 },
      { name: "Te / urteinfusjon", price: 38 },
    ],
  },
  {
    slug: "bakst",
    title: "Bakst",
    priceFrom: "Fra 28 kr",
    description:
      "Skolebrød, kanelsnurrar og dagens kaka — hjemmebakt med rauseporsjon. Spør om kå me ha i dag.",
    longDescription:
      "Baksten e heimelaga og laga med kjærleik kvar dag. Kanelsnurrene våre e store, mjuke og saft — og dagens kaka skiftar med sesong og humør. Spør i disken kva me har bakt i dag.",
    items: [
      { name: "Kanelsnurr", price: 42 },
      { name: "Skolebrød", price: 48 },
      { name: "Dagens kaka", price: 72 },
      { name: "Vaffel m/ syltetøy", price: 59 },
    ],
  },
  {
    slug: "fra-grillen",
    title: "Frå grillen",
    priceFrom: "Fra 149 kr",
    description:
      "Burgar, pizza og varmretter frå Go2Grill-kjøkkenet. Saftige og raue, laga når du bestiller.",
    longDescription:
      "Gjennom samarbeidet med Go2Grill kan me tilby burgerar, pizza og varmretter laga til ordre. Bestill i appen, vel hentetid — og maten din e klar i disken når du kjem. Enkelt, raskt og godt.",
    items: [
      { name: "Cheeseburger", price: 189 },
      { name: "Pizza (medium)", price: 239 },
      { name: "Bacon-burger", price: 219 },
      { name: "Dagens varme", price: 199 },
    ],
  },
];
