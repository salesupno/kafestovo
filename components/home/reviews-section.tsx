export default function ReviewsSection() {
  const reviews = [
    {
      author: "Marte L.",
      rating: 5,
      text: "Enestående husmannskost! Komlå e som hjemmelaga — for det er det og. Kjem att kvar veke.",
      via: "Google",
    },
    {
      author: "Jonas E.",
      rating: 5,
      text: "Beste pubkvelden på Jæren. Frode e ein fantastisk vert og konjakk-utvalget er imponerande.",
      via: "Google",
    },
    {
      author: "Ragnhild T.",
      rating: 4,
      text: "Hadde firmafest her — alt gjekk på skjenner. God mat, hyggelig personal, og salen var flott dekorert.",
      via: "Google",
    },
    {
      author: "Per K.",
      rating: 5,
      text: "Bestilte via Go2Grill — heilt saumlaus prosess. Maten var klar akkurat når eg kom. Topp!",
      via: "Google",
    },
  ];

  return (
    <section className="py-28 bg-bg-2">
      <div className="max-w-7xl mx-auto px-8 max-sm:px-5">
        {/* Overskrift */}
        <div className="text-center mb-14">
          <p className="reveal text-[11px] tracking-[0.35em] uppercase text-ink-mute font-bold mb-5">
            Kva folk seier
          </p>
          <div className="reveal reveal-delay-1 flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1" aria-label="4.1 av 5 stjerner">
              {[1, 2, 3, 4].map((n) => (
                <svg key={n} className="w-6 h-6 text-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden><path d="M10 1l2.4 7.2H20l-6.2 4.5 2.4 7.3L10 15.5l-6.2 4.5 2.4-7.3L0 8.2h7.6z" /></svg>
              ))}
              <svg className="w-6 h-6 text-gold opacity-30" viewBox="0 0 20 20" fill="currentColor" aria-hidden><path d="M10 1l2.4 7.2H20l-6.2 4.5 2.4 7.3L10 15.5l-6.2 4.5 2.4-7.3L0 8.2h7.6z" /></svg>
            </div>
            <span className="font-serif italic text-[28px] text-ink">4.1</span>
            <span className="text-ink-mute text-[14px]">på Google</span>
          </div>
          <h2 className="reveal reveal-delay-2 text-[clamp(32px,4vw,54px)] leading-[1.1]">
            Folket har talt.
          </h2>
        </div>

        {/* Reviews-grid */}
        <div className="grid grid-cols-2 gap-5 max-[900px]:grid-cols-1">
          {reviews.map((r, i) => (
            <div
              key={r.author}
              className={`reveal reveal-delay-${i % 4} bg-paper border border-line rounded-[4px] p-7`}
            >
              <div className="flex gap-1 mb-3" aria-label={`${r.rating} av 5 stjerner`}>
                {Array.from({ length: r.rating }).map((_, n) => (
                  <svg key={n} className="w-4 h-4 text-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden><path d="M10 1l2.4 7.2H20l-6.2 4.5 2.4 7.3L10 15.5l-6.2 4.5 2.4-7.3L0 8.2h7.6z" /></svg>
                ))}
              </div>
              <p className="text-[16px] text-ink-soft leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
              <p className="text-[13px] text-ink-mute font-semibold">{r.author} &middot; {r.via}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
