'use client';

import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import { ls } from '@/styles/fonts';
import { cn } from '@/lib/utils';

export function NewHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-2 sm:py-2">
      {/* Full viewport width background */}
      <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 bg-palette-cream border-b border-palette-beige/50" />
      {/* Content - slightly narrower than hero */}
      <div className="relative w-full px-6 sm:px-4 xs:px-3">
        <div className="mx-auto max-w-6xl lg:max-w-none w-full flex items-center justify-between py-1.5 sm:py-1">
          {/* Logo */}
          <Link
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2"
          >
            <span className={cn('text-2xl sm:text-xl xs:text-lg font-bold tracking-tight transition-colors text-palette-navy', ls.className)}>
              nawaz<span className="text-palette-black">.</span>
            </span>
          </Link>

          {/* CTA */}
          <Link
            href="https://cal.com/shah-nawaz/15min"
            target="_blank"
            className={cn(
              'flex items-center gap-1.5 leading-none px-4 py-2 sm:px-3 sm:py-1.5 xs:px-3 xs:py-1.5 min-h-[44px] xs:min-h-[44px] rounded-full text-sm xs:text-xs font-medium transition-all duration-300 whitespace-nowrap',
              'bg-palette-navy/95 backdrop-blur-sm text-palette-cream hover:bg-palette-navy border border-palette-navy/20',
              'hover:shadow-lg hover:shadow-palette-navy/20 active:scale-[0.98]',
              ls.className
            )}
          >
            <span className="block translate-y-px">Let&apos;s talk</span>
            <HiArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
