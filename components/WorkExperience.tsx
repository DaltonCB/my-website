"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

export type WorkExperience = {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies?: string[];
};

const workExperiences: WorkExperience[] = [
  {
    title: "Software Development Intern / Co-op",
    company: "UPS, Inc",
    duration: "June 2025 - Present",
    description: "",
    technologies: [".NET MAUI", "C#", "XAML", "SQL", "Android", "Angular", "Agile Scrum"]
  },
];

// Bulleted achievements from resume
const achievements = [
  "Extended from summer internship to two 6-month co-ops in recognition of exceptional performance",
  "Developed a .NET MAUI Android app used by drivers to manage navigation, job assignments, time logs, and compensation for over 30,000 drivers nationwide",
  "Created front-end interfaces using XAML to improve driver satisfaction when using mobile work app and implemented backend logic in C# with SQL databases to provide accurate accounting of driver statistics",
  "Refactored over 100 unit tests and resolved bugs across critical applications to improve app reliability and maintainability",
  "Contributed to feature requests within an Agile Scrum Framework to iteratively plan, develop, and review new functionality",
  "Collaborated across teams to ensure compliance with Department of Transportation regulations to reduce operational risk",
  "Led a team of 6 interns in a company wide hackathon to train an AI model utilizing BigQuery ML to detect fraud in shipment logs and presented results to both Google and UPS representatives"
];

function ExperienceCard({ experience, index }: { experience: WorkExperience; index: number }) {
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
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{experience.title}</h3>
          <h4 className="text-xl font-semibold text-accent-1 mb-2">{experience.company}</h4>
        </div>
        <span className="text-slate-400 font-medium md:text-right">{experience.duration}</span>
      </div>
      
      {/* Bulleted achievements list */}
      <ul className="space-y-3 mb-6">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-3 text-slate-300">
            <span className="text-accent-1 mt-1">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
      
      {experience.technologies && (
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-3 py-1 bg-accent-1/20 text-accent-1 rounded-full text-sm font-medium border border-accent-1/30"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function WorkExperience() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);

  return (
    <section id="experience" className="w-full max-w-6xl mx-auto px-4 pt-2 pb-8 scroll-mt-20">
      <div 
        ref={headerRef}
        className={`text-center mb-8 transition-all duration-700 ${
          headerVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
          Work <span className="bg-gradient-to-r from-sky-300 to-accent-1 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          My professional journey and the experiences that have shaped my development career.
        </p>
      </div>
      
      <div className="space-y-8">
        {workExperiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
}