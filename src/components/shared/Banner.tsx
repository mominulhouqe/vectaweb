import { useState, useEffect, useRef } from "react";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<HTMLDivElement>(null);
  const totalSlides = 3;

  useEffect(() => {
    const autoChange = setInterval(() => {
      nextSlide();
    }, 5000);

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
    <section className="relative w-full max-w-7xl mx-auto overflow-hidden h-[calc(100vh-20vh)] text-white">
      <div className="w-full overflow-hidden">
        <div
          ref={slidesRef}
          className="flex transition-transform duration-1000"
        >
          {/* Slide 1 */}
          <div className="w-full h-screen flex-shrink-0 relative ">
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
                className="inline-block px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-lg shadow-lg transition duration-300"
              >
                Discover More
              </a>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="w-full h-screen flex-shrink-0 relative ">
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-full md:max-w-2xl p-6 rounded-lg text-center md:text-left font-light z-10">
              <h2 className="text-4xl md:text-5xl font-semibold mb-4 underline  underline-offset-4 ">
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
          </div>

          {/* Slide 3 */}
          <div className="w-full h-screen flex-shrink-0 relative">
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-full md:max-w-2xl p-6 rounded-lg text-center md:text-left font-light z-10">
              <h2 className="text-4xl md:text-5xl font-semibold mb-4 underline  underline-offset-4 ">
                Unleash Creativity
              </h2>
              <p className="text-lg md:text-xl mb-6">
                Explore creative solutions that push the boundaries and bring
                your vision to life.
              </p>
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
