"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

// components/Projects.tsx
export type Project = {
  title: string;
  description: string;
  image?: string;
  link?: string;
  technologies?: string[];
  features?: string[];
};

const projects: Project[] = [
  {
    title: "EdVenture Study Abroad",
    description: "A comprehensive full-stack social web application designed to connect study abroad students worldwide through location-based peer discovery and collaborative trip planning.",
    image: "/globe.svg",
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
    image: "/window.svg",
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
    description: "A modern responsive portfolio website showcasing my development skills and professional experience.",
    image: "/file.svg",
    link: "#",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Smooth scroll animations",
      "Responsive design",
      "Clean, professional layout"
    ]
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  return (
    <div 
      ref={ref}
      className={`bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col hover:bg-white/15 transition-all duration-700 hover:scale-105 ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms` 
      }}
    >
      {project.image && (
        <img src={project.image} alt={project.title} className="w-16 h-16 mb-4 mx-auto" />
      )}
      <h3 className="text-xl font-semibold mb-3 text-indigo-300 text-center">{project.title}</h3>
      <p className="text-gray-300 mb-4 text-center leading-relaxed flex-grow">{project.description}</p>
      
      {project.technologies && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-purple-300 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs font-medium border border-indigo-400/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {project.features && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Features:</h4>
          <ul className="text-xs text-gray-300 space-y-1">
            {project.features.slice(0, 3).map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-1">
                <span className="text-indigo-400 mt-0.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="mt-auto pt-4">
        {project.link && (
          <a href={project.link} className="text-indigo-400 hover:underline font-medium">View Project</a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);

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
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 bg-clip-text text-transparent leading-tight">
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
