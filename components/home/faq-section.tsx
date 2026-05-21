"use client";

import { useState } from "react";

const faqItems = [
  {
    q: "Kor mange får plass i selskapssalen?",
    a: "Bakrommet vårt har plass te <strong>50 personar</strong>, sittande ved bord. Det passar fint te konfirmasjon, julebord, bryllup, firmafest og minnesamvær. Sei i frå i god tid, så held me rommet for deg.",
  },
  {
    q: "Har dykke skjenkebevilling?",
    a: "Ja — me har <strong>ailla rettigheter</strong> (øl, vin og brennevin), og e den <strong>einaste i Vigrestad</strong> som hølla åpent etter klokka 18 med skjenking. Konjakk-hylla vår tel mellom 50 og 80 ulike sortar.",
  },
  {
    q: "Tilbyr dykke catering te selskap utanfor lokalet?",
    a: "Ja. Me lagar <strong>smørbrødfat, snittefat, koldtbord og varm buffet</strong> for henting ell levering på Jæren. Sei kor mange og kå tid, så set me opp ein meny som passer budsjettet og anledninga.",
  },
  {
    q: "Kor lang tid på forhånd må me bestilla selskap?",
    a: "Me anbefaler <strong>minst 2–3 veker</strong> for vanlige selskap. For <strong>julebord, konfirmasjon og bryllup</strong> bør du sikra deg datoen 1–3 månadar i forvegen — populære datoar går fort.",
  },
  {
    q: "Kan eg bestilla på forhånd og henta mat?",
    a: "Ja, gjennom <strong>Go2Grill-appen</strong>. Skann QR-koden på sida, ell søk opp Kafé Ståvå. Du legg inn ordren, vel hentetid, betalar — og henter når maten e klar. Enkelt som det.",
  },
  {
    q: "Serverer dykke vegetarmat?",
    a: "Ja. Me har vegetariske retter både på kafé-menyen og i catering. Gi beskjed om allergier ell preferanser ved bestilling, så ordnar me det.",
  },
  {
    q: "Kå tid e Strikk & Drikk og Pubquiz?",
    a: "<strong>Strikk & Drikk</strong> e kver tysdag kl. 18:00–21:00. <strong>Pubquiz</strong> e fysste torsdag i kver månad, kl. 19:00. Følg oss på Facebook for endringar og spesialkveldar.",
  },
  {
    q: "Kor finn eg dykke?",
    a: "Midt i Vigrestad sentrum, like ved torget. Adressen er <strong>Storgata, 4362 Vigrestad</strong>. Parkering rett utanfor.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-[110px] max-sm:py-[70px] bg-bg" id="faq">
      <div className="max-w-[1500px] mx-auto px-8 max-sm:px-5">

        {/* Overskrift */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <div
            className="reveal inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-burgundy font-bold mb-6 before:content-[''] before:w-6 before:h-px before:bg-burgundy"
            style={{ justifyContent: "center" }}
          >
            Det dei fleste lurer på
          </div>
          <h2 className="reveal reveal-delay-1 text-[clamp(40px,6vw,76px)] leading-[0.98]">
            Spørsmål &<br />
            <em className="italic text-burgundy">svar.</em>
          </h2>
          <p className="reveal reveal-delay-2 text-ink-soft text-[18px] mt-4">
            Finn du ikkje svaret du leitar etter? Ring oss på 45 28 50 96, ell send ein melding.
          </p>
        </div>

        {/* Accordion */}
        <div className="reveal max-w-[820px] mx-auto">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className={`border-b border-line ${i === 0 ? "border-t" : ""}`}
            >
              <button
                className="w-full text-left py-6 flex justify-between items-center gap-6 font-serif text-[clamp(22px,2.2vw,28px)] text-ink transition-colors hover:text-burgundy cursor-pointer bg-transparent border-0"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span
                  className="w-8 h-8 flex-none flex items-center justify-center border border-line-strong rounded-full text-burgundy text-[18px] leading-none transition-[transform,background,color] duration-300"
                  style={{
                    background: open === i ? "var(--color-burgundy)" : "transparent",
                    color: open === i ? "var(--color-cream)" : "var(--color-burgundy)",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {open === i && (
                <div
                  className="pb-7 text-ink-soft text-[16px] leading-[1.7] max-w-[680px]"
                  dangerouslySetInnerHTML={{ __html: item.a }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
