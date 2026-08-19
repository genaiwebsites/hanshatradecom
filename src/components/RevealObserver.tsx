"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const revealEls = document.querySelectorAll("[data-reveal]");
    if ("IntersectionObserver" in window) {
      const revealObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              revealObs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach((el) => revealObs.observe(el));
      return () => revealObs.disconnect();
    } else {
      revealEls.forEach((el) => el.classList.add("is-in"));
    }
  }, []);

  return null;
}
