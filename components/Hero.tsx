"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, ArrowRight, ArrowUpRight } from "lucide-react";
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
            Hello, I&apos;m <span className="bg-gradient-to-r from-sky-300 to-accent-1 bg-clip-text text-transparent">Dalton Babbs</span>.
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
          <div
            className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: mounted ? "300ms" : "0ms" }}
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex h-11 items-center justify-center gap-2 px-5 text-base leading-none rounded-lg bg-accent-1 text-space-void font-semibold hover:bg-accent-1/90 transition-all duration-200 shadow-[0_0_25px_-5px_rgba(56,189,248,0.5)] hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.7)]"
            >
              View Projects
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex h-11 items-center justify-center gap-2 px-5 text-base leading-none rounded-lg border-2 border-accent-1/50 text-accent-1 font-semibold hover:bg-accent-1/10 hover:border-accent-1 transition-all duration-200"
            >
              Work Experience
            </a>
            <a
              href="https://github.com/DaltonCB"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Dalton Babbs' GitHub profile"
              className="inline-flex h-11 items-center justify-center gap-2 px-5 text-base leading-none rounded-lg border-2 border-accent-1/50 text-accent-1 font-semibold hover:bg-accent-1/10 hover:border-accent-1 transition-all duration-200"
            >
              <Github size={18} />
              GitHub
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Right Column: Profile picture */}
        <div
          className={`flex justify-center order-1 md:order-2 transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: mounted ? "300ms" : "0ms" }}
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-accent-1/20 blur-2xl"></div>
            <div className="relative w-56 h-80 sm:w-64 sm:h-96 md:w-72 md:h-[28rem] rounded-full overflow-hidden shadow-[0_0_45px_-5px_rgba(56,189,248,0.4)] border-4 border-white/20 hover:border-accent-1/50 hover:shadow-[0_0_65px_-5px_rgba(56,189,248,0.6)] transition-all duration-300">
              <Image
                src="/profile-photo.jpg"
                alt="Dalton Babbs"
                fill
                sizes="(max-width: 768px) 224px, 288px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-1/10 to-accent-1/25 hover:from-accent-1/20 hover:to-accent-1/35 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
