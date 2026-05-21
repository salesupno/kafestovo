import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs";
import { menuKategoriar } from "@/content/meny";

type Props = { params: Promise<{ kategori: string }> };

const kategoriImages: Record<string, string> = {
  husmannskost: "/assets/burger-plate.jpg",
  "pub-og-bar": "/assets/cheeseboard.jpg",
  "smorbrod-og-snitter": "/assets/salad-platter.jpg",
  "kaffi-og-te": "/assets/dining-room-2.jpg",
  bakst: "/assets/buffet.jpg",
  "fra-grillen": "/assets/burger-final.jpg",
};

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
      images: [{ url: kategoriImages[kat.slug] ?? "/assets/dining-room.jpg", width: 1200, height: 630 }],
    },
  };
}

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
      offers: { "@type": "Offer", price: String(item.price), priceCurrency: "NOK" },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-[100px] pb-24 bg-bg">
        <div className="max-w-4xl mx-auto px-8 max-sm:px-5">
          <Breadcrumbs
            items={[
              { label: "Menyen", href: "/meny" },
              { label: kat.title, href: `/meny/${kat.slug}` },
            ]}
          />

          <div className="relative rounded-[4px] overflow-hidden mb-12 mt-6" style={{ aspectRatio: "21/9" }}>
            <Image
              src={kategoriImages[kat.slug] ?? "/assets/dining-room.jpg"}
              alt={kat.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 800px) 100vw, 800px"
            />
            <div
              className="absolute inset-0 flex flex-col justify-end p-8"
              style={{ background: "linear-gradient(180deg,rgba(26,20,16,0) 40%,rgba(26,20,16,0.75) 100%)" }}
            >
              <p className="text-[11px] tracking-[0.3em] uppercase text-cream/60 font-bold mb-1">{kat.priceFrom}</p>
              <h1 className="text-cream text-[clamp(32px,5vw,52px)] font-serif font-normal leading-tight">{kat.title}</h1>
            </div>
          </div>

          <p className="text-[18px] text-ink-soft leading-relaxed mb-12">{kat.longDescription}</p>

          <div className="divide-y divide-line">
            {kat.items.map((item) => (
              <div key={item.name} className="flex items-baseline justify-between gap-4 py-4">
                <span className="text-[17px] text-ink">{item.name}</span>
                <span className="flex-none text-[16px] font-semibold text-burgundy">{item.price} kr</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-12 pt-8 border-t border-line">
            <Link href="/meny" className="inline-flex items-center gap-2 text-[14px] text-ink-mute hover:text-ink transition-colors">
              <svg className="w-4 h-4 rotate-180" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              Tilbake til menyen
            </Link>
            <a
              href="https://link.preoday.no/kaffestava"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 bg-burgundy text-cream rounded-full text-[14px] font-semibold hover:bg-burgundy-deep transition-colors"
            >
              Bestill via Go2Grill
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
