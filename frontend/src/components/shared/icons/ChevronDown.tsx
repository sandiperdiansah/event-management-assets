import { IconProps } from '@/components/shared/icons/types';
import clsx from 'clsx';

const ChevronDown = ({ className, strokeWidth = 2, ...props }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={clsx('size-full', className)}
            aria-hidden="true"
            {...props}
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
};

export default ChevronDown;
