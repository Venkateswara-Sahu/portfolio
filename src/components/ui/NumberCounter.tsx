"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface NumberCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

export function NumberCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 1.5,
  decimals = 0,
}: NumberCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = target;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out expo
      const current = end * (1 - Math.pow(2, -10 * progress));
      setCount(current);

      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {prefix}
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
