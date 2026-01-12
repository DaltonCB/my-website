import Image from "next/image";

export type AboutItem = {
  title: string;
  description: string;
  image?: string;
};

const aboutItems: AboutItem[] = [
  {
    title: "Full-Stack Developer",
    description: "I love building modern web applications using React, Next.js, and TypeScript.",
    image: "/file.svg",
  },
  {
    title: "Traveler",
    description: "Exploring new places and cultures inspires my creativity and problem-solving.",
    image: "/globe.svg",
  },
  // Add more items here
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-sky-900 animate-gradient pb-24">
      <nav className="absolute top-0 right-0 w-full flex justify-end items-center px-8 py-6 z-20">
        <div className="flex gap-8">
          <a href="/" className="text-lg font-semibold text-white hover:text-indigo-300 transition">Home</a>
          <a href="/about" className="text-lg font-semibold text-white hover:text-indigo-300 transition">About Me</a>
        </div>
      </nav>
      <div className="relative z-10 w-full max-w-3xl mx-auto pt-32">
        <h1 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">About Me</h1>
        <div className="flex flex-col gap-12">
          {aboutItems.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8">
              {item.image && (
                <Image src={item.image} alt={item.title} width={80} height={80} className="rounded-full mb-4 md:mb-0" />
              )}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-indigo-300 mb-2">{item.title}</h2>
                <p className="text-gray-200 text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
