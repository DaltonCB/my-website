"use client";

import { useEffect, useRef } from "react";

const GRID_BACKGROUND_IMAGE =
  "linear-gradient(to right, rgba(148, 163, 184, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.5) 1px, transparent 1px)";
const GRID_BACKGROUND_SIZE = "40px 40px";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const gridRevealRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateGlow = () => {
      const { x, y } = positionRef.current;
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(150px circle at ${x}px ${y}px, rgba(56, 189, 248, 0.12), rgba(129, 140, 248, 0.06) 40%, transparent 70%)`;
      }
      if (gridRevealRef.current) {
        const mask = `radial-gradient(250px circle at ${x}px ${y}px, black, transparent 70%)`;
        gridRevealRef.current.style.maskImage = mask;
        gridRevealRef.current.style.webkitMaskImage = mask;
      }
      frameRef.current = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(updateGlow);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Faint base grid pattern across the whole background */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.07]"
        style={{
          backgroundImage: GRID_BACKGROUND_IMAGE,
          backgroundSize: GRID_BACKGROUND_SIZE,
        }}
        aria-hidden="true"
      />
      {/* Brighter grid reveal masked around the cursor for a HUD effect */}
      <div
        ref={gridRevealRef}
        className="pointer-events-none fixed inset-0 z-[1] opacity-30"
        style={{
          backgroundImage: GRID_BACKGROUND_IMAGE,
          backgroundSize: GRID_BACKGROUND_SIZE,
        }}
        aria-hidden="true"
      />
      {/* Soft radial color glow that follows the cursor */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300"
        aria-hidden="true"
      />
    </>
  );
}
