"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CardTiltProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function CardTilt({ children, className, glowColor = "rgba(56, 189, 248, 0.15)" }: CardTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -6;
    const rY = ((x - centerX) / centerX) * 6;

    setRotateX(rX);
    setRotateY(rY);
    setGlowPos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="w-full transition-transform duration-200"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative w-full rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl transition-all duration-300",
          "hover:border-cyan-500/30 hover:shadow-[0_20px_50px_rgba(8,112,184,0.25)]",
          className
        )}
      >
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-60 transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px circle at ${glowPos.x}px ${glowPos.y}px, ${glowColor}, transparent 70%)`,
            }}
          />
        )}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
