import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface IPortfolioCard {
  cardDetails: Record<string, string>[];
}

export default function PortfolioCard(props: IPortfolioCard) {
  const { cardDetails } = props;
  return (
    <>
      {cardDetails?.map((element, index) => (
        <div key={index} className="w-[340px] shadow-xl border border-gray-200 rounded-xl break-inside-avoid mb-6 mx-3 p-5 bg-purple-50/10">
          <Image src={element?.screenshotUrl} width={200} height={100} alt={element?.projectTitle} className="w-full shadow-sm rounded-lg transition-all duration-300 ease-in" />
          <div className="w-full leading-[22px]">
            <h1 className="mt-4 font-semibold text-xl text-secondary-platform">{element?.projectTitle}</h1>
            <p className="mt-1 font-medium text-sm text-gray-500">{element?.techStack}</p>
            <p className="w-full mt-2 text-md text-gray-500 font-light">{element?.projectDescription}</p>
          </div>
          <div className="flex gap-3 mt-3">
            <Button variant={'outline'} size={'sm'} className="pt-[2px] text-gray-700 bg-purple-50/70 font-normal border-violet-200/75">
              Live Demo
            </Button>
            <Button variant={'outline'} size={'sm'} className="pt-[2px] font-normal text-gray-700">
              GitHub
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}
