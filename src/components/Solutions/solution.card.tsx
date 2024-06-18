import { cn } from '@/lib/utils';
import Image from 'next/image';

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
          'grid place-items-center text-center text-black leading-5 w-[380px] rounded-xl shadow-md hover:shadow-none py-6 pb-0 pt-16 hover:scale-105 transition ease-in duration-150',
          element?.className,
        )}
      >
        <Image src={element?.image} draggable={false} height={100} width={150} alt={'Frontend logo'} />
        <h1 className="w-[180px] mt-12 text-[20px] tracking-wide font-semibold leading-6">{element?.title}</h1>
        {/* <p className="w-[180px] mt-6 text-[15px]">{element?.description}</p> */}
        <ul className="mt-10 text-gray-800 text-[16px] bg-white/10 rounded-t-3xl p-6 w-full">
          {element?.details?.map((item: string, index: number) => (
            <>
              <li className=" gap-2 my-3">
                {/* <IoCheckmarkCircleSharp size={18} className="opacity-90" /> */}
                {item}
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  ));
}
