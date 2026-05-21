import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

interface Go2GrillButtonProps {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Go2GrillButton({
  label = "Bestill via Go2Grill",
  className,
  size = "md",
}: Go2GrillButtonProps) {
  return (
    <Link
      href="https://link.preoday.no/kaffestava"
      target="_blank"
      rel="noopener"
      className={cn(
        "inline-flex items-center gap-2.5 bg-burgundy text-cream rounded-full font-semibold tracking-[0.01em] transition-[background,transform,box-shadow] hover:bg-burgundy-deep hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(107,22,20,0.5)]",
        size === "sm" && "px-5 py-3 text-[13px]",
        size === "md" && "px-7 py-4 text-[15px]",
        size === "lg" && "px-8 py-5 text-[16px]",
        className
      )}
    >
      <Image
        src="/assets/go2grill-logo.png"
        alt=""
        width={60}
        height={22}
        className="h-[22px] w-auto brightness-0 invert"
        aria-hidden
      />
      {label}
      <svg
        className="w-4 h-4 transition-transform group-hover:translate-x-1"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </Link>
  );
}
