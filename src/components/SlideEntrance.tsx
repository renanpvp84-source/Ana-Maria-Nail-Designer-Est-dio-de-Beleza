import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export interface SlideEntranceProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  className?: string;
  duration?: number;
  threshold?: number;
  delay?: number;
  offset?: number;
}

export const SlideEntrance: React.FC<SlideEntranceProps> = ({
  children,
  direction = 'left',
  className = '',
  duration = 0.55,
  threshold = 0.05,
  delay = 0,
  offset = 20,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div data-slide-entrance="" className={className}>
        {children}
      </div>
    );
  }

  const initialX = direction === 'left' ? -offset : offset;

  return (
    <motion.div
      data-slide-entrance=""
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: threshold, margin: '60px 0px 0px 0px' }}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1] as const,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
