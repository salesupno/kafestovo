import type { Metadata } from "next";
import { Instrument_Serif, Caveat, Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import RevealObserver from "@/components/reveal-observer";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s — Kafé Ståvå, Vigrestad",
    default: "Kafé Ståvå — Bygdepuben på Vigrestad",
  },
  description:
    "Kafé Ståvå er bygdepuben på Vigrestad — kaffi, hjemmelaga husmannskost, pub med alle rettigheter og selskapslokale for opptil 50 personar.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaffestava.no"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${instrumentSerif.variable} ${caveat.variable} ${manrope.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <RevealObserver />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
