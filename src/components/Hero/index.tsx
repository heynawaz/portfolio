import Image from "next/image";
import React from 'react';
import Navbar from '../Navbar';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative h-screen">
      <Image src={'/svg/hero.svg'} className="object-fill min-w-max" fill={true} alt="Hero background" priority={true} />
      <header className="absolute w-full pl-24 mt-12 flex justify-between items-center">
        <div className="text-3xl text-white font-bold tracking-tight">nawaz.</div>
      </header>
    </div>
  );
};

export default Hero;
