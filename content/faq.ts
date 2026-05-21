export type FaqQuestion = {
  slug: string;
  question: string;
  answer: string;
  categorySlug: string;
};

export type FaqCategory = {
  slug: string;
  title: string;
  description: string;
  questions: FaqQuestion[];
};

export const faqKategoriar: FaqCategory[] = [
  {
    slug: "selskap",
    title: "Selskap & arrangement",
    description: "Alt du treng å vita om å leiga lokale og halde selskap hjå oss.",
    questions: [
      {
        slug: "plass-i-selskapssalen",
        question: "Kor mange får plass i selskapssalen?",
        answer:
          "Bakrommet vårt har plass te <strong>50 personar</strong>, sittande ved bord. Det passar fint te konfirmasjon, julebord, bryllup, firmafest og minnesamvær. Sei i frå i god tid, så held me rommet for deg.",
        categorySlug: "selskap",
      },
      {
        slug: "bestille-selskap-forhaned",
        question: "Kor lang tid på forhånd må me bestilla selskap?",
        answer:
          "Me anbefaler <strong>minst 2–3 veker</strong> for vanlege selskap. For <strong>julebord, konfirmasjon og bryllup</strong> bør du sikra deg datoen 1–3 månadar i forvegen — populære datoar går fort.",
        categorySlug: "selskap",
      },
      {
        slug: "catering-utanfor-lokalet",
        question: "Tilbyr dykke catering te selskap utanfor lokalet?",
        answer:
          "Ja. Me lagar <strong>smørbrødfat, snittefat, koldtbord og varm buffet</strong> for henting ell levering på Jæren. Sei kor mange og kå tid, så set me opp ein meny som passer budsjettet og anledninga.",
        categorySlug: "selskap",
      },
    ],
  },
  {
    slug: "bestilling",
    title: "Bestilling",
    description: "Korleis bestille mat og drikke via Go2Grill-appen.",
    questions: [
      {
        slug: "bestille-via-go2grill",
        question: "Kan eg bestilla på forhånd og henta mat?",
        answer:
          "Ja, gjennom <strong>Go2Grill-appen</strong>. Skann QR-koden på sida, ell søk opp Kafé Ståvå. Du legg inn ordren, vel hentetid, betalar — og hentar når maten e klar. Enkelt som det.",
        categorySlug: "bestilling",
      },
    ],
  },
  {
    slug: "mat-og-drikke",
    title: "Mat & drikke",
    description: "Spørsmål om menyen, allergiar og drikkeutvalget.",
    questions: [
      {
        slug: "vegetarmat",
        question: "Serverer dykke vegetarmat?",
        answer:
          "Ja. Me har vegetariske retter både på kafé-menyen og i catering. Gi beskjed om allergiar ell preferansar ved bestilling, så ordnar me det.",
        categorySlug: "mat-og-drikke",
      },
      {
        slug: "skjenkebevilling",
        question: "Har dykke skjenkebevilling?",
        answer:
          "Ja — me har <strong>ailla rettigheter</strong> (øl, vin og brennevin), og e den <strong>einaste i Vigrestad</strong> som høller åpent etter klokka 18 med skjenking. Konjakk-hylla vår tel mellom 50 og 80 ulike sortar.",
        categorySlug: "mat-og-drikke",
      },
    ],
  },
  {
    slug: "aktivitetar",
    title: "Aktivitetar",
    description: "Faste arrangement og kva som skjer hjå oss.",
    questions: [
      {
        slug: "strikk-og-drikk-og-pubquiz",
        question: "Kå tid e Strikk & Drikk og Pubquiz?",
        answer:
          "<strong>Strikk & Drikk</strong> e kvar tysdag kl. 18:00–21:00. <strong>Pubquiz</strong> e fysste torsdag i kvar månad, kl. 19:00. Følg oss på Facebook for endringar og spesialkveldar.",
        categorySlug: "aktivitetar",
      },
    ],
  },
  {
    slug: "generelt",
    title: "Generelt",
    description: "Adresse, parkering og praktisk info om besøket.",
    questions: [
      {
        slug: "adresse-og-parkering",
        question: "Kor finn eg dykke?",
        answer:
          "Midt i Vigrestad sentrum, like ved torget. Adressen er <strong>Storgata, 4362 Vigrestad</strong>. Parkering rett utanfor.",
        categorySlug: "generelt",
      },
    ],
  },
];

/** Finn eitt spørsmål på tvers av alle kategoriar */
export function getFaqQuestion(
  categorySlug: string,
  questionSlug: string
): FaqQuestion | undefined {
  const cat = faqKategoriar.find((c) => c.slug === categorySlug);
  return cat?.questions.find((q) => q.slug === questionSlug);
}

/** Alle spørsmål flata ut */
export function getAllFaqQuestions(): FaqQuestion[] {
  return faqKategoriar.flatMap((c) => c.questions);
}
