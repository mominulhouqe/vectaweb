// components/ui/AnimatedGradient.tsx
import { motion } from 'framer-motion';
import React from 'react';

const AnimatedGradient = () => {
  return (
    <motion.div
      className="absolute inset-0 -z-0"
      style={{
        background: 'linear-gradient(270deg, #809bce, #95b8d1 , #d6eadf)',
        backgroundSize: '400% 400%',
      }}
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%'],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      }}
    />
  );
};

export default AnimatedGradient;
