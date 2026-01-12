export default function ContactPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-sky-900 animate-gradient">
      {/* Top Navigation Bar */}
      <nav className="absolute top-0 w-full flex justify-between items-center px-8 py-6 z-20">
        <div className="flex gap-8">
          <a href="/" className="text-lg font-semibold text-white hover:text-indigo-300 transition">Home</a>
        </div>
        <div className="flex gap-8">
          <a href="/contact" className="text-lg font-semibold text-white hover:text-indigo-300 transition">Contact</a>
        </div>
      </nav>

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

      {/* Contact Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {/* Email Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">Email</h3>
            <a 
              href="mailto:daltoncbabbs@yahoo.com" 
              className="text-gray-300 hover:text-white transition-colors break-all"
            >
              daltoncbabbs@yahoo.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-sky-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">Phone</h3>
            <a 
              href="tel:502-665-1475" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              (502) 665-1475
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/dalton-babbs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              dalton-babbs
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}