'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface AnimatedContentProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  blur?: boolean;
  scale?: number;
}

export function AnimatedContent({
  children,
  className = '',
  direction = 'up',
  distance = 30,
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  once = true,
  blur = false,
  scale = 1,
}: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      default:
        return {};
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
      filter: blur ? 'blur(10px)' : 'blur(0px)',
      scale: scale !== 1 ? scale : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}
