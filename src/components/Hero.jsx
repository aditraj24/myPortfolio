import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
          style={{
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
          }}
        >
          <source src="/bgB.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative h-full flex flex-col justify-center items-center text-white px-4 text-center bg-black/30">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          <span
            style={{
              background:
                "linear-gradient(to right, #ff5722, #ff7043, #ffab91)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "0 0 8px rgba(255, 87, 34, 0.5)",
              fontFamily: "'Fondamento', cursive",
            }}
          >
            Hey there, I'm Aditya..
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 bg-gradient-to-r from-[#cccccc] via-[#ffffff] to-[#cccccc] bg-clip-text text-transparent">
          Welcome to my corner of the internet.
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mb-6 sm:mb-8">
          I'm a developer from India who builds bridges between imagination and
          reality. Most days it's beautiful chaos, but when that perfect
          solution emerges? That's when code feels like magic.
        </p>

        <motion.a
          href="/Aditya_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="resume-rgb px-4 py-2 relative group"
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontWeight: 600,
          }}
        >
          <span className="relative z-10 text-xl sm:text-2xl text-white tracking-tight">
            My Resume
          </span>
          <span className="absolute inset-0 rounded-xl overflow-hidden">
            <span className="absolute inset-0 border border-transparent rounded-xl p-[1px]">
              <span className="absolute inset-0 bg-[conic-gradient(from_var(--shimmer-angle),#0a0a0a_0%,#ff5722_20%,#ff7043_40%,#ffab91_60%,#ff7043_80%,#ff5722_100%)] animate-[shimmer_4s_linear_infinite] opacity-80"></span>
              <span className="absolute inset-[1px] rounded-[calc(1rem-1px)] bg-[#101010]"></span>
            </span>
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
