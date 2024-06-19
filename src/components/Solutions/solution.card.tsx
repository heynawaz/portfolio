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
  return servicesData?.map((element: any, index: number) => (
    <>
      <div key={index} className={cn('text-black leading-5 p-7 w-[380px] rounded-xl hover:shadow-md hover:scale-105 transition ease-in duration-150', element?.className)}>
        <Image src={element?.image} draggable={false} height={100} width={60} alt={element?.title} />
        <p className="text-sm mt-8 mb-1 text-gray-400 font-medium tracking-wide">MOST POPULAR</p>
        <h1 className="w-[180px] text-[2.1rem] font-bold leading-tight">{element?.title}</h1>
        {/* <p className="w-[180px] mt-6 text-[15px]">{element?.description}</p> */}
        <ul className="mt-4 text-[16px] w-full text-gray-700">
          {element?.details?.map((item: string, index: number) => (
            <li key={index} className="[&:not(:last-child)]:border-b h-[3rem] w-full border-black/5 flex items-center">
              <Check className="mr-2" size={20} color="darkgreen" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  ));
}
