import Link from "next/link";
import Image from "next/image";

export default function CtaBand() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "var(--color-burgundy)", color: "var(--color-cream)" }}
    >
      {/* Dekorativt bakgrunnsbilde */}
      <div className="absolute inset-0 opacity-10" aria-hidden>
        <Image
          src="/assets/storefront.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 max-sm:px-5 text-center">
        <h2 className="reveal text-[clamp(32px,5vw,60px)] leading-[1.1] mb-5">
          Hiv deg innom — <em>kaffien vent!</em>
        </h2>
        <p className="reveal reveal-delay-1 text-[17px] opacity-80 mb-8 max-w-lg mx-auto">
          Ell bestill via Go2Grill og hent når du e klar. Me e her kvardagar 09–21 og
          laurdag 10–21.
        </p>
        <div className="reveal reveal-delay-2 flex justify-center gap-4 flex-wrap">
          <a
            href="https://link.preoday.no/kaffestava"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-cream text-ink rounded-full text-[15px] font-semibold hover:bg-cream/90 transition-colors"
          >
            <Image src="/assets/go2grill-logo.png" alt="" width={60} height={22} className="h-[22px] w-auto" aria-hidden />
            Bestill via Go2Grill
          </a>
          <a
            href="tel:45285096"
            className="inline-flex items-center gap-2 px-8 py-4 border border-cream/30 text-cream rounded-full text-[15px] font-semibold hover:bg-cream/10 transition-colors"
          >
            Ring oss: 45 28 50 96
          </a>
        </div>
      </div>
    </section>
  );
}
