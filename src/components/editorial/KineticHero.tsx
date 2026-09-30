"use client";

import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

import { portfolioContent } from "@/data/portfolio";
import { HeroSignal } from "@/components/visuals/HeroSignal";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export function KineticHero() {
  const { identity } = portfolioContent;
  const [scope, animate] = useAnimate<HTMLDivElement>();

  useEffect(() => {
    // The server and first client render are already settled. Motion only
    // enhances the decorative phrase after a successful browser mount.
    if (!window.matchMedia || document.hidden) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) return;
    const element = scope.current;
    let animation: ReturnType<typeof animate> | undefined;

    const settle = () => {
      // Finish Motion's values before releasing its render loop; stopping
      // midway can schedule one last render with a displaced word.
      animation?.complete();
      element.querySelectorAll<HTMLElement>("[data-hero-word]").forEach((word) => {
        word.style.transform = "none";
      });
      element.querySelector<SVGPathElement>("[data-hero-signal]")?.style.setProperty("stroke-dashoffset", "0");
    };
    const onVisibilityChange = () => {
      if (document.hidden) settle();
    };
    const onPreferenceChange = () => {
      if (preference.matches) settle();
    };

    try {
      animation = animate([
        ["[data-hero-word]", { y: ["110%", "0%"] }, {
          duration: 0.76,
          delay: stagger(0.13),
          ease: [0.22, 1, 0.36, 1],
        }],
        ["[data-hero-signal]", { strokeDashoffset: [1, 0] }, {
          at: 0,
          duration: 1.1,
          ease: "easeOut",
        }],
      ]);
    } catch {
      settle();
    }

    document.addEventListener("visibilitychange", onVisibilityChange);
    preference.addEventListener("change", onPreferenceChange);
    return () => {
      settle();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      preference.removeEventListener("change", onPreferenceChange);
    };
  }, [animate, scope]);

  return (
    <section aria-labelledby="hero-name" className="container-editorial kinetic-hero">
      <div className="grid items-start gap-6 md:grid-cols-[1fr_1fr] md:gap-12">
        <div>
          <h1 id="hero-name" className="m-0 text-[clamp(1.35rem,2.4vw,2.2rem)] font-semibold tracking-[-0.04em]">
            {identity.name}
          </h1>
          <p className="mt-2 max-w-[34ch] text-[clamp(1rem,1.25vw,1.1rem)] leading-relaxed text-[var(--color-editorial-muted)]">
            {identity.role}
          </p>
        </div>
        <div className="max-w-[36rem] md:justify-self-end">
          <p className="m-0 text-[clamp(1rem,1.4vw,1.2rem)] leading-relaxed">
            {identity.statement}
          </p>
          <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
            {identity.actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noreferrer" : undefined}
                className={`inline-flex min-h-11 items-center border-b border-current text-base font-bold first:text-accent ${focusRing}`}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div ref={scope} className="hero-display relative isolate">
        <p className="hero-display__phrase relative z-10 m-0 font-serif">
          <span className="sr-only">{identity.displayPhrase}</span>
          <span aria-hidden="true">
            {identity.displayPhrase.split(" ").map((word, index) => (
              <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom pb-[0.12em]">
                <span data-hero-word className={`inline-block ${index === 2 ? "italic" : ""}`}>
                  {word}{index < 2 ? "\u00a0" : ""}
                </span>
              </span>
            ))}
          </span>
        </p>
        <HeroSignal />
      </div>
    </section>
  );
}
