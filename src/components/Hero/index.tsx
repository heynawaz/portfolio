import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative h-screen">
      <Image src={"/svg/hero.svg"} className="object-fill min-w-max" fill={true} alt="Hero background" priority={true} />
      <header className="absolute w-full pl-24 mt-14 flex justify-between items-center">
        <div className="text-3xl text-white font-bold tracking-tight">nawaz.</div>
        <nav className="bg-white rounded-tl-full rounded-bl-full py-5 pl-6 font-poppins">
          <ul className="flex flex-row items-center h-fit font-bold text-lg">
            <li className="mx-6">Home</li>
            <li className="mx-6">About</li>
            <li className="mx-6">Portfolio</li>
            <li className="mx-6">Services</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Hero;
