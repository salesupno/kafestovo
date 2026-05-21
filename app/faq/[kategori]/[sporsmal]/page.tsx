import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import { faqKategoriar, getFaqQuestion } from "@/content/faq";

type Props = { params: Promise<{ kategori: string; sporsmal: string }> };

export async function generateStaticParams() {
  return faqKategoriar.flatMap((k) =>
    k.questions.map((q) => ({ kategori: k.slug, sporsmal: q.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategori, sporsmal } = await params;
  const q = getFaqQuestion(kategori, sporsmal);
  const kat = faqKategoriar.find((k) => k.slug === kategori);
  if (!q || !kat) return {};
  return {
    title: q.question,
    description: q.answer.replace(/<[^>]+>/g, "").slice(0, 155),
    alternates: { canonical: `/faq/${kategori}/${sporsmal}` },
    openGraph: {
      title: `${q.question} — Kafé Ståvå`,
      description: q.answer.replace(/<[^>]+>/g, "").slice(0, 155),
      url: `/faq/${kategori}/${sporsmal}`,
    },
  };
}

export default async function SporsmalPage({ params }: Props) {
  const { kategori, sporsmal } = await params;
  const q = getFaqQuestion(kategori, sporsmal);
  const kat = faqKategoriar.find((k) => k.slug === kategori);
  if (!q || !kat) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer.replace(/<[^>]+>/g, ""),
        },
      },
    ],
  };

  const otherQuestions = kat.questions.filter((other) => other.slug !== q.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-[100px] pb-24 bg-bg">
        <div className="max-w-3xl mx-auto px-8 max-sm:px-5">
          <Breadcrumbs
            items={[
              { label: "FAQ", href: "/faq" },
              { label: kat.title, href: `/faq/${kat.slug}` },
              { label: q.question, href: `/faq/${kat.slug}/${q.slug}` },
            ]}
          />

          <div className="mt-8 mb-10">
            <p className="text-[11px] tracking-[0.28em] uppercase text-burgundy font-bold mb-3">
              {kat.title}
            </p>
            <h1 className="text-[clamp(28px,4vw,48px)] leading-[1.15] mb-8">{q.question}</h1>
            <div
              className="text-[18px] text-ink-soft leading-relaxed prose-burgundy"
              dangerouslySetInnerHTML={{ __html: q.answer }}
            />
          </div>

          {otherQuestions.length > 0 && (
            <div className="border-t border-line pt-10 mb-10">
              <h2 className="text-[15px] font-semibold text-ink-mute uppercase tracking-wide mb-4">
                Andre spørsmål i denne kategorien
              </h2>
              <div className="space-y-2">
                {otherQuestions.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/faq/${kat.slug}/${other.slug}`}
                    className="group flex items-center justify-between p-5 bg-paper border border-line rounded-[4px] hover:border-burgundy/40 transition-colors"
                  >
                    <p className="text-[15px] text-ink group-hover:text-burgundy transition-colors">{other.question}</p>
                    <svg className="w-4 h-4 flex-none text-ink-mute" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <Link href="/faq" className="inline-flex items-center gap-2 text-[14px] text-ink-mute hover:text-ink transition-colors">
            <svg className="w-4 h-4 rotate-180" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            Alle spørsmål
          </Link>
        </div>
      </div>
    </>
  );
}
