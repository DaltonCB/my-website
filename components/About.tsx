"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { GraduationCap, Briefcase, Code2, Dumbbell } from "lucide-react";

export type AboutItem = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const aboutItems: AboutItem[] = [
  {
    title: "Computer Science Graduate",
    description: "Completed a Bachelor of Science in Computer Science at Purdue University with a 3.67 GPA and graduated May 2026.",
    icon: GraduationCap,
  },
  {
    title: "Software Development Co-op",
    description: "Working at UPS developing mobile applications for 30,000+ drivers nationwide using .NET MAUI, C#, and SQL databases.",
    icon: Briefcase,
  },
  {
    title: "Full-Stack Developer",
    description: "Experienced in building modern web applications using React, TypeScript, Node.js, and cloud technologies like MongoDB and Firebase. Passionate about building applications at every level of the stack - from database design and backend APIs to responsive frontend interfaces and mobile applications.",
    icon: Code2,
  },
  {
    title: "Fitness & Wellness",
    description: "Dedicated to maintaining physical fitness through regular gym sessions and various physical activities. I love playing sports with friends, especially intramural volleyball!",
    icon: Dumbbell,
  },
];

function AboutCard({ item, index }: { item: AboutItem; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  return (
    <div 
      ref={ref}
      className={`bg-nebula rounded-xl shadow-lg p-8 hover:bg-nebula-light transition-all duration-700 border-l-4 border-accent-1 hover:shadow-[0_0_25px_-5px_rgba(56,189,248,0.5)] ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${index * 200}ms` 
      }}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <div className="w-16 h-16 bg-accent-1/20 rounded-full flex items-center justify-center">
            <item.icon className="w-8 h-8 text-accent-1" />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
          <p className="text-slate-300 text-lg leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);

  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-4 pt-16 pb-8 sm:pt-24">
      <div 
        ref={headerRef}
        className={`text-center mb-8 transition-all duration-700 ${
          headerVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
          About <span className="bg-gradient-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Software Engineer and Computer Science graduate with hands-on experience in agile software development and a passion for creating impactful applications.
        </p>
      </div>
      
      <div className="grid gap-8 md:gap-12">
        {aboutItems.map((item, index) => (
          <AboutCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}