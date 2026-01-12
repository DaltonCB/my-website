"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

export type EducationItem = {
  institution: string;
  location: string;
  degree: string;
  gpa: string;
  graduationDate: string;
  description?: string;
};

const educationItems: EducationItem[] = [
  {
    institution: "Purdue University",
    location: "West Lafayette, Indiana",
    degree: "Bachelor of Science in Computer Science",
    gpa: "3.71/4.00",
    graduationDate: "May 2026",
    description: "Pursuing a comprehensive computer science education with focus on software development, algorithms, data structures, and modern programming practices. My degree track at Purdue University focuses on Software Engineering."
  },
];

const relevantCoursework = [
  "Operating Systems",
  "Computer Architecture", 
  "Data Structures and Algorithms",
  "Systems Programming",
  "Software Engineering I and II",
  "Object-Oriented Programming",
  "Programming in C",
  "Computer Networks"
];

function EducationCard({ education, index }: { education: EducationItem; index: number }) {
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
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{education.degree}</h3>
          <h4 className="text-xl font-semibold text-cyan-400 mb-2">{education.institution}</h4>
          <p className="text-slate-400 text-lg">{education.location}</p>
        </div>
        <div className="text-slate-400 font-medium md:text-right mt-2 md:mt-0">
          <div className="text-cyan-300 font-semibold">GPA: {education.gpa}</div>
          <div className="mt-1">{education.graduationDate}</div>
        </div>
      </div>
      
      {education.description && (
        <p className="text-slate-300 text-lg leading-relaxed">{education.description}</p>
      )}
    </div>
  );
}

export default function Education() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);

  return (
    <section id="education" className="w-full max-w-6xl mx-auto px-4 pt-2 pb-8">
      <div 
        ref={headerRef}
        className={`text-center mb-8 transition-all duration-700 ${
          headerVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
          <span className="text-cyan-400">Education</span>
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          My academic foundation in computer science and the knowledge that drives my passion for development.
        </p>
      </div>
      
      <div className="space-y-8">
        {educationItems.map((education, index) => (
          <EducationCard key={index} education={education} index={index} />
        ))}
        
        {/* Relevant Coursework Section */}
        <div className="bg-slate-800 rounded-xl shadow-lg p-8 border-l-4 border-cyan-400">
          <h3 className="text-2xl font-bold text-white mb-4">Relevant Coursework</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {relevantCoursework.map((course, index) => (
              <div key={index} className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-1">•</span>
                <span className="text-lg">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}