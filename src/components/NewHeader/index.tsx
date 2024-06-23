'use client';
import { useWindowDimensions } from '@/hooks';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

export function NewHeader() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { width } = useWindowDimensions();
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
        className={`fixed top-0 z-50 flex justify-center items-center h-28 sm:h-20 w-screen transition-all ease-in-out duration-500
        ${hasScrolled && 'sm:hidden rounded-full !px-6 !max-w-fit !h-[70px] backdrop-filter backdrop-blur-md top-5 shadow-purple-900/30 shadow-[0px_2px_5px_-1px_rgb(0,0,0,0.1)] bg-gradient-to-r from-gray-100/20 to-gray-100/20'}`}
      >
        <div className={`w-[55%] xl:w-[90%] flex justify-between items-center transition-all ease-in-out duration-500 ${hasScrolled && 'sm:fixed flex justify-between w-[90%]'}`}>
          {!hasScrolled && (
            <Link href={'#'} className="sm:block text-3xl text-black font-bold tracking-tight">
              nawaz<span className="text-purple-900">.</span>
            </Link>
          )}
          <button className="hidden sm:block outline-none transition-all ease-in-out duration-500" onClick={() => setMobile(!mobile)}>
            <RxHamburgerMenu size={18} />
          </button>
          {mobile ? (
            <nav className="hidden absolute right-[5%] top-20 z-30 sm:flex flex-col bg-purple-900/95 px-4 w-48 text-sm font-medium text-white rounded-xl rounded-tr-none transition-all ease-in-out duration-500">
              <Link href={'#'} onClick={() => (document.body.scrollTop = 0)} onClickCapture={() => setMobile(false)} className="h-10 flex items-center hover:underline underline-offset-8 decoration-1">
                Home
              </Link>
              <Link href={'#about'} onClickCapture={() => setMobile(false)} className="h-10 flex items-center hover:underline underline-offset-8 decoration-1">
                About
              </Link>
              <Link href={'#showcase'} onClickCapture={() => setMobile(false)} className="h-10 flex items-center hover:underline underline-offset-8 decoration-1">
                Showcase
              </Link>
              <Link href={'#solutions'} onClickCapture={() => setMobile(false)} className="h-10 flex items-center hover:underline underline-offset-8 decoration-1">
                Solutions
              </Link>
            </nav>
          ) : (
            <nav
              className={`sm:hidden flex gap-12 items-center text-purple-900 h-fit text-[16px] tracking-wide font-medium transition-all ease-in-out duration-700
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
          )}
        </div>
      </header>
    </>
  );
}
