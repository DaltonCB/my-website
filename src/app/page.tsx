import Hero from "../../components/Hero";
import About from "../../components/About";
import WorkExperience from "../../components/WorkExperience";
import Projects from "../../components/Projects";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-sky-900 animate-gradient">
      {/* Animated gradient background with SVG overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900 via-purple-900 to-sky-900 animate-gradient opacity-90" />
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <radialGradient id="radial" cx="50%" cy="50%" r="80%" fx="50%" fy="50%" gradientTransform="rotate(45)">
              <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#radial)" />
        </svg>
      </div>
      
      {/* Main content sections */}
      <div className="relative z-10 w-full">
        <div className="flex flex-col items-center justify-center">
          <Hero />
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <About />
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <WorkExperience />
        </div>
        
        <div className="flex flex-col items-center justify-center pb-24">
          <Projects />
        </div>
      </div>
    </main>
  );
}
