"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-4 py-24">
      <div 
        ref={headerRef}
        className={`text-center mb-16 transition-all duration-700 ${
          headerVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
    </section>
  );
}