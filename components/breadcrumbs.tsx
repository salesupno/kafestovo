import Link from "next/link";
import type { WithContext, BreadcrumbList } from "schema-dts";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaffestava.no";

  const schema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: siteUrl },
      ...items.map((item, i) => ({
        "@type": "ListItem" as const,
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Brødsmulesti"
        className="max-w-[1500px] mx-auto px-8 max-sm:px-5 pt-24 pb-2"
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-[12px] text-ink-mute">
          <li>
            <Link href="/" className="hover:text-burgundy transition-colors">
              Forside
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <span aria-hidden>/</span>
              {item.href && i < items.length - 1 ? (
                <Link href={item.href} className="hover:text-burgundy transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-ink-soft font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
