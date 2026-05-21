import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs";
import { menuKategoriar } from "@/content/meny";

export const metadata: Metadata = {
  title: "Menyen",
  description:
    "Sjå full meny frå Kafé Ståvå i Vigrestad. Husmannskost, smørbrød, bakst, kaffi og te, pub og bar, og frå grillen — alt laga med omtanke.",
  alternates: { canonical: "/meny" },
  openGraph: {
    title: "Menyen — Kafé Ståvå",
    description: "Full meny frå Kafé Ståvå: husmannskost, smørbrød, bakst, kaffi, pub og bar og grillmeny.",
    url: "/meny",
  },
};

const kategoriImages: Record<string, string> = {
  husmannskost: "/assets/burger-plate.jpg",
  "pub-og-bar": "/assets/cheeseboard.jpg",
  "smorbrod-og-snitter": "/assets/salad-platter.jpg",
  "kaffi-og-te": "/assets/dining-room-2.jpg",
  bakst: "/assets/buffet.jpg",
  "fra-grillen": "/assets/burger-final.jpg",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Menyen hjå Kafé Ståvå",
  url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaffestava.no"}/meny`,
  hasMenuSection: menuKategoriar.map((kat) => ({
    "@type": "MenuSection",
    name: kat.title,
    description: kat.description,
    hasMenuItem: kat.items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      offers: {
        "@type": "Offer",
        price: item.price,
        priceCurrency: "NOK",
      },
    })),
  })),
};

export default function MenyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-[100px] pb-24 bg-bg">
        <div className="max-w-[1500px] mx-auto px-8 max-sm:px-5">
          <Breadcrumbs items={[{ label: "Menyen", href: "/meny" }]} />

          <div className="text-center mb-16 mt-6">
            <p className="text-[11px] tracking-[0.35em] uppercase text-ink-mute font-bold mb-5">
              Menyen
            </p>
            <h1 className="text-[clamp(42px,6vw,82px)] leading-[1.02] mb-5">
              God mat — <em>kokt med omtanke</em>
            </h1>
            <p className="text-[17px] text-ink-soft max-w-xl mx-auto">
              Frå ækte jærsk husmannskost og ferske smørbrød te kveldsmat, kaffi og bakst.
              Bestill via Go2Grill-appen ell kom innom.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-sm:grid-cols-1">
            {menuKategoriar.map((kat) => (
              <Link
                key={kat.slug}
                href={`/meny/${kat.slug}`}
                className="group relative rounded-[4px] overflow-hidden border border-line bg-paper transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(26,20,16,0.22)]"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={kategoriImages[kat.slug] ?? "/assets/dining-room.jpg"}
                  alt={kat.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0 z-10 flex flex-col justify-end p-6"
                  style={{ background: "linear-gradient(180deg,rgba(26,20,16,0) 40%,rgba(26,20,16,0.72) 100%)" }}
                >
                  <span className="text-[10px] tracking-[0.3em] uppercase text-cream/60 font-bold mb-1">
                    {kat.items.length} retter
                  </span>
                  <h2 className="text-cream text-[22px] leading-tight mb-1 font-serif font-normal">{kat.title}</h2>
                  <p className="text-cream/70 text-[13px] line-clamp-2">{kat.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://link.preoday.no/kaffestava"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-8 py-4 bg-burgundy text-cream rounded-full text-[15px] font-semibold hover:bg-burgundy-deep transition-colors"
            >
              Bestill via Go2Grill
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
