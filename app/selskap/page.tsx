import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import { selskapTypar } from "@/content/selskap";

export const metadata: Metadata = {
  title: "Selskap & Arrangement",
  description:
    "Kafé Ståvå har selskapssale med plass te 50 personar. Konfirmasjon, julebord, bryllup, firmafest og catering på Jæren. Skjenkebevilling og skreddarsydd meny.",
  alternates: { canonical: "/selskap" },
  openGraph: {
    title: "Selskap & Arrangement — Kafé Ståvå",
    description: "Konfirmasjon, julebord, bryllup, firmafest og catering. Plass te 50 stk. i selskapssalen.",
    url: "/selskap",
  },
};

export default function SelskapPage() {
  return (
    <div className="pt-[100px] pb-24 bg-bg">
      <div className="max-w-6xl mx-auto px-8 max-sm:px-5">
        <Breadcrumbs items={[{ label: "Selskap", href: "/selskap" }]} />

        <div className="text-center mb-16 mt-6">
          <p className="text-[11px] tracking-[0.35em] uppercase text-ink-mute font-bold mb-5">
            Selskap & Arrangement
          </p>
          <h1 className="text-[clamp(42px,6vw,82px)] leading-[1.02] mb-5">
            Me fiksar <em>heile festen</em>
          </h1>
          <p className="text-[17px] text-ink-soft max-w-xl mx-auto">
            Selskapssalen har plass te 50 personar, og me hjelper deg med alt
            frå menyplanlegging og borddekking til servering og bar. Skjenkebevilling
            og skreddarsydd opplegg er sjølvsagt.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-16 max-[900px]:grid-cols-2 max-sm:grid-cols-1">
          {selskapTypar.map((type) => (
            <Link
              key={type.slug}
              href={`/selskap/${type.slug}`}
              className="group bg-paper border border-line rounded-[4px] p-7 flex flex-col gap-3 transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(26,20,16,0.22)] hover:border-burgundy/30"
            >
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-burgundy font-bold mb-1">
                  {type.capacity}
                </p>
                <h2 className="text-[22px] font-serif font-normal leading-tight mb-2">{type.title}</h2>
                <p className="text-ink-mute text-[14px] leading-relaxed">{type.description}</p>
              </div>
              <ul className="space-y-1.5 mt-2">
                {type.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex items-center gap-2 text-[13px] text-ink-soft">
                    <span className="w-4 h-4 rounded-full bg-burgundy/10 text-burgundy flex items-center justify-center text-[10px] flex-none" aria-hidden>&#10003;</span>
                    {h}
                  </li>
                ))}
              </ul>
              {type.priceFrom && (
                <p className="text-[13px] text-ink-mute mt-auto pt-3 border-t border-line">{type.priceFrom}</p>
              )}
            </Link>
          ))}
        </div>

        <div className="bg-ink text-cream rounded-[4px] p-10 text-center">
          <h2 className="font-serif italic text-[32px] mb-4">Klar te å bestilla?</h2>
          <p className="text-cream/70 text-[17px] mb-7 max-w-md mx-auto">
            Ring oss, send ein e-post ell kom innom — so finn me ut av det saman.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="tel:45285096" className="inline-flex items-center gap-2 px-7 py-4 bg-cream text-ink rounded-full text-[15px] font-semibold hover:bg-copper hover:text-cream transition-colors">
              Ring 45 28 50 96
            </a>
            <a href="mailto:post@kaffestava.no" className="inline-flex items-center gap-2 px-7 py-4 border border-cream/20 text-cream rounded-full text-[15px] font-semibold hover:bg-cream/10 transition-colors">
              post@kaffestava.no
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
