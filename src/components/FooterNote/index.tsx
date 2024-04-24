'use client';
import { motion } from 'framer-motion';
import { BsCalendar2Date } from 'react-icons/bs';
import { FaRegFilePdf } from 'react-icons/fa';
import { HoverEffect } from '../ui/card-hover-effect';
import { HeroHighlight, Highlight } from '../ui/hero-highlight';
export function FooterNote() {
  return (
    <section className="flex justify-center flex-col w-full items-center mt-64 mb-52">
      <HeroHighlight className="w-full pb-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-2xl font-semibold text-center text-neutral-700 leading-[70px]"
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
      <div className="max-w-5xl px-8 mt-12">
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
  },
  {
    title: 'Download CV',
    description:
      'Curious about my background, skills, and accomplishments? Download my comprehensive CV to learn more about what I bring to the table.',
    link: '/assets/pdf/Shah Nawaz - Resume.pdf',
    newTab: true,
    icon: <FaRegFilePdf size={30} className="text-purple-900" />,
  },
];
