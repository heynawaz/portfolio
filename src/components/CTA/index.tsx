'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ls } from '@/styles/fonts';
import { cn, getYearsOfExperience } from '@/lib/utils';
import { AnimatedContent } from '../ui/animated-content';
import { HiArrowRight } from 'react-icons/hi';
import { HiOutlineCalendar, HiOutlineEnvelope } from 'react-icons/hi2';
import { CountUp } from '../ui/count-up';

const getStats = () => [
  { value: 15, suffix: '+', label: 'Projects Delivered' },
  { value: getYearsOfExperience(), suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

export function CTA() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="relative w-full px-6 sm:px-4 xs:px-3 py-24 md:py-20 sm:py-16 xs:py-12 overflow-hidden bg-[linear-gradient(to_bottom,#F1EFEC_0%,#F1EFEC_55%,rgba(212,201,190,0.2)_100%)]">
      <div className="relative mx-auto max-w-6xl">
        <AnimatedContent direction="up" distance={40}>
          {/* Main CTA Card */}
          <div className="relative overflow-hidden rounded-3xl sm:rounded-2xl bg-gradient-to-br from-palette-navy to-palette-black">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-palette-beige/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-palette-navy/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
            
            {/* Content Grid */}
            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-1">
              {/* Left: Main Content */}
              <div className="p-12 md:p-10 sm:p-8 xs:p-6 border-r border-white/10 lg:border-r-0 lg:border-b">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 leading-none rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 sm:px-3 sm:py-1.5 mb-6 sm:mb-5 xs:mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className={cn('text-sm sm:text-xs font-medium text-white', ls.className)}>
                    Available for new projects
                  </span>
                </div>

                {/* Headline */}
                <h2 className={cn('text-5xl md:text-4xl sm:text-3xl font-bold text-white leading-tight', ls.className)}>
                  Let&apos;s build your
                  <br />
                  next big idea
                </h2>

                {/* Description */}
                <p className={cn('mt-4 sm:mt-3 text-lg md:text-base sm:text-sm text-white/70 max-w-md', ls.className)}>
                  From concept to launch, I&apos;ll help you create a product that stands out. 
                  Book a free call and let&apos;s make it happen.
                </p>

                {/* CTA Buttons - Horizontal on all screens */}
                <div className="mt-8 sm:mt-6 flex flex-row flex-wrap items-center gap-4 sm:gap-3 xs:gap-2">
                  <Link
                    href="https://cal.com/shah-nawaz/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'group inline-flex items-center gap-2 leading-none rounded-xl sm:rounded-lg xs:rounded-lg bg-palette-cream text-palette-navy px-6 py-3 sm:px-5 sm:py-2.5 xs:px-4 xs:py-2.5 font-semibold transition-all duration-300 hover:bg-palette-cream/90 hover:shadow-xl hover:scale-[1.02]',
                      ls.className
                    )}
                  >
                    <HiOutlineCalendar className="h-5 w-5 sm:h-4 sm:w-4 xs:h-3.5 xs:w-3.5" />
                    <span className="sm:text-sm xs:text-xs block translate-y-px whitespace-nowrap">Book a call</span>
                    <HiArrowRight className="h-4 w-4 sm:h-3 sm:w-3 xs:h-3 xs:w-3 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="mailto:shahnawaz.com@hotmail.com"
                    className={cn(
                      'group inline-flex items-center gap-2 leading-none rounded-xl sm:rounded-lg xs:rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white px-6 py-3 sm:px-5 sm:py-2.5 xs:px-4 xs:py-2.5 font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/50',
                      ls.className
                    )}
                  >
                    <HiOutlineEnvelope className="h-5 w-5 sm:h-4 sm:w-4 xs:h-3.5 xs:w-3.5" />
                    <span className="sm:text-sm xs:text-xs block translate-y-px whitespace-nowrap">Email me</span>
                  </Link>
                </div>

                {/* Friendly note */}
                <p className={cn('mt-6 sm:mt-4 text-sm sm:text-xs text-white/50', ls.className)}>
                  Friendly chat, no pressure
                </p>
              </div>

              {/* Right: Stats & Trust */}
              <div className="p-12 md:p-10 sm:p-8 xs:p-6 flex flex-col justify-between">
                {/* Stats Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-6 sm:gap-4 xs:gap-3">
                  {getStats().map((stat, index) => (
                    <div key={stat.label} className="text-center sm:text-left sm:flex sm:items-center sm:gap-4">
                      <p className={cn('text-4xl md:text-3xl sm:text-2xl font-bold text-white', ls.className)}>
                        <CountUp to={stat.value} suffix={stat.suffix} duration={2 + index * 0.2} />
                      </p>
                      <p className={cn('mt-1 sm:mt-0 text-sm sm:text-xs text-white/60', ls.className)}>{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Trust indicators */}
                <div className="mt-10 sm:mt-8 pt-8 sm:pt-6 border-t border-white/10">
                  <p className={cn('text-sm sm:text-xs text-white/40 mb-4 sm:mb-3 uppercase tracking-wider', ls.className)}>
                    Why work with me
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                    {[
                      'Lightning-fast replies',
                      'Free consult—no strings attached',
                      'Honest pricing, zero surprises',
                      "Support that doesn't stop at launch",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-white/70">
                        <div className="h-1.5 w-1.5 rounded-full bg-palette-beige" />
                        <span className={cn('text-sm sm:text-xs', ls.className)}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
