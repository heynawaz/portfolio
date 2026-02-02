'use client';

import { useEffect, useRef } from 'react';

export function AuroraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      container.style.setProperty('--mouse-x', `${x * 100}%`);
      container.style.setProperty('--mouse-y', `${y * 100}%`);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-[#F1EFEC] via-[#F1EFEC] to-[#F1EFEC]"
      style={{ '--mouse-x': '50%', '--mouse-y': '50%' } as React.CSSProperties}
    >
      {/* Palette accent layers - navy & beige */}
      <div 
        className="absolute inset-0 animate-aurora-1"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 30%, rgba(18, 52, 88, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 70% 50% at 80% 70%, rgba(212, 201, 190, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 90% 70% at 50% 50%, rgba(18, 52, 88, 0.06) 0%, transparent 60%)
          `,
          filter: 'blur(60px)',
        }}
      />
      
      <div 
        className="absolute inset-0 animate-aurora-2"
        style={{
          background: `
            radial-gradient(ellipse 60% 80% at 70% 20%, rgba(212, 201, 190, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 30% 80%, rgba(18, 52, 88, 0.08) 0%, transparent 50%)
          `,
          filter: 'blur(50px)',
          mixBlendMode: 'multiply',
        }}
      />
      
      <div 
        className="absolute inset-0 animate-aurora-3"
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 40% 60%, rgba(18, 52, 88, 0.06) 0%, transparent 55%),
            radial-gradient(ellipse 70% 70% at 75% 35%, rgba(212, 201, 190, 0.08) 0%, transparent 50%)
          `,
          filter: 'blur(70px)',
          opacity: 0.7,
        }}
      />

      {/* Shimmer overlay */}
      <div 
        className="absolute inset-0 animate-shimmer"
        style={{
          background: `
            linear-gradient(
              120deg,
              transparent 30%,
              rgba(255, 255, 255, 0.12) 50%,
              transparent 70%
            )
          `,
          backgroundSize: '200% 100%',
        }}
      />

      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <style jsx>{`
        @keyframes aurora-1 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(3%, -3%) scale(1.03) rotate(1deg);
          }
          66% {
            transform: translate(-2%, 2%) scale(0.98) rotate(-0.5deg);
          }
        }
        
        @keyframes aurora-2 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
          }
          50% {
            transform: translate(-4%, 3%) scale(1.05);
          }
        }
        
        @keyframes aurora-3 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translate(5%, -4%) scale(1.08);
            opacity: 0.9;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .animate-aurora-1 {
          animation: aurora-1 20s ease-in-out infinite;
        }
        
        .animate-aurora-2 {
          animation: aurora-2 15s ease-in-out infinite reverse;
        }
        
        .animate-aurora-3 {
          animation: aurora-3 25s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
