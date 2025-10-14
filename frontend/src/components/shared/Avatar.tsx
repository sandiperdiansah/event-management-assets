import { AvatarProps } from '@/components/shared/types';
import clsx from 'clsx';
import Image from 'next/image';

const Avatar = (props: AvatarProps) => {
    const { size = 'md', src, alt = 'avatar', ...rest } = props;

    return (
        <div
            className={clsx('relative inline-block shrink-0 overflow-hidden', {
                'h-8 w-8': size === 'xs',
                'h-10 w-10': size === 'sm',
                'h-12 w-12': size === 'md',
            })}
            {...rest}
        >
            <Image
                src={src}
                alt={alt}
                fill
                sizes="100%"
                className="object-cover object-center"
            />
        </div>
    );
};

export default Avatar;
