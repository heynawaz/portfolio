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
  const getTagline: Record<number, string> = {
    0: 'MOST POPULAR',
    1: 'MOST DEMANDED',
    2: 'MOST PREFERRED',
  };
  return servicesData?.map((element: any, index: number) => (
    <>
      <div key={index} className={cn('text-black leading-5 p-7 w-[380px] rounded-xl hover:shadow-md hover:scale-105 transition ease-in duration-150', element?.className)}>
        <Image src={element?.image} draggable={false} height={100} width={60} alt={element?.title} />
        <p className="text-xs mt-8 mb-1 text-gray-400 font-medium tracking-wider">{getTagline[index]}</p>
        <h1 className="w-[180px] text-[2.1rem] font-bold leading-tight">{element?.title}</h1>
        <ul className="mt-4 text-[16px] w-full text-gray-700">
          {element?.details?.map((item: string, index: number) => (
            <li key={index} className="[&:not(:last-child)]:border-b h-[3rem] w-full border-black/5 flex items-center">
              <Check className="mr-2" size={20} color="#00B200" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  ));
}
