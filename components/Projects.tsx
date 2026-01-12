"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

// components/Projects.tsx
export type Project = {
  title: string;
  description: string;
  image?: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Personal Website",
    description: "A modern personal/portfolio website built with React, Next.js and Tailwind CSS.",
    image: "/file.svg",
    link: "#",
  },
  {
    title: "Explorio",
    description: "A mobile application designed to generate detailed vacation itineraries based on user input and APIs created with Flutter and Firebase.",
    image: "/window.svg",
    link: "#",
  },
  // Add more projects here
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  return (
    <div 
      ref={ref}
      className={`bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center hover:bg-white/15 transition-all duration-700 hover:scale-105 ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms` 
      }}
    >
      {project.image && (
        <img src={project.image} alt={project.title} className="w-16 h-16 mb-4" />
      )}
      <h3 className="text-xl font-semibold mb-2 text-indigo-300">{project.title}</h3>
      <p className="text-gray-300 mb-4 text-center">{project.description}</p>
      {project.link && (
        <a href={project.link} className="text-indigo-400 hover:underline font-medium">View Project</a>
      )}
    </div>
  );
}

export default function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto" id="projects">
      <div 
        ref={headerRef}
        className={`text-center mb-12 transition-all duration-700 ${
          headerVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Here are some of the projects I've worked on that showcase my skills and passion for development.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
