"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Mobile Developer",
  "Software Development Co-op",
];

const ROTATE_INTERVAL_MS = 2500;

export default function RotatingRoles() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % ROLES.length);
        setIsVisible(true);
      }, 300);
      return () => clearTimeout(timeout);
    }, ROTATE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 sm:h-9 md:h-10 overflow-hidden mb-4">
      <p
        className={`text-xl sm:text-2xl md:text-3xl font-semibold text-sky-400 transition-all duration-300 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3"
        }`}
      >
        {ROLES[index]}
      </p>
    </div>
  );
}
