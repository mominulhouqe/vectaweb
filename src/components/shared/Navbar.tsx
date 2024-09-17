"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png"
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll detection for background effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 max-w-7xl w-full mx-auto z-20">
      {/* For large devices */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`absolute w-full transition-all duration-300 ease-in-out flex justify-between items-center px-8 py-4 ${
          scrolled ? "backdrop-blur-sm bg-white/85 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex items-center">
          <div className="flex items-center gap-1 -space-y-1 cursor-pointer">
            <Image
              src={logo}
              alt="Logo"
              className="w-14 h-14 rounded-full mb-1 shadow-lg"
            />
            <span className="text-sm font-semibold">
              Crafting Your Success Story Online
            </span>
          </div>
        </div>

        {/* Large screen menu */}
        <ul className="hidden md:flex gap-5 items-center font-medium text-lg">
          <li>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#service"
              className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <motion.button
          whileHover={{ translateY: -5 }}
          className="bg-gradient-to-r from-rose-400 to-pink-500 text-white hidden md:block rounded-full font-medium py-2 px-6 shadow-lg"
        >
          <a href="#contact">Let's Talk</a>
        </motion.button>

        {/* For small devices (hamburger menu trigger) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="bg-gradient-to-r from-rose-400 to-pink-500 p-2 rounded-full cursor-pointer block md:hidden shadow-lg"
        >
          <svg
            className="w-5 h-5 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-30"
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-black"
          >
            X
          </button>
          <ul className="flex flex-col items-start p-6 space-y-4 text-lg">
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
