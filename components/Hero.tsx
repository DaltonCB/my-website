"use client";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 py-16">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 bg-clip-text text-transparent drop-shadow-lg">
        Hello, I'm Dalton Babbs.
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl max-w-2xl text-gray-200 mb-8">
        I'm a full-stack developer passionate about building clean, responsive, and modern web applications. Scroll down to see my projects and learn more about what I do.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#about"
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 text-white font-bold shadow-lg hover:scale-105 hover:from-indigo-600 hover:to-sky-600 transition-all duration-200 border-2 border-transparent scroll-smooth"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          About Me
        </a>
        <a
          href="#experience"
          className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-bold shadow-lg hover:bg-white/20 transition-all duration-200 border-2 border-white/30"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Experience
        </a>
        <a
          href="#projects"
          className="inline-block px-6 py-3 rounded-full bg-white text-indigo-500 font-bold shadow-lg hover:bg-indigo-50 hover:text-purple-600 transition-all duration-200 border-2 border-indigo-400"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Projects
        </a>
      </div>
    </section>
  );
}
