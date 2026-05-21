export type Aktivitet = {
  slug: string;
  title: string;
  tagline: string;
  when: string;
  time: string;
  price: string;
  description: string;
  longDescription: string;
  targetAudience?: string;
};

export const aktivitetar: Aktivitet[] = [
  {
    slug: "strikk-og-drikk",
    title: "Strikk & Drikk",
    tagline: "for jentene i bygda",
    when: "Kver tysdag",
    time: "Kl. 18:00 – 21:00",
    price: "Gratis",
    description:
      "Ta med strikkeprosjektet (ell ikkje), hugla deg ned med eit glas og prata med jentene. Ailla e velkomne.",
    longDescription:
      "Kvar tysdag opnar me dørene for Strikk & Drikk — eit uformelt samvær der du kan ta med strikketøyet, hekling, broderi eller berre deg sjølv. Me serverer drikke i baren, og atmosfæren e alltid varm og inkluderande. Ailla kvinner e hjarteleg velkomne, uavhengig av strikkenivå.",
    targetAudience: "Kvinner i alle aldrar",
  },
  {
    slug: "pubquiz",
    title: "Pubquiz",
    tagline: "lag på opp te 6 stk.",
    when: "Fysste torsdag i månan",
    time: "Kl. 19:00",
    price: "50 kr / lag",
    description:
      "Quiz-master Frode lagar spørsmål om alt frå Jæren te verda. Vinneren får ein premie å skryta av.",
    longDescription:
      "Første torsdag i kvar månad samlar me bygda til pubquiz. Lag på opptil 6 personar konkurrerer om heder, ære og ein premie verd å skryta av. Quiz-master Frode lagar spørsmål om alt frå lokal Jæren-kunnskap til verdensnyheiter, sport og popkultur. Meld laget dykkar inn i kassen før start.",
    targetAudience: "Alle — lag på 2–6 personar",
  },
  {
    slug: "komle-middag",
    title: "Komle-middag",
    tagline: "ækte jærsk husmannskost",
    when: "Annankver søndag",
    time: "Kl. 13:00 – 16:00",
    price: "Fra 189 kr",
    description:
      "Annankver søndag fyrer me opp komlegryta. Råkomle med ailla tilbehør — sjekk vår Facebook for dato.",
    longDescription:
      "Annankver søndag fyrer me opp komlegryta og serverer råkomle og komle med alt tilbehøret — flesk, pølse, kålrot og smør. Dette e ekte jærsk husmannskost slik det alltid har vore. Sjekk Facebook-sida vår for datoar og informasjon om kva som serveres kvar gong.",
    targetAudience: "Alle — familiar, pensjonistar, matglade",
  },
  {
    slug: "konjakk-smaking",
    title: "Konjakk-smaking",
    tagline: "50–80 sortar på hylla",
    when: "Etter avtale",
    time: "Min. 6 stk.",
    price: "Pris på førespørsel",
    description:
      "Me har eit av Jærens mest variert utvalg konjakk. Bestill ei smaking for gjengen, ell prøv ei og ei på eige hånd.",
    longDescription:
      "Med mellom 50 og 80 ulike sortar konjakk på hylla er Kafé Ståvå eit einestående stoppestad for konjakk-entusiastar. Me tilbyr guidede smakingar for grupper på minimum 6 personar — ein hyggeleg og lærerik kveld der me guidar dykk gjennom ulike typar, regionar og smaksprofiler. Kontakt oss for pris og tilgjengeligheit.",
    targetAudience: "Konjakk-entusiastar, grupper på min. 6",
  },
];
