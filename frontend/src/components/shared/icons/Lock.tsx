import { IconProps } from '@/components/shared/icons/types';
import clsx from 'clsx';

const Lock = ({ className, strokeWidth = 2, ...props }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={clsx('size-6', className)}
            aria-hidden="true"
            {...props}
        >
            <rect
                width="18"
                height="11"
                x="3"
                y="11"
                rx="2"
                ry="2"
            />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    );
};

export default Lock;
