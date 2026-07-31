"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  drift: number;
  driftPhase: number;
  opacity: number;
};

const PARTICLE_DENSITY = 0.00006; // particles per pixel of viewport area
const MAX_PARTICLES = 70;

function createParticle(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.5 + 0.5,
    speedY: Math.random() * 0.3 + 0.1,
    drift: Math.random() * 0.6 + 0.2,
    driftPhase: Math.random() * Math.PI * 2,
    opacity: Math.random() * 0.4 + 0.1,
  };
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];

    const setup = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      const count = Math.min(
        MAX_PARTICLES,
        Math.round(width * height * PARTICLE_DENSITY)
      );
      particles = Array.from({ length: count }, () => createParticle(width, height));
    };

    setup();

    let frameId: number;
    let time = 0;

    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.y -= p.speedY;
        p.x += Math.sin(time * 0.01 + p.driftPhase) * 0.15 * p.drift;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 197, 253, ${p.opacity})`;
        ctx.fill();
      }

      frameId = requestAnimationFrame(draw);
    };

    frameId = requestAnimationFrame(draw);

    const handleResize = () => setup();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1] opacity-70"
      aria-hidden="true"
    />
  );
}
