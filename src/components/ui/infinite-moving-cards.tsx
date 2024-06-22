'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image?: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards');
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse');
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn('scroller relative z-20 max-w-[70vw] lg:max-w-[95vw] overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]', className)}
    >
      <ul ref={scrollerRef} className={cn(' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap', start && 'animate-scroll ', pauseOnHover && 'hover:[animation-play-state:paused]')}>
        {items.map((item, idx) => (
          <li className="w-[460px] max-w-full relative rounded-2xl border border-gray-200 flex-shrink-0 px-8 py-6 md:w-[450px] bg-white" key={item?.name}>
            <blockquote>
              <div aria-hidden="true" className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
              <p className=" relative z-20 text-[1.1rem] leading-[1.5] text-gray-800 font-normal">&quot;{item?.quote}&quot;</p>
              <div className="relative z-20 mt-6 flex flex-row gap-4 items-center">
                <Image src={item?.image || 'https://avatar.iran.liara.run/public'} draggable={false} className="rounded-full" alt="Shah Nawaz's Photo" width={45} height={1000} />
                <span className="flex flex-col gap-1">
                  <span className=" text-xl leading-[1.3] text-purple-950 font-semibold">{item?.name}</span>
                  <span className=" text-md leading-[1] text-gray-600 font-normal">{item?.title}</span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
