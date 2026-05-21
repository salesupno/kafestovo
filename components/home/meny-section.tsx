import Link from "next/link";
import Image from "next/image";
import { menuKategoriar } from "@/content/meny";

const kategoriImages: Record<string, string> = {
  husmannskost: "/assets/burger-plate.jpg",
  "pub-og-bar": "/assets/cheeseboard.jpg",
  "smorbrod-og-snitter": "/assets/salad-platter.jpg",
  "kaffi-og-te": "/assets/dining-room-2.jpg",
  bakst: "/assets/buffet.jpg",
  "fra-grillen": "/assets/burger-final.jpg",
};

export default function MenySection() {
  return (
    <section className="py-28 bg-bg-2">
      <div className="max-w-7xl mx-auto px-8 max-sm:px-5">
        {/* Overskrift */}
        <div className="text-center mb-16">
          <p className="reveal text-[11px] tracking-[0.35em] uppercase text-ink-mute font-bold mb-5">
            Menyen
          </p>
          <h2 className="reveal reveal-delay-1 text-[clamp(38px,5vw,68px)] leading-[1.05] mb-5">
            God mat — <em>kokt med omtanke</em>
          </h2>
          <p className="reveal reveal-delay-2 text-[17px] text-ink-soft max-w-xl mx-auto">
            Frå ækte jærsk husmannskost og ferske smørbrød te kveldsmat og bakst.
            Sjekk full meny — ell bestill via Go2Grill-appen.
          </p>
        </div>

        {/* Kategori-grid */}
        <div className="grid grid-cols-3 gap-5 mb-10 max-[900px]:grid-cols-2 max-sm:grid-cols-1">
          {menuKategoriar.map((kat, i) => (
            <Link
              key={kat.slug}
              href={`/meny/${kat.slug}`}
              className={`reveal reveal-delay-${i % 4} group relative rounded-[4px] overflow-hidden bg-paper border border-line transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(26,20,16,0.25)]`}
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
                <h3 className="text-cream text-[22px] leading-tight mb-1 font-serif font-normal">{kat.title}</h3>
                <p className="text-cream/75 text-[13px] line-clamp-2">{kat.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <Link
            href="/meny"
            className="inline-flex items-center gap-2 px-8 py-4 border border-ink text-ink rounded-full text-[15px] font-semibold hover:bg-ink hover:text-cream transition-colors"
          >
            Sjå full meny
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M3 8h10M9 4l4 4-4 4" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
