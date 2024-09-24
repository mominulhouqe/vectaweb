import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Framer Motion for smooth animations

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<HTMLDivElement>(null);
  const totalSlides = 3;

  useEffect(() => {
    const autoChange = setInterval(() => {
      nextSlide();
    }, 5000); // Adjust interval for desired autoplay speed

    return () => clearInterval(autoChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    updateCarousel();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    updateCarousel();
  };

  const updateCarousel = () => {
    const xValue = -100 * currentIndex;
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(${xValue}%)`;
    }
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto h-[calc(100vh-20vh)] overflow-hidden">
      {/* Navigation (Optional) */}
      <div className="absolute bottom-2 left-0 flex items-center justify-between w-full px-4 py-2 z-20 md:hidden">
        <button
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-200 focus:outline-none"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 <-1l-6 6l6 6v-12zm-4 0v12l6 -6l-6-6z"
            />
          </svg>
        </button>
        <div className="text-white text-center font-bold">
          {currentIndex + 1} / {totalSlides}
        </div>
        <button
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-200 focus:outline-none"
          onClick={nextSlide}
          disabled={currentIndex === totalSlides - 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l6 6-6 6v-12zm4 0v12l6 -6-6-6z"
            />
          </svg>
        </button>
      </div>

      <div className="w-full overflow-hidden">
        <motion.div
          ref={slidesRef}
          className="flex transition-transform duration-1000 ease-in-out"
        >
          {/* Slide 1 */}
          <motion.div
            className="w-full h-screen flex-shrink-0 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // Adjust transition duration for smooth sliding
          >
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-full md:max-w-2xl p-6 rounded-lg text-center md:text-left font-light z-10">
              <h2 className="text-4xl md:text-7xl font-semibold mb-4">
                Elevate Your Digital Presence
              </h2>
              <p className="text-lg md:text-xl mb-6">
                Transform your ideas into stunning digital experiences with our
                cutting-edge web solutions.
              </p>
              <a
                href="#services"
                className="inline-block px-4 py-2 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-lg shadow-lg transition duration-300"
              >
                Discover More
              </a>
            </div>
          </motion.div>

          {/* Slide 2 */}
          <motion.div
            className="w-full h-screen flex-shrink-0 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // Adjust transition duration for smooth sliding
          >
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-full md:max-w-2xl p-6 rounded-lg text-center md:text-left font-light z-10">
              <h2 className="text-4xl md:text-5xl font-semibold mb-4 underline  underline-offset-4 ">
                Empower Your Business
              </h2>
              <p className="text-lg md:text-xl mb-6">
                Discover innovative solutions and strategies tailored to your
                business needs for unparalleled growth.
              </p>
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Slide 3 */}
          <motion.div
            className="w-full h-screen flex-shrink-0 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // Adjust transition duration for smooth sliding
          >
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-full md:max-w-2xl p-6 rounded-lg text-center md:text-left font-light z-10">
              <h2 className="text-4xl md:text-5xl font-semibold mb-4 underline  underline-offset-4 ">
                Unleash Creativity
              </h2>
              <p className="text-lg md:text-xl mb-6">
                Explore creative solutions that push the boundaries and bring
                your vision to life.
              </p>
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-pink-400 text-white rounded-lg shadow-lg hover:bg-pink-500 transition duration-300"
              >
                Explore More
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
