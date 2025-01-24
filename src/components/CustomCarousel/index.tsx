'use client';
import { cn } from '@/lib/utils';
import { arizonia, dm_serif, kaushan_script, mr_dafoe, pacifico, sail } from '@/styles/fonts';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const CustomCarousel = (props: any) => {
  const { items } = props;
  return (
    <Carousel autoPlay infiniteLoop showArrows stopOnHover swipeable axis="horizontal" showStatus={false} showIndicators={false} interval={7000}>
      {items.map((item: any, idx: number) => (
        <div className="mt-16 flex flex-col m-auto sm:w-96 max-w-[50rem] rounded-tl-2xl rounded-br-2xl shadow-sm flex-shrink-0 px-8 py-6 bg-white" key={item?.name}>
          <div aria-hidden="true" className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5"></div>
          <p className={`relative z-20 text-lg leading-[1.5] text-left text-gray-700 font-light`}>&quot;{item?.quote}&quot;</p>
          <div className="relative z-20 mt-8 flex flex-row gap-4 items-center">
            <Image src={item?.image || '/assets/img/avatar.png'} draggable={false} className="rounded-full !size-11" alt="People" width={4500} height={2000} />
            <span className="flex flex-col gap-1 items-start">
              <span className=" text-md leading-[1.3] text-purple-800 font-semibold">{item?.name}</span>
              <span className=" text-sm leading-[1] text-muted-foreground font-normal">{item?.title}</span>
            </span>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
