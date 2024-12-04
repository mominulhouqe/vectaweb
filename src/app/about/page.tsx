"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import image from "@/assets/background.png";
import FAQSection from "@/components/ui/FAQSection";
import OurTeam from "@/components/ui/OurTeam";

const AboutPage = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center py-20 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white"
      >
        <h1 className="text-5xl font-extrabold">About Vectaweb</h1>
        <p className="mt-6 text-lg max-w-4xl mx-auto">
          At Vectaweb, we envision a world where innovation meets purpose. Our
          team of creative thinkers and tech experts craft solutions that not
          only challenge the status quo but redefine it. Together, we empower
          businesses to dream bigger and achieve more.
        </p>
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 md:px-20"
      >
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold text-gray-800">Who We Are</h2>
          <p className="text-gray-600 text-lg">
            Vectaweb is more than just a company; we are a collective of
            visionaries, designers, and engineers dedicated to innovation. We
            partner with forward-thinking businesses to transform ideas into
            impactful digital experiences.
          </p>
        </div>
        <Image
          src={image}
          height={500}
          width={500}
          alt="Who We Are"
          className="rounded-lg shadow-2xl"
        />
      </motion.div>

      {/* Vision Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-gray-50 py-16 px-6 md:px-20"
      >
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            To inspire and empower every business with transformative
            technology, enabling them to achieve their greatest potential with
            ease, efficiency, and innovation.
          </p>
        </div>
      </motion.div>

      {/* Leadership Team Section */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-6 md:px-20"
      >
        <div className="text-center space-y-8 grid sm:grid-cols-2 items-center w-full">
          <h2 className="text-4xl font-semibold text-gray-800">
            Meet Our Leadership Team
          </h2>
          <p className="text-gray-600 text-lg text-justify max-w-2xl mx-auto">
            At the heart of Vectaweb is a team of leaders committed to fostering
            innovation, collaboration, and inclusivity. Together, we aim to
            shape the future with bold ideas and decisive action.
          </p>
        </div>
        <div className="mt-12">
          <OurTeam />
        </div>
      </motion.div>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default AboutPage;
