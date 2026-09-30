/** An illustrative signal, not measured project telemetry. */
export function HeroSignal() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1000 240"
      fill="none"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 top-[18%] h-[62%] w-full text-accent opacity-65"
    >
      <path
        d="M0 146H310L338 143L358 150L385 134L410 157L437 141H545L570 112L594 175L620 52L648 194L677 112L702 147H810L832 138L855 151L881 144H1000"
        data-hero-signal
        pathLength="1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="1"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="620" cy="52" r="4" fill="currentColor" />
      <path d="M620 0V34M620 70V240" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
