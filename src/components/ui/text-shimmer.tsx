'use client';

import { cn } from '@/lib/utils';

interface TextShimmerProps {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
  duration?: number;
}

export function TextShimmer({
  children,
  className = '',
  shimmerWidth = 100,
  duration = 2,
}: TextShimmerProps) {
  return (
    <>
      <span
        className={cn(
          'relative inline-block bg-clip-text text-transparent',
          'bg-gradient-to-r from-black via-white/80 to-black',
          className
        )}
        style={{
          backgroundSize: `${shimmerWidth}% 100%`,
          animation: `shimmer ${duration}s linear infinite`,
        }}
      >
        {children}
      </span>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
      `}</style>
    </>
  );
}
