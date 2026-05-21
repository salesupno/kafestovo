import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import { selskapTypar } from "@/content/selskap";

type Props = { params: Promise<{ type: string }> };

export async function generateStaticParams() {
  return selskapTypar.map((t) => ({ type: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const sel = selskapTypar.find((t) => t.slug === type);
  if (!sel) return {};
  return {
    title: sel.title,
    description: sel.description,
    alternates: { canonical: `/selskap/${sel.slug}` },
    openGraph: {
      title: `${sel.title} — Kafé Ståvå`,
      description: sel.description,
      url: `/selskap/${sel.slug}`,
    },
  };
}

export default async function SelskapTypePage({ params }: Props) {
  const { type } = await params;
  const sel = selskapTypar.find((t) => t.slug === type);
  if (!sel) notFound();

  return (
    <div className="pt-[100px] pb-24 bg-bg">
      <div className="max-w-3xl mx-auto px-8 max-sm:px-5">
        <Breadcrumbs
          items={[
            { label: "Selskap", href: "/selskap" },
            { label: sel.title, href: `/selskap/${sel.slug}` },
          ]}
        />

        <div className="mt-8 mb-12">
          <p className="text-[11px] tracking-[0.28em] uppercase text-burgundy font-bold mb-2">
            {sel.capacity}
          </p>
          <h1 className="text-[clamp(38px,6vw,72px)] leading-[1.02] mb-6">{sel.title}</h1>
          <p className="text-[18px] text-ink-soft leading-relaxed mb-8">{sel.longDescription}</p>

          <div className="bg-paper border border-line rounded-[4px] p-7 mb-8">
            <h2 className="text-[16px] font-semibold tracking-wide uppercase text-ink-mute mb-4">Inkludert</h2>
            <ul className="space-y-3">
              {sel.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-[16px] text-ink">
                  <span className="w-5 h-5 rounded-full bg-burgundy/10 text-burgundy flex items-center justify-center text-[11px] flex-none" aria-hidden>&#10003;</span>
                  {h}
                </li>
              ))}
            </ul>
            {sel.priceFrom && (
              <p className="mt-5 pt-5 border-t border-line text-[15px] font-semibold text-burgundy">{sel.priceFrom}</p>
            )}
          </div>
        </div>

        <div className="bg-ink text-cream rounded-[4px] p-8 text-center mb-10">
          <h2 className="font-serif italic text-[26px] mb-3">Klar te å bestilla?</h2>
          <p className="text-cream/70 text-[15px] mb-6">Ring oss ell send ein e-post — so finn me ut av det saman.</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a href="tel:45285096" className="inline-flex items-center gap-2 px-6 py-3 bg-cream text-ink rounded-full text-[14px] font-semibold hover:bg-copper hover:text-cream transition-colors">
              Ring 45 28 50 96
            </a>
            <a href="mailto:post@kaffestava.no" className="inline-flex items-center gap-2 px-6 py-3 border border-cream/20 text-cream rounded-full text-[14px] font-semibold hover:bg-cream/10 transition-colors">
              post@kaffestava.no
            </a>
          </div>
        </div>

        <Link href="/selskap" className="inline-flex items-center gap-2 text-[14px] text-ink-mute hover:text-ink transition-colors">
          <svg className="w-4 h-4 rotate-180" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M3 8h10M9 4l4 4-4 4" /></svg>
          Tilbake til selskap
        </Link>
      </div>
    </div>
  );
}
