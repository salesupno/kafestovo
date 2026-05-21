"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const alreadyVisible: HTMLElement[] = [];

    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
      el.classList.remove("in");
    });

    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.style.transition = "none";
        el.classList.add("in");
        alreadyVisible.push(el);
      }
    });

    requestAnimationFrame(() => {
      alreadyVisible.forEach((el) => {
        el.style.transition = "";
      });
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
