import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '../ui/button';

interface ISolutionsProps {
  title: string;
  description: string;
  image: string;
  details: string[];
  className?: string;
}

export function SolutionsCard({ servicesData }: { servicesData: ISolutionsProps[] }) {
  return servicesData?.map((element: any, index: number) => (
    <>
      <div
        key={index}
        className={cn(
          'grid place-items-center text-center text-black leading-5 w-[380px] rounded-xl shadow-md hover:shadow-none py-6 pb-3 pt-16 hover:scale-105 transition ease-in duration-150',
          element?.className,
        )}
      >
        <Image src={element?.image} draggable={false} height={100} width={150} alt={'Frontend logo'} />
        <h1 className="w-[180px] mt-12 text-[22px] tracking-wide font-semibold leading-6">{element?.title}</h1>
        {/* <p className="w-[180px] mt-6 text-[15px]">{element?.description}</p> */}
        <ul className="flex flex-col items-center justify-center mt-8 text-gray-800 text-[16px] w-[90%]">
          {element?.details?.map((item: string, index: number) => (
            <>
              <li key={index} className="[&:not(:last-child)]:border-b h-12 w-full border-white/30 flex items-center justify-center gap-2 mx-6">
                {/* <IoCheckmarkCircleSharp size={18} className="opacity-90" /> */}
                {item}
              </li>
            </>
          ))}
        </ul>
        <SolutionBtn index={index} />
      </div>
    </>
  ));
}

export function SolutionBtn({ index }: { index: number }) {
  return <Button className="w-[90%] py-7 rounded-lg bg-white/80 text-black mt-3 text-md">Let&apos;s chat on {index === 0 ? 'Frontend' : index === 1 ? 'Full Stack' : 'Backend'}</Button>;
}