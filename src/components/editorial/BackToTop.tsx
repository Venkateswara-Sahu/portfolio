"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".kinetic-hero");
    if (!hero || !window.IntersectionObserver) return;

    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <a
      className="back-to-top"
      href="#top"
      aria-label="Back to top"
      title="Back to top"
      onClick={(event) => {
        // Native fragment navigation would override the focus destination.
        // "auto" follows CSS scroll-behavior, including reduced motion.
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "auto" });
        document.querySelector<HTMLAnchorElement>(".editorial-nav__identity")
          ?.focus({ preventScroll: true });
      }}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5m-6 6 6-6 6 6" />
      </svg>
    </a>
  );
}
