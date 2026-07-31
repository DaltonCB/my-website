"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import RotatingRoles from "./RotatingRoles";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto min-h-[60vh] px-4 pt-24 pb-4 sm:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Title, subtitle, buttons */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1">
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-white tracking-tight transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Hello, I&apos;m <span className="text-sky-400">Dalton Babbs</span>.
          </h1>
          <div
            className={`transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: mounted ? "100ms" : "0ms" }}
          >
            <RotatingRoles />
          </div>
          <p
            className={`text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: mounted ? "200ms" : "0ms" }}
          >
            I am a Software Engineer with hands-on experience as a Software Development Co-op at UPS, building applications for 30,000+ drivers nationwide. Passionate about creating impactful software solutions.
          </p>
        </div>

        {/* Right Column: Profile picture */}
        <div
          className={`flex justify-center order-1 md:order-2 transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: mounted ? "300ms" : "0ms" }}
        >
          <div className="relative w-56 h-80 sm:w-64 sm:h-96 md:w-72 md:h-[28rem] rounded-full overflow-hidden shadow-2xl border-4 border-white/20 hover:border-indigo-400/50 transition-all duration-300">
            <Image
              src="/profile-photo.jpg"
              alt="Dalton Babbs"
              fill
              sizes="(max-width: 768px) 224px, 288px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400/20 to-sky-400/20 hover:from-indigo-400/30 hover:to-sky-400/30 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
