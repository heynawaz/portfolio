'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa6';
import { IoNavigate } from 'react-icons/io5';

interface IShowcaseCard {
  cardDetails: Record<string, string>[];
}

export default function ShowcaseCard(props: IShowcaseCard) {
  const { cardDetails } = props;

  return (
    <>
      {cardDetails?.map((element, index) => (
        <div
          key={index}
          className={`p-5 w-[340px] transition-all duration-150 shadow-lg shadow-purple-900/10 hover:shadow-sm border border-purple-950/5 rounded-xl break-inside-avoid mb-6 mx-3 bg-white`}
        >
          <Image src={element?.screenshotUrl} draggable={false} width={2000} height={100} alt={element?.projectTitle} className="w-full shadow-sm rounded-lg" />
          <div className="w-full leading-[22px] mt-4">
            <h1 className="font-bold text-xl text-purple-900">{element?.projectTitle}</h1>
            <div className="flex gap-[7px] flex-wrap mt-2">
              {element?.techStack?.split(',').map((tech, index) => (
                <span key={index} className="font-medium text-xs text-gray-600 bg-gray-100/60 border border-gray-900/5 px-[5px] pt-[4px] pb-[2px] rounded-sm">
                  <p>{tech}</p>
                </span>
              ))}
            </div>
            <p className="w-full mt-3 text-[15px] text-gray-400 font-light">{element?.projectDescription}</p>
          </div>
          <div className="flex gap-3 mt-5">
            <Button variant={'outline'} size={'sm'} className="text-white bg-purple-900 hover:bg-purple-900/90 hover:text-white font-medium">
              <IoNavigate className="mr-2 text-white" />
              <p className="pt-[3px]">Live Demo</p>
            </Button>
            <Button variant={'outline'} size={'sm'} className="font-medium text-gray-600 hover:bg-gray-50">
              <FaGithub className="mr-2" />
              <p className="pt-[3px]">GitHub</p>
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}
