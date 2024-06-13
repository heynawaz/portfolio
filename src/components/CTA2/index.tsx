import { dm_serif } from '@/styles/fonts';
import Image from 'next/image';

type Props = {};

export default function CTA2({}: Props) {
  return (
    <>
      <section className="w-full my-32 flex justify-center">
        <div className="flex items-center justify-center gap-48 shadow-sm w-full h-[50rem] px-20 bg-zinc-50">
          <div className="flex flex-col w-[800px]">
            <h1 className={`${dm_serif.className} text-[4.2rem] tracking-tight leading-[5rem] text-zinc-800`}>
              <span className={`${dm_serif.className} text-purple-900`}>Why </span>choose me?
            </h1>
            <p className="mt-5 mb-16 text-lg leading-relaxed text-gray-500">
              As a passionate full-stack developer, I bring a wealth of experience in building robust, scalable, and efficient web applications. From front-end user interfaces to back-end server
              logic, I have the skills and expertise to handle every aspect of your project.
            </p>
          </div>
          <div className="flex">
            {/* <Image src={'/assets/svg/logos.svg'} alt="Technology" draggable={false} width={700} height={700} /> */}
            <Image src={'/assets/svg/bg-side-4.svg'} alt="svg" draggable={false} height={400} width={500} />
          </div>
        </div>
      </section>
    </>
  );
}
