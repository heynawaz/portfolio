'use client';

import Image from 'next/image';
import { ls } from '@/styles/fonts';
import { cn } from '@/lib/utils';
import { SpotlightCard } from '../ui/spotlight-card';
import { AnimatedContent } from '../ui/animated-content';

interface ITestimonialCard {
  cardDetails: Array<{ quote: string; name: string; title: string; image?: string }>;
}

export default function TestimonialCard({ cardDetails }: ITestimonialCard) {
  return (
    <>
      {cardDetails.map((item, index) => (
        <AnimatedContent key={index} delay={index * 0.1} direction="up">
          <SpotlightCard
            className="break-inside-avoid p-6 sm:p-5 mb-5 sm:mb-4 rounded-3xl sm:rounded-2xl bg-white border border-black/5"
            spotlightColor="rgba(139, 92, 246, 0.1)"
          >
            {/* Quote icon */}
            <div className="mb-4 sm:mb-3 text-3xl sm:text-2xl text-violet-500">&ldquo;</div>
            
            {/* Quote */}
            <p className={cn('text-[15px] sm:text-sm leading-relaxed text-black/60', ls.className)}>{item.quote}</p>

            {/* Author */}
            <div className="mt-6 sm:mt-4 flex items-center gap-4 sm:gap-3">
              <div className="relative h-12 w-12 sm:h-10 sm:w-10 overflow-hidden rounded-xl sm:rounded-lg border border-black/10">
                <Image src={item.image ?? '/assets/img/avatar.png'} alt="" fill className="object-cover" />
              </div>
              <div>
                <p className={cn('font-semibold text-black sm:text-sm', ls.className)}>{item.name}</p>
                <p className={cn('text-sm sm:text-xs text-black/50', ls.className)}>{item.title}</p>
              </div>
            </div>
          </SpotlightCard>
        </AnimatedContent>
      ))}
    </>
  );
}
