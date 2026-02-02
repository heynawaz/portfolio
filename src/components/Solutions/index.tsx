'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ls } from '@/styles/fonts';
import { cn } from '@/lib/utils';
import { AnimatedContent } from '../ui/animated-content';
import { 
  HiOutlineCodeBracket, 
  HiOutlineCpuChip, 
  HiOutlineRocketLaunch,
  HiOutlineLightBulb,
  HiArrowRight,
  HiArrowUpRight,
} from 'react-icons/hi2';

const servicesData = [
  { icon: HiOutlineCodeBracket, title: 'Web Development', description: 'Building fast, scalable web applications with modern tech stack.', tags: ['React', 'Next.js', 'TypeScript', 'Node.js'] },
  { icon: HiOutlineCpuChip, title: 'AI Integration', description: 'Implementing AI-powered features to automate and enhance your product.', tags: ['OpenAI', 'LLMs', 'Chatbots', 'Automation'], popular: true },
  { icon: HiOutlineRocketLaunch, title: 'SaaS Development', description: 'End-to-end SaaS solutions with billing, auth, and dashboards.', tags: ['MVP', 'Stripe', 'Auth', 'Analytics'] },
  { icon: HiOutlineLightBulb, title: 'Technical Consulting', description: 'Architecture reviews, tech strategy, and hands-on mentoring.', tags: ['Architecture', 'Code Review', 'Strategy'] },
];

export function Solutions() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} id="solutions" className="relative w-full px-6 sm:px-4 py-24 md:py-20 sm:py-16 bg-palette-beige/30">
      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <AnimatedContent direction="up" distance={30}>
          <div className="flex items-end justify-between mb-12 md:mb-10 sm:mb-8 lg:flex-col lg:items-start lg:gap-4">
            <div>
              <p className={cn('text-sm sm:text-xs font-medium text-palette-navy mb-2', ls.className)}>
                Services
              </p>
              <h2 className={cn('text-4xl md:text-3xl sm:text-2xl font-semibold text-black', ls.className)}>
                What I do best
              </h2>
            </div>
            <Link
              href="https://cal.com/shah-nawaz/15min"
              target="_blank"
              className={cn(
                'group inline-flex items-center gap-2 leading-none text-sm font-medium text-black/60 hover:text-palette-navy transition-colors',
                ls.className
              )}
            >
              <span className="block translate-y-px">Let&apos;s work together</span>
              <HiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </AnimatedContent>

        <div className="space-y-4 sm:space-y-3">
          {servicesData.map((service, index) => (
            <AnimatedContent key={service.title} delay={0.1 + index * 0.1} direction="up">
              <div
                className={cn(
                  'group relative flex items-center gap-6 md:gap-5 sm:gap-4 p-6 md:p-5 sm:p-4',
                  'bg-palette-cream rounded-2xl sm:rounded-xl border border-palette-beige/30',
                  'border border-transparent hover:border-palette-navy/20 transition-all duration-300 cursor-pointer',
                  'hover:shadow-lg hover:shadow-palette-navy/5',
                  'lg:flex-col lg:items-start'
                )}
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-2 right-6 sm:right-4">
                    <span className={cn(
                      'inline-block px-3 py-1 sm:px-2 sm:py-0.5 text-[10px] font-semibold uppercase tracking-wider',
                      'bg-palette-navy text-palette-cream rounded-full',
                      ls.className
                    )}>
                      Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="flex-shrink-0 h-14 w-14 md:h-12 md:w-12 sm:h-11 sm:w-11 rounded-2xl sm:rounded-xl bg-palette-navy/10 flex items-center justify-center">
                  <service.icon className="h-7 w-7 md:h-6 md:w-6 sm:h-5 sm:w-5 text-palette-navy" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className={cn('text-xl md:text-lg sm:text-base font-semibold text-black mb-1', ls.className)}>
                    {service.title}
                  </h3>
                  <p className={cn('text-sm sm:text-xs text-black/60', ls.className)}>
                    {service.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-1.5 lg:w-full">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        'px-3 py-1.5 sm:px-2 sm:py-1 text-xs sm:text-[10px] font-medium rounded-lg sm:rounded-md',
                        'bg-zinc-100 text-black/70',
                        ls.className
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 h-10 w-10 sm:h-9 sm:w-9 rounded-full bg-zinc-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 lg:absolute lg:top-4 lg:right-4">
                  <HiArrowRight className="h-4 w-4 sm:h-3.5 sm:w-3.5 text-palette-navy" />
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedContent delay={0.5} direction="up">
          <div className="mt-12 sm:mt-8 text-center">
            <p className={cn('text-black/50 mb-4 sm:mb-3 text-sm sm:text-xs', ls.className)}>
              Need something custom? Let&apos;s chat.
            </p>
            <Link
              href="https://cal.com/shah-nawaz/15min"
              target="_blank"
              className={cn(
                'group inline-flex items-center gap-2 leading-none bg-palette-navy text-palette-cream px-6 py-3 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-lg font-semibold',
                'transition-all duration-300 hover:bg-palette-navy-light hover:shadow-lg hover:shadow-palette-navy/25 hover:scale-[1.02]',
                ls.className
              )}
            >
              <span className="sm:text-sm block translate-y-px">Book a free call</span>
              <HiArrowRight className="h-4 w-4 sm:h-3.5 sm:w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
