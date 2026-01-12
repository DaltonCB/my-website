"use client";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 py-16">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white tracking-tight">
        Hello, I'm <span className="text-cyan-400">Dalton Babbs</span>.
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl max-w-2xl text-slate-300 mb-8 leading-relaxed">
        Computer Science student at Purdue University with hands-on experience as a Software Development Co-op at UPS, building applications for 30,000+ drivers nationwide. Passionate about creating impactful software solutions.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="#about"
          className="inline-block px-6 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold hover:border-cyan-300 hover:text-cyan-300 transition-all duration-200"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          About Me
        </a>
        <a
          href="#experience"
          className="inline-block px-6 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold hover:border-cyan-300 hover:text-cyan-300 transition-all duration-200"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Experience
        </a>
        <a
          href="#projects"
          className="inline-block px-6 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold hover:border-cyan-300 hover:text-cyan-300 transition-all duration-200"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="inline-block px-6 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold hover:border-cyan-300 hover:text-cyan-300 transition-all duration-200"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Contact
        </a>
      </div>
    </section>
  );
}
