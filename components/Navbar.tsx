"use client";

const navLinks = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center shadow-md">
            <span className="text-sky-400 font-bold text-base tracking-tight">
              DB
            </span>
          </div>
        </a>

        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="px-3 sm:px-4 py-2 rounded-lg text-sm font-medium text-blue-300 bg-blue-400/10 border border-blue-400/20 hover:bg-blue-400/20 hover:border-blue-400/40 hover:text-blue-200 transition-all duration-200 whitespace-nowrap"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
