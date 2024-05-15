'use client';
import { cn } from '@/utils/cn';
import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

interface ICalendarProps {
  className?: string;
  children: React.ReactNode;
}

export function Calendar(props: ICalendarProps) {
  const { className, children } = props;
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal('ui', { theme: 'light', styles: { branding: { brandColor: '#581C87' } }, hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <button data-cal-namespace="" data-cal-link="shah-nawaz/15min" data-cal-config='{"layout":"month_view"}' className={cn(className)}>
      {children}
    </button>
  );
}
