interface ISectionHeader {
  heading: string;
  description: string;
}

export function SectionHeader(props: ISectionHeader) {
  const { heading, description } = props;
  return (
    <>
      <h1 className="flex flex-row items-center text-center rounded-md px-6 text-3xl text-purple-900 font-extrabold h-16 bg-gradient-to-r from-purple-100 from-40% to-indigo-100 pt-[4px] w-fit">
        {heading}
      </h1>
      <p className="w-[45rem] text-center mt-5 text-lg text-gray-500">{description}</p>
    </>
  );
}
