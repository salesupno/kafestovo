import Link from "next/link";
import Image from "next/image";

export default function Go2GrillSection() {
  return (
    <section className="py-28 bg-bg-2">
      <div className="max-w-7xl mx-auto px-8 max-sm:px-5">
        <div className="grid grid-cols-[1fr_400px] gap-16 items-center max-[900px]:grid-cols-1">

          {/* Tekst */}
          <div>
            <p className="reveal text-[11px] tracking-[0.35em] uppercase text-ink-mute font-bold mb-5">
              Bestill med Go2Grill
            </p>
            <h2 className="reveal reveal-delay-1 text-[clamp(36px,5vw,64px)] leading-[1.05] mb-5">
              Bestill på forhånd —<br />
              <em>hent når du vil</em>
            </h2>
            <p className="reveal reveal-delay-2 text-[17px] text-ink-soft leading-relaxed mb-8 max-w-[520px]">
              Me bruker Go2Grill-appen for <strong>forhandsbestilling og betaling</strong>. Legg inn ordren, vel
              hentetid og betal direkte — maten e klar når du kjem. Enkelt, kjapt og utan kø.
            </p>
            <div className="reveal reveal-delay-3 flex gap-3.5 flex-wrap">
              <a
                href="https://link.preoday.no/kaffestava"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 px-7 py-4 bg-burgundy text-cream rounded-full text-[15px] font-semibold hover:bg-burgundy-deep transition-colors"
              >
                <Image src="/assets/go2grill-logo.png" alt="" width={60} height={22} className="h-[22px] w-auto brightness-0 invert" aria-hidden />
                Opne Go2Grill
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </a>
            </div>
          </div>

          {/* QR-panel */}
          <div className="reveal reveal-delay-2">
            <a
              href="https://link.preoday.no/kaffestava"
              target="_blank"
              rel="noopener"
              className="block bg-cream border border-line rounded-[6px] p-8 shadow-[0_20px_50px_-20px_rgba(26,20,16,0.2)] text-center hover:shadow-[0_24px_60px_-20px_rgba(26,20,16,0.3)] transition-shadow"
              aria-label="Skann QR-kode for Go2Grill bestilling"
            >
              <div className="flex items-center justify-center gap-3 mb-6 pb-5 border-b border-dashed border-line">
                <Image src="/assets/go2grill-logo.png" alt="Go2Grill" width={100} height={36} className="h-9 w-auto" />
              </div>
              <div className="w-52 h-52 mx-auto bg-white rounded-[4px] p-3 mb-5 shadow-inner">
                <Image
                  src="/assets/qr-go2grill-crop.png"
                  alt="QR-kode"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-ink-mute text-[13px]">Skann QR-koden eller klikk her</p>
              <p className="font-serif italic text-ink text-[16px] mt-1">link.preoday.no/kaffestava</p>
            </a>

            {/* QR-bilde for utskrift */}
            <div className="mt-4 text-center">
              <Image
                src="/assets/qr-go2grill.jpg"
                alt="QR-kode med Go2Grill-logo"
                width={160}
                height={160}
                className="mx-auto w-32 h-32 object-contain opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
