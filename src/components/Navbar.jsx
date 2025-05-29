"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent browser's scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Scroll to top on initial load
    window.scrollTo(0, 0);

    const handleBeforeUnload = () => {
      // Scroll to top before page unloads
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Add a slight delay to ensure smooth scroll works properly
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
    setMobileMenuOpen(false);
  };
  return (
    <>
      <nav
        className={`fixed w-full px-6 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/40 backdrop-blur-sm" : "bg-transparent"
        }`}
        style={{ height: "79.6px" }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="logo-rgb px-4 py-2 relative group"
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontWeight: 600,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-xl sm:text-2xl text-white tracking-tight">
              ADITYA
            </span>
            <span className="absolute inset-0 rounded-xl overflow-hidden">
              <span className="absolute inset-0 border border-transparent rounded-xl p-[1px]">
                <span className="absolute inset-0 bg-[conic-gradient(from_var(--shimmer-angle),#0a0a0a_0%,#ff5722_20%,#ff7043_40%,#ffab91_60%,#ff7043_80%,#ff5722_100%)] animate-[shimmer_4s_linear_infinite] opacity-80"></span>
                <span className="absolute inset-[1px] rounded-[calc(1rem-1px)] bg-[#101010]"></span>
              </span>
            </span>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center h-full">
            <NavLink onClick={() => scrollToSection("home")}>Home</NavLink>
            <NavLink onClick={() => scrollToSection("about")}>About</NavLink>
            <NavLink onClick={() => scrollToSection("skills")}>Skills</NavLink>
            <NavLink onClick={() => scrollToSection("projects")}>
              Projects
            </NavLink>
            <NavLink onClick={() => scrollToSection("contact")}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0a0a0a] z-40 pt-24 px-6 transition-all duration-300 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        initial={{ x: "100%" }}
        animate={{ x: mobileMenuOpen ? 0 : "100%" }}
        transition={{ type: "tween", ease: "easeInOut" }}
      >
        <div className="flex flex-col gap-8">
          <MobileNavLink onClick={() => scrollToSection("home")}>
            Home
          </MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection("about")}>
            About
          </MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection("skills")}>
            Skills
          </MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection("projects")}>
            Projects
          </MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection("contact")}>
            Contact
          </MobileNavLink>
        </div>
      </motion.div>
    </>
  );
};

const NavLink = ({ children, onClick }) => (
  <motion.div
    className="relative group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <button
      onClick={onClick}
      className="relative text-sm lg:text-base"
      style={{
        fontFamily: "'Satoshi', sans-serif",
        fontWeight: 500,
      }}
    >
      <span className="relative z-10 flex items-center h-full px-2 py-2 text-white/90 hover:text-white transition-colors">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
      <span className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-orange-400/5 to-orange-500/5 opacity-0 group-hover:opacity-100 rounded transition-opacity duration-300"></span>
    </button>
  </motion.div>
);

const MobileNavLink = ({ children, onClick }) => (
  <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
    <button
      onClick={onClick}
      className="text-white text-2xl font-medium py-3 border-b border-white/10 w-full text-left"
      style={{
        fontFamily: "'Satoshi', sans-serif",
      }}
    >
      {children}
    </button>
  </motion.div>
);

export default Navbar;
