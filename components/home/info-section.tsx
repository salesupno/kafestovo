export default function InfoSection() {
  const hours = [
    { day: "Måndag", time: "12 – 21" },
    { day: "Tysdag", time: "12 – 21" },
    { day: "Onsdag", time: "12 – 21" },
    { day: "Torsdag", time: "12 – 21" },
    { day: "Fredag", time: "12 – 21" },
    { day: "Laurdag", time: "12 – 21" },
    { day: "Sundag", time: "Stengt" },
  ];

  return (
    <section className="py-[110px] max-sm:py-[70px] bg-bg-2" id="besok">
      <div className="max-w-[1280px] mx-auto px-8 max-sm:px-5">
        <div className="grid grid-cols-[1.1fr_1fr] gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-12">

          {/* Venstre: opningstider + kart */}
          <div className="reveal">
            <div className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-burgundy font-bold mb-6 before:content-[''] before:w-6 before:h-px before:bg-burgundy">
              Besøk oss
            </div>
            <h2 className="text-[clamp(40px,6vw,76px)] leading-[0.98] mb-5">
              Åpningstider<br />
              & <em className="italic text-burgundy">veg.</em>
            </h2>
            <p className="text-ink-soft text-[17px] max-w-[460px]">
              Me hølda ope kver dag, heile året. Stikk innom — ell forhåndsbestill i appen og hent på vegen heim.
            </p>

            {/* Timar */}
            <div className="mt-8 border-t border-line">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="grid gap-4 py-4 border-b border-line items-baseline"
                  style={{ gridTemplateColumns: "130px 1fr auto" }}
                >
                  <span className="font-serif italic text-[21px]">{h.day}</span>
                  <span className="border-b border-dotted border-ink-mute h-[1em] self-end mb-1" />
                  <span className="font-medium text-ink-soft tabular-nums">{h.time}</span>
                </div>
              ))}
            </div>

            {/* Kart */}
            <div className="mt-10" style={{ aspectRatio: "16/9", borderRadius: "3px", overflow: "hidden", border: "1px solid var(--color-line)", background: "var(--color-bg)" }}>
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=5.6125%2C58.5535%2C5.6225%2C58.5605&layer=mapnik&marker=58.557%2C5.6175"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kart over Vigrestad sentrum"
                style={{ width: "100%", height: "100%", border: 0, filter: "grayscale(0.3) sepia(0.15)" }}
              />
            </div>
          </div>

          {/* Høgre: kontaktkort + Facebook */}
          <div className="reveal reveal-delay-1">
            <div className="bg-cream border border-line rounded-[3px] p-9">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>,
                  label: "Adresse",
                  val: "Storgata, Vigrestad",
                  extra: "4362 Vigrestad · Jæren",
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 4h3l2 5-2 1c1 3 3 5 6 6l1-2 5 2v3c0 1-1 2-2 2A15 15 0 0 1 3 6c0-1 1-2 2-2z"/></svg>,
                  label: "Ring oss",
                  val: <a href="tel:+4745285096">45 28 50 96</a>,
                  extra: null,
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>,
                  label: "E-post",
                  val: <a href="mailto:post@kaffestava.no">post@kaffestava.no</a>,
                  extra: "For selskap, catering og spørsmål",
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
                  label: "Ope kver dag",
                  val: "12 – 21",
                  extra: "Skjenking til seinare ved selskap",
                },
              ].map(({ icon, label, val, extra }, i) => (
                <div
                  key={label}
                  className={`flex gap-4 py-4 items-start${i < 3 ? " border-b border-line" : ""}`}
                >
                  <div className="w-9 h-9 border border-line rounded-full flex items-center justify-center flex-none text-burgundy" style={{ width: 36, height: 36 }}>
                    <span style={{ width: 16, height: 16, display: "flex" }}>{icon}</span>
                  </div>
                  <div>
                    <div className="text-[11px] tracking-[0.2em] uppercase text-ink-mute mb-1">{label}</div>
                    <div className="font-serif text-[20px] text-ink">{val}</div>
                    {extra && <div className="font-sans text-[14px] text-ink-soft leading-snug mt-0.5">{extra}</div>}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://www.facebook.com/profile.php?id=100083121287429"
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-2.5 px-7 py-4 bg-transparent text-ink border border-ink rounded-full text-[15px] font-semibold hover:bg-ink hover:text-cream transition-[background,color]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9V15h-2.5v-3h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 3h-2.4v6.9C18.3 21.1 22 17 22 12z"/>
              </svg>
              Følg oss på Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
