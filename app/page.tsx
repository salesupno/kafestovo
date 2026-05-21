import type { Metadata } from "next";
import HeroSection from "@/components/home/hero-section";
import MarqueeStrip from "@/components/home/marquee-strip";
import OmOssSection from "@/components/home/om-oss-section";
import MenySection from "@/components/home/meny-section";
import AktivitetarSection from "@/components/home/aktivitetar-section";
import SelskapSection from "@/components/home/selskap-section";
import Go2GrillSection from "@/components/home/go2grill-section";
import FaqSection from "@/components/home/faq-section";
import ReviewsSection from "@/components/home/reviews-section";
import InfoSection from "@/components/home/info-section";
import CtaBand from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "Kafé Ståvå — Bygdepub i Vigrestad",
  description:
    "Ækte jærsk kafé og bygdepub i Vigrestad. Husmannskost, smørbrød, bakst og ailla rettigheter. Selskap opp te 50 stk., catering og faste arrangement. Bestill via Go2Grill.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kafé Ståvå — Bygdepub i Vigrestad",
    description:
      "Ækte jærsk kafé og bygdepub i Vigrestad. Husmannskost, smørbrød, bakst og ailla rettigheter. Selskap opp te 50 stk., catering og faste arrangement.",
    url: "/",
    siteName: "Kafé Ståvå",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "/assets/chef-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Kafé Ståvå i Vigrestad",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["FoodEstablishment", "LocalBusiness"],
  name: "Kafé Ståvå",
  description:
    "Ækte jærsk kafé og bygdepub i Vigrestad. Husmannskost, smørbrød, bakst og ailla rettigheter etter klokka 18.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaffestava.no",
  telephone: "+4745285096",
  email: "post@kaffestava.no",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Storgata",
    addressLocality: "Vigrestad",
    postalCode: "4362",
    addressCountry: "NO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 58.619,
    longitude: 5.693,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "21:00",
    },
  ],
  servesCuisine: "Norwegian",
  priceRange: "$$",
  image: "/assets/chef-hero.jpg",
  sameAs: ["https://www.facebook.com/kaffestava"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <MarqueeStrip />
      <OmOssSection />
      <MenySection />
      <AktivitetarSection />
      <SelskapSection />
      <Go2GrillSection />
      <FaqSection />
      <ReviewsSection />
      <InfoSection />
      <CtaBand />
    </>
  );
}
