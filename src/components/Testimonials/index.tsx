'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ls } from '@/styles/fonts';
import { cn } from '@/lib/utils';
import { AnimatedContent } from '../ui/animated-content';
import { BlurText } from '../ui/blur-text';
import { HiStar } from 'react-icons/hi';

const testimonials = [
  {
    quote: `I've had the chance to work with Shah, and he's one of those people who just makes things easier. He's quick to pick up on what's needed and gets things done without a lot of back-and-forth. What stands out is his curiosity—he's always looking to learn new tech and take on fresh challenges. Shah communicates well and is really good at managing tasks. Definitely recommend him!`,
    name: 'Tushar Saini',
    title: 'Assistant Lead - Full Stack',
    image: '/assets/img/tushar.jpeg',
    featured: true,
  },
  {
    quote:
      'Nawaz is a highly skilled engineer. He has consistently demonstrated an exceptional ability to solve complex problems and deliver high-quality solutions. He collaborates seamlessly with team members and consistently goes above and beyond.',
    name: 'Dilshad Ahmad',
    title: 'Assistant Lead - Full Stack',
    image: '/assets/img/dilshad.jpeg',
  },
  {
    quote:
      'Shah Nawaz has great potential in JavaScript with excellent knowledge in Frontend and UI designing. Also, he has great knowledge of information security.',
    name: 'Md. Umair Abdullah',
    title: 'Assistant Lead - Full Stack',
    image: '/assets/img/umair.jpg',
  },
  {
    quote:
      'He has good knowledge of JavaScript and frontend design, with excellent problem-solving and communication skills.',
    name: 'Mohd Arshad',
    title: 'Assistant Lead - Python',
    image: '/assets/img/arshad.jpg',
  },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const featured = testimonials.find(t => t.featured);
  const others = testimonials.filter(t => !t.featured);

  return (
    <section ref={ref} id="testimonial" className="relative w-full px-6 sm:px-4 xs:px-3 py-28 md:py-20 sm:py-16 xs:py-12 overflow-hidden bg-[linear-gradient(to_bottom,#F1EFEC_0%,rgba(212,201,190,0.2)_15%,rgba(212,201,190,0.2)_85%,#F1EFEC_100%)]">
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <AnimatedContent direction="up" distance={30}>
          <div className="text-center mb-16 md:mb-12 sm:mb-8">
            <div className="inline-flex items-center gap-2 leading-none rounded-full border border-palette-beige bg-palette-beige/40 px-4 py-2 sm:px-3 sm:py-1.5 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="h-4 w-4 sm:h-3 sm:w-3 text-amber-500" />
                ))}
              </div>
              <span className={cn('text-sm sm:text-xs font-medium text-palette-navy', ls.className)}>
                Loved by colleagues
              </span>
            </div>
            <h2 className={cn('text-4xl md:text-3xl sm:text-2xl font-semibold tracking-tight text-black', ls.className)}>
              <BlurText text="What People Say" animateBy="words" delay={100} />
            </h2>
            <p className={cn('mt-4 sm:mt-3 text-lg md:text-base sm:text-sm text-black/60 max-w-md mx-auto', ls.className)}>
              Real feedback from colleagues and collaborators I&apos;ve worked with.
            </p>
          </div>
        </AnimatedContent>
        
        {/* Featured Testimonial */}
        {featured && (
          <AnimatedContent direction="up" distance={40} delay={0.2}>
            <div className="relative mb-8 sm:mb-6">
              <div className="relative overflow-hidden rounded-3xl sm:rounded-2xl bg-gradient-to-br from-palette-navy to-palette-black p-8 md:p-6 sm:p-5">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-palette-beige/20 rounded-full blur-2xl" />
                <div className="absolute top-4 right-4 text-white/10 text-8xl sm:text-6xl font-serif">&ldquo;</div>
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4 sm:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="h-5 w-5 sm:h-4 sm:w-4 text-amber-300" />
                    ))}
                  </div>
                  
                  <p className={cn('text-xl md:text-lg sm:text-base leading-relaxed text-white/90 max-w-3xl', ls.className)}>
                    &ldquo;{featured.quote}&rdquo;
                  </p>
                  
                  <div className="mt-8 sm:mt-6 flex items-center gap-4 sm:gap-3">
                    <div className="relative h-14 w-14 sm:h-12 sm:w-12 overflow-hidden rounded-full border-2 border-white/30">
                      <Image src={featured.image ?? '/assets/img/avatar.png'} alt="" fill className="object-cover" />
                    </div>
                    <div>
                      <p className={cn('font-semibold text-white text-lg sm:text-base', ls.className)}>{featured.name}</p>
                      <p className={cn('text-sm sm:text-xs text-white/70', ls.className)}>{featured.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>
        )}

        {/* Other Testimonials Grid - 3 cols desktop, 1 col mobile (theme uses max breakpoints) */}
        <div className="grid grid-cols-3 lg:grid-cols-1 gap-5 sm:gap-4 xs:gap-3">
          {others.map((item, index) => (
            <AnimatedContent key={index} delay={0.3 + index * 0.1} direction="up" distance={30}>
              <div className="group relative h-full">
                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-2xl sm:rounded-xl bg-palette-cream/80 border border-palette-beige/50 p-6 sm:p-5 transition-all duration-300 hover:border-palette-navy/30 hover:shadow-lg hover:shadow-palette-navy/5">
                  {/* Quote mark */}
                  <div className="absolute top-4 right-4 text-palette-navy/20 text-4xl sm:text-3xl font-serif">&ldquo;</div>
                  
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4 sm:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="h-4 w-4 sm:h-3 sm:w-3 text-amber-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className={cn('text-[15px] sm:text-sm leading-relaxed text-black/70', ls.className)}>
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="mt-6 sm:mt-4 flex items-center gap-3 sm:gap-2.5 pt-4 sm:pt-3 border-t border-black/5">
                    <div className="relative h-10 w-10 sm:h-9 sm:w-9 overflow-hidden rounded-full border border-black/10">
                      <Image src={item.image ?? '/assets/img/avatar.png'} alt="" fill className="object-cover" />
                    </div>
                    <div>
                      <p className={cn('font-semibold text-black text-sm', ls.className)}>{item.name}</p>
                      <p className={cn('text-xs text-black/50', ls.className)}>{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>

      </div>
    </section>
  );
}
