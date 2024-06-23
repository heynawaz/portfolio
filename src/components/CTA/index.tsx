import { dm_serif } from '@/styles/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';

type Props = {};

export function CTA({}: Props) {
  return (
    <section className="grid place-items-center my-40">
      <div className="flex items-center justify-center gap-20 shadow-xl rounded-2xl px-20 lg:px-10 py-48 xl:py-32 bg-zinc-50">
        <div className="h-full w-[50rem] md:w-full flex flex-col items-start justify-center">
          <h1 className={`${dm_serif.className} text-[3.8rem] xl:text-[3.3rem] sm:!text-[2.2rem] tracking-tight leading-[5rem] sm:leading-normal text-zinc-800`}>
            Let&apos;s <span className={`text-purple-800`}>Supercharge </span> Your Awesome Journey Together <span className="text-[3rem] sm:text-[1.8rem]">🚀</span>
          </h1>
          <p className="mt-6 mb-10 text-lg sm:text-[.9rem] leading-relaxed text-gray-500">
            Ready to take the next step? Get in touch today to schedule a consultation. Together, we can turn your vision into a reality.
          </p>
          {/* <Calendar> */}
          <Link href={'https://cal.com/shah-nawaz/15min'} target="_blank">
            <div className="flex items-center gap-3 bg-gradient-to-r from-purple-800 from-50% to-purple-900 text-white shadow-lg font-medium hover:opacity-90 px-4 py-3 tracking-wide rounded-full">
              <Image src={'/assets/Shah Nawaz.jpg'} className="rounded-full" alt="Shah Nawaz's Photo" width={30} height={40} />
              <div className="flex items-center gap-4 pt-[3px]">
                Schedule a free call
                <BiChevronRight />
              </div>
            </div>
          </Link>
          {/* </Calendar> */}
        </div>
        <div className="flex justify-center xl:hidden">
          <Image src={'/assets/svg/bg-side-7.svg'} alt="svg" draggable={false} height={1000} width={500} />
        </div>
      </div>
    </section>
  );
}
