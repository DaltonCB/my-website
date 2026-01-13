"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// components/Projects.tsx
export type Project = {
  title: string;
  description: string;
  detailedDescription: string[];
  image?: string;
  link?: string;
  technologies?: string[];
  features?: string[];
};

const projects: Project[] = [
  {
    title: "EdVenture Study Abroad",
    description: "A comprehensive full-stack social web application designed to connect study abroad students worldwide through location-based peer discovery and collaborative trip planning.",
    detailedDescription: [
      "Engineered a full-stack social React web app utilizing MongoDB and featuring real-time messaging, posting, group chats, community forums, and a Social Map using Google Maps API for location-based peer discovery",
      "Developed a dynamic posting engine integrating Cloudinary, enabling users to share media-rich travel experience posts",
      "Architected user customization and security modules, including 2FA (Two-Factor Authentication) and university verification",
      "Built tools for trip planning, shared calendars, and visual budgeting trackers to help users manage expenses and itineraries",
      "Collaborated with a 5-person team using Scrum, delivering modular features in 4-week sprints"
    ],
    image: "/edventurelogo.png",
    link: "#",
    technologies: ["TypeScript", "React", "Node.js", "MongoDB", "Express", "Google Maps API", "Cloudinary"],
    features: [
      "Real-time messaging and group chats",
      "Community forums and media-rich posting",
      "Social Map with location-based discovery", 
      "Trip planning tools and shared calendars",
      "Visual budgeting trackers",
      "2FA and university verification"
    ]
  },
  {
    title: "Explorio",
    description: "A mobile application designed to generate detailed vacation itineraries based on user preferences, leveraging location APIs and Firebase for secure data management.",
    detailedDescription: [
      "Worked on frontend implementation using Flutter, allowing for easy and clear user interaction with the application",
      "Engineered backend functionalities using Flutter and Firebase, facilitating data storage along with extensive security and scalability",
      "Leveraged the Google Places API to dynamically source authentic locations, crafting personalized trip itineraries tailored to user preferences and interests",
      "Designed multi-factor authentication for the application and worked on data storage in Firebase, increasing security and improving reliability"
    ],
    image: "/explorio-logo.png",
    link: "#",
    technologies: ["Flutter", "Firebase", "Google Places API", "Dart"],
    features: [
      "Personalized trip itinerary generation",
      "Google Places API integration for authentic locations",
      "Multi-factor authentication system",
      "Firebase backend with secure data storage",
      "Cross-platform mobile compatibility"
    ]
  },
  {
    title: "Personal Portfolio Website", 
    description: "A modern responsive portfolio website showcasing my development skills and professional experience. Thanks for stopping by!",
    detailedDescription: [
      "Built with Next.js and React for optimal performance",
      "Implemented custom scroll animations using Intersection Observer API",
      "Designed responsive layout with Tailwind CSS supporting all device sizes",
      "Created single-page application with smooth scroll navigation between sections",
      "Integrated TypeScript for type-safe development and better code maintainability",
      "Deployed with Vercel for fast global content delivery"
    ],
    image: "/window.svg",
    link: "#",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Smooth scroll animations",
      "Responsive design",
      "Clean, professional layout"
    ]
  },
];

function ProjectCard({ project, index, onProjectClick }: { project: Project; index: number; onProjectClick: (project: Project) => void }) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  return (
    <div 
      ref={ref}
      onClick={() => onProjectClick(project)}
      className={`bg-slate-800 rounded-xl shadow-lg p-6 flex flex-col hover:bg-slate-700 transition-all duration-700 hover:scale-105 border-l-4 border-cyan-400 cursor-pointer ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms` 
      }}
    >
      {project.image && (
        <>
          <img 
            src={project.image} 
            alt={project.title} 
            width={64}
            height={64}
            className={`w-16 h-16 mb-4 mx-auto object-contain ${
              project.title === "Personal Portfolio Website" 
                ? "filter brightness-0 saturate-100 invert-0 sepia-1 hue-rotate-180 brightness-2 contrast-1" 
                : ""
            }`}
            style={
              project.title === "Personal Portfolio Website"
                ? { filter: "invert(56%) sepia(94%) saturate(1546%) hue-rotate(162deg) brightness(101%) contrast(101%)" }
                : {}
            }
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div 
            className="w-16 h-16 mb-4 mx-auto bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl hidden"
            style={{ display: 'none' }}
          >
            {project.title.charAt(0)}
          </div>
        </>
      )}
      <h3 className="text-xl font-semibold mb-3 text-white text-center">{project.title}</h3>
      <p className="text-slate-300 mb-4 text-center leading-relaxed flex-grow">{project.description}</p>
      
      {project.technologies && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs font-medium border border-cyan-400/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {project.features && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
          <ul className="text-xs text-slate-300 space-y-1">
            {project.features.slice(0, 3).map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-1">
                <span className="text-indigo-400 mt-0.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="mt-auto pt-4 text-center">
        <span className="text-cyan-400 font-medium text-sm">
          Click to view details
        </span>
      </div>
    </div>
  );
}

function ProjectModal({ project, isOpen, onClose }: { project: Project | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          {/* Header with close button */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              {project.image && (
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={48}
                  height={48}
                  className={`w-12 h-12 ${
                    project.title === "Personal Portfolio Website" 
                      ? "filter brightness-0 saturate-100 invert-0 sepia-1 hue-rotate-180 brightness-2 contrast-1" 
                      : ""
                  }`}
                  style={
                    project.title === "Personal Portfolio Website"
                      ? { filter: "invert(56%) sepia(94%) saturate(1546%) hue-rotate(162deg) brightness(101%) contrast(101%)" }
                      : {}
                  }
                />
              )}
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors text-2xl leading-none"
            >
              ×
            </button>
          </div>
          
          {/* Project description */}
          <p className="text-slate-300 text-lg leading-relaxed mb-6">{project.description}</p>
          
          {/* Detailed description */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">Project Details</h3>
            <ul className="space-y-3">
              {project.detailedDescription.map((detail, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Technologies */}
          {project.technologies && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm font-medium border border-cyan-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section className="pt-2 pb-8 px-4 max-w-5xl mx-auto" id="projects">
      <div 
        ref={headerRef}
        className={`text-center mb-8 transition-all duration-700 ${
          headerVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white leading-tight">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Here are some of the projects I&apos;ve worked on that showcase my skills and passion for development.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} onProjectClick={handleProjectClick} />
        ))}
      </div>
      
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
