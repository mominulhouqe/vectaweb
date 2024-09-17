"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// FAQ Data with categories for VectaWeb
const faqs = [
  {
    id: 1,
    category: "Services",
    question: "What services does VectaWeb offer?",
    answer:
      "VectaWeb provides web development, mobile app development, UI/UX design, and custom software solutions.",
  },
  {
    id: 2,
    category: "Pricing",
    question: "How does VectaWeb determine project pricing?",
    answer:
      "Our pricing is based on project scope, timelines, and technology requirements. We offer customized quotes after a consultation.",
  },
  {
    id: 3,
    category: "Support",
    question: "What kind of post-project support does VectaWeb provide?",
    answer:
      "We provide maintenance, troubleshooting, and updates as part of our post-project support for all our clients.",
  },
  {
    id: 4,
    category: "Payments",
    question: "What payment methods does VectaWeb accept?",
    answer:
      "We accept payments via bank transfer, credit card, PayPal, and other methods depending on the project agreement.",
  },
  {
    id: 5,
    category: "Project Process",
    question: "How long does it take for VectaWeb to complete a project?",
    answer:
      "Project timelines vary depending on the complexity. On average, smaller projects take 4-6 weeks, while larger projects may take a few months.",
  },
];

// FAQ Categories
const categories = ["All", "Services", "Pricing", "Support", "Payments", "Project Process"];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter FAQs based on search query and category
  const filteredFaqs = faqs.filter(
    (faq) =>
      (activeCategory === "All" || faq.category === activeCategory) &&
      faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-100 w-full mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
        Frequently Asked Questions
      </h2>

      {/* Search Bar */}
      <div className="max-w-lg mx-auto mb-8">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg relative"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg relative ${
              activeCategory === category
                ? "bg-teal-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="max-w-2xl mx-auto">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div key={faq.id} className="mb-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full text-left bg-gray-200 p-4 rounded-lg focus:outline-none flex justify-between items-center relative"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base sm:text-lg font-semibold">{faq.question}</h3>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? "-" : "+"}
                </motion.span>
              </motion.button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white p-4 rounded-lg shadow-lg mt-2"
                  >
                    <p className="text-sm sm:text-base text-gray-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No FAQs found matching your query.</p>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
