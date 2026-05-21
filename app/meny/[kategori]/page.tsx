import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs";
import { menuKategoriar } from "@/content/meny";

type Props = { params: Promise<{ kategori: string }> };

export async function generateStaticParams() {
  return menuKategoriar.map((k) => ({ kategori: k.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategori } = await params;
  const kat = menuKategoriar.find((k) => k.slug === kategori);
  if (!kat) return {};
  return {
    title: kat.title,
    description: kat.description,
    alternates: { canonical: `/meny/${kat.slug}` },
    openGraph: {
      title: `${kat.title} — Kafé Ståvå`,
      description: kat.description,
      url: `/meny/${kat.slug}`,
    },
  };
}

const kategoriImages: Record<string, string> = {
  husmannskost: "/assets/burger-plate.jpg",
  "pub-og-bar": "/assets/cheeseboard.jpg",
  "smorbrod-og-snitter": "/assets/salad-platter.jpg",
  "kaffi-og-te": "/assets/dining-room-2.jpg",
  bakst: "/assets/buffet.jpg",
  "fra-grillen": "/assets/burger-final.jpg",
};

export default async function KategoriPage({ params }: Props) {
  const { kategori } = await params;
  const kat = menuKategoriar.find((k) => k.slug === kategori);
  if (!kat) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MenuSection",
    name: kat.title,
    description: kat.description,
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaffestava.no"}/meny/${kat.slug}`,
    hasMenuItem: kat.items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      description: item.description ?? undefined,
      offers: {
        "@type": "Offer",
        price: item.price,
        priceCurrency: "NOK",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-[100px] pb-24 bg-bg">
        <div className="max-w-5xl mx-auto px-8 max-sm:px-5">
          <Breadcrumbs
            items={[
              { label: "Menyen", href: "/meny" },
              { label: kat.title, href: `/meny/${kat.slug}` },
            ]}
          />

          {/* Hero */}
          <div className="relative rounded-[4px] overflow-hidden mt-6 mb-14" style={{ aspectRatio: "21/6" }}>
            <Image
              src={kategoriImages[kat.slug] ?? "/assets/dining-room.jpg"}
              alt={kat.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div
              className="absolute inset-0 flex flex-col justify-end p-8"
              style={{ background: "linear-gradient(180deg,rgba(26,20,16,0) 40%,rgba(26,20,16,0.68) 100%)" }}
            >
              <p className="text-[11px] tracking-[0.3em] uppercase text-cream/60 font-bold mb-1">
                {kat.items.length} retter
              </p>
              <h1 className="text-cream text-[clamp(32px,5vw,60px)] leading-tight font-serif font-normal">{kat.title}</h1>
              <p className="text-cream/75 text-[16px] mt-1 max-w-xl">{kat.description}</p>
            </div>
          </div>

          {/* Meny-liste */}
          <div className="divide-y divide-line">
            {kat.items.map((item) => (
              <div key={item.name} className="py-5 flex items-start gap-4 justify-between">
                <div>
                  <h2 className="text-[18px] text-ink font-medium mb-0.5">{item.name}</h2>
                  {item.description && (
                    <p className="text-[14px] text-ink-mute leading-snug">{item.description}</p>
                  )}
                  {item.allergens && (
                    <p className="text-[12px] text-ink-mute/60 mt-1">
                      Allergener: {item.allergens.join(", ")}
                    </p>
                  )}
                </div>
                <span className="flex-none font-semibold text-[16px] text-ink bg-paper border border-line rounded-full px-3.5 py-1.5 whitespace-nowrap">
                  {item.price} kr
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 flex gap-4 flex-wrap">
            <a
              href="https://link.preoday.no/kaffestava"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-7 py-4 bg-burgundy text-cream rounded-full text-[15px] font-semibold hover:bg-burgundy-deep transition-colors"
            >
              Bestill via Go2Grill
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </a>
            <Link
              href="/meny"
              className="inline-flex items-center gap-2 px-7 py-4 border border-ink text-ink rounded-full text-[15px] font-semibold hover:bg-ink hover:text-cream transition-colors"
            >
              &larr; Tilbake te menyen
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
