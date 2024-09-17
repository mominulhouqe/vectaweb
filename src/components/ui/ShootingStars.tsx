// components/ui/ShootingStars.tsx
import { motion } from 'framer-motion';
import React from 'react';

const ShootingStars = () => {
  // Create an array of shooting stars with random properties
  const stars = Array.from({ length: 100 }).map(() => ({
    size: Math.random() * 5 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 330,
    duration: Math.random() * 3 + 2,  // Adjust duration here
  }));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: '#809bce',
            borderRadius: '50%',
            top: `${star.y}100%`,
            left: `${star.x}vw`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.7)`,
          }}
          animate={{
            x: ['0%', '100vw'],
            y: ['0%', '100vh'],
            opacity: [1, 0],
          }}
          transition={{
            duration: star.duration,  // Use the random duration
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
