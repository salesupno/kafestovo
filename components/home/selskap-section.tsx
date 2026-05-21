import Link from "next/link";
import { selskapTypar } from "@/content/selskap";

export default function SelskapSection() {
  return (
    <section className="py-28" style={{ background: "var(--color-ink)", color: "var(--color-cream)" }}>
      <div className="max-w-7xl mx-auto px-8 max-sm:px-5">
        {/* Overskrift */}
        <div className="text-center mb-16">
          <p className="reveal text-[11px] tracking-[0.35em] uppercase font-bold mb-5 opacity-50">
            Selskap & Arrangement
          </p>
          <h2 className="reveal reveal-delay-1 text-[clamp(38px,5vw,68px)] leading-[1.05] mb-5">
            Me fiksar <em className="text-copper">heile festen</em>
          </h2>
          <p className="reveal reveal-delay-2 text-[17px] opacity-70 max-w-xl mx-auto">
            Konfirmasjon, julebord, bryllup, firmafest ell catering — salskapssalen
            har plass te 50, og me ordnar mat, bar og stemning.
          </p>
        </div>

        {/* Selskap-grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5 mb-10">
          {selskapTypar.map((type, i) => (
            <Link
              key={type.slug}
              href={`/selskap/${type.slug}`}
              className={`reveal reveal-delay-${i % 4} group p-7 rounded-[4px] border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-[transform,background,box-shadow] hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]`}
            >
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-copper/80 mb-2">
                {type.capacity}
              </p>
              <h3 className="text-[22px] font-serif font-normal mb-2 leading-tight">{type.title}</h3>
              <p className="text-[14px] opacity-60 mb-4 leading-relaxed line-clamp-3">{type.description}</p>
              <ul className="space-y-1.5 mb-4">
                {type.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex items-center gap-2 text-[13px] opacity-70">
                    <span className="w-4 h-4 rounded-full bg-copper/20 text-copper flex items-center justify-center text-[10px] flex-none" aria-hidden>&#10003;</span>
                    {h}
                  </li>
                ))}
              </ul>
              <span className="text-copper text-[13px] font-semibold group-hover:underline">
                Les meir &rarr;
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center flex justify-center gap-4 flex-wrap">
          <Link
            href="/selskap"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cream text-ink rounded-full text-[15px] font-semibold hover:bg-copper hover:text-cream transition-colors"
          >
            Sjå alt om selskap
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M3 8h10M9 4l4 4-4 4" /></svg>
          </Link>
          <a
            href="mailto:post@kaffestava.no"
            className="inline-flex items-center gap-2 px-8 py-4 border rounded-full text-[15px] font-semibold transition-colors hover:bg-cream/10"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          >
            Send oss ein e-post
          </a>
        </div>
      </div>
    </section>
  );
}
