import Link from "next/link";
import Image from "next/image";

const kategoriar = [
  {
    slug: "husmannskost",
    title: "Husmannskost",
    priceRange: "Fra 189 kr",
    desc: "Råkomle og komle slik dei skal væra — dampande, med tilbehør. Søndagsbuffet av og te.",
    items: [
      { name: "Råkomle m/ tilbehør", price: "219" },
      { name: "Komle (mørtag)", price: "189" },
      { name: "Oksestek m/ saus", price: "289" },
      { name: "Svinesteik", price: "259" },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" style={{ width: 56, height: 56, color: "var(--color-burgundy-deep)", strokeWidth: "1.2" }}>
        <ellipse cx="12" cy="14" rx="9" ry="3"/>
        <path d="M3 14v2a9 3 0 0 0 18 0v-2"/>
        <path d="M7 10c2-2 6-2 10 0"/>
        <path d="M9 7l1-2M14 7l1-2"/>
      </svg>
    ),
  },
  {
    slug: "pub-og-bar",
    title: "Pub & Bar",
    priceRange: "Ailla rettigheter",
    desc: "50–80 ulike sortar konjakk, lokalt øl, vin og brennevin. Eneste i Vigrestad ope etter 18 med skjenking.",
    items: [
      { name: "Konjakk (utvalg)", price: "frå 89" },
      { name: "Pils 0,5", price: "89" },
      { name: "Glas husets vin", price: "119" },
      { name: "Cognac-smaking", price: "spør oss" },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" style={{ width: 56, height: 56, color: "var(--color-burgundy-deep)", strokeWidth: "1.2" }}>
        <path d="M7 3h10l-1 8a4 4 0 0 1-8 0L7 3z"/>
        <path d="M12 15v6M9 21h6"/>
        <path d="M17 5h2a2 2 0 0 1 0 4h-2"/>
      </svg>
    ),
  },
  {
    slug: "smorbrod-og-snitter",
    title: "Smørbrød & Snitter",
    priceRange: "Catering",
    desc: "Klassiske jærske smørbrød og fine snitter — på fat te selskap, lunsjmøte og minnesamvær.",
    items: [
      { name: "Smørbrødfat (10 stk.)", price: "590" },
      { name: "Snittefat (15 stk.)", price: "790" },
      { name: "Roastbiff-rundstykke", price: "89" },
      { name: "Reker m/ majones", price: "119" },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" style={{ width: 56, height: 56, color: "var(--color-burgundy-deep)", strokeWidth: "1.2" }}>
        <rect x="3" y="7" width="18" height="3" rx="1"/>
        <rect x="3" y="13" width="18" height="3" rx="1"/>
        <path d="M6 10v3M10 10v3M14 10v3M18 10v3"/>
      </svg>
    ),
  },
  {
    slug: "kaffi-og-te",
    title: "Kaffi & Te",
    priceRange: "Fra 32 kr",
    desc: "Fersk traktet kaffi, espresso og våre faste favorittar — alltid friskmalt. Dagens kaka på disken.",
    items: [
      { name: "Filterkaffi", price: "32" },
      { name: "Cappuccino", price: "52" },
      { name: "Latte / mocca", price: "58" },
      { name: "Te / urteinfusjon", price: "38" },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" style={{ width: 56, height: 56, color: "var(--color-burgundy-deep)", strokeWidth: "1.2" }}>
        <path d="M4 8h13v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z"/>
        <path d="M17 9h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2"/>
        <path d="M7 4c0 1 1 1.5 1 2.5S7 8 7 8M11 4c0 1 1 1.5 1 2.5S11 8 11 8"/>
        <path d="M2 21h18"/>
      </svg>
    ),
  },
  {
    slug: "bakst",
    title: "Bakst",
    priceRange: "Fra 28 kr",
    desc: "Skolebrød, kanelsnurrar og dagens kaka — hjemmebakt med rauseporsjon. Spør om kå me ha i dag.",
    items: [
      { name: "Kanelsnurr", price: "42" },
      { name: "Skolebrød", price: "48" },
      { name: "Dagens kaka", price: "72" },
      { name: "Vaffel m/ syltetøy", price: "59" },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" style={{ width: 56, height: 56, color: "var(--color-burgundy-deep)", strokeWidth: "1.2" }}>
        <path d="M3 16c0-4 4-6 9-6s9 2 9 6v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1z"/>
        <path d="M7 10c0-3 2-5 5-5s5 2 5 5"/>
        <path d="M10 5c0-1 1-2 2-2s2 1 2 2"/>
      </svg>
    ),
  },
  {
    slug: "fra-grillen",
    title: "Frå grillen",
    priceRange: "Go2Grill · fra 149 kr",
    desc: "Burgar, pizza og varmretter frå Go2Grill-kjøkkenet. Saftige og raue, laga når du bestiller.",
    items: [
      { name: "Cheeseburger", price: "189" },
      { name: "Pizza (medium)", price: "239" },
      { name: "Bacon-burger", price: "219" },
      { name: "Dagens varme", price: "199" },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" style={{ width: 56, height: 56, color: "var(--color-burgundy-deep)", strokeWidth: "1.2" }}>
        <ellipse cx="12" cy="8" rx="8" ry="3"/>
        <path d="M4 8v2a8 3 0 0 0 16 0V8"/>
        <path d="M4 12c0 3 4 4 8 4s8-1 8-4"/>
        <path d="M6 18h12"/>
      </svg>
    ),
  },
];

export default function MenySection() {
  return (
    <section className="py-[110px] max-sm:py-[70px] bg-paper relative" id="meny">
      <div className="max-w-[1280px] mx-auto px-8 max-sm:px-5">

        {/* Overskrift */}
        <div className="flex justify-between items-end flex-wrap gap-6 mb-[60px]">
          <div className="max-w-[580px]">
            <div className="reveal inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-burgundy font-bold mb-6 before:content-[''] before:w-6 before:h-px before:bg-burgundy">
              På bordet
            </div>
            <h2 className="reveal reveal-delay-1 text-[clamp(40px,6vw,76px)] leading-[0.98]">
              Husmannskost &<br />
              <em className="italic text-burgundy">jærsk hjertemad.</em>
            </h2>
          </div>
          <p className="reveal reveal-delay-2 text-ink-soft text-[17px] max-w-[480px]">
            Råkomle, oksestek, smørbrød og snitter — laga slik bestamor laga det. Full meny og priser fær du i Go2Grill-appen, der bestillinga din e klar te du kjem.
          </p>
        </div>

        {/* Meny-grid */}
        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:gap-[18px]">
          {kategoriar.map((kat, i) => (
            <Link
              key={kat.slug}
              href={`/meny/${kat.slug}`}
              className={`reveal reveal-delay-${i % 3} group bg-cream rounded-[3px] overflow-hidden border border-line flex flex-col transition-[transform,box-shadow,border-color] duration-[400ms] hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(26,20,16,0.25)] hover:border-gold`}
            >
              {/* Ikon-area */}
              <div
                className="relative flex items-center justify-center border-b border-line overflow-hidden"
                style={{ aspectRatio: "1.5", background: "linear-gradient(135deg, var(--color-bg-2) 0%, var(--color-bg) 100%)" }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: "repeating-linear-gradient(45deg,transparent 0,transparent 24px,rgba(168,38,31,0.04) 24px,rgba(168,38,31,0.04) 25px)" }}
                  aria-hidden
                />
                {kat.icon}
              </div>

              {/* Innhald */}
              <div className="p-[26px_26px_30px] flex flex-col flex-1">
                <h3 className="font-serif text-[28px] mb-1.5">{kat.title}</h3>
                <div className="text-[11px] tracking-[0.18em] uppercase text-burgundy font-bold mb-3.5">{kat.priceRange}</div>
                <p className="text-ink-soft text-[15px] leading-relaxed mb-[18px] flex-1">{kat.desc}</p>
                <ul className="border-t border-dashed border-line pt-3.5">
                  {kat.items.map((item) => (
                    <li key={item.name} className="flex justify-between gap-3 text-[14px] text-ink-soft py-[5px]">
                      <span>{item.name}</span>
                      <span className="text-burgundy font-semibold tabular-nums">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-14 text-center">
          <a
            href="https://link.preoday.no/kaffestava"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 px-7 py-4 bg-burgundy text-cream rounded-full text-[15px] font-semibold hover:bg-burgundy-deep transition-colors"
          >
            <Image src="/assets/go2grill-logo.png" alt="" width={60} height={22} className="h-[22px] w-auto brightness-0 invert" aria-hidden />
            Sjå full meny & bestill i Go2Grill
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
