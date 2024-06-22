import { cn } from '@/utils/cn';
import { HTMLProps } from 'react';
import { SectionHeader } from '../common';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

const testimonials = [
  {
    quote: 'Shah Nawaz has a great potential in JavaScript with great knowledge in Frontend and UI designing as well. Also, he has a great knowledge of information security.',
    name: 'Md. Umair Abdullah',
    title: 'Sr. Full Stack Developer',
    image: '/assets/img/umair.jpg',
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
    quote: 'He has a good knowledge of javascript and designing front-end and has good problem-solving and communication skills.',
    name: 'Mohd Arshad',
    title: 'Sr. Full Stack Developer',
    image: '/assets/img/arshad.jpg',
  },
];

export function Testimonials({ className }: { className?: HTMLProps<HTMLElement>['className'] }) {
  return (
    <section
      id="testimonials"
      className={cn(
        className,
        `w-full flex flex-col justify-center items-center my-48 md:my-20 bg-[linear-gradient(to_top,rgba(255,255,255,1),rgba(255,255,255,0.3),rgba(255,255,255,1)),url('/assets/img/hero-bg-6.jpg')] bg-no-repeat bg-center bg-cover'`,
      )}
    >
      <SectionHeader heading="Wall of love" description="Real people. Real Results." />
      <div className="h-fit mt-16 rounded-md flex flex-col text-left antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
      </div>
    </section>
  );
}
