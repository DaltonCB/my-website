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
    title: "Full-Stack Developer",
    description: "I love building modern web applications using React, Next.js, and TypeScript.",
    image: "/file.svg",
  },
  {
    title: "Traveler",
    description: "Exploring new places and cultures inspires my creativity and problem-solving.",
    image: "/globe.svg",
  },
  // Add more items here
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

  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-4 py-24">
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
          Get to know me better - my passions, skills, and what drives me as a developer.
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