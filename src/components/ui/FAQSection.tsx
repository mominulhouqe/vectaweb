"use client";
import { useState } from "react";

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

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gray-100 w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="mb-6">
            <button
              className="w-full text-left bg-gray-200 p-4 rounded-lg focus:outline-none flex justify-between items-center relative"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-base sm:text-lg font-semibold">
                {faq.question}
              </h3>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>

            <>
              {activeIndex === index && (
                <div
                  id={`faq-content-${faq.id}`}
                  className="bg-white p-4 rounded-lg shadow-lg mt-2"
                >
                  <p className="text-sm sm:text-base text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              )}
            </>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
