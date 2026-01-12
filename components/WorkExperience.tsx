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
    description: "Extended from summer internship to 6-month co-op in recognition of exceptional performance. Developed a .NET MAUI Android app used by drivers to manage navigation, job assignments, time logs, and compensation for over 30,000 drivers nationwide. Created front-end interfaces using XAML and implemented backend logic in C# with SQL databases.",
    technologies: [".NET MAUI", "C#", "XAML", "SQL", "Android", "Agile Scrum"]
  },
];

// Additional achievements section
const achievements = [
  "Refactored over 100 unit tests and resolved bugs across critical applications",
  "Led a team of 6 interns in company-wide hackathon training AI model with BigQuery ML",
  "Collaborated across teams to ensure DOT compliance and reduce operational risk"
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
    <section id="experience" className="w-full max-w-6xl mx-auto px-4 pt-2 pb-8">
      <div 
        ref={headerRef}
        className={`text-center mb-8 transition-all duration-700 ${
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
        
        {/* Achievements section */}
        <div 
          className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-lg rounded-xl shadow-lg p-8 border border-indigo-400/20"
        >
          <h3 className="text-2xl font-bold text-indigo-300 mb-4">Key Achievements</h3>
          <ul className="space-y-3">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-200">
                <span className="text-indigo-400 mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}