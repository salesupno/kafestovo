import Image from "next/image";

export default function OmOssSection() {
  return (
    <section id="om" className="py-[110px] max-sm:py-[70px] bg-bg">
      <div className="max-w-[1500px] mx-auto px-8 max-sm:px-5">
        <div className="grid grid-cols-[1fr_1.05fr] gap-20 items-center max-[900px]:grid-cols-1 max-[900px]:gap-12">

          {/* Bilete-stack */}
          <div className="reveal relative" style={{ aspectRatio: "4/5" }}>
            <div
              style={{
                position: "absolute",
                top: 0, left: 0,
                width: "75%", height: "75%",
                borderRadius: "3px",
                overflow: "hidden",
                boxShadow: "0 20px 60px -20px rgba(26,20,16,0.35)",
              }}
            >
              <Image
                src="/assets/owners.jpg"
                alt="Vertskapet på Kafé Ståvå"
                fill
                sizes="40vw"
                className="object-cover"
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 0, right: 0,
                width: "55%", height: "55%",
                borderRadius: "3px",
                overflow: "hidden",
                border: "8px solid var(--color-bg)",
                boxShadow: "0 20px 60px -20px rgba(26,20,16,0.35)",
              }}
            >
              <Image
                src="/assets/dining-room.jpg"
                alt="Selskapssalen pyntet"
                fill
                sizes="28vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Tekst */}
          <div className="reveal reveal-delay-1">
            <div className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-burgundy font-bold mb-6 before:content-[''] before:w-6 before:h-px before:bg-burgundy">
              Bygdepuben på Jæren
            </div>
            <h2 className="text-[clamp(40px,6vw,76px)] leading-[0.98] mb-6">
              Et stamsted<br />
              midt i <em className="italic text-burgundy">Vigrestad.</em>
            </h2>
            <p className="font-serif italic text-[clamp(22px,2vw,30px)] leading-[1.35] text-ink mb-8">
              Hjå oss e me kåffi om dagen, og <em className="text-burgundy">pub om kvelden</em> — og det fær me te å henga saman, slik som det skal.
            </p>
            <p className="text-ink-soft text-[18px] leading-[1.7] max-w-[540px] mb-5">
              Kafé Ståvå e ein liten, familiedreven kafé og bygdepub midt i Vigrestad sentrum. På dagtid serverer me kaffi, ferskt bakverk og lunsj — om kvelden e me eneste plassen i bygda som har ailla rettigheter og hølla åpent etter klokka 18.
            </p>
            <p className="text-ink-soft text-[18px] leading-[1.7] max-w-[540px]">
              I bakrommet har me plass te 50 stk. — me tar imot alt frå konfirmasjon og minnesamvær te julebord og firmafest. Saman med <strong>Go2Grill</strong> serverer me burgar, pizza og varmretter, og du fær lagt inn bestillinga di rett i appen.
            </p>

            {/* Fakta */}
            <div className="grid grid-cols-3 gap-6 mt-11 pt-9 border-t border-line">
              {[
                { num: "50", label: "Plasser i selskapssalen" },
                { num: "80", label: "Sortar konjakk" },
                { num: "1", label: "Eneste pub i bygda" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-serif text-[44px] text-burgundy leading-none mb-1.5">{num}</div>
                  <div className="text-[11px] tracking-[0.15em] uppercase text-ink-mute">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
