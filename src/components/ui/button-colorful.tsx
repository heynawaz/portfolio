import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

function ButtonColorful({ className, label = 'Book your free call', ...props }: ButtonColorfulProps) {
  return (
    <Button
      className={cn(
        'relative h-10 px-5 py-5 overflow-hidden sm:px-3 sm:py-3 sm:text-xs',
        'border border-purple-800/10',
        'bg-zinc-100 hover:bg-zinc-100',
        'shadow-md hover:shadow-md active:shadow-sm shadow-indigo-800/30',
        'transition-all duration-200',
        'hover:-translate-y-[1px] active:translate-y-[1px]',
        'active:scale-[0.98]',
        className,
      )}
      {...props}
    >
      {/* Gradient background effect */}
      <div className={cn('absolute inset-0', 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500', 'opacity-20', 'blur')} />

      {/* Content */}
      <div className="relative flex items-center justify-center gap-2 pt-[1px] ">
        <span className="text-purple-950">{label}</span>
        <ChevronRight className="size-4 text-purple-900 sm:size-3" />
      </div>
    </Button>
  );
}

export { ButtonColorful };
