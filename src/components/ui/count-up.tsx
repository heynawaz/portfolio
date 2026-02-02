'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function CountUp({
  from = 0,
  to,
  duration = 2,
  className = '',
  suffix = '',
  prefix = '',
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const endValue = to;
    const startValue = from;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Easing function (ease-out cubic)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);

      const currentValue = startValue + (endValue - startValue) * easeOutCubic;
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, from, to, duration]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.round(count);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
