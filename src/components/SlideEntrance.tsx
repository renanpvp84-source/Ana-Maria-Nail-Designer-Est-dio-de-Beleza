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

/**
 * SlideEntrance component
 * Implements a lateral slide-in animation with:
 * - Configurable direction: 'left' (starts at translateX(-28px)) or 'right' (starts at translateX(28px))
 * - Easing: cubic-bezier(0.22, 1, 0.36, 1)
 * - Duration: 600ms (0.6s)
 * - Viewport trigger threshold: ~20% (amount: 0.2)
 * - Executes only once (once: true) and remains permanently visible
 * - Strictly respects prefers-reduced-motion
 */
export const SlideEntrance: React.FC<SlideEntranceProps> = ({
  children,
  direction = 'left',
  className = '',
  duration = 0.6,
  threshold = 0.2,
  delay = 0,
  offset = 28,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Accessibility fallback: if reduced motion is requested, render without animation
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
      viewport={{ once: true, amount: threshold }}
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
