"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Rocket, GraduationCap, Briefcase } from "lucide-react";

function BentoCard({
  className = "",
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition-all duration-700 hover:border-accent-1/40 hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.15)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function CardEyebrow({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-5 h-5 text-accent-1" />
      <span className="text-xs font-semibold tracking-widest text-accent-1 uppercase">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);

  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-4 pt-16 pb-8 sm:pt-24 scroll-mt-20">
      <div
        ref={headerRef}
        className={`text-center mb-12 transition-all duration-700 ${
          headerVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
          About <span className="bg-gradient-to-r from-sky-300 to-accent-1 bg-clip-text text-transparent">Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-center">
          <CardEyebrow icon={Rocket} label="About Me" />
          <p className="text-lg text-slate-300 leading-relaxed">
            I&apos;m a software engineer who loves turning complex, real-world problems into clean,
            reliable software. Whether I&apos;m designing backend database schemas, architecting
            REST APIs, or building out smooth user interfaces with React and TypeScript, I
            genuinely enjoy working across the whole stack.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mt-4">
            My background hits both ends of the spectrum-from engineering enterprise mobile apps
            with C# and .NET to building full-stack web platforms using Node.js
            and cloud databases. I&apos;m always looking to build things that make
            people&apos;s lives easier.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mt-4">
            When I&apos;m stepped away from the screen, you&apos;ll usually find me lifting at the gym,
            hitting the ski slopes, or playing competitive basketball and volleyball with
            friends.
          </p>
        </BentoCard>

        <BentoCard delay={100}>
          <CardEyebrow icon={GraduationCap} label="Computer Science Degree" />
          <h3 className="text-xl font-bold text-white mb-2">Purdue University</h3>
          <p className="text-slate-300 leading-relaxed">
            B.S. in Computer Science (3.67 GPA). Graduated in May 2026.
          </p>
        </BentoCard>

        <BentoCard delay={200}>
          <CardEyebrow icon={Briefcase} label="Current Role" />
          <h3 className="text-xl font-bold text-white mb-2">Software Dev Co-op</h3>
          <p className="text-slate-300 leading-relaxed">
            UPS — Mobile development with C#, .NET MAUI, and SQL for 30,000+ drivers nationwide.
          </p>
        </BentoCard>
      </div>
    </section>
  );
}