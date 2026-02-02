'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { HiArrowRight, HiCode, HiClock, HiSupport, HiSparkles } from 'react-icons/hi';
import { ls } from '@/styles/fonts';
import { cn } from '@/lib/utils';
import { AnimatedContent } from '../ui/animated-content';

const RESUME_URL = '/assets/pdf/Shah_Nawaz_Resume_5+.pdf';

const benefits = [
  { icon: HiCode, title: 'Full-stack expertise', desc: 'End-to-end development' },
  { icon: HiSparkles, title: 'Clean code', desc: 'Maintainable & scalable' },
  { icon: HiClock, title: 'On-time delivery', desc: 'Meeting deadlines' },
  { icon: HiSupport, title: 'Ongoing support', desc: 'Post-launch assistance' },
];

export function CTA2() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="relative w-full px-6 sm:px-4 xs:px-3 py-28 md:py-20 sm:py-16 xs:py-12 overflow-hidden bg-palette-cream">
      <div className="relative mx-auto max-w-6xl">
        {/* Header - left aligned */}
        <AnimatedContent direction="up" distance={30}>
          <div className="mb-12 md:mb-10 sm:mb-8 max-w-3xl">
            <h2 className={cn('text-4xl md:text-3xl sm:text-2xl font-semibold tracking-tight text-black leading-[1.2]', ls.className)}>
              <span className="text-palette-navy">Why</span> work with me?
            </h2>
            <p className={cn('mt-5 sm:mt-4 text-lg md:text-base sm:text-sm text-black/60 leading-relaxed', ls.className)}>
              I bring deep expertise in building robust, scalable web applications. 
              From frontend UIs to backend services, I handle every aspect with precision.
            </p>
          </div>
        </AnimatedContent>

        {/* Benefits - larger cards with vertical layout */}
        <AnimatedContent direction="up" distance={30} delay={0.1}>
          <div className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6 sm:gap-5 xs:gap-4 mb-14 sm:mb-12 xs:mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group flex flex-col gap-4 rounded-2xl border border-palette-beige/30 bg-transparent hover:border-palette-navy/25 hover:bg-palette-beige/20 p-6 sm:p-5 xs:p-5 transition-all duration-300 hover:shadow-lg hover:shadow-palette-navy/5"
              >
                <div className="h-14 w-14 sm:h-12 sm:w-12 rounded-xl bg-palette-navy/10 flex items-center justify-center flex-shrink-0 group-hover:bg-palette-navy/15 transition-colors">
                  <benefit.icon className="h-7 w-7 sm:h-6 sm:w-6 text-palette-navy" />
                </div>
                <div>
                  <p className={cn('font-semibold text-black text-lg sm:text-base', ls.className)}>{benefit.title}</p>
                  <p className={cn('mt-1.5 text-sm sm:text-sm text-black/55 leading-relaxed', ls.className)}>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedContent>

        {/* CTA - two actions side by side */}
        <AnimatedContent delay={0.3} direction="up" distance={30}>
          <div className="relative overflow-hidden rounded-3xl sm:rounded-2xl xs:rounded-xl border border-palette-beige/30 bg-palette-beige/20 p-8 md:p-6 sm:p-5 xs:p-4">
            <div className="flex flex-row lg:flex-col items-center justify-between gap-8 lg:gap-6 lg:text-center">
              <div className="min-w-0 flex-1 lg:flex-none">
                <h3 className={cn('text-2xl md:text-xl sm:text-lg font-semibold text-black', ls.className)}>
                  Ready to build something amazing?
                </h3>
                <p className={cn('mt-2 text-black/60 text-base sm:text-sm lg:mx-auto lg:max-w-md', ls.className)}>
                  Let&apos;s discuss your project and see how I can help bring your vision to life.
                </p>
              </div>
              <div className="flex flex-row sm:flex-col xs:flex-col gap-3 flex-shrink-0 lg:justify-center xs:w-full xs:flex-wrap">
                <Link
                  href="https://cal.com/shah-nawaz/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'group/btn inline-flex items-center justify-center gap-2 leading-none rounded-full bg-palette-navy text-palette-cream px-6 py-3.5 sm:px-5 sm:py-3 text-base sm:text-sm font-semibold transition-all duration-300 hover:bg-palette-navy-light hover:shadow-lg hover:shadow-palette-navy/20',
                    ls.className
                  )}
                >
                  <span className="block translate-y-px">Book a call</span>
                  <HiArrowRight className="h-4 w-4 sm:h-3.5 sm:w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </Link>
                <Link
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'group/btn inline-flex items-center justify-center gap-2 leading-none rounded-full border-2 border-palette-navy/40 bg-transparent text-palette-navy px-6 py-3.5 sm:px-5 sm:py-3 text-base sm:text-sm font-semibold transition-all duration-300 hover:bg-palette-navy/10 hover:border-palette-navy',
                    ls.className
                  )}
                >
                  <span className="block translate-y-px">View resume</span>
                  <HiArrowRight className="h-4 w-4 sm:h-3.5 sm:w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
