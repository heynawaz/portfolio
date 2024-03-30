import Link from 'next/link';
import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="fixed right-0 z-10 bg-white rounded-tl-full rounded-bl-full mt-12 py-3 pl-4 pr-2 shadow-[-1px_3px_5px_0px_rgb(0,0,0,0.1)] flex flex-row items-center h-fit font-semibold text-lg text-primary transition-all">
      <Link href={'#'} className="py-2 px-6 rounded-full hover:bg-primary hover:text-white">
        Home
      </Link>
      <Link href={'#'} className="py-2 px-6 rounded-full hover:bg-primary hover:text-white">
        About
      </Link>
      <Link href={'#'} className="py-2 px-6 rounded-full hover:bg-primary hover:text-white">
        Portfolio
      </Link>
      <Link href={'#'} className="py-2 px-6 rounded-full hover:bg-primary hover:text-white">
        Services
      </Link>
    </nav>
  );
};

export default Navbar;
