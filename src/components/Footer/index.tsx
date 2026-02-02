'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { HiOutlineEnvelope, HiArrowUpRight } from 'react-icons/hi2';
import { ls } from '@/styles/fonts';
import { cn } from '@/lib/utils';
import { AnimatedContent } from '../ui/animated-content';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonial' },
];

const socials = [
  { href: 'https://www.linkedin.com/in/shahnawazz/', Icon: FaLinkedinIn, label: 'LinkedIn', color: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]', iconHover: 'group-hover:!text-white' },
  { href: 'https://twitter.com/heynawaz', Icon: FaXTwitter, label: 'Twitter', color: 'hover:bg-palette-black hover:border-palette-black', iconHover: 'group-hover:!text-palette-cream' },
  { href: 'https://github.com/heynawaz', Icon: FaGithub, label: 'GitHub', color: 'hover:bg-palette-black hover:border-palette-black', iconHover: 'group-hover:!text-palette-cream' },
  { href: 'mailto:shahnawaz.com@hotmail.com', Icon: HiOutlineEnvelope, label: 'Email', color: 'hover:bg-palette-navy hover:border-palette-navy', iconHover: 'group-hover:!text-white' },
];

export function Footer() {
  const ref = useRef<HTMLElement>(null);

  return (
    <footer
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ backgroundImage: 'linear-gradient(to bottom, #F1EFEC 0%, #F1EFEC 55%, rgba(212, 201, 190, 0.2) 100%)' }}
    >
        <div className="mx-auto max-w-6xl px-6 sm:px-4 xs:px-3">
        {/* Main footer content */}
        <div className="py-16 md:py-12 sm:py-10">
          <AnimatedContent direction="up" distance={20}>
            <div className="flex flex-wrap justify-between gap-12 lg:gap-8">
              {/* Left: Brand & CTA */}
              <div className="flex-none md:w-full max-w-xs">
                <Link
                  href="#"
                  onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={cn('text-2xl sm:text-xl font-bold tracking-tight text-palette-navy transition-colors hover:text-palette-navy-light', ls.className)}
                >
                  nawaz<span className="text-palette-black">.</span>
                </Link>
                <p className={cn('mt-4 sm:mt-3 text-palette-black/60 text-sm sm:text-xs leading-relaxed max-w-sm', ls.className)}>
                  Turning ideas into products. Let&apos;s make it happen.
                </p>
                
                {/* CTA */}
                <Link
                  href="https://cal.com/shah-nawaz/15min"
                  target="_blank"
                  className={cn(
                    'group mt-6 sm:mt-4 inline-flex items-center gap-2 leading-none text-sm sm:text-xs font-medium text-palette-navy hover:text-palette-navy-light transition-colors',
                    ls.className
                  )}
                >
                  <span className="block translate-y-px">Book a free call</span>
                  <HiArrowUpRight className="h-4 w-4 sm:h-3.5 sm:w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Middle: Navigation */}
              <div className="flex-none md:w-full">
                <h4 className={cn('text-xs font-semibold uppercase tracking-wider text-palette-black/40 mb-4 sm:mb-3', ls.className)}>
                  Navigation
                </h4>
                <ul className="space-y-3 sm:space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={cn('text-sm sm:text-xs text-palette-black/60 hover:text-palette-navy transition-colors', ls.className)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Connect */}
              <div className="flex-none md:w-full">
                <h4 className={cn('text-xs font-semibold uppercase tracking-wider text-palette-black/40 mb-4 sm:mb-3', ls.className)}>
                  Connect
                </h4>
                <div className="flex flex-wrap gap-2">
                  {socials.map(({ href, Icon, label, color, iconHover }) => (
                    <Link
                      key={label}
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className={cn(
                        'group flex items-center justify-center leading-none h-11 w-11 sm:h-10 sm:w-10 rounded-xl',
                        'bg-palette-cream border border-palette-beige/50',
                        'transition-all duration-300',
                        color,
                        ls.className
                      )}
                      aria-label={label}
                    >
                      <Icon className={cn('h-5 w-5 sm:h-4 sm:w-4 text-palette-black/70 transition-colors', iconHover)} />
                    </Link>
                  ))}
                </div>
                
                {/* Email highlight */}
                <div className="mt-6 sm:mt-4">
                  <p className={cn('text-xs text-black/40 mb-2', ls.className)}>Or drop me an email</p>
                  <Link
                    href="mailto:shahnawaz.com@hotmail.com"
                    className={cn('text-sm sm:text-xs text-palette-black/80 hover:text-palette-navy transition-colors', ls.className)}
                  >
                    shahnawaz.com@hotmail.com
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </footer>
  );
}
