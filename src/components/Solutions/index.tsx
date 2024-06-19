import { SectionHeader } from '@/components/common';
import { SolutionsCard } from './solution.card';

export function Solutions() {
  const servicesData = [
    {
      title: 'Frontend Development',
      description: 'Beautiful and responsive user interfaces',
      image: '/assets/svg/frontend.svg',
      details: ['Responsive Design', 'HTML/CSS', 'JavaScript', 'Frameworks and Libraries', 'Performance Optimization', 'Cross-Browser Compatibility', 'Accessibility'],
      className: 'bg-gradient-to-b from-slate-50 text-gray-700',
      // className: 'bg-gradient-to-br from-green-200 to-lime-200',
    },
    {
      title: 'Full Stack Development',
      description: 'Frontend + Backend',
      image: '/assets/svg/fullstack.svg',
      details: ['Frontend and Backend Integration', 'API Development', 'Database Management', 'Version Control', 'DevOps', 'Security', 'Problem Solving'],
      className: 'bg-gradient-to-b from-purple-50 text-purple-900 scale-110 hover:scale-[1.15]',
      // className: 'bg-gradient-to-br from-yellow-200 to-rose-300 scale-110 hover:scale-[1.15]',
    },
    {
      title: 'Backend Development',
      description: 'Scalable and complex backend systems',
      image: '/assets/svg/backend.svg',
      details: ['Server-Side Logic', 'Database Design', 'API Development', 'Authentication and Authorization', 'Performance Tuning', 'Scalability', 'Cloud Services'],
      className: 'bg-gradient-to-b from-slate-50 text-gray-700',
      // className: 'bg-gradient-to-br from-cyan-200 to-sky-400',
    },
  ];

  return (
    <section id="solutions" className="flex mt-20 justify-center flex-col w-full items-center py-28">
      <SectionHeader
        heading="Solutions"
        description="Unlock a world of exceptional services tailored to your needs, ranging from full-stack wizardry to mesmerizing frontend design and powerhouse backend development."
      />
      <div className="flex flex-row justify-center gap-16 mt-24">
        <SolutionsCard servicesData={servicesData} />
      </div>
    </section>
  );
}
