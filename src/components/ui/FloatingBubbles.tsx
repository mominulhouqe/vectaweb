// components/ui/FloatingBubbles.tsx
import { motion } from 'framer-motion';
import React from 'react';

const FloatingBubbles = () => {
  const colors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7C6C7', '#F5A623', '#4A90E2', '#50E3C2'];

  // Define possible clip-path shapes
  const shapes = [
    'circle(50%)',
    'ellipse(50% 50%)',
    'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Diamond
    'inset(0% 0% 50% 0% round 10%)', // Rounded Rectangle
  ];

  const bubbles = Array.from({ length: 100 }).map(() => ({
    size: Math.random() * 10 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random(),
    color: colors[Math.floor(Math.random() * colors.length)],
    shape: shapes[Math.floor(Math.random() * shapes.length)],
  }));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            top: `${bubble.y}100%`,
            left: `${bubble.x}vw`,
            backgroundColor: bubble.color,
            opacity: bubble.opacity,
            clipPath: bubble.shape,
          }}
          animate={{
            x: [0, Math.random() * 200, -Math.random() * 200],
            y: [0, Math.random() * 200, -Math.random() * 200],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
