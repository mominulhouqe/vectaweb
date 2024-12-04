"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  // Scroll detection for background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown toggle function
  const toggleDropdown = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

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
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <Image src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
            <span className="hidden sm:block text-lg font-semibold text-gray-700">
              Crafting Your Success Story Online
            </span>
          </div>
        </Link>

        {/* Large screen menu */}
        <ul className="hidden md:flex gap-5 items-center font-medium text-lg relative">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li
            className="relative flex items-center gap-1"
            onMouseEnter={() => toggleDropdown("projects")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <span className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
              Projects
            </span>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: dropdownOpen === "projects" ? 180 : 0 }}
              className="w-4 h-4 transition-transform"
            >
              <FaChevronDown />
            </motion.div>
            {dropdownOpen === "projects" && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 space-y-2 w-60 text-wrap"
              >
                <li>
                  <a
                    href="https://pro-career-phi.vercel.app/"
                    className="hover:text-blue-600"
                    target="_blank"
                  >
                    Job Portal
                  </a>
                </li>
                <li>
                  <a
                    href="https://techheim.netlify.app/"
                    target="_blank"
                    className="hover:text-blue-600"
                  >
                    eCommerce Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.alorferi.nfc_rw"
                    target="_blank"
                    className="hover:text-blue-600"
                  >
                    NFC Tag Tools
                  </a>
                </li>
                <li>
                  <a
                    href="https://restaurantmanagement-aac4e.web.app"
                    target="_blank"
                    className="hover:text-blue-600"
                  >
                    Restaurant Management Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.alorferi.smartintrocard"
                    target="_blank"
                    className="hover:text-blue-600"
                  >
                    NFC QR Tools
                  </a>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.provatsoft.apps.govtholidaysbd"
                    target="_blank"
                    className="hover:text-blue-600"
                  >
                    ChutiGo
                  </a>
                </li>
              </motion.ul>
            )}
          </li>

          <li
            className="relative flex items-center gap-1"
            onMouseEnter={() => toggleDropdown("services")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <span className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
              Services
            </span>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: dropdownOpen === "services" ? 180 : 0 }}
              className="w-4 h-4 transition-transform"
            >
              <FaChevronDown />
            </motion.div>
            {dropdownOpen === "services" && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 space-y-2 w-56"
              >
                <li>
                  <Link href="/" className="hover:text-blue-600">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-blue-600">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-blue-600">
                    App Development
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-blue-600">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-blue-600">
                    Digital Marketing
                  </Link>
                </li>
              </motion.ul>
            )}
          </li>
          {/* Add more menu items */}
        </ul>

        <motion.button
          whileHover={{ translateY: -5 }}
          className="bg-gradient-to-r from-teal-500 to-teal-600 text-white hidden md:block rounded-full font-medium py-2 px-6 shadow-lg"
        >
          <Link href="/contactus">Let`s Talk</Link>
        </motion.button>

        {/* Hamburger menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-gradient-to-r from-teal-500 to-teal-600 p-2 rounded-full cursor-pointer block md:hidden shadow-lg"
        >
          <svg
            className="w-5 h-5 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32-14.3 32 32z" />
          </svg>
        </button>
      </motion.div>

      {/* Sidebar for small devices */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-40"
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-6 text-lg">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/project"
              className="hover:text-blue-600 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-600 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          {/* Add more menu items */}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;

/* 

 <ul className="hidden md:flex gap-5 items-center font-medium text-lg relative">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li
            className="relative flex items-center gap-1"
            onMouseEnter={() => toggleDropdown("projects")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <span className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
              Projects
            </span>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: dropdownOpen === "projects" ? 180 : 0 }}
              className="w-4 h-4 transition-transform"
            >
              <FaChevronDown />
            </motion.div>
            {dropdownOpen === "projects" && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 space-y-2 w-52 text-wrap"
              >
                <li>
                  <a
                    href="https://pro-career-phi.vercel.app/"
                    className="hover:text-blue-600"
                    target="_blank"
                  >
                    Job Portal
                  </a>
                </li>
                <li>
                  <a
                    href="https://techheim.netlify.app/"
                    target="_blank"
                    className="hover:text-blue-600"
                  >
                    eCommerce Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.alorferi.nfc_rw"
                    target="_blank"
                    className="hover:text-blue-600"
                  >
                    NFC Tag Tools
                  </a>
                </li>
                <li>
                  <a
                    href="https://restaurantmanagement-aac4e.web.app"
                    target="_blank"
                    className="hover:text-blue-600"
                  >
                    Restaurant Management Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.alorferi.smartintrocard"
                    target="_blank"
                    className="hover:text-blue-600"
                  >
                    NFC QR Tools
                  </a>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.provatsoft.apps.govtholidaysbd"
                    target="_blank"
                    className="hover:text-blue-600"
                  >
                    ChutiGo
                  </a>
                </li>
              </motion.ul>
            )}
          </li>
          <li
            className="relative flex items-center gap-1"
            onMouseEnter={() => toggleDropdown("services")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <span className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
              Services
            </span>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: dropdownOpen === "services" ? 180 : 0 }}
              className="w-4 h-4 transition-transform"
            >
              <FaChevronDown />
            </motion.div>
            {dropdownOpen === "services" && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 space-y-2 w-48"
              >
                <li>
                  <Link href="/web-dev" className="hover:text-blue-600">
                    Web Development
                  </Link>
                </li>
              
                </motion.ul>
              )}
            </li>
          </ul>

*/
