"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import LoadingCard from "./LoadingCard";

type CaseStudy = {
  title: string;
  description: string;
  challenges: string;
  solutions: string;
  imgSrc: string;
  demoLink: string;
};

const PortfolioCaseStudy = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Fetch case studies
  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const res = await fetch(
          "https://vectaweb-backend.vercel.app/api/case-studies"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch case studies");
        }
        const data = await res.json();
        setCaseStudies(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  // GSAP animations for cards and clip-path
  useEffect(() => {
    if (!loading && caseStudies.length > 0) {
      const validRefs = cardRefs.current.filter(
        (el): el is HTMLDivElement => el !== null
      );

      // Animate cards on load
      gsap.from(validRefs, {
        opacity: 1,
        y: 5,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });

      // Animate clip-path for the background on hover
      validRefs.forEach((ref) => {
        gsap.set(ref.querySelector(".background-clip"), {
          clipPath: "circle(0% at 50% 50%)",
        });

        ref.addEventListener("mouseenter", () => {
          gsap.to(ref.querySelector(".background-clip"), {
            clipPath: "circle(75% at 50% 50%)",
            duration: 1,
            ease: "power3.inOut",
          });
        });

        ref.addEventListener("mouseleave", () => {
          gsap.to(ref.querySelector(".background-clip"), {
            clipPath: "circle(0% at 50% 50%)",
            duration: 1,
            ease: "power3.inOut",
          });
        });
      });
    }
  }, [loading, caseStudies]);

  if (loading) {
    return (
      <div className="text-center py-20 max-w-7xl mx-auto  grid grid=cols-1 md:grid-cols-3 gap-4">
        <LoadingCard />
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  }

  return (
    <section id="project" className="py-20 bg-gray-50 px-4 ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-teal-600">Case Studies</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Explore some of the innovative projects we've completed, addressing
          complex challenges with cutting-edge solutions.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)} // Store refs for GSAP
              className="relative p-6 bg-white rounded-lg shadow-lg cursor-pointer transition-transform"
              onClick={() => setSelectedStudy(study)}
            >
              {/* Background Layer for Clip-path animation */}
              <div className="background-clip absolute inset-0 bg-teal-500 opacity-30 rounded-lg z-0"></div>

              {/* Image and Content */}
              <div className="relative z-10">
                <Image
                  src={study.imgSrc}
                  alt={study.title}
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {study.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {study.description.slice(0, 100)}...
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Case Study Details */}
      {selectedStudy && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedStudy(null)}
        >
          <motion.div
            className="bg-white p-6 rounded-lg max-w-lg w-full relative"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedStudy(null)}
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedStudy.title}
            </h3>
            <Image
              src={selectedStudy.imgSrc}
              alt={selectedStudy.title}
              width={400}
              height={300}
              className="h-48 w-full object-cover rounded-lg mb-4"
            />
            <p className="mb-4">
              <strong className="font-semibold">Challenges:</strong>{" "}
              {selectedStudy.challenges}
            </p>
            <p className="mb-4">
              <strong className="font-semibold">Solutions:</strong>{" "}
              {selectedStudy.solutions}
            </p>
            <a
              href={selectedStudy.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
            >
              View Live Demo
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default PortfolioCaseStudy;
