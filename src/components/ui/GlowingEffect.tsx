"use client";
import React, { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white" | "cyan" | "purple" | "emerald" | "red";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

export const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.5,
    proximity = 60,
    spread = 25,
    variant = "default",
    glow = true,
    className,
    movementDuration = 2,
    borderWidth = 1.5,
    disabled = false,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e ? (e as MouseEvent).clientX ?? (e as any).x : lastPosition.current.x;
          const mouseY = e ? (e as MouseEvent).clientY ?? (e as any).y : lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1]);
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");

          if (!isActive) return;

          const currentAngle = parseFloat(element.style.getPropertyValue("--start")) || 0;
          let targetAngle = (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90;

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          element.style.setProperty("--start", `${newAngle}`);
        });
      },
      [inactiveZone, proximity]
    );

    useEffect(() => {
      if (disabled) return;

      const handlePointerMove = (e: PointerEvent) => handleMove(e);
      window.addEventListener("pointermove", handlePointerMove, { passive: true });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener("pointermove", handlePointerMove);
      };
    }, [disabled, handleMove]);

    const gradientMap = {
      default: "#00f0ff, #3b82f6, #a855f7, #ec4899",
      cyan: "#00f0ff, #06b6d4, #3b82f6",
      purple: "#a855f7, #ec4899, #6366f1",
      emerald: "#10b981, #06b6d4, #34d399",
      red: "#ef4444, #f97316, #f59e0b",
      white: "#ffffff, #94a3b8, #ffffff",
    };

    return (
      <div
        ref={containerRef}
        style={
          {
            "--blur": `${blur}px`,
            "--spread": spread,
            "--start": "0",
            "--active": "0",
            "--glowingeffect-border-width": `${borderWidth}px`,
            "--repeating-conic-gradient-times": "5",
            "--gradient": gradientMap[variant] || gradientMap.default,
          } as React.CSSProperties
        }
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300",
          glow ? "opacity-100" : "opacity-0",
          className
        )}
      >
        <div
          className={cn(
            "glow-layer absolute inset-0 rounded-[inherit] border-[length:var(--glowingeffect-border-width)] border-transparent opacity-[var(--active)] transition-opacity duration-300",
            "[background-attachment:fixed] [background-origin:border-box] [mask-clip:padding-box,border-box] [mask-composite:intersect]",
            "[mask-image:linear-gradient(transparent,transparent),linear-gradient(white,white)]"
          )}
          style={{
            backgroundImage: `conic-gradient(from calc(var(--start) * 1deg), var(--gradient))`,
          }}
        />
      </div>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";
