'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

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
    <header
      className={`fixed top-0 z-50 flex justify-center items-center h-28 w-full transition-all ease-in duration-300 
      ${hasScrolled && 'rounded-full w-[36%] backdrop-filter backdrop-blur-lg top-5 shadow-[0px_2px_3px_-1px_rgb(0,0,0,0.2)] h-[5rem] bg-gradient-to-r from-purple-100/40 via-violet-50/40 to-purple-100/40'}`}
    >
      <div className={`w-[70%] flex justify-between transition-all ease-in duration-200 ${hasScrolled && 'w-[90%]'}`}>
        <Link href={'#'} className="text-3xl text-black font-bold tracking-tight">
          nawaz<span className="text-indigo-400">.</span>
        </Link>
        <nav className={`flex gap-12 items-center text-purple-950 h-fit pt-2 text-[17px] tracking-wide font-semibold`}>
          <Link href={'#'} onClick={() => (document.body.scrollTop = 0)} className="hover:underline underline-offset-8 decoration-1">
            Home
          </Link>
          <Link href={'#about'} className="hover:underline underline-offset-8 decoration-1">
            About
          </Link>
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
