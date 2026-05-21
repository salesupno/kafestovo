import Image from "next/image";

export default function Go2GrillSection() {
  return (
    <section className="py-[110px] max-sm:py-[70px] bg-paper relative" id="bestill">
      <div className="max-w-[1280px] mx-auto px-8 max-sm:px-5">
        <div className="grid grid-cols-[1.1fr_1fr] gap-16 items-center max-[980px]:grid-cols-1 max-[980px]:gap-12">

          {/* Venstre */}
          <div>
            {/* Partner-logo */}
            <div className="reveal inline-flex items-center gap-3.5 mb-8 px-[18px] py-3.5 bg-cream border border-line rounded-full w-max">
              <span className="text-[10px] tracking-[0.24em] uppercase text-ink-mute font-semibold">I samarbeid med</span>
              <Image src="/assets/go2grill-logo.png" alt="Go2Grill" width={80} height={32} className="h-8 w-auto" />
            </div>

            <div className="reveal inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-burgundy font-bold mb-6 before:content-[''] before:w-6 before:h-px before:bg-burgundy">
              Slik bestiller du
            </div>

            <h2 className="reveal reveal-delay-1 text-[clamp(40px,6vw,76px)] leading-[0.98] mb-6">
              Frå mobil<br />
              te <em className="italic text-burgundy">disk.</em>
            </h2>

            <p className="reveal reveal-delay-2 font-serif italic text-[clamp(22px,2vw,28px)] leading-[1.35] text-ink mb-6">
              Skann QR'en, ell søk opp <em className="text-burgundy">Kafé Ståvå</em> i Go2Grill. Heile menyen ligg klar — du betalar og hentar.
            </p>

            {/* Steg */}
            <div className="reveal reveal-delay-2 grid grid-cols-2 gap-4 mb-8 max-[560px]:grid-cols-1">
              {[
                { n: "1", title: "Skann QR / last ned", desc: "App Store ell Google Play. Gratis." },
                { n: "2", title: "Vel Kafé Ståvå", desc: "Sjå heile menyen og dagens." },
                { n: "3", title: "Bestill & betal", desc: "Vel hentetid, betal i app." },
                { n: "4", title: "Hent hjå oss", desc: "Maten e klar i disken." },
              ].map((s) => (
                <div
                  key={s.n}
                  className="flex gap-3.5 p-[14px_16px] bg-cream border border-line rounded-[3px] transition-[border-color,transform] hover:border-burgundy hover:-translate-y-0.5"
                >
                  <div
                    className="w-7 h-7 bg-burgundy text-cream rounded-full flex items-center justify-center font-serif italic text-[16px] flex-none"
                  >
                    {s.n}
                  </div>
                  <div>
                    <h4 className="font-sans text-[14px] font-semibold text-ink mb-0.5">{s.title}</h4>
                    <p className="text-[12px] text-ink-mute leading-snug m-0">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Last ned */}
            <div className="reveal reveal-delay-3 flex gap-3 flex-wrap">
              <a
                href="https://apps.apple.com/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 px-5 py-3 bg-ink text-cream rounded-full border border-ink transition-[background,border-color,transform] hover:bg-burgundy hover:border-burgundy hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]"><path d="M17.05 12.04c-.03-2.92 2.39-4.32 2.5-4.39-1.36-1.99-3.48-2.26-4.24-2.29-1.81-.18-3.53 1.06-4.45 1.06-.93 0-2.34-1.04-3.84-1.01-1.98.03-3.8 1.15-4.81 2.92-2.05 3.56-.53 8.83 1.47 11.72.98 1.42 2.15 3.02 3.66 2.96 1.47-.06 2.03-.95 3.81-.95 1.78 0 2.27.95 3.83.92 1.58-.03 2.59-1.45 3.56-2.88.81-1.18 1.39-2.43 1.79-3.74-1.94-.83-3.27-2.7-3.28-4.32zM14.06 3.36c.82-.99 1.37-2.36 1.22-3.73-1.18.05-2.6.78-3.45 1.77-.76.86-1.43 2.27-1.25 3.62 1.32.1 2.66-.67 3.48-1.66z"/></svg>
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-[10px] opacity-75 tracking-[0.05em]">Last ned på</span>
                  <span className="text-[15px] font-semibold">App Store</span>
                </div>
              </a>
              <a
                href="https://play.google.com/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 px-5 py-3 bg-ink text-cream rounded-full border border-ink transition-[background,border-color,transform] hover:bg-burgundy hover:border-burgundy hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]"><path d="M3.6 1.6c-.4.4-.6.9-.6 1.6v17.6c0 .7.2 1.2.6 1.6l11.7-10.8L3.6 1.6zm12.7 9.6L5.6 1.4 17.9 8.4l-1.6 2.8zM21.4 10.4c.8.4 1.2 1 1.2 1.6s-.4 1.2-1.2 1.6l-3.1 1.8-1.8-3.4 1.8-3.4 3.1 1.8zM5.6 22.6l10.7-9.8 1.6 2.8L5.6 22.6z"/></svg>
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-[10px] opacity-75 tracking-[0.05em]">Last ned på</span>
                  <span className="text-[15px] font-semibold">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* QR-panel */}
          <div className="reveal reveal-delay-2">
            <div
              className="bg-cream border border-line rounded-[4px] p-8 text-center shadow-[0_30px_60px_-25px_rgba(26,20,16,0.25)] relative"
              style={{ "--qr-border": "1px" } as React.CSSProperties}
            >
              <div className="absolute inset-[-1px] rounded-[4px] -z-10 opacity-40" style={{ background: "linear-gradient(135deg, var(--color-burgundy), var(--color-gold))" }} />
              <div className="flex items-center justify-center gap-3 mb-2">
                <strong className="font-serif italic text-[28px] text-ink font-normal">Kafé Ståvå</strong>
                <span className="font-serif italic text-ink-mute text-[20px]">×</span>
                <Image src="/assets/go2grill-logo.png" alt="Go2Grill" width={90} height={36} className="h-9 w-auto" />
              </div>
              <p className="text-[12px] tracking-[0.18em] uppercase text-ink-mute font-semibold mb-6">Skann og bestill</p>
              <div className="max-w-[320px] mx-auto bg-white p-3 border border-line rounded-sm aspect-square">
                <a href="https://link.preoday.no/kaffestava" target="_blank" rel="noopener">
                  <Image src="/assets/qr-go2grill-crop.png" alt="QR-kode te Go2Grill-bestilling" width={300} height={300} className="w-full h-full object-contain" />
                </a>
              </div>
              <div className="mt-5 pt-5 border-t border-dashed border-line">
                <div className="font-mono text-[13px] text-burgundy break-all">link.preoday.no/kaffestava</div>
                <div
                  className="font-hand text-[22px] text-copper mt-2 inline-block"
                  style={{ transform: "rotate(-1deg)" }}
                >
                  — pek mobilen på QR-en!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
