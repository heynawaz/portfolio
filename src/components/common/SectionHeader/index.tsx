interface ISectionHeader {
  heading: string;
  description: string;
}

export function SectionHeader(props: ISectionHeader) {
  const { heading, description } = props;
  return (
    <>
      <h1 className="flex flex-row items-center text-center rounded-md px-6 text-4xl text-gray-800 font-extrabold h-16 bg-gradient-to-r from-indigo-500 from-30% to-purple-600 text-transparent bg-clip-text pt-[4px] w-fit">{heading}</h1>
      <p className="w-[45rem] text-center mt-1 text-lg text-gray-500">{description}</p>
    </>
  );
}
