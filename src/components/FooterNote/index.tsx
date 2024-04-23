'use client';
import { BsCalendar2Date } from 'react-icons/bs';
import { IoMdDownload } from 'react-icons/io';
import { SectionHeader } from '../common';
import { Button } from '../ui/button';
import { HoverEffect } from '../ui/card-hover-effect';

export function FooterNote() {
  return (
    <section className="flex justify-center flex-col w-full items-center mb-52 pt-28">
      <SectionHeader
        heading="Let's Connect"
        description="Are you ready to take the next step towards realizing your goals? Let's connect and explore how we can collaborate to achieve success together."
      />

      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>

      <div className="flex gap-8 mt-20">
        <div className="">
          <Button
            variant={'outline'}
            size={'lg'}
            className="text-purple-700 py-7 px-8 bg-purple-50 hover:bg-purple-100 border-violet-200/75 font-medium text-md "
          >
            <BsCalendar2Date className="mr-3 text-purple-700" size={20} />
            <p className="pt-[3px]">Book a free consultation</p>
          </Button>
        </div>

        <Button
          variant={'outline'}
          size={'lg'}
          onClick={() => window.open('/assets/pdf/Shah Nawaz - Resume.pdf', '_blank')}
          className="font-medium text-md text-gray-600 py-7 px-8 hover:bg-purple-50"
        >
          <IoMdDownload className="mr-3" size={20} />
          <p className="pt-[3px]">Download CV</p>
        </Button>
      </div>
      <p className="text-center italic leading-[50px] text-2xl mt-28 font-medium text-purple-900/80">
        &quot;From elegant user interfaces to robust backend systems, I thrive on solving design
        challenges.
        <br />
        Let&apos;s collaborate to bring your vision to life with dynamic web applications and
        intuitive interfaces.&quot;
      </p>
    </section>
  );
}

export const projects = [
  {
    title: 'Stripe',
    description: 'A technology company that builds economic infrastructure for the internet.',
    link: 'https://stripe.com',
  },
  {
    title: 'Netflix',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    link: 'https://netflix.com',
  },
  {
    title: 'Google',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    link: 'https://google.com',
  },
  {
    title: 'Meta',
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: 'https://meta.com',
  },
  {
    title: 'Amazon',
    description:
      'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
    link: 'https://amazon.com',
  },
  {
    title: 'Microsoft',
    description:
      'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
    link: 'https://microsoft.com',
  },
];
