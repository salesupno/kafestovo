import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import { faqKategoriar } from "@/content/faq";

type Props = { params: Promise<{ kategori: string }> };

export async function generateStaticParams() {
  return faqKategoriar.map((k) => ({ kategori: k.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategori } = await params;
  const kat = faqKategoriar.find((k) => k.slug === kategori);
  if (!kat) return {};
  return {
    title: `FAQ: ${kat.title}`,
    description: kat.description,
    alternates: { canonical: `/faq/${kat.slug}` },
    openGraph: {
      title: `${kat.title} — FAQ Kafé Ståvå`,
      description: kat.description,
      url: `/faq/${kat.slug}`,
    },
  };
}

export default async function FaqKategoriPage({ params }: Props) {
  const { kategori } = await params;
  const kat = faqKategoriar.find((k) => k.slug === kategori);
  if (!kat) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: kat.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer.replace(/<[^>]+>/g, ""),
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-[100px] pb-24 bg-bg">
        <div className="max-w-3xl mx-auto px-8 max-sm:px-5">
          <Breadcrumbs
            items={[
              { label: "FAQ", href: "/faq" },
              { label: kat.title, href: `/faq/${kat.slug}` },
            ]}
          />

          <div className="mt-8 mb-12">
            <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.05] mb-4">{kat.title}</h1>
            <p className="text-[17px] text-ink-soft">{kat.description}</p>
          </div>

          <div className="space-y-3 mb-10">
            {kat.questions.map((q) => (
              <Link
                key={q.slug}
                href={`/faq/${kat.slug}/${q.slug}`}
                className="group flex items-center justify-between p-6 bg-paper border border-line rounded-[4px] hover:border-burgundy/40 transition-colors"
              >
                <p className="text-[17px] text-ink group-hover:text-burgundy transition-colors">{q.question}</p>
                <svg className="w-5 h-5 flex-none text-ink-mute group-hover:text-burgundy transition-colors" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            ))}
          </div>

          <Link href="/faq" className="inline-flex items-center gap-2 text-[14px] text-ink-mute hover:text-ink transition-colors">
            <svg className="w-4 h-4 rotate-180" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            Alle spørsmål
          </Link>
        </div>
      </div>
    </>
  );
}
