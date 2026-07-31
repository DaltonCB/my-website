import Navbar from "../../components/Navbar";
import CursorGlow from "../../components/CursorGlow";
import ParticleCanvas from "../../components/ParticleCanvas";
import Hero from "../../components/Hero";
import About from "../../components/About";
import WorkExperience from "../../components/WorkExperience";
import Education from "../../components/Education";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-space-void">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-void via-nebula/15 to-space-void" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(circle at 15% 10%, rgba(56, 189, 248, 0.15), transparent 45%), radial-gradient(circle at 85% 80%, rgba(129, 140, 248, 0.15), transparent 45%)",
        }}
      />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(148 163 184) 1px, transparent 0)'
        }}></div>
      </div>
      
      <CursorGlow />
      <ParticleCanvas />
      
      <Navbar />
      
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
        
        <div className="flex flex-col items-center justify-center">
          <Education />
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <Projects />
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <Skills />
        </div>
        
        <div className="flex flex-col items-center justify-center pb-24">
          <Contact />
        </div>
      </div>
    </main>
  );
}
