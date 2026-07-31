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
    <header className="fixed top-0 left-0 right-0 z-50 bg-space-void/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-10 h-10 rounded-full bg-nebula-light flex items-center justify-center shadow-md">
            <span className="text-accent-1 font-bold text-base tracking-tight">
              DB
            </span>
          </div>
        </a>

        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="relative px-3 sm:px-4 py-2 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors duration-200 whitespace-nowrap hover:[text-shadow:0_0_8px_rgba(56,189,248,0.7)] after:content-[''] after:absolute after:left-3 after:right-3 after:bottom-1 after:h-px after:bg-accent-1 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
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
