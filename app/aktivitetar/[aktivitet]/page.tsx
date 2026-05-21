import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import { aktivitetar } from "@/content/aktivitetar";

type Props = { params: Promise<{ aktivitet: string }> };

export async function generateStaticParams() {
  return aktivitetar.map((a) => ({ aktivitet: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { aktivitet } = await params;
  const akt = aktivitetar.find((a) => a.slug === aktivitet);
  if (!akt) return {};
  return {
    title: akt.title,
    description: akt.description,
    alternates: { canonical: `/aktivitetar/${akt.slug}` },
    openGraph: {
      title: `${akt.title} — Kafé Ståvå`,
      description: akt.description,
      url: `/aktivitetar/${akt.slug}`,
    },
  };
}

export default async function AktivitetPage({ params }: Props) {
  const { aktivitet } = await params;
  const akt = aktivitetar.find((a) => a.slug === aktivitet);
  if (!akt) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: akt.title,
    description: akt.longDescription,
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaffestava.no"}/aktivitetar/${akt.slug}`,
    location: {
      "@type": "Place",
      name: "Kafé Ståvå",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Storgata",
        addressLocality: "Vigrestad",
        postalCode: "4362",
        addressCountry: "NO",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Kafé Ståvå",
      url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaffestava.no",
    },
    eventSchedule: {
      "@type": "Schedule",
      scheduleTimezone: "Europe/Oslo",
      repeatFrequency: "P1W",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-[100px] pb-24 bg-bg">
        <div className="max-w-3xl mx-auto px-8 max-sm:px-5">
          <Breadcrumbs
            items={[
              { label: "Aktivitetar", href: "/aktivitetar" },
              { label: akt.title, href: `/aktivitetar/${akt.slug}` },
            ]}
          />

          <div className="mt-8 mb-12">
            <p className="text-[11px] tracking-[0.28em] uppercase text-burgundy font-bold mb-2">
              {akt.when}
            </p>
            <h1 className="text-[clamp(38px,6vw,72px)] leading-[1.02] mb-2">
              {akt.title}
            </h1>
            <p className="font-serif italic text-[22px] text-ink-soft mb-8">{akt.tagline}</p>

            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { icon: "clock", label: akt.time },
                { icon: "tag", label: akt.price },
                ...(akt.targetAudience ? [{ icon: "user", label: akt.targetAudience }] : []),
              ].map(({ icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 px-4 py-2 bg-paper border border-line rounded-full text-[14px] text-ink-soft font-medium">
                  <InlineIcon name={icon} />
                  {label}
                </span>
              ))}
            </div>

            <div
              className="w-full h-px mb-10"
              style={{ background: "var(--color-line)" }}
            />

            <p className="text-[18px] text-ink-soft leading-relaxed">
              {akt.longDescription}
            </p>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-line">
            <Link href="/aktivitetar" className="inline-flex items-center gap-2 text-[14px] text-ink-mute hover:text-ink transition-colors">
              <svg className="w-4 h-4 rotate-180" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              Alle aktivitetar
            </Link>
            <a
              href="mailto:post@kaffestava.no"
              className="inline-flex items-center gap-2 px-6 py-3 bg-burgundy text-cream rounded-full text-[14px] font-semibold hover:bg-burgundy-deep transition-colors"
            >
              Kontakt oss
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function InlineIcon({ name }: { name: string }) {
  if (name === "clock") return (
    <svg className="w-4 h-4 text-burgundy" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="8" cy="8" r="6" /><path d="M8 5v3l2 1.5" />
    </svg>
  );
  if (name === "tag") return (
    <svg className="w-4 h-4 text-burgundy" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M2 2h5l7 7-5 5-7-7V2z" /><circle cx="5" cy="5" r="1" fill="currentColor" />
    </svg>
  );
  return (
    <svg className="w-4 h-4 text-burgundy" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M3 13c0-3 2-5 5-5s5 2 5 5" /><circle cx="8" cy="5" r="2" />
    </svg>
  );
}
