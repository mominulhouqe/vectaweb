"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 w-full z-30">
      <motion.div
        initial={{ opacity: 0.2, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className={`w-full flex justify-between items-center px-6 md:px-12 py-4 transition-all duration-300 ease-in-out bg-white/85 ${
          scrolled ? "bg-white/90 shadow-lg backdrop-blur-md" : "bg-transparent"
        }`}
      >
        {/* Logo Section */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <Image src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
            <span className="hidden sm:block text-lg font-semibold text-gray-700">
              Crafting Your Success Story Online
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
          {["Home", "Projects", "Services", "About Us", "Contact Us"].map(
            (item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Call to Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="hidden md:block bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl"
        >
          <Link href="#contact">Let’s Talk</Link>
        </motion.button>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setMenuOpen(true)}
          className="block md:hidden btn text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="white"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-40"
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-700"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col items-start p-6 space-y-6 text-lg text-gray-700">
            {["Home", "Projects", "Services", "About Us", "Contact Us"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="hover:text-blue-600 transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
