'use client';

import { ls } from '@/styles/fonts';
import { cn } from '@/lib/utils';
import { BlurText } from '@/components/ui/blur-text';

interface ISectionHeader {
  heading: string;
  description: string;
  label?: string;
  className?: string;
}

export function SectionHeader({ heading, description, label, className }: ISectionHeader) {
  return (
    <div className={cn('flex w-full max-w-2xl flex-col items-center gap-4 text-center mx-auto', className)}>
      {label && (
        <p className={cn('text-sm font-semibold uppercase tracking-widest text-violet-600', ls.className)}>
          {label}
        </p>
      )}
      <h2 className={cn('text-3xl font-semibold tracking-tight text-black sm:text-4xl', ls.className)}>
        <BlurText text={heading} animateBy="words" delay={100} />
      </h2>
      <p className={cn('text-lg leading-relaxed text-black/50', ls.className)}>{description}</p>
    </div>
  );
}
