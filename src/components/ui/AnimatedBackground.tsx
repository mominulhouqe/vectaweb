import { useEffect, useRef } from "react";
import gsap from "gsap";
import Banner from "../shared/Banner";

const AnimatedBackground = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const element = backgroundRef.current;

    // GSAP animation for background elements
    gsap.to(element, {
      backgroundPosition: "200% 100%",
      duration: 6,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Adding another layer of animation like floating bubbles or particles
    const floatingShape = gsap.to(".floating-shape", {
      y: "-30px",
      x: "20px",
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "power1.inOut",
    });

    return () => {
      // Clean up animation
      floatingShape.kill();
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="relative w-full h-screen bg-gradient-to-r from-blue-400 to-purple-600 overflow-hidden"
      style={{ backgroundSize: "300% 300%" }}
    >
      <div className="absolute floating-shape w-32 h-32 rounded-full bg-white opacity-20 top-10 left-10"></div>
      <div className="absolute floating-shape w-48 h-48 rounded-full bg-pink-300 opacity-30 bottom-20 right-20"></div>

      <div className="text-center text-white text-4xl font-bold">
        <Banner />
      </div>
    </div>
  );
};

export default AnimatedBackground;
