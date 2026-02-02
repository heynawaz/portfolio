'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface BlurTextProps {
  text: string;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  delay?: number;
  stepDuration?: number;
  threshold?: number;
}

export function BlurText({
  text,
  className = '',
  animateBy = 'words',
  direction = 'top',
  delay = 200,
  stepDuration = 0.35,
  threshold = 0.1,
}: BlurTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  const variants = {
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
      y: direction === 'top' ? -20 : 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        delay: i * (delay / 1000),
        duration: stepDuration,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <p ref={ref} className={className}>
      {elements.map((element, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={variants}
          initial="hidden"
          animate={hasAnimated ? 'visible' : 'hidden'}
          style={{ display: 'inline-block', whiteSpace: animateBy === 'words' ? 'pre' : 'pre-wrap' }}
        >
          {element}
          {animateBy === 'words' && i < elements.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </p>
  );
}
