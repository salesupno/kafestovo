import Image from "next/image";

export default function OmOssSection() {
  return (
    <section id="om" className="py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-8 max-sm:px-5">

        {/* Overskrift */}
        <div className="text-center mb-20">
          <p className="reveal text-[11px] tracking-[0.35em] uppercase text-ink-mute font-bold mb-5">
            Om Kafé Ståvå
          </p>
          <h2 className="reveal reveal-delay-1 text-[clamp(40px,5.5vw,72px)] leading-[1.05]">
            Eit sted du kjem<br />
            <em>tilbake te.</em>
          </h2>
        </div>

        {/* Innhald */}
        <div className="grid grid-cols-[1fr_1fr] gap-16 items-center max-[900px]:grid-cols-1">

          {/* Bilder-grid */}
          <div className="reveal relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-[4px] overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/assets/dining-room.jpg"
                  alt="Inni kafeen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 900px) 50vw, 25vw"
                />
              </div>
              <div className="mt-8">
                <div className="relative rounded-[4px] overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/assets/owners.jpg"
                    alt="Eigarane Frode og Tone"
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
            {/* Dekorativt stempel */}
            <div
              className="absolute bottom-[-20px] right-[-20px] w-24 h-24 rounded-full border-[3px] border-dashed border-copper flex items-center justify-center text-center bg-bg z-10 max-sm:w-16 max-sm:h-16"
              style={{ transform: "rotate(-8deg)" }}
              aria-hidden
            >
              <p className="font-hand text-copper text-sm leading-tight max-sm:text-xs">
                Sidan<br />2019
              </p>
            </div>
          </div>

          {/* Tekst */}
          <div>
            <p className="reveal reveal-delay-1 text-[clamp(17px,1.4vw,21px)] leading-relaxed text-ink-soft mb-7">
              Kafé Ståvå ligg midt i Vigrestad sentrum og e heilt enkelt det plassen du
              finn på kvar gong du treng <strong>god mat, godt lag ell berre ein god kopp kaffi</strong>. Frode og
              Tone har drive staden sidan 2019, og dei bryr seg oppriktig om det dei lagar.
            </p>
            <p className="reveal reveal-delay-2 text-[clamp(15px,1.2vw,18px)] leading-relaxed text-ink-mute mb-10">
              Me serverer <strong>heimelaga husmannskost</strong>, smørbrød og bakst på dagtid, og skaffer deg
              både varmretter og ailla rettigheter etter klokka 18 — som den einaste i Vigrestad.
              Vil du ordne eit selskap for inntil 50 personar? Det fiksar me og.
            </p>

            <div className="reveal reveal-delay-3 grid grid-cols-3 gap-4 text-center max-sm:grid-cols-2">
              {[
                { num: "50+", label: "Konjakk-sortar" },
                { num: "50", label: "Plasser i salen" },
                { num: "Sidan\n2019", label: "Lokal kafé" },
              ].map(({ num, label }) => (
                <div key={label} className="bg-paper border border-line rounded-[4px] p-4">
                  <div className="font-serif italic text-[28px] text-burgundy leading-none mb-1 whitespace-pre-line">
                    {num}
                  </div>
                  <p className="text-[12px] text-ink-mute tracking-wide uppercase font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
