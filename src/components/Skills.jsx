import { useState } from "react";

function Skills() {
  const skillsData = [
    {
      category: "Programming Languages",
      items: [
        { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
      ],
    },
    {
      category: "Operating Systems",
      items: [
        { name: "Windows", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
      ],
    },
  ];

  const [activeTile, setActiveTile] = useState(null);

  const handleTileClick = (categoryIndex, skillIndex) => {
    const id = `${categoryIndex}-${skillIndex}`;
    setActiveTile((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-8 bg-[#0a0a0a] text-white min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center"
          style={{
            fontFamily: "'Clash Display', sans-serif",
            background: "linear-gradient(to right, #ff5722, #ff7043, #ffab91)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 12px rgba(255, 87, 34, 0.4)",
          }}
        >
          My Tech Stack
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillsData.map((skillCategory, categoryIndex) => (
            <div
              key={categoryIndex}
              tabIndex={0} // make focusable for keyboard users
              className="bg-[#101010]/70 backdrop-blur-sm rounded-xl p-8 border border-white/10 flex flex-col items-center min-h-[320px]
                transition-transform duration-300 ease-out
                hover:scale-105 hover:rotateX-3 hover:rotateY-3
                focus-visible:scale-105 focus-visible:rotateX-3 focus-visible:rotateY-3
                will-change-transform
              "
              style={{ perspective: "1000px" }}
            >
              <h2
                className="text-xl font-semibold mb-8 text-orange-300"
                style={{ fontFamily: "'Satoshi', sans-serif" }}
              >
                {skillCategory.category}
              </h2>
              <div className="flex flex-wrap justify-center gap-8">
                {skillCategory.items.map((skill, skillIndex) => {
                  const id = `${categoryIndex}-${skillIndex}`;
                  const isActive = activeTile === id;

                  return (
                    <div
                      key={skillIndex}
                      tabIndex={0}
                      onClick={() => handleTileClick(categoryIndex, skillIndex)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleTileClick(categoryIndex, skillIndex);
                        }
                      }}
                      className={`w-16 h-16 flex items-center justify-center rounded-lg bg-[#0a0a0a] border border-white/10 transition-colors duration-300 shadow-sm
                        ${
                          isActive
                            ? "border-orange-400/70"
                            : "hover:border-orange-400/70 focus-visible:border-orange-400/70"
                        }
                      `}
                      title={skill.name}
                      role="button"
                      aria-pressed={isActive}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="max-w-12 max-h-12 object-contain"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
