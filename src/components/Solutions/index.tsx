import { SectionHeader } from '@/components/common';
import Link from 'next/link';
import { SolutionsCard } from './solution.card';

export function Solutions() {
  return (
    <section id="solutions" className="mt-36 flex justify-center flex-col w-full items-center mb-36 pt-28">
      <SectionHeader heading="Solutions" description="Unlock a world of exceptional services tailored to your needs, ranging from full-stack wizardry to mesmerizing frontend design and powerhouse backend development." />
      <div className="flex flex-row justify-center gap-16 mt-20">
        <SolutionsCard title={'Frontend Development'} description={'Beautiful and responsive user interfaces'} image={'/assets/svg/frontend.svg'} />
        <SolutionsCard title={'Full Stack Development'} description={'Frontend + Backend'} image={'/assets/svg/fullstack.svg'} className="bg-gradient-to-br from-purple-300 from-40% to-indigo-300 scale-110 hover:scale-[1.15]" />
        <SolutionsCard title={'Backend Development'} description={'Scalable and complex backend systems'} image={'/assets/svg/backend.svg'} />
      </div>
      <div className="flex text-center gap-20 mt-36">
        <button className="bg-gradient-to-br from-[#00FFD1] to-[#0397D6] rounded-full shadow-[inset_3px_3px_5px_1px_rgb(255,255,255,.5)] p-[16px] px-[42px] w-[220px] text-white font-medium pt-[20px]">Schedule a free call</button>
        <Link
          href={'/assets/pdf/Shah Nawaz - Resume.pdf'}
          target="_blank"
          className="bg-gradient-to-br from-[#5D23FF] to-[#AB01C7] rounded-full shadow-[inset_3px_3px_5px_1px_rgb(255,255,255,.5)] p-[16px] px-[42px] w-[220px] text-white font-medium pt-[20px]"
        >
          Download CV
        </Link>
      </div>
    </section>
  );
}
