export type SelskapType = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  capacity: string;
  highlights: string[];
  priceFrom?: string;
};

export const selskapTypar: SelskapType[] = [
  {
    slug: "konfirmasjon",
    title: "Konfirmasjon",
    description:
      "Sjølve dagen ell minnesamvær — me ordnar alt frå koldtbord te varme retter. Plass te 50 i selskapssalen.",
    longDescription:
      "Ein konfirmasjonsdag skal vera minnerik. Kafé Ståvå tek imot konfirmantar og familiar med opptil 50 gjester i vår selskapssale. Me hjelper dykk med alt — frå menyplanlegging og borddekking til servering og kaffi. Vel mellom koldtbord, varm buffet eller skreddarsydd 3-rettars middag.",
    capacity: "Opp te 50 personar",
    highlights: [
      "Koldtbord ell varm buffet",
      "Kaffi og kaka inkludert",
      "Eige rom for fotografering",
      "Bar med ailla rettigheter",
    ],
    priceFrom: "Pris etter avtale",
  },
  {
    slug: "julebord",
    title: "Julebord",
    description:
      "Tradisjonell jærsk julebuffet, pinnekjøtt, ribbe og ailla tilbehør — for bedrift, vennegjeng ell familie. Bestill i god tid.",
    longDescription:
      "Julebord hjå Kafé Ståvå e ei ekte julefeiring med god mat, godt drikke og god stemning. Me serverer tradisjonell norsk julekost med pinnekjøtt, ribbe og alle tilbehøra. Salen rommar opptil 50 gjester, og me har bar med alle skjenkerettigheter. Populære datoar i november og desember blir fort fulle — bestill tidleg.",
    capacity: "Opp te 50 personar",
    highlights: [
      "Pinnekjøtt & ribbe",
      "Bar med ailla rettigheter",
      "Avtal underhaldning ved ynskje",
      "Julepynt og dekorasjon",
    ],
    priceFrom: "Frå 595 kr / person",
  },
  {
    slug: "bryllup",
    title: "Bryllup",
    description:
      "Den ekta jærske familiefesten — intime selskap opp te 50 stk. Me skreddarsyr meny og hjelp med dekorasjon.",
    longDescription:
      "For intime bryllaup der det handlar om folk og ikkje fasade, er Kafé Ståvå det perfekte valet. Me tar imot bryllaupselskap på opptil 50 personar og hjelper dykk med å skreddarsya ei kveld de aldri gløymer. Frå aperitiff og forrett til hovudrett og bryllaupskake — alt vert koordinert av oss.",
    capacity: "Opp te 50 personar",
    highlights: [
      "Skreddarsydd 3-rettars meny",
      "Toastmaster-område",
      "Skjenkebevilling te seint på kveld",
      "Dekorasjonsbistand",
    ],
    priceFrom: "Pris etter avtale",
  },
  {
    slug: "firmafest",
    title: "Firmafest",
    description:
      "Sommarfest, kick-off ell vanleg fredagslunsj — me tar imot grupper frå 10 te 50. Snitter, smørbrød ell varm buffet.",
    longDescription:
      "Treng bedrifta di ein stad å samlast? Kafé Ståvå passar perfekt til alt frå uformell fredagslunsj til stor sommarfest eller kick-off. Me tilbyr fleksible løysingar med snitter, smørbrødfat, varm buffet eller fullt trearettars for grupper frå 10 til 50 personar. Samlefaktura og firmaregning er ingen problem.",
    capacity: "10–50 personar",
    highlights: [
      "Lunsjlevering på huset",
      "Firmaregning og samlefaktura",
      "Quiz / pub som etterspel",
      "Fleksibel meny",
    ],
    priceFrom: "Frå 295 kr / person",
  },
  {
    slug: "catering",
    title: "Catering",
    description:
      "Smørbrødfat, snittefat, koldtbord og varm buffet — for henting eller levering på Jæren.",
    longDescription:
      "Kafé Ståvå leverer catering til arrangement på heile Jæren. Me lagar smørbrødfat, snittefat, koldtbord og varme buffetløysingar — alt laga frå botn med gode råvarer. Perfekt til lunsjmøter, minnesamvær, konfirmasjonar og selskap heime. Sei kor mange de e, kva tid, og kvar — så set me opp eit tilbod.",
    capacity: "Alle storleiker",
    highlights: [
      "Smørbrødfat & snittefat",
      "Koldtbord & varm buffet",
      "Levering på Jæren",
      "Tilpassa budsjettet",
    ],
    priceFrom: "Frå 590 kr / fat",
  },
];
