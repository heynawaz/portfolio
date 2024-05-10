'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa6';
import { IoNavigate } from 'react-icons/io5';

interface IPortfolioCard {
  cardDetails: Record<string, string>[];
}

export default function PortfolioCard(props: IPortfolioCard) {
  const { cardDetails } = props;

  return (
    <>
      {cardDetails?.map((element, index) => (
        <div key={index} className={`p-5 w-[340px] transition-all duration-150 shadow-md shadow-violet-100 border border-gray-200 rounded-xl break-inside-avoid mb-6 mx-3 bg-white bg-opacity-90`}>
          <Image src={element?.screenshotUrl} width={2000} height={100} alt={element?.projectTitle} className="w-full shadow-sm rounded-lg" />
          <div className="w-full leading-[22px] mt-4">
            <h1 className="font-bold text-xl text-secondary-platform">{element?.projectTitle}</h1>
            <div className="flex gap-[7px] flex-wrap mt-2">
              {element?.techStack?.split(',').map((tech, index) => (
                <span key={index} className="font-medium text-xs text-gray-600 bg-gray-100/60 border border-gray-900/5 px-[5px] pt-[4px] pb-1 rounded-sm">
                  <p>{tech}</p>
                </span>
              ))}
            </div>
            <p className="w-full mt-3 text-md text-gray-400 font-light">{element?.projectDescription}</p>
          </div>
          <div className="flex gap-3 mt-5">
            <Button variant={'outline'} size={'sm'} className="text-gray-700 bg-purple-50 hover:bg-purple-100 font-medium border-violet-200/75">
              <IoNavigate className="mr-2 text-purple-800" />
              <p className="pt-[3px]">Live Demo</p>
            </Button>
            <Button variant={'outline'} size={'sm'} className="font-medium text-gray-600 hover:bg-purple-50">
              <FaGithub className="mr-2" />
              <p className="pt-[3px]">GitHub</p>
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}
