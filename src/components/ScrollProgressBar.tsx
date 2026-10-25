import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[120] pointer-events-none"
      role="progressbar"
      aria-label="Progresso de rolagem da página"
    >
      <motion.div
        style={{ scaleX }}
        className="h-[3px] bg-[#D8A0A4] origin-left shadow-[0_0_10px_rgba(216,160,164,0.7)]"
      />
    </div>
  );
};
