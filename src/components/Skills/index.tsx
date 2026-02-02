'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa6';
import { ls } from '@/styles/fonts';
import { cn } from '@/lib/utils';
import { AnimatedContent } from '../ui/animated-content';

export function Skills() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} id="projects" className="relative w-full py-28 md:py-20 sm:py-16 xs:py-12 overflow-hidden bg-[linear-gradient(to_right,rgba(212,201,190,0.2)_0%,#F1EFEC_12%,#F1EFEC_100%)]">
      {/* Gradient accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-palette-navy/10 blur-3xl" />

      <div className="relative mx-auto max-w-[74rem] px-6 sm:px-4 xs:px-4">
        <div className="grid grid-cols-2 lg:grid-cols-1 items-center gap-12 lg:gap-10 sm:gap-8 xs:gap-6">
          {/* Left: Text Content - left-aligned on mobile */}
          <AnimatedContent direction="left" distance={50} className="lg:order-1 text-left min-[769px]:text-center">
            <h2 className={cn('text-4xl lg:text-3xl md:text-2xl xs:text-xl font-semibold tracking-tight leading-tight text-black', ls.className)}>
              <span className="text-palette-navy">LinkedIn</span> Profile
            </h2>
            <p className={cn('mt-5 sm:mt-3 max-w-xl text-lg md:text-base sm:text-sm xs:text-sm leading-relaxed text-black/60 min-[769px]:mx-auto', ls.className)}>
              Connect with me on LinkedIn to see my experience, projects, and recommendations. 
              Let&apos;s build our professional network.
            </p>
          </AnimatedContent>

          {/* Right: LinkedIn CTA Card */}
          <AnimatedContent direction="right" distance={50} delay={0.2} className="lg:order-2 min-[769px]:mx-auto w-full">
            <Link
              href="https://www.linkedin.com/in/shahnawazz/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full min-h-[140px]"
            >
              <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-2xl xs:rounded-xl h-[180px] sm:h-[160px] xs:h-[150px] cursor-pointer w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2] to-[#004182]" />
                <div className="absolute inset-0 bg-palette-beige/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />
                <div className="relative h-full p-6 sm:p-5 xs:p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between gap-3">
                    <FaLinkedinIn className="h-8 w-8 sm:h-7 sm:w-7 xs:h-6 xs:w-6 text-white flex-shrink-0" />
                    <span className={cn('text-white/70 text-sm xs:text-xs uppercase tracking-wider truncate', ls.className)}>Professional profile</span>
                  </div>
                  <div>
                    <p className={cn('text-white text-2xl sm:text-xl xs:text-lg font-semibold', ls.className)}>
                      View my LinkedIn
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-white/80">
                      <span className={cn('text-sm sm:text-xs xs:text-xs block translate-y-px', ls.className)}>Connect now</span>
                      <HiArrowRight className="h-4 w-4 sm:h-3.5 sm:w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
