import { menuKategoriar } from "@/content/meny";
import { aktivitetar } from "@/content/aktivitetar";
import { selskapTypar } from "@/content/selskap";
import { faqKategoriar } from "@/content/faq";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaffestava.no";

export function GET() {
  const lines = [
    "# Kafé Ståvå",
    "",
    "> Ækte jærsk kafé og bygdepub midt i Vigrestad sentrum. Husmannskost, smørbrød, bakst, pub og bar med ailla rettigheter etter kl. 18. Selskapssale med plass te 50 personar. Faste arrangement: Strikk & Drikk, Pubquiz, Komle-middag og Konjakk-smaking.",
    "",
    "## Kontakt",
    "- Adresse: Storgata, 4362 Vigrestad, Noreg",
    "- Telefon: 45 28 50 96",
    "- E-post: post@kaffestava.no",
    "- Nettside: " + BASE,
    "",
    "## Opningstider",
    "- Måndag–fredag: 09:00–21:00",
    "- Laurdag: 10:00–21:00",
    "- Sundag: Stengt",
    "",
    "## Bestilling",
    "- Go2Grill-app: https://link.preoday.no/kaffestava",
    "",
    "## Menyar",
    ...menuKategoriar.map((k) => `- [${k.title}](${BASE}/meny/${k.slug}): ${k.description}`),
    "",
    "## Aktivitetar",
    ...aktivitetar.map((a) => `- [${a.title}](${BASE}/aktivitetar/${a.slug}): ${a.when}, ${a.time}`),
    "",
    "## Selskap",
    ...selskapTypar.map((t) => `- [${t.title}](${BASE}/selskap/${t.slug}): ${t.capacity}`),
    "",
    "## Ofte stilte spørsmål",
    ...faqKategoriar.flatMap((k) =>
      k.questions.map((q) => `- [${q.question}](${BASE}/faq/${k.slug}/${q.slug})`)
    ),
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
