"use client";

import { memo, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const GlowingEffect = memo(
  ({
    blur = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    disabled = false,
    borderWidth = 3,
  }: {
    blur?: number;
    inactiveZone?: number;
    proximity?: number;
    spread?: number;
    variant?: "default" | "white";
    glow?: boolean;
    className?: string;
    disabled?: boolean;
    movementDuration?: number;
    borderWidth?: number;
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (disabled) return;

      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        containerRef.current.style.setProperty("--mouse-x", `${x}px`);
        containerRef.current.style.setProperty("--mouse-y", `${y}px`);
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, [disabled]);

    return (
      <div
        ref={containerRef}
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300",
          glow ? "opacity-100" : "opacity-0 group-hover:opacity-100",
          className,
          disabled && "!hidden"
        )}
      >
        <div
          className="absolute inset-0 rounded-[inherit] opacity-100"
          style={{
            background: `radial-gradient(circle ${spread * 10}px at var(--mouse-x, 0) var(--mouse-y, 0), rgba(0, 225, 171, 0.4), transparent 80%)`,
            padding: `${borderWidth}px`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      </div>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";
