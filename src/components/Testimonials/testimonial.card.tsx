'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa6';
import { IoNavigate } from 'react-icons/io5';

interface IShowcaseCard {
  cardDetails: Record<string, string>[];
}

export default function TestimonialCard(props: IShowcaseCard) {
  const { cardDetails } = props;

  return cardDetails?.map((item, index) => (
    <div
      key={index}
      className={`p-5 w-[25rem] transition-all duration-150 shadow-lg shadow-purple-900/10 hover:shadow-sm border border-purple-950/5 rounded-xl break-inside-avoid mb-6 mx-3 bg-white/90`}
    >
      <div aria-hidden="true" className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5"></div>
      <p className={`relative z-20 text-md leading-[1.6] text-left text-gray-700 font-light`}>&quot;{item?.quote}&quot;</p>
      <div className="relative z-20 mt-8 flex flex-row gap-4 items-center">
        <Image src={item?.image || '/assets/img/avatar.png'} draggable={false} className="rounded-full !size-11" alt="People" width={4500} height={2000} />
        <span className="flex flex-col gap-1 items-start">
          <span className="text-md leading-[1.3] text-purple-800 font-semibold">{item?.name}</span>
          <span className="text-sm leading-[1] text-muted-foreground font-light">{item?.title}</span>
        </span>
      </div>
    </div>
  ));
}
