import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link?: string;
    newTab?: boolean;
    icon: React.ReactNode;
    button: React.ReactNode;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn('grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-2 py-10', className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link || '#'}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          target={`${item?.newTab ? '_blank' : '_self'}`}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-br from-purple-100 from-40% to-indigo-100 block rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className={`${idx === 0 && 'bg-gradient-to-br from-purple-50 from-40% to-indigo-50 hover:bg-white'} h-full`}>
            <div className="flex flex-row gap-4 items-center">
              {item?.icon}
              <CardTitle>{item?.title}</CardTitle>
            </div>
            <CardDescription>{item?.description}</CardDescription>
            {item?.button}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn('rounded-xl h-full p-4 overflow-hidden border border-gray-200 hover:border-transparent relative z-20 bg-white w-[25rem]', className)}>
      <div className="relative z-50 h-full">
        <div className="p-4 h-full">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn('text-purple-900 text-lg font-bold tracking-wide mt-1', className)}>{children}</h4>;
};

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn('mt-6 mb-12 text-zinc-700 tracking-wide leading-relaxed font-normal text-sm', className)}>{children}</p>;
};
