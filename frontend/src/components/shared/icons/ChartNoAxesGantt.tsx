import { IconProps } from '@/components/shared/icons/types';
import clsx from 'clsx';

const ChartNoAxesGantt = ({ className, strokeWidth = 2, ...props }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={clsx('size-5', className)}
            aria-hidden="true"
            {...props}
        >
            <path d="M6 5h12" />
            <path d="M4 12h10" />
            <path d="M12 19h8" />
        </svg>
    );
};

export default ChartNoAxesGantt;
