"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import LoadingCard from "./LoadingCard";

type CaseStudy = {
  id: string;
  title: string;
  description: string;
  challenges: string;
  solutions: string;
  imgSrc: string;
  demoLink: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const PortfolioCaseStudy = () => {
  const { data, error, isValidating } = useSWR<CaseStudy[]>(
    "https://vectaweb-backend.vercel.app/api/case-studies",
    fetcher,
    { revalidateOnFocus: false }
  );

  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const cardsContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  if (isValidating) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <LoadingCard key={index} />
          ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        Error loading case studies: {error.message}
      </div>
    );
  }

  return (
    <section id="project" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-teal-600">
          Our Projects: Case Studies
        </h2>
        <p className="text-lg font-light max-w-2xl mx-auto">
          Explore the projects we have accomplished, overcoming challenges with
          innovative solutions.
        </p>
      </div>

      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={cardsContainerVariant}
        initial="hidden"
        animate="visible"
      >
        {data?.map((study) => (
          <motion.div
            key={study.id}
            variants={cardVariant}
            className="relative p-6 bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedStudy(study)}
          >
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
          </motion.div>
        ))}
      </motion.div>

      {selectedStudy && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center px-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
              <strong>Challenges:</strong> {selectedStudy.challenges}
            </p>
            <p className="mb-4">
              <strong>Solutions:</strong> {selectedStudy.solutions}
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
