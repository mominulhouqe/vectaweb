"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setSubscribed(true);
  };

  return (
    <section id="newsletter" className="py-16 sm:py-20 bg-gray-100 w-full mx-auto px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
        Subscribe to Our Newsletter
      </h2>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg relative">
        <form onSubmit={handleSubscribe}>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <label className="block text-base sm:text-lg font-semibold mb-2 text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </motion.div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Subscribe
          </button>
          {subscribed && (
            <motion.div
              className="mt-4 text-center text-green-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p>Thank you for subscribing to our newsletter!</p>
            </motion.div>
          )}
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
