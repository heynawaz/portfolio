'use client'
import { cn } from '@/utils/cn';
import { HTMLProps, useRef } from 'react';
import { SectionHeader } from '../common';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';
import CustomCarousel from '../CustomCarousel';
import TestimonialCard from './testimonial.card';

const testimonials = [
  {
    quote: `I’ve had the chance to work with Shah, and he’s one of those people who just makes things easier. He’s quick to pick up on what’s needed and gets things done without a lot of back-and-forth. What stands out is his curiosity—he’s always looking to learn new tech and take on fresh challenges, which makes him a great person to have on any team. Shah’s also great at keeping things moving forward. He communicates well and is really good at managing tasks, making sure projects stay on track. He’s reliable and easy to work with, and I’m confident he’ll do well in whatever he takes on next. Definitely recommend him!`,
    name: 'Tushar Saini',
    title: 'Assistant Lead - Full Stack',
    image: '/assets/img/tushar.jpeg',
  },
  {
    quote:
      'Nawaz is a highly skilled engineer. He has consistently demonstrated an exceptional ability to solve complex problems and deliver high-quality solutions. He collaborates seamlessly with team members, and consistently goes above and beyond to ensure project success.',
    name: 'Dilshad Ahmad',
    title: 'Assistant Lead - Full Stack',
    image: '/assets/img/dilshad.jpeg',
  },
  {
    quote: 'Shah Nawaz has a great potential in JavaScript with great knowledge in Frontend and UI designing as well. Also, he has a great knowledge of information security.',
    name: 'Md. Umair Abdullah',
    title: 'Assistant Lead - Full Stack',
    image: '/assets/img/umair.jpg',
  },
  {
    quote: 'He has a good knowledge of javascript and designing front-end and has good problem-solving and communication skills.',
    name: 'Mohd Arshad',
    title: 'Assistant Lead - Python',
    image: '/assets/img/arshad.jpg',
  },
];

export function Testimonials({ className }: { className?: HTMLProps<HTMLElement>['className'] }) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <section
      id="testimonial"
      className={cn(
        className,
        `pt-32 w-full flex flex-col justify-center items-center my-32 md:my-20 bg-[linear-gradient(to_top,rgba(255,255,255,1),rgba(255,255,255,0.3),rgba(255,255,255,1)),url('/assets/img/hero-bg-6.jpg')] bg-no-repeat bg-center bg-cover'`,
      )}
    >
      <SectionHeader heading="Wall of love" description="Real people. Real Results." />
      {/* <div className="h-fit mt-16 rounded-md flex flex-col text-left antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
      </div> */}
      {/* <CustomCarousel items={testimonials} /> */}

      <div className="flex">
        <div>
          <div className="mt-16 mx-auto w-full columns-3 xl:columns-2 md:!columns-1">
            <TestimonialCard cardDetails={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
}
