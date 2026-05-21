import Link from "next/link";
import Image from "next/image";

const visitLinks = [
  { href: "/#om", label: "Om oss" },
  { href: "/meny", label: "Meny" },
  { href: "/aktivitetar", label: "Det skjer" },
  { href: "/selskap", label: "Selskap" },
];

const orderLinks = [
  { href: "https://link.preoday.no/kaffestava", label: "Go2Grill-appen", external: true },
  { href: "/faq", label: "Spørsmål & svar" },
  { href: "/#besok", label: "Åpningstider" },
  { href: "mailto:post@kaffestava.no", label: "Catering-førespørsel", external: true },
];

const contactLinks = [
  { href: null, label: "Storgata, Vigrestad" },
  { href: "tel:+4745285096", label: "45 28 50 96" },
  { href: "mailto:post@kaffestava.no", label: "post@kaffestava.no" },
  {
    href: "https://www.facebook.com/profile.php?id=100083121287429",
    label: "Facebook",
    external: true,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream/60 text-sm pt-[60px] pb-8">
      <div className="max-w-[1500px] mx-auto px-8 max-sm:px-5">
        <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 mb-10 max-[800px]:grid-cols-2 max-[500px]:grid-cols-1 max-[500px]:gap-8">
          {/* Brand */}
          <div>
            <div className="font-serif italic text-[32px] text-cream">Kafé Ståvå</div>
            <p className="mt-2.5 max-w-xs text-cream/60 leading-relaxed">
              Bygdepuben på Vigrestad — kaffi, husmannskost og ailla rettigheter.
              Eneste i bygda ope etter kl. 18.
            </p>
            <Link
              href="https://link.preoday.no/kaffestava"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 px-3.5 py-2.5 mt-4 bg-cream/[0.06] border border-cream/10 rounded-full transition-[background] hover:bg-cream/10"
            >
              <span className="text-[11px] tracking-[0.18em] uppercase text-cream/70 font-medium">
                Bestilling via
              </span>
              <Image
                src="/assets/go2grill-logo.png"
                alt="Go2Grill"
                width={72}
                height={24}
                className="h-6 w-auto brightness-0 invert"
              />
            </Link>
          </div>

          {/* Besøk */}
          <div>
            <h5 className="text-[11px] tracking-[0.2em] uppercase text-cream font-semibold font-sans mb-4">
              Besøk
            </h5>
            <ul className="space-y-1">
              {visitLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-gold transition-colors py-1 block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bestill */}
          <div>
            <h5 className="text-[11px] tracking-[0.2em] uppercase text-cream font-semibold font-sans mb-4">
              Bestill
            </h5>
            <ul className="space-y-1">
              {orderLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noopener" } : {})}
                    className="hover:text-gold transition-colors py-1 block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h5 className="text-[11px] tracking-[0.2em] uppercase text-cream font-semibold font-sans mb-4">
              Kontakt
            </h5>
            <ul className="space-y-1">
              {contactLinks.map((l) => (
                <li key={l.label}>
                  {l.href ? (
                    <Link
                      href={l.href}
                      {...(l.external ? { target: "_blank", rel: "noopener" } : {})}
                      className="hover:text-gold transition-colors py-1 block"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <span className="py-1 block">{l.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-5 flex justify-between flex-wrap gap-4 text-[12px]">
          <span>© {year} Kafé Ståvå · Alle rettar forbehaldne.</span>
          <span>Bygd med kjærleik på Jæren · Bestilling via Go2Grill</span>
        </div>
      </div>
    </footer>
  );
}
