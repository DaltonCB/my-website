import Hero from "../../components/Hero";
import About from "../../components/About";
import WorkExperience from "../../components/WorkExperience";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-900">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-slate-900" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(148 163 184) 1px, transparent 0)'
        }}></div>
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
        
        <div className="flex flex-col items-center justify-center pb-24">
          <Contact />
        </div>
      </div>
    </main>
  );
}
