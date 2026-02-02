'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ls } from '@/styles/fonts';
import { cn, getYearsOfExperience } from '@/lib/utils';
import { HiArrowRight, HiArrowDown } from 'react-icons/hi2';
import { CountUp } from '../ui/count-up';
import { AnimatedContent } from '../ui/animated-content';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { HiOutlineDocumentText } from 'react-icons/hi2';

// Testimonial avatars for trust indicator
const trustedPeople = [
  { name: 'Tushar', image: '/assets/img/tushar.jpeg' },
  { name: 'Dilshad', image: '/assets/img/dilshad.jpeg' },
  { name: 'Umair', image: '/assets/img/umair.jpg' },
  { name: 'Arshad', image: '/assets/img/arshad.jpg' },
];

// Stats - years of experience is dynamic (calculated from Dec 2020)
const getStats = () => [
  { value: 15, suffix: '+', label: 'Projects Delivered' },
  { value: getYearsOfExperience(), suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

// Services/expertise
const expertise = ['Frontend Development', 'Full-Stack Apps', 'SaaS Products', 'Design Systems'];

// Quick links
const quickLinks = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/heynawaz' },
  { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://linkedin.com/in/shahnawazz' },
  { name: 'Resume', icon: HiOutlineDocumentText, href: '/assets/pdf/Shah_Nawaz_Resume_5+.pdf' },
];

export function NewHero() {
  const [currentExpertise, setCurrentExpertise] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExpertise((prev) => (prev + 1) % expertise.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col flex-1 min-h-[100dvh] h-[100dvh] sm:min-h-[100svh] sm:h-[100svh] w-full overflow-hidden bg-palette-cream" id="hero">
      <div className="relative z-10 mx-auto h-full min-h-0 max-w-7xl lg:max-w-none w-full px-6 sm:px-4 xs:px-3 flex flex-col flex-1" id="hero-inner">
        {/* Spacer for fixed navbar - extra on mobile/tablet to prevent content hiding behind navbar */}
        <div className="h-16 sm:h-24 xs:h-24 min-[641px]:h-20 min-[1025px]:h-16 shrink-0" />
        {/* Main content - vertically centered on all screen sizes */}
        <div className="flex-1 flex flex-col justify-center min-h-0 min-[1025px]:min-h-0">
          <div className="w-full grid grid-cols-12 gap-10 sm:gap-8 xs:gap-6 items-center lg:grid-cols-1 lg:gap-10">
            
            {/* LEFT: Main content - 60% width */}
            <div className="col-span-7 lg:col-span-full pr-4 lg:pr-0">
              {/* Intro badge */}
              <AnimatedContent delay={0.1} direction="up" distance={30}>
                <div className="mb-6 sm:mb-4">
                  <span className={cn(
                    'inline-flex items-center gap-2 leading-none rounded-full border border-palette-beige bg-palette-beige/40 backdrop-blur-sm px-4 py-2 sm:px-3 sm:py-1.5',
                    ls.className
                  )}>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-palette-navy opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-palette-navy" />
                    </span>
                    <span className="text-sm sm:text-xs font-medium text-palette-navy">Available for projects</span>
                  </span>
                </div>
              </AnimatedContent>

              {/* Main headline */}
              <AnimatedContent delay={0.2} direction="up" distance={40}>
                <h1 className={cn(
                  'text-[3.5rem] font-semibold leading-[1.15] tracking-tight xl:text-5xl lg:text-4xl md:text-3xl sm:text-[1.75rem] xs:text-[1.5rem]',
                  ls.className
                )}>
                  <span className="text-black">I build digital</span>
                  <br />
                  <span className="text-black">products that help</span>
                  <br />
                  <span className="text-palette-navy">ambitious teams win</span>
                </h1>
              </AnimatedContent>

              {/* Subtitle with rotating expertise */}
              <AnimatedContent delay={0.4} direction="up" distance={30}>
                <div className={cn('mt-6 sm:mt-4 xs:mt-3 flex items-center gap-2 text-lg md:text-base sm:text-sm xs:text-xs text-black/60 flex-wrap xs:flex-col xs:items-start xs:gap-1', ls.className)}>
                  <span>Full-Stack Engineer specializing in</span>
                  <div className="relative h-7 sm:h-6 xs:h-5 min-w-[200px] sm:min-w-[180px] xs:min-w-[160px] overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentExpertise}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -30, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute font-semibold text-palette-navy"
                      >
                        {expertise[currentExpertise]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </AnimatedContent>

              {/* CTA button */}
              <AnimatedContent delay={0.6} direction="up" distance={30}>
                <div className="mt-6 sm:mt-5 xs:mt-4 flex flex-wrap items-center gap-3 sm:gap-2">
                  <Link
                    href="https://cal.com/shah-nawaz/15min"
                    target="_blank"
                    className={cn(
                      'group inline-flex items-center justify-center gap-3 sm:gap-2 leading-none rounded-full bg-palette-navy px-6 py-3.5 sm:px-5 sm:py-3 xs:px-4 xs:py-2.5 min-h-[44px] sm:min-h-[42px] xs:min-h-[40px] text-palette-cream transition-all duration-300 hover:bg-palette-navy-light hover:shadow-lg hover:shadow-palette-navy/25 hover:scale-[1.02] active:scale-[0.98]',
                      'ring-1 ring-palette-beige/80 ring-offset-2 ring-offset-palette-cream',
                      ls.className
                    )}
                  >
                    <span className="font-semibold sm:text-sm block translate-y-px">Book a free call</span>
                    <span className="flex h-5 w-5 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5">
                      <HiArrowRight className="h-3 w-3 sm:h-2.5 sm:w-2.5" />
                    </span>
                  </Link>
                  <p className={cn('text-sm sm:text-xs text-black/50', ls.className)}>
                    Friendly chat, no pressure
                  </p>
                </div>
              </AnimatedContent>
            </div>

            {/* RIGHT: Premium Bento Grid - 40% width */}
            <div className="col-span-5 lg:col-span-full lg:mt-6 xs:mt-4">
              <div className="grid grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 sm:gap-3 xs:gap-2">
                
                {/* Featured CTA Card - spans full width */}
                <AnimatedContent delay={0.3} direction="right" distance={40} className="col-span-3 sm:col-span-2 xs:col-span-1">
                  <Link href="https://cal.com/shah-nawaz/15min" target="_blank" className="block min-h-[44px]">
                    <div className="group relative rounded-[1.5rem] sm:rounded-2xl xs:rounded-xl overflow-hidden h-[160px] sm:h-[140px] xs:h-[120px] cursor-pointer">
                      {/* Gradient background - teal */}
                      <div className="absolute inset-0 bg-gradient-to-br from-palette-navy to-palette-black" />
                      <div className="absolute inset-0 bg-palette-beige/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Mesh gradient overlay */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-0 right-0 w-40 h-40 sm:w-32 sm:h-32 bg-white/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-24 sm:h-24 bg-palette-beige/20 rounded-full blur-2xl" />
                      </div>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                      {/* Content */}
                      <div className="relative h-full p-6 sm:p-4 xs:p-3 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <span className={cn('text-white/60 text-xs uppercase tracking-wider', ls.className)}>Let&apos;s collaborate</span>
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="text-white/40"
                          >
                            ✦
                          </motion.div>
                        </div>
                        <div>
                          <p className={cn('text-white text-2xl sm:text-xl xs:text-lg font-semibold', ls.className)}>
                            Build something amazing
                          </p>
                          <div className="mt-2 flex items-center gap-2 leading-none text-white/80">
                            <span className={cn('text-sm sm:text-xs block translate-y-px', ls.className)}>Start a project</span>
                            <HiArrowRight className="h-4 w-4 sm:h-3 sm:w-3 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedContent>

                {/* Stats Cards */}
                {getStats().map((stat, index) => (
                  <AnimatedContent key={stat.label} delay={0.4 + index * 0.1} direction="up" distance={30} className={index === 2 ? 'sm:col-span-2' : ''}>
                    <div className="group relative rounded-2xl sm:rounded-xl xs:rounded-lg overflow-hidden h-[120px] sm:h-[100px] xs:h-[90px]">
                      <div className="absolute inset-0 bg-palette-cream/60 backdrop-blur-md" />
                      <div className="absolute inset-0 rounded-2xl sm:rounded-xl border border-black/[0.08] group-hover:border-palette-navy/30 transition-colors" />
                      <div className="relative h-full p-4 sm:p-3 flex flex-col justify-center">
                        <p className={cn(
                          'text-4xl sm:text-3xl font-bold text-palette-navy',
                          ls.className
                        )}>
                          <CountUp to={stat.value} suffix={stat.suffix} duration={2 + index * 0.2} />
                        </p>
                        <p className={cn('mt-1 text-sm sm:text-xs text-black/50', ls.className)}>
                          {stat.label}
                        </p>
                      </div>
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-8 rounded-full blur-xl bg-palette-navy opacity-0 group-hover:opacity-20 transition-opacity" />
                    </div>
                  </AnimatedContent>
                ))}

                {/* Quick Links */}
                <AnimatedContent delay={0.7} direction="up" distance={30} className="col-span-3 sm:col-span-2 xs:col-span-1">
                  <div className="relative rounded-2xl sm:rounded-xl xs:rounded-lg overflow-hidden border border-palette-beige/50 bg-transparent">
                    {/* Content */}
                    <div className="relative p-5 sm:p-4 xs:p-3 flex items-center justify-between sm:flex-col sm:gap-3 xs:flex-col xs:gap-3 xs:items-stretch">
                      <span className={cn('text-palette-navy/70 text-xs uppercase tracking-wider sm:self-start font-medium', ls.className)}>
                        Quick access
                      </span>
                      <div className="flex flex-wrap items-center gap-2 sm:w-full sm:justify-start xs:justify-start">
                        {quickLinks.map((link) => (
                          <Link 
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center justify-center gap-2 leading-none px-4 py-2 sm:px-3 sm:py-1.5 xs:px-3 xs:py-2 min-h-[44px] xs:min-h-[40px] rounded-full border border-palette-beige/60 bg-palette-beige/30 hover:bg-palette-navy/10 hover:border-palette-navy/30 text-palette-navy transition-colors active:scale-[0.98]"
                          >
                            <link.icon className="h-4 w-4 sm:h-3.5 sm:w-3.5 flex-shrink-0 text-palette-navy group-hover/link:text-palette-navy transition-colors" />
                            <span className={cn('text-sm sm:text-xs block translate-y-px text-palette-navy font-medium', ls.className)}>
                              {link.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedContent>

                {/* Recommended by amazing people */}
                {/* <AnimatedContent delay={0.8} direction="up" distance={30} className="col-span-3 sm:col-span-2 xs:col-span-1">
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-2 xs:gap-2 py-4 sm:py-3">
                    <div className="flex -space-x-4 sm:-space-x-3.5 xs:-space-x-3">
                      {trustedPeople.map((person) => (
                        <div
                          key={person.name}
                          className="relative h-10 w-10 sm:h-9 sm:w-9 xs:h-8 xs:w-8 overflow-hidden rounded-full border-2 border-palette-cream bg-palette-cream"
                        >
                          <Image src={person.image} alt={person.name} fill className="object-cover" sizes="40px" />
                        </div>
                      ))}
                      <div className={cn(
                        'relative h-10 w-10 sm:h-9 sm:w-9 xs:h-8 xs:w-8 flex items-center justify-center rounded-full border-2 border-palette-cream',
                        'bg-palette-black text-palette-cream',
                        'text-xs font-semibold',
                        ls.className
                      )}>
                        +20
                      </div>
                    </div>
                    <span className={cn('text-sm sm:text-xs xs:text-[11px] text-black/50', ls.className)}>
                      Recommended by amazing people
                    </span>
                  </div>
                </AnimatedContent> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator - hidden on mobile */}
        <AnimatedContent delay={0.9} direction="up" distance={20} className="sm:hidden">
          <div className="pb-6 sm:pb-4 xs:pb-3 flex justify-center">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-3 leading-none text-black/40 transition-colors hover:text-palette-navy group min-h-[44px] min-w-[44px]"
              aria-label="Scroll to about section"
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="flex h-9 w-9 sm:h-8 sm:w-8 xs:h-9 xs:w-9 items-center justify-center rounded-full border border-current transition-all group-hover:bg-palette-navy group-hover:text-palette-cream group-hover:border-palette-navy"
              >
                <HiArrowDown className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
              </motion.div>
            </button>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
