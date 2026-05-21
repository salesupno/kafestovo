"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

const navLinks = [
  { href: "/#om", label: "Om oss" },
  { href: "/meny", label: "Meny" },
  { href: "/aktivitetar", label: "Det skjer" },
  { href: "/selskap", label: "Selskap" },
  { href: "/faq", label: "Spørsmål" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-line transition-[padding] duration-300",
        "bg-bg/95 backdrop-blur-md",
        scrolled ? "py-2.5" : "py-3.5"
      )}
    >
      <div className="max-w-[1500px] mx-auto px-8 max-sm:px-5 flex items-center justify-between gap-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 text-ink">
          <div className="w-10 h-10 rounded-full bg-burgundy text-cream flex items-center justify-center font-serif italic text-xl border-2 border-cream shadow-[0_0_0_1px_#a8261f]">
            K
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif italic text-[22px] tracking-tight">Kafé Ståvå</span>
            <span className="text-[10px] tracking-[0.22em] uppercase text-ink-mute font-medium mt-1">
              Bygdepub · Vigrestad
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-ink-soft font-medium relative group transition-colors hover:text-burgundy"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-burgundy transition-[width] duration-250 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="https://link.preoday.no/kaffestava"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 px-3.5 py-1.5 bg-burgundy text-cream rounded-full text-[12px] font-semibold tracking-[0.04em] transition-[background,transform] hover:bg-burgundy-deep hover:-translate-y-px"
          >
            <Image
              src="/assets/go2grill-logo.png"
              alt="Go2Grill"
              width={60}
              height={22}
              className="h-[22px] w-auto brightness-0 invert"
            />
            Bestill
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Lukk meny" : "Opne meny"}
        >
          <span
            className={cn(
              "block w-6 h-px bg-ink transition-transform duration-200",
              open && "translate-y-[7px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block w-6 h-px bg-ink transition-opacity duration-200",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block w-6 h-px bg-ink transition-transform duration-200",
              open && "-translate-y-[7px] -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height] duration-300 border-t border-line",
          open ? "max-h-96" : "max-h-0 border-t-0"
        )}
      >
        <div className="max-w-[1500px] mx-auto px-8 max-sm:px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] text-ink-soft font-medium hover:text-burgundy transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://link.preoday.no/kaffestava"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 px-4 py-2.5 bg-burgundy text-cream rounded-full text-[13px] font-semibold w-max transition-[background] hover:bg-burgundy-deep"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/assets/go2grill-logo.png"
              alt="Go2Grill"
              width={60}
              height={22}
              className="h-[22px] w-auto brightness-0 invert"
            />
            Bestill via Go2Grill
          </Link>
        </div>
      </div>
    </nav>
  );
}
