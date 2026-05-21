import Link from "next/link";
import { faqKategoriar } from "@/content/faq";

export default function FaqSection() {
  // Hent dei 4 fyste spørsmåla på tvers av kategoriar
  const preview = faqKategoriar.flatMap((k) => k.questions).slice(0, 4);

  return (
    <section className="py-28 bg-bg">
      <div className="max-w-4xl mx-auto px-8 max-sm:px-5">
        {/* Overskrift */}
        <div className="text-center mb-14">
          <p className="reveal text-[11px] tracking-[0.35em] uppercase text-ink-mute font-bold mb-5">
            Ofte stilte spørsmål
          </p>
          <h2 className="reveal reveal-delay-1 text-[clamp(36px,5vw,64px)] leading-[1.05]">
            Lurer du på noke?
          </h2>
        </div>

        {/* Spørsmål-liste */}
        <div className="space-y-3 mb-10">
          {preview.map((q, i) => (
            <Link
              key={q.slug}
              href={`/faq/${q.categorySlug}/${q.slug}`}
              className={`reveal reveal-delay-${i % 4} group flex items-center justify-between p-6 bg-paper border border-line rounded-[4px] gap-4 hover:border-burgundy/40 hover:bg-paper transition-colors`}
            >
              <p className="text-[17px] text-ink group-hover:text-burgundy transition-colors">{q.question}</p>
              <svg className="w-5 h-5 flex-none text-ink-mute group-hover:text-burgundy transition-colors" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-8 py-4 border border-ink text-ink rounded-full text-[15px] font-semibold hover:bg-ink hover:text-cream transition-colors"
          >
            Sjå alle spørsmål
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M3 8h10M9 4l4 4-4 4" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
