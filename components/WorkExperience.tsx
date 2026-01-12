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
    title: "Full-Stack Developer",
    company: "Tech Solutions Inc.",
    duration: "2023 - Present",
    description: "Developed and maintained modern web applications using React, Next.js, and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    duration: "2022 - 2023",
    description: "Built responsive user interfaces and implemented interactive features for client websites. Focused on performance optimization and user experience improvements.",
    technologies: ["React", "JavaScript", "CSS", "Tailwind CSS", "Figma"]
  },
  {
    title: "Junior Developer",
    company: "StartupCo",
    duration: "2021 - 2022",
    description: "Contributed to the development of a mobile-first web application. Gained experience in agile development methodologies and version control systems.",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "MongoDB"]
  },
];

function ExperienceCard({ experience, index }: { experience: WorkExperience; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  return (
    <div 
      ref={ref}
      className={`bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 hover:bg-white/15 transition-all duration-700 ${
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
          <h3 className="text-2xl font-bold text-indigo-300 mb-1">{experience.title}</h3>
          <h4 className="text-xl font-semibold text-purple-300 mb-2">{experience.company}</h4>
        </div>
        <span className="text-gray-400 font-medium md:text-right">{experience.duration}</span>
      </div>
      
      <p className="text-gray-200 text-lg leading-relaxed mb-4">{experience.description}</p>
      
      {experience.technologies && (
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium border border-indigo-400/30"
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
    <section id="experience" className="w-full max-w-6xl mx-auto px-4 py-24">
      <div 
        ref={headerRef}
        className={`text-center mb-16 transition-all duration-700 ${
          headerVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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