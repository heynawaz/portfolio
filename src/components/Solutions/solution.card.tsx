import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import Image from 'next/image';
interface ISolutionsProps {
  title: string;
  description: string;
  image: string;
  details: string[];
  className?: string;
}

export function SolutionsCard({ servicesData }: { servicesData: ISolutionsProps[] }) {
  const tagline: string[] = ['MOST POPULAR', 'MOST DEMANDED', 'MOST PREFERRED'];
  
  return servicesData?.map((element: any, index: number) => (
    <div
      key={index}
      className={cn(
        'text-black leading-5 p-7 sm:!p-6 xl:p-10 w-[400px] xl:min-w-[500px] 2xl:w-[380px] sm:!min-w-[90%] rounded-xl xl:shadow-md hover:shadow-md hover:scale-105 transition ease-in duration-150',
        element?.className,
      )}
    >
      <Image src={element?.image} draggable={false} height={100} width={60} alt={element?.title} />
      {/* <p className="text-xs xl:text-sm mt-8 mb-1 text-gray-400 font-medium tracking-wider">{tagline[index]}</p> */}
      <h1 className="w-[180px] text-2xl xl:text-[2.6rem] sm:!text-[2rem] font-bold leading-tight mt-5">{element?.title}</h1>
      <ul className="mt-4 xl:mt-5 text-sm xl:text-[19px] sm:!text-[16px] w-full text-gray-700">
        {element?.details?.map((item: string, index: number) => (
          <li key={index} className="[&:not(:last-child)]:border-b h-[3rem] xl:h-[4rem] sm:!h-[3.3rem] w-full border-black/5 flex items-center">
            <Check className="mr-2" size={14} color="#00714b" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  ));
}
