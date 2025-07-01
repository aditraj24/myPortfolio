

import { useState, useRef } from "react";

function TiltImage({ src, alt }) {
  const [style, setStyle] = useState({});
  const touchActive = useRef(false);

  const handleMouseMove = (e) => {
    if (touchActive.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setStyle({
      transform: `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      transition: "transform 0.1s",
    });
  };

  const handleMouseLeave = () => {
    if (touchActive.current) return;

    setStyle({
      transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.3s ease",
    });
  };

  const handleTouchStart = () => {
    touchActive.current = true;
    setStyle({
      transform: `perspective(600px) rotateX(5deg) rotateY(5deg) scale(1.05)`,
      transition: "transform 0.2s ease",
    });
  };

  const handleTouchEnd = () => {
    touchActive.current = false;
    setStyle({
      transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.3s ease",
    });
  };

  return (
    <div
      className="relative rounded-xl overflow-hidden border-2 border-transparent p-[2px] bg-gradient-to-br from-[#ff5722] to-[#ffab91] h-48 sm:h-56 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      style={style}
    >
      <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#101010] shadow-lg">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-8 text-white"
      style={{
        background: "linear-gradient(to bottom, #000000, #0a0a0a)",
      }}
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
          style={{
            
            background: "linear-gradient(to right, #ff5722, #ff7043, #ffab91)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 12px rgba(255, 87, 34, 0.4)",
            fontFamily: "'Fondamento', cursive",
          }}
        >
          About Me
        </h1>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="lg:w-1/2">
          <div
            className="text-lg sm:text-xl text-gray-300 leading-relaxed"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            <p className="mb-6">
              I'm a Computer Science and Engineering undergrad at NIT Jamshedpur,
              passionate about building impactful tech through collaboration,
              innovation, and problem-solving. I actively contribute to open-source
              projects and love working with teams to tackle real-world challenges.
            </p>

            <p className="mb-6">
              In competitive programming, I'm a{" "}
              <span className="text-orange-300 font-medium">Pupil</span> on
              Codeforces (1200+ rating) with 50+ problems solved—an experience
              that's sharpened my algorithmic and logical thinking.
            </p>

            <p>
              When I'm not coding, you'll probably find me on the volleyball
              court—my favorite way to reset and recharge.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { src: "adidp.jpg", alt: "Aditya Profile" },
              { src: "nitpyramid.jpeg", alt: "NIT JSR" },
              { src: "adidp3.jpg", alt: "DJLHC" },
              { src: "adidp4.jpg", alt: "Aditya Coding" },
            ].map(({ src, alt }, i) => (
              <TiltImage key={i} src={src} alt={alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
