import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import { faqKategoriar } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ — Ofte stilte spørsmål",
  description:
    "Svar på dei vanlegaste spørsmåla om Kafé Ståvå: bestilling, selskap, mat og drikke, aktivitetar og praktisk info.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — Kafé Ståvå",
    description: "Svar på dei vanlegaste spørsmåla om Kafé Ståvå.",
    url: "/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqKategoriar.flatMap((k) =>
    k.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer.replace(/<[^>]+>/g, ""),
      },
    }))
  ),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="pt-[100px] pb-24 bg-bg">
        <div className="max-w-4xl mx-auto px-8 max-sm:px-5">
          <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />

          <div className="text-center mb-16 mt-6">
            <p className="text-[11px] tracking-[0.35em] uppercase text-ink-mute font-bold mb-5">
              Ofte stilte spørsmål
            </p>
            <h1 className="text-[clamp(42px,6vw,82px)] leading-[1.02] mb-5">
              Lurer du på noke?
            </h1>
            <p className="text-[17px] text-ink-soft max-w-xl mx-auto">
              Her finn du svar på dei vanlegaste spørsmåla. Finn du ikkje svaret —
              ring oss på <a href="tel:45285096" className="text-burgundy hover:underline">45 28 50 96</a>.
            </p>
          </div>

          <div className="space-y-10">
            {faqKategoriar.map((kat) => (
              <div key={kat.slug}>
                <Link
                  href={`/faq/${kat.slug}`}
                  className="group flex items-center justify-between mb-4 pb-3 border-b border-line-strong hover:border-burgundy/40 transition-colors"
                >
                  <h2 className="text-[20px] font-semibold group-hover:text-burgundy transition-colors">{kat.title}</h2>
                  <span className="text-[13px] text-ink-mute group-hover:text-burgundy transition-colors">
                    Sjå alle &rarr;
                  </span>
                </Link>
                <div className="space-y-2">
                  {kat.questions.map((q) => (
                    <Link
                      key={q.slug}
                      href={`/faq/${kat.slug}/${q.slug}`}
                      className="group flex items-center justify-between p-5 bg-paper border border-line rounded-[4px] hover:border-burgundy/40 transition-colors"
                    >
                      <p className="text-[16px] text-ink group-hover:text-burgundy transition-colors">{q.question}</p>
                      <svg className="w-5 h-5 flex-none text-ink-mute group-hover:text-burgundy transition-colors" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
