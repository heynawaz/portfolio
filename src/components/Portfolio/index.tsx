import { SectionHeader } from '../common';
import PortfolioCard from './portfolio.card';

export function Portfolio() {
  const cardDetails = [
    {
      projectTitle: 'Project 1',
      projectDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam accusamus ratione doloremque eos explicabo iste voluptatibus, facere amet soluta possimus aperiam eum sit perferendis laudantium quidem aspernatur porro maxime impedit!',
      techStack: 'Next.js, Ant Design, TypeScript, Prisma, Zod',
      screenshotUrl: '/assets/img/portfolio.png',
      demoLink: '/someUrl',
      githubLink: '/someUrl',
    },
    {
      projectTitle: 'Project 2',
      projectDescription: 'Lorem ipsum dolor sit amet  eos explicabo iste voluptatibus, maxime impedit!',
      techStack: 'Next.js, Ant Design, TypeScript, Prisma, Zod, Docker, AWS',
      screenshotUrl: '/assets/img/portfolio.png',
      demoLink: '/someUrl',
      githubLink: '/someUrl',
    },
    {
      projectTitle: 'Project 1',
      projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.facere amet soluta possimus aperiam eum sit perferendis laudantium quidem aspernatur porro maxime impedit!',
      techStack: 'Next.js, Ant Design, TypeScript, Prisma, Zod',
      screenshotUrl: '/assets/img/portfolio.png',
      demoLink: '/someUrl',
      githubLink: '/someUrl',
    },
    {
      projectTitle: 'Project 2',
      projectDescription: 'Lorem ipsum dolor sit amet  eos  amet soluta possimus aperiam eum sit perferendis laudantium quidem aspernatur porro maxime impedit!',
      techStack: 'Next.js, Ant Design, TypeScript, Prisma, Zod, Docker, AWS',
      screenshotUrl: '/assets/img/portfolio.png',
      demoLink: '/someUrl',
      githubLink: '/someUrl',
    },
    {
      projectTitle: 'Project 1',
      projectDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam accusamus ratione doloremque eos explicabo iste voluptatibus, facere amet soluta possimus aperiam eum sit perferendis laudantium quidem aspernatur porro maxime impedit!',
      techStack: 'Next.js, Ant Design, TypeScript, Prisma, Zod',
      screenshotUrl: '/assets/img/portfolio.png',
      demoLink: '/someUrl',
      githubLink: '/someUrl',
    },
    {
      projectTitle: 'Project 1',
      projectDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam accusamus ratione doloremque eos explicabo iste voluptatibus, facere amet soluta possimus aperiam eum sit perferendis laudantium quidem aspernatur porro maxime impedit!',
      techStack: 'Next.js, Ant Design, TypeScript, Prisma, Zod',
      screenshotUrl: '/assets/img/portfolio.png',
      demoLink: '/someUrl',
      githubLink: '/someUrl',
    },
    {
      projectTitle: 'Project 2',
      projectDescription: 'Lorem ipsum dolor sit amet  eos expli aperiam eum sit perferendis laudantium quidem aspernatur porro maxime impedit!',
      techStack: 'Next.js, Ant Design, TypeScript, Prisma, Zod, Docker, AWS',
      screenshotUrl: '/assets/img/portfolio.png',
      demoLink: '/someUrl',
      githubLink: '/someUrl',
    },
    {
      projectTitle: 'Project 2',
      projectDescription: 'Lorem ipsum dolor sit amet  eos explicabo iste voluptatibus, facere amet soluta possimus aperiam eum sit perferendis laudantium quidem aspernatur porro maxime impedit!',
      techStack: 'Next.js, Ant Design, TypeScript, Prisma, Zod, Docker, AWS',
      screenshotUrl: '/assets/img/portfolio.png',
      demoLink: '/someUrl',
      githubLink: '/someUrl',
    },
  ];

  return (
    <section
      id="portfolio"
      className="mt-6 flex justify-center flex-col w-full items-center mb-36 pt-28"
    >
      <SectionHeader
        heading="Portfolio"
        description="Here you'll discover a selection of personal and client projects, each accompanied by its own comprehensive case study."
      />
      <div className="flex bg-[length:1900px_2200px] bg-center bg-no-repeat bg-[url('/assets/svg/brush.svg')]">
        <div className="bg-white bg-opacity-95">
          <div className="mt-16 mx-auto w-full columns-4">
            <PortfolioCard cardDetails={cardDetails} />
          </div>
        </div>
      </div>
    </section>
  );
}
