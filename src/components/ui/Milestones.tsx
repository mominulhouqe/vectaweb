"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const milestones = [
  {
    title: "2 Years of Excellence",
    description: "Delivering top-notch services for over a decade.",
  },
  {
    title: "50+ Projects Completed",
    description: "Successfully completed a wide range of projects.",
  },
  {
    title: "Global Reach",
    description: "Servicing clients from over 10 countries worldwide.",
  },
  {
    title: "10+ Team Members",
    description: "A growing team of experts across various domains.",
  },
];

const Milestones = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the section is in view
  });

  useEffect(() => {
    console.log("InView:", inView); // Debugging
  }, [inView]);

  return (
    <section
      ref={ref}
      id="milestones"
      className="py-16 sm:py-20 bg-gray-900 text-white overflow-hidden relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-teal-400">
          Milestones We have Achieved
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-3xl mx-auto">
          Our journey so far has been nothing short of remarkable. Here is a
          look at some of the key milestones we have achieved over the years.
        </p>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="relative p-4 sm:p-6 rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 text-center overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 30px rgba(0, 255, 255, 0.2)",
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              style={{
                clipPath: "polygon(15% 0%, 100% 0, 85% 100%, 0% 100%)", // Custom clip-path
              }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                {milestone.title}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base">
                {milestone.description}
              </p>
              <div className="absolute inset-0 bg-white opacity-20 transform scale-150 rotate-45 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }}
        style={{
          clipPath: "polygon(0% 0%, 100% 10%, 85% 100%, 0% 90%)", // Moving animated background
        }}
      />
    </section>
  );
};

export default Milestones;
