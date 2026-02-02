'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  splitType?: 'chars' | 'words';
  from?: { opacity?: number; y?: number; x?: number; scale?: number; rotate?: number };
  to?: { opacity?: number; y?: number; x?: number; scale?: number; rotate?: number };
  threshold?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  staggerChildren?: number;
}

export function SplitText({
  text,
  className = '',
  delay = 50,
  duration = 0.5,
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  tag: Tag = 'p',
  staggerChildren = 0.03,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const elements = splitType === 'words' ? text.split(' ') : text.split('');

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay / 1000,
      },
    },
  };

  const childVariants: Variants = {
    hidden: from,
    visible: {
      ...to,
      transition: {
        duration,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={cn('inline-block', className)}
      variants={containerVariants}
      initial="hidden"
      animate={hasAnimated ? 'visible' : 'hidden'}
    >
      {elements.map((element, i) => (
        <motion.span
          key={i}
          variants={childVariants}
          style={{ display: 'inline-block', whiteSpace: splitType === 'words' ? 'pre' : 'pre-wrap' }}
        >
          {element === ' ' ? '\u00A0' : element}
          {splitType === 'words' && i < elements.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </motion.span>
  );
}
