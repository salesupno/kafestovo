const items = [
  "Husmannskost",
  "Pub & Bar",
  "Smørbrød & Snitter",
  "Kaffi & Te",
  "Selskap & Catering",
  "Komle-middag",
  "Pubquiz",
  "Strikk & Drikk",
  "Konjakk — 50+ sortar",
  "Ailla rettigheter",
];

export default function MarqueeStrip() {
  const allItems = [...items, ...items];
  return (
    <div className="py-4 overflow-hidden" style={{ background: "var(--color-burgundy)", color: "var(--color-cream)" }}>
      <div className="flex" style={{ animation: "marquee 26s linear infinite" }}>
        {allItems.map((item, i) => (
          <span
            key={i}
            className="flex-none text-[12px] tracking-[0.28em] uppercase font-bold mx-7"
          >
            <span className="mr-7 text-[10px] opacity-70" aria-hidden>&#9670;</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
