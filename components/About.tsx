"use client";

import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { GraduationCap, Briefcase, Code2, Dumbbell } from "lucide-react";

export type AboutItem = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const aboutItems: AboutItem[] = [
  {
    title: "Computer Science Student",
    description: "Currently pursuing a Bachelor of Science in Computer Science at Purdue University with a 3.71 GPA, graduating May 2026.",
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
      className={`bg-slate-800 rounded-xl shadow-lg p-8 hover:bg-slate-700 transition-all duration-700 border-l-4 border-cyan-400 ${
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
          <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center">
            <item.icon className="w-8 h-8 text-cyan-400" />
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
  const { ref: photoRef, isVisible: photoVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-4 pt-2 pb-8">
      {/* Profile Photo Section */}
      <div 
        ref={photoRef}
        className={`text-center mb-2 transition-all duration-700 ${
          photoVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <div className="relative inline-block">
          <Image
            src="/profile-photo.jpg" // Place your photo in the public folder with this name
            alt="Dalton Babbs"
            width={200}
            height={200}
            className="rounded-full mx-auto shadow-2xl border-4 border-white/20 hover:border-indigo-400/50 transition-all duration-300"
            priority
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30 transition-all duration-300"></div>
        </div>
      </div>
      
      <div 
        ref={headerRef}
        className={`text-center mb-8 transition-all duration-700 ${
          headerVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Computer Science student at Purdue University graduating in May 2026 with hands-on experience in software development and a passion for creating impactful applications.
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