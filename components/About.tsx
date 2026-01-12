"use client";

import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export type AboutItem = {
  title: string;
  description: string;
  image?: string;
};

const aboutItems: AboutItem[] = [
  {
    title: "Computer Science Student",
    description: "Currently pursuing a Bachelor of Science in Computer Science at Purdue University with a 3.71 GPA, graduating May 2026.",
    image: "/file.svg",
  },
  {
    title: "Software Development Co-op",
    description: "Working at UPS developing mobile applications for 30,000+ drivers nationwide using .NET MAUI, C#, and SQL databases.",
    image: "/globe.svg",
  },
  {
    title: "Full-Stack Developer",
    description: "Experienced in building modern web applications using React, TypeScript, Node.js, and cloud technologies like MongoDB and Firebase.",
    image: "/window.svg",
  },
];

function AboutCard({ item, index }: { item: AboutItem; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  return (
    <div 
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 hover:bg-white/15 transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${index * 200}ms` 
      }}
    >
      {item.image && (
        <div className="flex-shrink-0">
          <Image 
            src={item.image} 
            alt={item.title} 
            width={80} 
            height={80} 
            className="rounded-full" 
          />
        </div>
      )}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl font-bold text-indigo-300 mb-3">{item.title}</h3>
        <p className="text-gray-200 text-lg leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

export default function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);
  const { ref: photoRef, isVisible: photoVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-4 py-2">
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
        className={`text-center mb-16 transition-all duration-700 ${
          headerVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Computer Science student at Purdue University with hands-on experience in software development and a passion for creating impactful applications.
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