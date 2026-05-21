export default function ReviewsSection() {
  const reviews = [
    {
      initial: "B",
      author: "Bjørn H.",
      date: "Lokal guide · 3 veker sidan",
      rating: 5,
      text: "Fantastisk lutefiskbuffet — mat, service og atmosfære i særklasse. Me kjem gjerne tilbake!",
    },
    {
      initial: "M",
      author: "Marta L.",
      date: "2 månadar sidan",
      rating: 5,
      text: "Stansa innom på ein søndag — buffet var heimelaga, rikelig og koselig. Verdt heile sykkelturen!",
    },
    {
      initial: "K",
      author: "Kari S.",
      date: "1 månad sidan",
      rating: 5,
      text: "Kjekke folk, god kaffi og rauseporsjonar. Eit ækte stamsted midt i bygda — me kjem ailltid att.",
    },
  ];

  const Star = ({ dim = false }: { dim?: boolean }) => (
    <svg viewBox="0 0 24 24" className={`w-[17px] h-[17px] text-gold fill-current${dim ? " opacity-40" : ""}`} aria-hidden>
      <path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z"/>
    </svg>
  );

  return (
    <section className="py-[110px] max-sm:py-[70px] bg-paper relative" id="anmeldelser">
      <div className="max-w-[1280px] mx-auto px-8 max-sm:px-5">

        {/* Topp: tekst + rating-kort */}
        <div className="grid grid-cols-[1.2fr_1fr] gap-16 items-end mb-14 max-[900px]:grid-cols-1 max-[900px]:gap-8">
          <div className="reveal">
            <div className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-burgundy font-bold mb-6 before:content-[''] before:w-6 before:h-px before:bg-burgundy">
              Det gjestene seier
            </div>
            <h2 className="text-[clamp(40px,6vw,76px)] leading-[0.98]">
              Hjarteord frå<br />
              <em className="italic text-burgundy">gode gjester.</em>
            </h2>
          </div>

          <div className="reveal reveal-delay-1 bg-cream border border-line rounded-[3px] p-6 flex items-center gap-[22px]">
            <div className="font-serif text-[64px] leading-none text-burgundy">4,1</div>
            <div className="flex-1">
              <div className="flex gap-1 mb-1.5" aria-label="4,1 av 5 stjerner">
                <Star /><Star /><Star /><Star /><Star dim />
              </div>
              <div className="text-[13px] text-ink-mute leading-snug">
                <strong className="text-ink font-semibold">4,1 av 5</strong> · basert på Google-vurderinger
              </div>
              <div className="inline-flex items-center gap-1.5 text-[11px] text-ink-mute mt-1.5 tracking-[0.05em]">
                <svg viewBox="0 0 24 24" className="w-[13px] h-[13px]">
                  <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4c-.2 1.3-.9 2.4-2 3.1v2.6h3.3c1.9-1.8 3-4.4 3-7.5z"/>
                  <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.6c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3v2.6C4.7 19.9 8.1 22 12 22z"/>
                  <path fill="#FBBC05" d="M6.4 13.9c-.2-.6-.3-1.3-.3-1.9s.1-1.3.3-1.9V7.5H3C2.4 8.9 2 10.4 2 12s.4 3.1 1 4.5l3.4-2.6z"/>
                  <path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9C16.9 2.9 14.7 2 12 2 8.1 2 4.7 4.1 3 7.5l3.4 2.6C7.2 7.8 9.4 6 12 6z"/>
                </svg>
                Vurdert på Google
              </div>
            </div>
          </div>
        </div>

        {/* Reviews-grid: 3 kolonnar */}
        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
          {reviews.map((r, i) => (
            <div
              key={r.author}
              className={`reveal reveal-delay-${i} bg-cream border border-line rounded-[3px] p-7 flex flex-col transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(26,20,16,0.18)]`}
            >
              <div className="font-serif italic text-[56px] leading-[0.7] text-burgundy mb-1.5 opacity-50">&ldquo;</div>
              <div className="flex gap-0.5 mb-3.5" aria-label={`${r.rating} av 5 stjerner`}>
                {Array.from({ length: r.rating }).map((_, n) => <Star key={n} />)}
              </div>
              <p className="font-serif text-[19px] leading-[1.45] text-ink mb-[22px] flex-1">{r.text}</p>
              <div className="flex items-center gap-3 pt-[18px] border-t border-dashed border-line">
                <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center font-serif text-[17px] text-burgundy flex-none" style={{ background: "var(--color-bg-2)" }}>
                  {r.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-ink">{r.author}</div>
                  <div className="text-[11px] text-ink-mute">{r.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
