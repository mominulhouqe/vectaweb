"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

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
    <nav className="sticky top-0 w-full z-30">
      <motion.div
        initial={{ opacity: 0.2, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className={`w-full flex justify-between items-center px-6 md:px-12 py-4 transition-all duration-300 ease-in-out bg-white/85 ${
          scrolled ? "bg-white/90 shadow-lg backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <Image src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
            <span className="hidden sm:block text-lg font-semibold text-gray-700">
              Crafting Your Success Story Online
            </span>
          </div>
        </Link>
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
          {/* <li>
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
          </li> */}
        </ul>

        <motion.button
          whileHover={{ translateY: -5 }}
          className="bg-gradient-to-r from-teal-500 to-teal-600 text-white hidden md:block rounded-full font-medium py-2 px-6 shadow-lg"
        >
          <a href="#contact">Let`s Talk</a>
        </motion.button>

        {/* For small devices (hamburger menu trigger) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="bg-gradient-to-r from-teal-500 to-teal-600 p-2 rounded-full cursor-pointer block md:hidden shadow-lg"
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
          ></button>
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
            {/*             
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
            </li> */}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

/* 


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
      
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <Image src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
            <span className="hidden sm:block text-lg font-semibold text-gray-700">
              Crafting Your Success Story Online
            </span>
          </div>
        </Link>

       
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

      
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="hidden md:block bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl"
        >
          <Link href="#contact">Let’s Talk</Link>
        </motion.button>

        
        <button
          onClick={() => setMenuOpen(true)}
          className="block md:hidden btn text-white"
        >
          <svg
            className="w-6 h-6 text-white "
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M3 6h18M3 12h18m-18 6h18" />
          </svg>
        </button>
      </motion.div>

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


*/
