'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function NewHeader() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const fileName = 'Shah Nawaz - Resume.pdf';

  // Download resume on key press
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'd') {
        const link = document.createElement('a');
        link.href = '/assets/pdf/Shah Nawaz - Resume.pdf';
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 1) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <header
    //   className={`fixed top-0 z-50 flex justify-center items-center h-28 w-full transition-all ease-in-out duration-500
    //   ${hasScrolled && 'rounded-full !px-6 !max-w-fit !h-[70px] backdrop-filter backdrop-blur-md top-5 shadow-[0px_1px_6px_-1px_rgb(0,0,0,0.1)] border border-purple-100 bg-gradient-to-r from-purple-100/40 via-violet-50/40 to-purple-100/40'}`}
    // >
    //   <div className={`relative w-[55%] flex justify-between items-center transition-all ease-in-out duration-500 ${hasScrolled && 'w-[90%]'}`}>
    //     <nav
    //       className={`flex gap-8 pt-[3px] items-center text-purple-950 h-fit text-[16px] tracking-wide font-semibold transition-all ease-in-out duration-700
    //                 ${hasScrolled && 'relative justify-center w-full pt-0'}`}
    //     >
    //       <Link href={'#'} onClick={() => (document.body.scrollTop = 0)} className="hover:underline underline-offset-8 decoration-1">
    //         Home
    //       </Link>
    //       <Link href={'#about'} className="hover:underline underline-offset-8 decoration-1">
    //         About
    //       </Link>
    //       {hasScrolled && (
    //         <Link href={'#'} className="absolute w-48 pb-[3px] text-center text-3xl text-black font-bold tracking-tight">
    //           nawaz<span className="text-indigo-400">.</span>
    //         </Link>
    //       )}
    //       <Link href={'#showcase'} className="hover:underline underline-offset-8 decoration-1">
    //         Showcase
    //       </Link>
    //       <Link href={'#solutions'} className="hover:underline underline-offset-8 decoration-1">
    //         Solutions
    //       </Link>
    //     </nav>
    //     {!hasScrolled && (
    //       <>
    //         <Link href={'#'} className="absolute flex items-center justify-center w-full text-3xl text-black font-bold tracking-tight">
    //           {/* <Image src={'/assets/img/favicon.ico'} alt="nawaz" height={10} width={20} className="mr-2" /> */}
    //           nawaz<span className="text-indigo-400">.</span>
    //         </Link>
    //         <Link
    //           href={'/assets/pdf/Shah Nawaz - Resume.pdf'}
    //           download={fileName}
    //           target="_blank"
    //           className="text-black border px-4 py-2 rounded-lg  transition-all ease-in duration-100 font-normal text-[17px] tracking-wide hover:underline hover:underline-offset-8"
    //         >
    //           Press <span className=" bg-gray-100 border border-gray-300 rounded-[3px] px-[4px] pt-[3px]">B</span> to book a call
    //         </Link>
    //       </>
    //     )}
    //   </div>
    // </header>

    <header
      className={`fixed top-0 z-50 flex justify-center items-center h-28 w-full transition-all ease-in-out duration-500 
      ${hasScrolled && 'rounded-full !px-6 !max-w-fit !h-[70px] backdrop-filter backdrop-blur-md top-5 shadow-[0px_1px_6px_-1px_rgb(0,0,0,0.1)] border border-purple-100 bg-gradient-to-r from-purple-100/40 via-violet-50/40 to-purple-100/40'}`}
    >
      <div className={`w-[55%] flex justify-between items-center transition-all ease-in-out duration-500 ${hasScrolled && 'w-[90%]'}`}>
        {!hasScrolled && (
          <Link href={'#'} className="text-3xl text-black font-bold tracking-tight">
            nawaz<span className="text-indigo-400">.</span>
          </Link>
        )}
        <nav
          className={`flex gap-12 items-center text-purple-950 h-fit text-[16px] tracking-wide font-semibold transition-all ease-in-out duration-700
                    ${hasScrolled && 'justify-center w-full pt-0'}`}
        >
          <Link href={'#'} onClick={() => (document.body.scrollTop = 0)} className="hover:underline underline-offset-8 decoration-1">
            Home
          </Link>
          <Link href={'#about'} className="hover:underline underline-offset-8 decoration-1">
            About
          </Link>
          {hasScrolled && (
            <Link href={'#'} className="w-48 pb-[3px] text-center text-3xl text-black font-bold tracking-tight">
              nawaz<span className="text-indigo-400">.</span>
            </Link>
          )}
          <Link href={'#showcase'} className="hover:underline underline-offset-8 decoration-1">
            Showcase
          </Link>
          <Link href={'#solutions'} className="hover:underline underline-offset-8 decoration-1">
            Solutions
          </Link>
        </nav>
      </div>
    </header>
  );

}
