import { pacifico } from '@/styles/fonts';

interface ISectionHeader {
  heading: string;
  description: string;
}

export function SectionHeader(props: ISectionHeader) {
  const { heading, description } = props;
  return (
    <div className="w-fit flex justify-center flex-col items-center text-center">
      <h1 className={`${pacifico.className} text-4xl sm:text-3xl bg-gradient-to-r from-purple-400 from-30% to-indigo-950 text-transparent bg-clip-text w-full h-14 sm:h-10`}>{heading}</h1>
      <p className="max-w-[45rem] md:w-[90%] font-light text-center mt-3 text-lg md:text-[.9rem] md:leading-[1.4rem] text-gray-500">{description}</p>
    </div>
  );
}
