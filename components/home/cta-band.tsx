"use client";

import Image from "next/image";

export default function CtaBand() {
  return (
    <section
      className="py-24 text-center relative overflow-hidden"
      style={{
        color: "var(--color-cream)",
        backgroundImage: [
          "radial-gradient(circle at 20% 30%, rgba(184,105,58,0.25) 0%, transparent 50%)",
          "radial-gradient(circle at 80% 70%, rgba(200,153,88,0.18) 0%, transparent 50%)",
          "linear-gradient(135deg, var(--color-burgundy) 0%, var(--color-burgundy-deep) 100%)",
        ].join(", "),
      }}
    >
      <div className="max-w-[1280px] mx-auto px-8 max-sm:px-5">
        <h2 className="reveal font-serif text-[clamp(40px,6vw,84px)] leading-[1.05] mb-5">
          Svolten <em className="italic text-gold">alt no?</em>
        </h2>
        <p className="reveal reveal-delay-1 text-[18px] max-w-[560px] mx-auto mb-8" style={{ color: "rgba(253,249,238,0.9)" }}>
          Skann QR-en, ell last ned Go2Grill og søk opp Kafé Ståvå. Bestill, betal — og maten din e klar når du kjem.
        </p>
        <a
          href="https://link.preoday.no/kaffestava"
          target="_blank"
          rel="noopener"
          className="reveal reveal-delay-2 inline-flex items-center gap-2.5 px-8 py-[18px] rounded-full text-[15px] font-semibold transition-[background,color,border-color]"
          style={{
            background: "var(--color-cream)",
            color: "var(--color-burgundy-deep)",
            border: "1px solid var(--color-cream)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "var(--color-ink)";
            el.style.color = "var(--color-cream)";
            el.style.borderColor = "var(--color-ink)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "var(--color-cream)";
            el.style.color = "var(--color-burgundy-deep)";
            el.style.borderColor = "var(--color-cream)";
          }}
        >
          <Image
            src="/assets/go2grill-logo.png"
            alt=""
            width={60}
            height={22}
            className="h-[22px] w-auto"
            style={{ filter: "brightness(0) sepia(1) hue-rotate(-30deg)" }}
            aria-hidden
          />
          Bestill via Go2Grill
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
