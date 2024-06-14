import { cn } from '@/utils/cn';
import { HTMLProps } from 'react';
import { SectionHeader } from '../common';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

const testimonials = [
  {
    quote:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    title: 'A Tale of Two Cities',
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'William Shakespeare',
    title: 'Hamlet',
  },
  {
    quote: 'All that we see or seem is but a dream within a dream.',
    name: 'Edgar Allan Poe',
    title: 'A Dream Within a Dream',
  },
  {
    quote: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    name: 'Jane Austen',
    title: 'Pride and Prejudice',
  },
  {
    quote:
      'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
    name: 'Herman Melville',
    title: 'Moby-Dick',
  },
];

export function Testimonials({ className }: { className?: HTMLProps<HTMLElement>['className'] }) {
  return (
    <section
      id="testimonials"
      className={cn(
        className,
        `w-full flex flex-col justify-center items-center py-36 bg-[linear-gradient(to_top,rgba(255,255,255,1),rgba(255,255,255,0.3),rgba(255,255,255,1)),url('/assets/img/hero-bg-6.jpg')] bg-no-repeat bg-center bg-cover'`,
      )}
    >
      <SectionHeader heading="Wall of love" description="Real people. Real Results." />
      <div className="h-fit mt-16 rounded-md flex flex-col text-left antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
      </div>
    </section>
  );
}
