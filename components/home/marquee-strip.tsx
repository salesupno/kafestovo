const items = [
  "Ækte kaffi",
  "Hjemmelaga komle",
  "Oksestek frå grillen",
  "80 sortar konjakk",
  "Strikk & Drikk kver tysdag",
  "Pubquiz ein gång i månan",
  "Catering · Selskap · Julebord",
];

export default function MarqueeStrip() {
  const allItems = [...items, ...items];
  return (
    <div
      className="overflow-hidden"
      style={{
        background: "var(--color-burgundy)",
        color: "var(--color-cream)",
        padding: "18px 0",
        borderTop: "1px solid var(--color-burgundy-deep)",
        borderBottom: "1px solid var(--color-burgundy-deep)",
      }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 38s linear infinite", gap: "48px", width: "max-content" }}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            className="font-serif italic text-[22px] flex-none inline-flex items-center"
            style={{ gap: "48px" }}
          >
            {item}
            <span className="text-gold not-italic text-[12px]" aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
