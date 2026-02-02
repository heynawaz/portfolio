'use client';

import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

export function GradientText({
  children,
  className = '',
  colors = ['#00d4ff', '#7c3aed', '#ff00ff', '#00d4ff'],
  animationSpeed = 8,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
    backgroundSize: '300% 100%',
    animation: `gradient-shift ${animationSpeed}s linear infinite`,
  };

  return (
    <>
      <span
        className={cn('bg-clip-text text-transparent', className)}
        style={gradientStyle}
      >
        {children}
      </span>
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </>
  );
}
