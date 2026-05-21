export default function InfoSection() {
  return (
    <section className="py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-8 max-sm:px-5">
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-8 max-[900px]:grid-cols-1">

          {/* Opningstider */}
          <div className="reveal">
            <p className="text-[11px] tracking-[0.35em] uppercase text-ink-mute font-bold mb-4">Opningstider</p>
            <h3 className="font-serif italic text-[28px] mb-5">Kjem forbi?</h3>
            <table className="w-full text-[15px] text-ink-soft">
              <tbody>
                {[
                  ["Måndag – fredag", "09:00 – 21:00"],
                  ["Laurdag", "10:00 – 21:00"],
                  ["Sundag", "Stengt"],
                ].map(([dag, tid]) => (
                  <tr key={dag} className="border-b border-line last:border-0">
                    <td className="py-3 font-medium">{dag}</td>
                    <td className="py-3 text-right text-ink-mute">{tid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-[13px] text-ink-mute italic">
              * Einaste i Vigrestad med skjenking etter kl. 18
            </p>
          </div>

          {/* Finn oss */}
          <div className="reveal reveal-delay-1">
            <p className="text-[11px] tracking-[0.35em] uppercase text-ink-mute font-bold mb-4">Finn oss</p>
            <h3 className="font-serif italic text-[28px] mb-5">Midt i bygda</h3>
            <address className="not-italic text-[15px] text-ink-soft space-y-2 mb-5">
              <p className="font-medium text-ink">Kafé Ståvå</p>
              <p>Storgata, 4362 Vigrestad</p>
              <p>
                <a href="tel:45285096" className="hover:text-burgundy transition-colors">45 28 50 96</a>
              </p>
              <p>
                <a href="mailto:post@kaffestava.no" className="hover:text-burgundy transition-colors">post@kaffestava.no</a>
              </p>
            </address>
            <a
              href="https://www.google.com/maps/search/Kafé+Ståvå+Vigrestad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] text-burgundy font-semibold hover:underline"
            >
              Opne i Google Maps
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </a>
          </div>

          {/* Kart-rute */}
          <div className="reveal reveal-delay-2">
            <p className="text-[11px] tracking-[0.35em] uppercase text-ink-mute font-bold mb-4">Veikart</p>
            <h3 className="font-serif italic text-[28px] mb-5">Parkering rett utanfor</h3>
            <div
              className="bg-paper border border-line rounded-[4px] flex items-center justify-center text-ink-mute text-[14px]"
              style={{ aspectRatio: "4/3", overflow: "hidden" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2053.3!2d5.693!3d58.619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTjCsDM3JzIwLjAiTiA1wrA0MSczNi4wIkU!5e0!3m2!1snb!2sno!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kart over Kafé Ståvå i Vigrestad"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
