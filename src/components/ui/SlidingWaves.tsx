// components/ui/SlidingWaves.tsx
import { motion } from 'framer-motion';

const SlidingWaves = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* First Wave Layer */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1/3"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 105, 180, 0.7), rgba(255, 215, 0, 0.5))',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
        }}
        animate={{ y: ['-50%', '100%'] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
      />
      
      {/* Second Wave Layer */}
      <motion.div
        className="absolute top-1/4 left-0 w-full h-1/3"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 191, 255, 0.6), rgba(0, 255, 255, 0.4))',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
        }}
        animate={{ y: ['0%', '-100%'] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
      />

      {/* Third Wave Layer */}
      <motion.div
        className="absolute top-2/3 left-0 w-full h-1/3"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 99, 71, 0.5), rgba(255, 69, 0, 0.3))',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
        }}
        animate={{ y: ['-25%', '75%'] }}
        transition={{ duration: 16, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
      />
    </div>
  );
};

export default SlidingWaves;
