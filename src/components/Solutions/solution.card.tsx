import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ISolutionsProps {
  [key: string]: string;
}

export function SolutionsCard(props: ISolutionsProps) {
  const { title, description, image, className } = props;
  return (
    <div
      className={cn(
        'grid place-items-center text-center text-black leading-5 w-[310px] bg-gradient-to-br from-green-200 to-blue-200 border border-gray-230 rounded-xl shadow-[1px_1px_8px_1px_rgb(0,0,0,.1)] shadow-purple-50 py-12 pt-16 hover:scale-105 transition ease-in duration-150',
        className,
      )}
    >
      <Image src={image} height={100} width={150} alt={'Frontend logo'} />
      <h1 className="w-[180px] mt-12 text-xl tracking-wide font-semibold leading-6">{title}</h1>
      <p className="w-[180px] mt-6 text-[15px]">{description}</p>
    </div>
  );
}
