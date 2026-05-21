import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import { aktivitetar } from "@/content/aktivitetar";

export const metadata: Metadata = {
  title: "Aktivitetar",
  description:
    "Faste arrangement hjå Kafé Ståvå: Strikk & Drikk kvar tysdag, Pubquiz første torsdag i månaden, Komle-middag og Konjakk-smaking. Alltid noko å sjå fram te.",
  alternates: { canonical: "/aktivitetar" },
  openGraph: {
    title: "Aktivitetar — Kafé Ståvå",
    description: "Faste arrangement: Strikk & Drikk, Pubquiz, Komle-middag og Konjakk-smaking.",
    url: "/aktivitetar",
  },
};

export default function AktivitetarPage() {
  return (
    <div className="pt-[100px] pb-24 bg-bg">
      <div className="max-w-5xl mx-auto px-8 max-sm:px-5">
        <Breadcrumbs items={[{ label: "Aktivitetar", href: "/aktivitetar" }]} />

        <div className="text-center mb-16 mt-6">
          <p className="text-[11px] tracking-[0.35em] uppercase text-ink-mute font-bold mb-5">
            Aktivitetar
          </p>
          <h1 className="text-[clamp(42px,6vw,82px)] leading-[1.02] mb-5">
            Skjer det noko — <em>kvar veke</em>
          </h1>
          <p className="text-[17px] text-ink-soft max-w-xl mx-auto">
            Kafé Ståvå e ein stad der det alltid skjer noko. Her e oversikt over
            faste arrangement gjennom heile året.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 max-[900px]:grid-cols-1">
          {aktivitetar.map((akt) => (
            <Link
              key={akt.slug}
              href={`/aktivitetar/${akt.slug}`}
              className="group bg-paper border border-line rounded-[4px] p-8 flex flex-col gap-3 transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(26,20,16,0.22)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] tracking-[0.28em] uppercase text-burgundy font-bold mb-1">
                    {akt.when}
                  </p>
                  <h2 className="text-[24px] font-serif font-normal leading-tight">{akt.title}</h2>
                  <p className="text-ink-mute italic text-[15px]">{akt.tagline}</p>
                </div>
                <span className="flex-none bg-burgundy/10 text-burgundy text-[13px] font-semibold px-3 py-1.5 rounded-full">
                  {akt.price}
                </span>
              </div>
              <p className="text-ink-soft text-[15px] leading-relaxed">{akt.description}</p>
              <div className="flex items-center gap-1.5 text-[13px] text-ink-mute mt-auto">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <circle cx="8" cy="8" r="6" /><path d="M8 5v3l2 1.5" />
                </svg>
                {akt.time}
                <span className="ml-auto text-burgundy font-semibold group-hover:underline">Les meir &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
