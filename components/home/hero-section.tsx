import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <header className="pt-[120px] pb-20 bg-bg relative overflow-hidden" id="top">
      <div className="max-w-7xl mx-auto px-8 max-sm:px-5">
        <div className="grid grid-cols-[1.05fr_1fr] gap-16 items-center max-[980px]:grid-cols-1 max-[980px]:gap-10">

          {/* Venstre: tekst */}
          <div>
            <div className="reveal inline-flex items-center gap-3.5 text-[11px] tracking-[0.3em] uppercase text-burgundy mb-7 font-bold">
              <span className="bg-burgundy text-cream px-2.5 py-1 rounded-[4px] tracking-[0.18em]">
                Bygdepub
              </span>
              <span>Eneste i Vigrestad med ailla rettigheter etter 18</span>
            </div>

            <h1 className="reveal reveal-delay-1 text-[clamp(54px,8vw,116px)] leading-[0.95] mb-7">
              Ækte kaffi.<br />
              <span className="italic text-burgundy">Ækte smak.</span>
              <span
                className="font-hand text-[0.62em] text-copper block mt-2"
                style={{ transform: "rotate(-2deg)", transformOrigin: "left" }}
              >
                — og itte långt te kveldskosen.
              </span>
            </h1>

            <p className="reveal reveal-delay-2 text-[clamp(17px,1.4vw,20px)] text-ink-soft mb-9 max-w-[540px] leading-relaxed">
              Velkommen te bygdepuben på Vigrestad — der kåffien e fersk, komlå e
              hjemmelaga, og du fær mosth alt ifrå smørbrød te oksestek og 80 sortar
              konjakk. Stikk innom, ell bestill via Go2Grill-appen.
            </p>

            <div className="reveal reveal-delay-3 flex gap-3.5 flex-wrap mb-10">
              <Link
                href="https://link.preoday.no/kaffestava"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-burgundy text-cream rounded-full text-[15px] font-semibold transition-[background,transform,box-shadow] hover:bg-burgundy-deep hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(107,22,20,0.5)]"
              >
                <Image
                  src="/assets/go2grill-logo.png"
                  alt=""
                  width={60}
                  height={22}
                  className="h-[22px] w-auto brightness-0 invert"
                  aria-hidden
                />
                Bestill via Go2Grill
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </Link>
              <Link
                href="/meny"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-transparent text-ink border border-ink rounded-full text-[15px] font-semibold transition-[background,color] hover:bg-ink hover:text-cream"
              >
                Sjå menyen
              </Link>
            </div>

            <div className="reveal reveal-delay-3 flex flex-wrap gap-2.5">
              {[
                { icon: "clock", text: "Ope te kl. 21" },
                { icon: "lock", text: "Ailla rettigheter" },
                { icon: "calendar", text: "Plass te 50 stk." },
                { icon: "user", text: "Catering & selskap" },
              ].map(({ icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-paper border border-line rounded-full text-[12px] text-ink-soft font-medium"
                >
                  <BadgeIcon name={icon} />
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* Høyre: bilde + QR */}
          <div className="reveal reveal-delay-2 relative" style={{ aspectRatio: "4/5", maxHeight: 680 }}>
            <div className="absolute inset-0 rounded-[4px] overflow-hidden shadow-[0_30px_80px_-30px_rgba(26,20,16,0.5)]">
              <Image
                src="/assets/chef-hero.jpg"
                alt="Frode utanfor Kafé Ståvå"
                fill
                className="object-cover object-[center_35%]"
                priority
              />
              <div
                className="absolute inset-0 z-10"
                style={{ background: "linear-gradient(180deg,rgba(26,20,16,0) 60%,rgba(26,20,16,0.45) 100%)" }}
              />
              <p className="absolute left-6 bottom-6 z-20 font-hand text-cream text-[22px] drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
                style={{ transform: "rotate(-1.5deg)" }}>
                — Stikk innom, så fixar me resten!
              </p>
            </div>

            {/* QR-kort */}
            <a
              href="https://link.preoday.no/kaffestava"
              target="_blank"
              rel="noopener"
              className="absolute bottom-[-32px] right-[-32px] z-30 w-60 bg-cream rounded-[6px] p-[18px] shadow-[0_30px_60px_-20px_rgba(26,20,16,0.35),0_0_0_1px_rgba(168,38,31,0.1)] transition-transform hover:scale-[1.04] max-[980px]:w-[180px] max-[980px]:bottom-[-24px] max-[980px]:right-[-16px] max-[560px]:w-[150px] max-[560px]:p-3"
              style={{ transform: "rotate(2deg)" }}
              aria-label="QR-kode til Go2Grill bestilling"
            >
              <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-dashed border-line">
                <Image src="/assets/go2grill-logo.png" alt="Go2Grill" width={60} height={24} className="h-7 w-auto" />
                <div className="text-[10px] tracking-[0.18em] uppercase text-ink-mute font-semibold leading-tight">
                  Skann meg<br />
                  <strong className="text-burgundy text-[11px]">Bestill direkte</strong>
                </div>
              </div>
              <div className="w-full aspect-square rounded-sm overflow-hidden bg-white p-1">
                <Image src="/assets/qr-go2grill-crop.png" alt="QR-kode" width={200} height={200} className="w-full h-full object-contain" />
              </div>
              <div className="mt-2.5 text-center text-[11px] text-ink-soft leading-tight">
                <strong className="block font-serif italic text-[16px] text-ink mb-0.5 font-normal">Go2Grill</strong>
                link.preoday.no/kaffestava
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function BadgeIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    clock: (
      <svg className="w-3.5 h-3.5 text-burgundy" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="8" cy="8" r="6" /><path d="M8 5v3l2 1.5" />
      </svg>
    ),
    lock: (
      <svg className="w-3.5 h-3.5 text-burgundy" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M3 7h10v6H3z" /><path d="M5 7V5a3 3 0 0 1 6 0v2" />
      </svg>
    ),
    calendar: (
      <svg className="w-3.5 h-3.5 text-burgundy" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="2" y="4" width="12" height="9" rx="1" /><path d="M5 4V2M11 4V2" />
      </svg>
    ),
    user: (
      <svg className="w-3.5 h-3.5 text-burgundy" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M3 13c0-3 2-5 5-5s5 2 5 5" /><circle cx="8" cy="5" r="2" />
      </svg>
    ),
  };
  return <>{icons[name]}</>;
}
