"use client";

import Link from "next/link";

const selskapKort = [
  {
    slug: "konfirmasjon",
    title: "Konfirmasjon",
    desc: "Sjølve dagen ell minnesamvær — me ordnar alt frå koldtbord te varme retter. Plass te 50 i selskapssalen.",
    highlights: ["Koldtbord ell varm buffet", "Kaffi og kaka inkludert", "Eige rom for fotografering"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 22, height: 22 }}>
        <path d="M12 3l2 5h5l-4 3 1.5 5L12 13l-4.5 3L9 11 5 8h5z"/>
      </svg>
    ),
  },
  {
    slug: "julebord",
    title: "Julebord",
    desc: "Tradisjonell jærsk julebuffet, pinnekjøtt, ribbe og ailla tilbehør — for bedrift, vennegjeng ell familie. Bestill i god tid.",
    highlights: ["Pinnekjøtt & ribbe", "Bar med ailla rettigheter", "Avtal underholdning ved ynskje"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 22, height: 22 }}>
        <path d="M12 2v4M5 8l2 2M19 8l-2 2M3 14h18l-2 6H5z"/><circle cx="12" cy="11" r="2"/>
      </svg>
    ),
  },
  {
    slug: "bryllup",
    title: "Bryllup",
    desc: "Den ekta jærske familiefesten — intime selskap opp te 50 stk. Me skreddarsyr meny og hjelp med dekorasjon.",
    highlights: ["Skreddarsydd 3-rettars meny", "Toastmaster-område", "Skjenkebevilling te seint på kveld"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 22, height: 22 }}>
        <path d="M9 11h6M12 8v6"/><path d="M6 3l-3 9 9 9 9-9-3-9z"/>
      </svg>
    ),
  },
  {
    slug: "firmafest",
    title: "Firmafest",
    desc: "Sommarfest, kick-off ell vanlig fredagslunsj — me tar imot grupper frå 10 te 50. Snitter, smørbrød ell varm buffet.",
    highlights: ["Lunsjlevering på huset", "Firmaregning og samlefaktura", "Quiz / pub som etterspel"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 22, height: 22 }}>
        <rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
      </svg>
    ),
  },
];

export default function SelskapSection() {
  return (
    <section
      className="py-[110px] max-sm:py-[70px] relative overflow-hidden"
      style={{ background: "var(--color-ink)", color: "var(--color-cream)" }}
      id="selskap"
    >
      {/* Bakgrunnsgradienter */}
      <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(168,38,31,0.25) 0%, transparent 70%)" }} aria-hidden />
      <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(184,105,58,0.18) 0%, transparent 70%)" }} aria-hidden />

      <div className="relative z-10 max-w-[1500px] mx-auto px-8 max-sm:px-5">

        {/* Overskrift */}
        <div className="grid grid-cols-2 gap-16 items-end mb-16 max-[900px]:grid-cols-1 max-[900px]:gap-6">
          <div>
            <div className="reveal inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-gold font-bold mb-6 before:content-[''] before:w-6 before:h-px before:bg-gold">
              Selskap & catering
            </div>
            <h2 className="reveal reveal-delay-1 text-[clamp(40px,6vw,76px)] leading-[0.98]">
              Heile gjengen<br />
              <em className="italic text-gold">samla hjå oss.</em>
            </h2>
          </div>
          <p className="reveal reveal-delay-2 text-[17px] leading-[1.7]" style={{ color: "rgba(253,249,238,0.75)" }}>
            Bakrommet vårt har plass te 50 stk. — pyntet, klart og med kjøkkenet rett ved sida av. Me lagar maten, dekkar bordet, og passer på at kvelden blir slik du ønskjer.
          </p>
        </div>

        {/* Selskap-grid */}
        <div className="grid grid-cols-4 gap-5 mb-14 max-[1024px]:grid-cols-2 max-[560px]:grid-cols-1">
          {selskapKort.map((k, i) => (
            <Link
              key={k.slug}
              href={`/selskap/${k.slug}`}
              className={`reveal reveal-delay-${i % 4} flex flex-col rounded-[3px] p-8 transition-[background,border-color,transform] duration-300 hover:-translate-y-1`}
              style={{
                background: "rgba(253,249,238,0.04)",
                border: "1px solid rgba(253,249,238,0.12)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(253,249,238,0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(253,249,238,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(253,249,238,0.12)";
              }}
            >
              <div className="w-12 h-12 bg-burgundy rounded-full flex items-center justify-center mb-[22px] flex-none" style={{ color: "var(--color-cream)" }}>
                {k.icon}
              </div>
              <h3 className="font-serif text-[26px] mb-3" style={{ color: "var(--color-cream)" }}>{k.title}</h3>
              <p className="text-[14px] leading-relaxed mb-5 flex-1" style={{ color: "rgba(253,249,238,0.7)" }}>{k.desc}</p>
              <ul>
                {k.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-[13px] py-1 pl-[18px] relative"
                    style={{ color: "rgba(253,249,238,0.85)" }}
                  >
                    <span className="absolute left-0 top-[5px] text-gold text-[10px]">✦</span>
                    {h}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        {/* CTA-blokk */}
        <div
          className="rounded-[4px] p-12 grid grid-cols-[1.4fr_1fr] gap-10 items-center max-[760px]:grid-cols-1 max-[760px]:p-8"
          style={{ background: "linear-gradient(135deg, var(--color-burgundy) 0%, var(--color-burgundy-deep) 100%)" }}
        >
          <div>
            <h3 className="font-serif text-[clamp(28px,4vw,42px)] mb-3" style={{ color: "var(--color-cream)" }}>
              Skal du <em className="italic text-gold">samla gjengen?</em>
            </h3>
            <p className="text-[16px] mb-6" style={{ color: "rgba(253,249,238,0.85)" }}>
              Sett av datoen alt no. Send ein melding ell ring oss — så sett me opp ein meny som passer.
            </p>
            <a
              href="mailto:post@kaffestava.no?subject=Selskap%20hj%C3%A5%20Kaf%C3%A9%20St%C3%A5v%C3%A5"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-[15px] font-semibold transition-[background,color] hover:bg-ink hover:text-cream"
              style={{ background: "var(--color-cream)", color: "var(--color-burgundy-deep)", border: "1px solid var(--color-cream)" }}
            >
              Send oss ein førespørsel
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </div>
          <div className="max-[760px]:text-left text-right">
            <div className="text-[11px] tracking-[0.22em] uppercase text-gold font-semibold mb-2">Ell ring direkte</div>
            <div className="font-serif italic text-[clamp(28px,4vw,40px)] leading-none" style={{ color: "var(--color-cream)" }}>
              <a href="tel:+4745285096">45 28 50 96</a>
            </div>
            <div className="text-[14px] mt-2" style={{ color: "rgba(253,249,238,0.8)" }}>
              <a href="mailto:post@kaffestava.no">post@kaffestava.no</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
