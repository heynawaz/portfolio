'use client';

import { useRef, useState, ReactNode, useEffect } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

export function Magnet({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.5s ease-in-out',
  wrapperClassName = '',
  innerClassName = '',
}: MagnetProps) {
  const magnetRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (disabled) return;

    const element = magnetRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      const maxDistance = Math.max(rect.width, rect.height) / 2 + padding;

      if (distance < maxDistance) {
        setIsHovered(true);
        const pull = 1 - distance / maxDistance;
        setPosition({
          x: (distanceX / magnetStrength) * pull,
          y: (distanceY / magnetStrength) * pull,
        });
      } else {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [disabled, magnetStrength, padding]);

  return (
    <div ref={magnetRef} className={wrapperClassName}>
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isHovered ? activeTransition : inactiveTransition,
        }}
      >
        {children}
      </div>
    </div>
  );
}
