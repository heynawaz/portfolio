import { SectionHeader } from '@/components/common';
import { SolutionsCard } from './solution.card';

export function Solutions() {
  const servicesData = [
    {
      title: 'Frontend Development',
      description: 'Beautiful and responsive user interfaces',
      image: '/assets/svg/frontend.svg',
      details: [
        'Responsive Design',
        'Single Page Applications (SPA)',
        'Progressive Web Apps (PWA)',
        'Micro Frontends',
        'JavaScript Development',
        'Performance Optimization',
        'Cross-Browser Compatibility',
        'Accessibility',
      ],
      className: 'bg-gradient-to-b from-emerald-50 text-gray-700',
    },
    {
      title: 'Full Stack Development',
      description: 'Frontend + Backend',
      image: '/assets/svg/fullstack.svg',
      details: [
        'End-to-End Web Development',
        'Real-Time Applications',
        'DevOps and Deployment',
        'Third-Party Integrations',
        'API Development and Management',
        'Full Lifecycle Development',
        'Scalability Solutions',
        'Maintenance and Support',
      ],
      className: 'bg-gradient-to-b from-fuchsia-100 text-gray-700 scale-110 xs:scale-100 hover:scale-[1.15]',
    },
    {
      title: 'Backend Development',
      description: 'Scalable and complex backend systems',
      image: '/assets/svg/backend.svg',
      details: [
        'API Development and Integration',
        'Database Design and Management',
        'Server-Side Scripting',
        'Authentication and Authorization',
        'Cloud Services Integration',
        'Microservices Architecture',
        'Performance Tuning and Optimization',
        'Security Implementations',
      ],
      className: 'bg-gradient-to-b from-rose-50 text-gray-700',
    },
  ];

  return (
    <section id="solutions" className="container flex mt-20 justify-center flex-col w-full items-center py-28 xs:!py-16">
      <SectionHeader
        heading="Solutions"
        description="Unlock a world of exceptional services tailored to your needs, ranging from full-stack wizardry to mesmerizing frontend design and powerhouse backend development."
      />
      <div className="grid grid-cols-3 xl:grid-cols-1 place-items-center gap-16 xl:gap-y-28 xs:!gap-y-12 mt-24">
        <SolutionsCard servicesData={servicesData} />
      </div>
    </section>
  );
}
