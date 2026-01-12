"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

export type SkillCategory = {
  category: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["C#", "TypeScript", "JavaScript", "Java", "C", "C++", "Python", "SQL", "Dart", "HTML/CSS"]
  },
  {
    category: "Frameworks & Tools", 
    skills: ["React", "Node.js", ".NET MAUI", "Flutter", "MongoDB", "Firebase", "Git", "GCP", "Azure DevOps", "Agile", "Android"]
  }
];

function SkillCategoryCard({ category, index }: { category: SkillCategory; index: number }) {
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
      <h3 className="text-2xl font-bold text-white mb-4">{category.category}</h3>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, skillIndex) => (
          <span 
            key={skillIndex}
            className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm font-medium border border-cyan-400/30 hover:bg-cyan-500/30 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);

  return (
    <section id="skills" className="w-full max-w-6xl mx-auto px-4 pt-2 pb-8">
      <div 
        ref={headerRef}
        className={`text-center mb-8 transition-all duration-700 ${
          headerVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          The technologies and tools I use to bring ideas to life and solve complex problems.
        </p>
      </div>
      
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <SkillCategoryCard key={index} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}