import { useEffect } from "react";
import gsap from "gsap";

const MouseFollowAnimation = () => {
  useEffect(() => {
    const circle = document.querySelector(".circle");

    const moveCircle = (e :any) => {
      gsap.to(circle, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCircle);

    return () => {
      window.removeEventListener("mousemove", moveCircle);
    };
  }, []);

  return (
    <div className=" relative">
      <div className="circle w-6 h-6 bg-purple-500 rounded-full fixed top-0 left-0"></div>
    </div>
  );
};

export default MouseFollowAnimation;
