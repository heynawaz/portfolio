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
    <>
      <header
        className={`fixed top-0 z-50 flex justify-center items-center h-28 w-screen transition-all ease-in-out duration-500
        ${hasScrolled && 'rounded-full !px-6 !max-w-fit !h-[70px] backdrop-filter backdrop-blur-md top-5 shadow-purple-900/30 shadow-[0px_2px_5px_-1px_rgb(0,0,0,0.1)] bg-gradient-to-r from-gray-100/20 to-gray-100/20'}`}
      >
        <div className={`w-[55%] flex justify-between items-center transition-all ease-in-out duration-500 ${hasScrolled && 'w-[90%]'}`}>
          {!hasScrolled && (
            <Link href={'#'} className="text-3xl text-black font-bold tracking-tight">
              nawaz<span className="text-purple-900">.</span>
            </Link>
          )}
          <nav
            className={`flex gap-12 items-center text-purple-950 h-fit text-[16px] tracking-wide font-semibold transition-all ease-in-out duration-700
                    ${hasScrolled && 'flex items-center justify-center w-full pt-0'}`}
          >
            <Link href={'#'} onClick={() => (document.body.scrollTop = 0)} className="hover:underline underline-offset-8 decoration-1">
              Home
            </Link>
            <Link href={'#about'} className="hover:underline underline-offset-8 decoration-1">
              About
            </Link>
            {hasScrolled && (
              <Link href={'#'} className="w-36 pb-[4px] text-center text-3xl text-slate-800 font-bold tracking-tight">
                nawaz<span className="text-purple-700">.</span>
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
    </>
  );
}
