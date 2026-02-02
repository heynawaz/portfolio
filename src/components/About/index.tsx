'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaFigma } from 'react-icons/fa6';
import { HiOutlineCodeBracket, HiOutlineServer, HiOutlineCloud, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiExpress, SiPostgresql, SiMongodb, SiRedis, SiGithubactions, SiVisualstudiocode, SiPostman, SiJest, SiNestjs, SiGraphql, SiPrisma, SiNginx, SiCypress, SiReactquery, SiRedux, SiBurpsuite, SiTerraform, SiKubernetes, SiGitlab, SiGooglecloud } from 'react-icons/si';
import { ls } from '@/styles/fonts';
import { cn } from '@/lib/utils';
import { AnimatedContent } from '../ui/animated-content';
import { SpotlightCard } from '../ui/spotlight-card';
import { IconType } from 'react-icons';

// Tech icons mapping with original brand colors
const techIcons: Record<string, { icon: IconType; color: string }> = {
  'React': { icon: FaReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#000000' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'Tailwind': { icon: SiTailwindcss, color: '#06B6D4' },
  'Framer': { icon: SiFramer, color: '#0055FF' },
  'React Query': { icon: SiReactquery, color: '#FF4154' },
  'Redux': { icon: SiRedux, color: '#764ABC' },
  'Node.js': { icon: FaNodeJs, color: '#339933' },
  'Express': { icon: SiExpress, color: '#000000' },
  'Nest.js': { icon: SiNestjs, color: '#E0234E' },
  'GraphQL': { icon: SiGraphql, color: '#E10098' },
  'Prisma': { icon: SiPrisma, color: '#2D3748' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'Redis': { icon: SiRedis, color: '#DC382D' },
  'AWS': { icon: FaAws, color: '#FF9900' },
  'Docker': { icon: FaDocker, color: '#2496ED' },
  'GitHub Actions': { icon: SiGithubactions, color: '#2088FF' },
  'Terraform': { icon: SiTerraform, color: '#7B42BC' },
  'Kubernetes': { icon: SiKubernetes, color: '#326CE5' },
  'GitLab': { icon: SiGitlab, color: '#FC6D26' },
  'Google Cloud': { icon: SiGooglecloud, color: '#4285F4' },
  'Nginx': { icon: SiNginx, color: '#009639' },
  'Cypress': { icon: SiCypress, color: '#17202C' },
  'Git': { icon: FaGitAlt, color: '#F05032' },
  'Figma': { icon: FaFigma, color: '#F24E1E' },
  'VS Code': { icon: SiVisualstudiocode, color: '#007ACC' },
  'Postman': { icon: SiPostman, color: '#FF6C37' },
  'Jest': { icon: SiJest, color: '#C21325' },
  'Burp Suite': { icon: SiBurpsuite, color: '#000000' },
};

const skills = [
  { category: 'Frontend', Icon: HiOutlineCodeBracket, items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer', 'React Query', 'Redux'] },
  { category: 'Backend', Icon: HiOutlineServer, items: ['Node.js', 'Express', 'Nest.js', 'GraphQL', 'Prisma', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { category: 'Cloud & DevOps', Icon: HiOutlineCloud, items: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'GitLab', 'Nginx'] },
  { category: 'Tools', Icon: HiOutlineWrenchScrewdriver, items: ['Git', 'Figma', 'VS Code', 'Postman', 'Jest', 'Cypress', 'Burp Suite'] },
];


export function About() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} id="about" className="relative w-full px-6 sm:px-4 xs:px-3 py-32 md:py-24 sm:py-16 xs:py-12 overflow-hidden bg-palette-cream">
      <div className="relative mx-auto max-w-7xl">
        {/* Main content */}
        <div className="grid grid-cols-[auto_1fr] items-start gap-16 lg:grid-cols-1 lg:gap-10 sm:gap-8">
          {/* Left: Profile Card */}
          <AnimatedContent delay={0.2} direction="left" distance={50}>
            <div className="flex flex-col items-center sticky top-24 lg:static lg:items-center">
              {/* Photo Card with Spotlight */}
              <SpotlightCard 
                className="p-6 sm:p-4 rounded-3xl sm:rounded-2xl border border-palette-beige/50"
                spotlightColor="rgba(18, 52, 88, 0.15)"
              >
                <div className="relative h-72 w-64 sm:h-64 sm:w-56 overflow-hidden rounded-2xl sm:rounded-xl">
                  <Image
                    src="/assets/shah-nawaz-about.png"
                    alt="Shah Nawaz"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </SpotlightCard>

              {/* Info */}
              <div className="mt-8 sm:mt-6 text-center lg:text-center">
                <h3 className={cn('text-2xl sm:text-xl font-semibold text-black', ls.className)}>
                  Shah Nawaz
                </h3>
                <p className={cn('mt-1 text-lg sm:text-base text-black/60', ls.className)}>Lead Full-Stack Engineer</p>

                {/* Social links */}
                <div className="mt-6 sm:mt-4 flex items-center justify-center gap-3">
                  {[
                    { href: 'https://github.com/heynawaz', Icon: FaGithub, label: 'GitHub' },
                    { href: 'https://twitter.com/heynawaz', Icon: FaXTwitter, label: 'Twitter' },
                    { href: 'https://www.linkedin.com/in/shahnawazz/', Icon: FaLinkedinIn, label: 'LinkedIn' },
                  ].map(({ href, Icon, label }) => (
                    <Link
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-black/10 transition-all hover:bg-palette-navy/10 hover:border-palette-navy/30 hover:scale-110"
                    >
                      <Icon className="h-[18px] w-[18px] sm:h-4 sm:w-4 text-black/70" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedContent>

          {/* Right: Content */}
          <div className="flex flex-col gap-6 sm:gap-4">
            {/* Bio */}
            <AnimatedContent delay={0.3} direction="up">
              <div className="space-y-4 sm:space-y-3 text-left min-[1025px]:text-center">
                <p className={cn('text-lg md:text-base sm:text-sm leading-relaxed text-black/70', ls.className)}>
                  I&apos;m a <span className="font-semibold text-black">Lead Full-Stack Engineer</span> who 
                  transforms complex ideas into elegant, high-performance digital products. My expertise spans the entire 
                  development lifecycle—from architecture design to deployment and beyond.
                </p>
                <p className={cn('text-lg md:text-base sm:text-sm leading-relaxed text-black/70', ls.className)}>
                  I thrive on solving challenging problems and building solutions that make a real impact. Whether it&apos;s 
                  crafting <span className="font-semibold text-black">AI-powered applications</span>, 
                  architecting <span className="font-semibold text-black">scalable SaaS platforms</span>, or 
                  optimizing performance for millions of users—I bring technical excellence and creative thinking to every project.
                </p>
              </div>
            </AnimatedContent>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4 sm:gap-3 xs:gap-2">
              {skills.map(({ category, Icon, items }, i) => (
                <AnimatedContent key={category} delay={0.2 + i * 0.1} direction="up">
                  <SpotlightCard 
                    className="rounded-3xl sm:rounded-2xl p-5 sm:p-4 border border-palette-beige/50 h-full"
                    spotlightColor="rgba(18, 52, 88, 0.1)"
                  >
                    <div className="flex items-center gap-2 mb-4 sm:mb-3">
                      <Icon className="h-5 w-5 sm:h-4 sm:w-4 text-palette-navy" />
                      <p className={cn('text-sm sm:text-xs font-semibold text-black', ls.className)}>{category}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-1.5">
                      {items.map((name) => {
                        const tech = techIcons[name];
                        const TechIcon = tech?.icon;
                        const isBlackIcon = tech?.color === '#000000';
                        return (
                          <div
                            key={name}
                            className="flex items-center gap-1.5 rounded-lg sm:rounded-md border border-black/10 bg-black/[0.02] px-3 py-1.5 sm:px-2 sm:py-1 transition-all hover:border-palette-navy/30 hover:bg-palette-navy/5"
                          >
                            {TechIcon && (
                              <TechIcon 
                                className={cn(
                                  'h-3.5 w-3.5 sm:h-3 sm:w-3',
                                  isBlackIcon && 'text-black'
                                )}
                                style={!isBlackIcon ? { color: tech.color } : undefined}
                              />
                            )}
                            <span className={cn('text-xs sm:text-[10px] font-medium text-black/70', ls.className)}>{name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </SpotlightCard>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
