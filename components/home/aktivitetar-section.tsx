export default function AktivitetarSection() {
  const aktivitetar = [
    {
      when: "Kver tysdag",
      title: "Strikk & Drikk",
      tagline: "— for jentene i bygda",
      desc: "Ta med strikkeprosjektet (ell ikkje), hugla deg ned med eit glas og prata med jentene. Ailla e velkomne.",
      time: "Kl. 18:00 – 21:00",
      price: "Gratis",
    },
    {
      when: "Fysste torsdag i månan",
      title: "Pubquiz",
      tagline: "— lag på opp te 6 stk.",
      desc: "Quiz-master Frode lagar spørsmål om alt frå Jæren te verda. Vinneren får ein premie å skryta av.",
      time: "Kl. 19:00",
      price: "50 kr / lag",
    },
    {
      when: "Annankver søndag",
      title: "Komle-middag",
      tagline: "— ækte jærsk husmannskost",
      desc: "Annankver søndag fyrer me opp komlegryta. Råkomle med ailla tilbehør — sjekk vår Facebook for dato.",
      time: "Kl. 13:00 – 16:00",
      price: "Fra 189 kr",
    },
    {
      when: "Etter avtale",
      title: "Konjakk-smaking",
      tagline: "— 50–80 sortar på hylla",
      desc: "Me har eit av Jærens mest variert utvalg konjakk. Bestill ei smaking for gjengen, ell prøv ei og ei på eige hånd.",
      time: "Min. 6 stk.",
      price: "Pris på førespørsel",
    },
  ];

  return (
    <section className="py-[110px] max-sm:py-[70px] bg-bg" id="aktivitetar">
      <div className="max-w-[1280px] mx-auto px-8 max-sm:px-5">

        {/* Overskrift */}
        <div className="text-center max-w-[720px] mx-auto mb-16">
          <div className="reveal inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-burgundy font-bold mb-6 before:content-[''] before:w-6 before:h-px before:bg-burgundy" style={{ justifyContent: "center" }}>
            Det som skjer hjå oss
          </div>
          <h2 className="reveal reveal-delay-1 text-[clamp(40px,6vw,76px)] leading-[0.98]">
            Aktivitetar &<br />
            <em className="italic text-burgundy">faste tradisjonar.</em>
          </h2>
          <p className="reveal reveal-delay-2 text-ink-soft text-[18px] mt-4">
            Bygdepuben e meir enn matplass. Strikk & Drikk, quiz og live-sport — kåm innom og bli kjent med folka i bygda.
          </p>
        </div>

        {/* Aktivitets-grid */}
        <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-2 max-[560px]:grid-cols-1">
          {aktivitetar.map((a, i) => (
            <div
              key={a.title}
              className={`reveal reveal-delay-${i} relative bg-cream border border-line rounded-[3px] p-7 overflow-hidden transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-burgundy hover:shadow-[0_20px_40px_-20px_rgba(26,20,16,0.2)]`}
              style={{ "--tw-border-before": "scaleY(0)" } as React.CSSProperties}
            >
              {/* Venstre border-akksent */}
              <div
                className="absolute top-0 left-0 w-1 h-full bg-burgundy transition-transform duration-300 origin-top scale-y-0 group-hover:scale-y-100"
                style={{ transform: "scaleY(0)", transition: "transform 0.3s ease" }}
                aria-hidden
              />

              <span
                className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.16em] uppercase text-burgundy font-bold mb-[18px] rounded-[4px] px-2.5 py-[5px]"
                style={{ background: "rgba(168,38,31,0.08)" }}
              >
                {a.when}
              </span>
              <h3 className="font-serif text-[28px] mb-2.5">{a.title}</h3>
              <div
                className="font-hand text-copper text-[20px] mb-3.5 inline-block"
                style={{ transform: "rotate(-1deg)" }}
              >
                {a.tagline}
              </div>
              <p className="text-ink-soft text-[14px] leading-relaxed">{a.desc}</p>
              <div className="flex justify-between mt-4 pt-4 border-t border-dashed border-line text-[13px] text-ink-mute">
                <span>{a.time}</span>
                <strong className="text-ink font-semibold">{a.price}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
