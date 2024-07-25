import PulseLoader from 'react-spinners/PulseLoader';

export default function Loading() {
  return (
    <section className="h-screen w-screen container grid place-items-center">
      <PulseLoader color="#6b21a8" />
    </section>
  );
}
