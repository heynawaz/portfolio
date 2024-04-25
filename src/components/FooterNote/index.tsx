'use client';
import { Button } from '@/components/ui/button';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { motion } from 'framer-motion';
import { BsCalendar2Date } from 'react-icons/bs';
import { FaRegFilePdf } from 'react-icons/fa';

export function FooterNote() {
  return (
    <section className="flex justify-center flex-col w-full items-center mt-64 mb-52 h-full">
      <HeroHighlight className="w-full pb-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-2xl font-semibold text-center text-purple-900 leading-[70px]"
        >
          <Highlight className="py-5 px-5 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-none">
            &quot;From elegant user interfaces to robust backend systems, I thrive on solving design
            challenges.&nbsp;&nbsp;&nbsp;
            <br />
            &nbsp;&nbsp;&nbsp;Let&apos;s collaborate to bring your vision to life with dynamic web
            applications and intuitive interfaces.&quot;
          </Highlight>
          <br />
        </motion.h1>
      </HeroHighlight>
      <div className="relative max-w-5xl px-8 mt-12 h-full">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}

export const projects = [
  {
    title: 'Book a free consultation',
    description:
      "Whether you're seeking advice, brainstorming ideas, or discussing potential projects, I'm here to offer my expertise. Schedule a complimentary call at your convenience.",
    link: '#',
    icon: <BsCalendar2Date size={30} className="text-purple-900" />,
    button: (
      <div className="absolute bottom-2 z-50">
        <Button size={'default'} className="bg-purple-900 hover:bg-purple-800 px-5 tracking-wider">
          <p className="pt-[3px]">Schedule Call</p>
        </Button>
      </div>
    ),
  },
  {
    title: 'Download CV',
    description:
      'Curious about my background, skills, and accomplishments? Download my comprehensive CV to learn more about what I bring to the table.',
    icon: <FaRegFilePdf size={30} className="text-purple-900" />,
    button: (
      <div className="absolute bottom-2 z-50">
        <Button
          size={'default'}
          variant={'outline'}
          className="hover:bg-purple-100 px-5 tracking-wider"
          onClick={() => window.open('/assets/pdf/Shah Nawaz - Resume.pdf', '_blank')}
        >
          <p className="pt-[3px]">Download</p>
        </Button>
      </div>
    ),
  },
];
