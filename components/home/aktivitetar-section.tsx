import Link from "next/link";
import { aktivitetar } from "@/content/aktivitetar";

export default function AktivitetarSection() {
  return (
    <section className="py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-8 max-sm:px-5">
        {/* Overskrift */}
        <div className="text-center mb-16">
          <p className="reveal text-[11px] tracking-[0.35em] uppercase text-ink-mute font-bold mb-5">
            Aktivitetar
          </p>
          <h2 className="reveal reveal-delay-1 text-[clamp(38px,5vw,68px)] leading-[1.05] mb-5">
            Skjer det noko — <em>kvar veke</em>
          </h2>
          <p className="reveal reveal-delay-2 text-[17px] text-ink-soft max-w-xl mx-auto">
            Frå strikkekveld te pubquiz og komle-middag. Her e alltid noko å glede seg te.
          </p>
        </div>

        {/* Aktivitet-grid */}
        <div className="grid grid-cols-2 gap-6 mb-10 max-[900px]:grid-cols-1">
          {aktivitetar.map((akt, i) => (
            <Link
              key={akt.slug}
              href={`/aktivitetar/${akt.slug}`}
              className={`reveal reveal-delay-${i % 3} group bg-paper border border-line rounded-[4px] p-8 transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(26,20,16,0.22)] flex flex-col gap-3`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] tracking-[0.28em] uppercase text-burgundy font-bold mb-1">
                    {akt.when}
                  </p>
                  <h3 className="text-[24px] font-serif font-normal leading-tight">{akt.title}</h3>
                  <p className="text-ink-mute italic text-[15px]">{akt.tagline}</p>
                </div>
                <div className="flex-none text-right">
                  <span className="inline-block bg-burgundy/10 text-burgundy text-[13px] font-semibold px-3 py-1.5 rounded-full">
                    {akt.price}
                  </span>
                </div>
              </div>
              <p className="text-ink-soft text-[15px] leading-relaxed">{akt.description}</p>
              <div className="flex items-center gap-1.5 text-[13px] text-ink-mute mt-auto">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <circle cx="8" cy="8" r="6" /><path d="M8 5v3l2 1.5" />
                </svg>
                {akt.time}
                <span className="ml-auto text-burgundy font-semibold group-hover:underline text-[13px]">Les meir &rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <Link
            href="/aktivitetar"
            className="inline-flex items-center gap-2 px-8 py-4 border border-ink text-ink rounded-full text-[15px] font-semibold hover:bg-ink hover:text-cream transition-colors"
          >
            Alle aktivitetar
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M3 8h10M9 4l4 4-4 4" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
