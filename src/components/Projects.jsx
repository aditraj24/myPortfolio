

import { useState, useEffect, useRef } from "react";

function Project() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio showcasing my skills and projects with elegant animations.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      image: "portfolio.png",
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured online store with product catalog, cart, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "ecommerce-screenshot.jpg",
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Productivity application with drag-and-drop interface and real-time collaboration.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "taskapp-screenshot.jpg",
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather forecasting application with interactive maps and charts.",
      tags: ["JavaScript", "API Integration", "Chart.js"],
      image: "weather-screenshot.jpg",
      link: "#",
    },
    {
      title: "AI Image Generator",
      description:
        "Web application that generates custom images using machine learning models.",
      tags: ["Python", "TensorFlow", "Flask"],
      image: "ai-screenshot.jpg",
      link: "#",
    },
    {
      title: "Social Media Analytics",
      description:
        "Dashboard for tracking social media metrics and insights with beautiful charts.",
      tags: ["React", "D3.js", "Node.js"],
      image: "socialmedia-screenshot.jpg",
      link: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 md:px-12 bg-[#0a0a0a] text-white"
    >
      <div className="max-w-7xl mx-auto text-center relative">
        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-16"
          style={{
            fontFamily: "'Clash Display', sans-serif",
            background: "linear-gradient(to right, #FF5722, #FF7043, #FFAB91)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 14px rgba(255, 87, 34, 0.4)",
          }}
        >
          Crafted with Code
        </h1>

        <div className="flex flex-col justify-center items-center relative gap-4">
          <div
            className="w-full overflow-x-auto sm:overflow-hidden"
            ref={sliderRef}
          >
            <div
              className={`flex ${
                isMobile
                  ? "gap-4"
                  : "justify-center items-center gap-2 sm:gap-6"
              } px-2 sm:px-6`}
            >
              {!isMobile && (
                <Card
                  project={
                    projects[
                      (currentIndex - 1 + projects.length) % projects.length
                    ]
                  }
                  className="scale-90 -rotate-2 -translate-x-4 md:-translate-x-10 opacity-60 z-0 transition-all duration-700 ease-in-out hidden md:block"
                />
              )}
              <Card
                project={projects[currentIndex]}
                className="scale-100 z-10 transition-all duration-700 ease-in-out"
              />
              {!isMobile && (
                <Card
                  project={projects[(currentIndex + 1) % projects.length]}
                  className="scale-90 rotate-2 translate-x-4 md:translate-x-10 opacity-60 z-0 transition-all duration-700 ease-in-out hidden md:block"
                />
              )}
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={goToPrev}
              className="bg-black border border-[rgb(255,170,140)] text-white text-3xl px-5 py-2 rounded-full hover:bg-[#FF7043] shadow-lg hover:shadow-orange-500/50 transition transform hover:scale-110 active:scale-95"
              style={{
                boxShadow:
                  "inset 0 -4px 8px rgba(255, 87, 34, 0.3), 0 6px 15px rgba(255, 87, 34, 0.4)",
              }}
            >
              {"<"}
            </button>
            <button
              onClick={goToNext}
              className="bg-black border border-[rgb(255,170,140)] text-white text-3xl px-5 py-2 rounded-full hover:bg-[#FF7043] shadow-lg hover:shadow-orange-500/50 transition transform hover:scale-110 active:scale-95"
              style={{
                boxShadow:
                  "inset 0 -4px 8px rgba(255, 87, 34, 0.3), 0 6px 15px rgba(255, 87, 34, 0.4)",
              }}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ project, className = "" }) {
  return (
    <div
      className={`transition-all duration-700 ease-in-out bg-[#101010]/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl w-[90%] sm:w-72 md:w-80 mx-auto sm:mx-0 ${className}`}
    >
      <div className="h-40 sm:h-48 md:h-56 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80"></div>
      </div>
      <div className="p-3 sm:p-4 text-left">
        <h3
          className="text-base sm:text-lg font-semibold mb-1 text-white"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          {project.title}
        </h3>
        <p className="text-gray-300 mb-3 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-orange-900/40 text-orange-300 rounded-full border border-orange-500/40 font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="inline-flex items-center text-sm font-medium text-white hover:text-orange-400 transition"
        >
          View Project
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Project;
