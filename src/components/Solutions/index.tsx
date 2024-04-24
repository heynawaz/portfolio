import { SectionHeader } from '@/components/common';
import { SolutionsCard } from './solution.card';

export function Solutions() {
  return (
    <section
      id="solutions"
      className="mt-6 flex justify-center flex-col w-full items-center mb-36 pt-28"
    >
      <SectionHeader
        heading="Solutions"
        description="Unlock a world of exceptional services tailored to your needs, ranging from full-stack wizardry to mesmerizing frontend design and powerhouse backend development."
      />
      <div className="flex flex-row justify-center gap-16 mt-20">
        <SolutionsCard
          title={'Frontend Development'}
          description={'Beautiful and responsive user interfaces'}
          image={'/assets/svg/frontend.svg'}
          className="bg-gradient-to-br from-green-200 to-lime-200"
        />
        <SolutionsCard
          title={'Full Stack Development'}
          description={'Frontend + Backend'}
          image={'/assets/svg/fullstack.svg'}
          className="bg-gradient-to-br from-yellow-200 to-rose-300 scale-110 hover:scale-[1.15]"
        />
        <SolutionsCard
          title={'Backend Development'}
          description={'Scalable and complex backend systems'}
          image={'/assets/svg/backend.svg'}
          className="bg-gradient-to-br from-cyan-200 to-sky-400"
        />
      </div>
    </section>
  );
}
