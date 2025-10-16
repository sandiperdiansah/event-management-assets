import For from '@/components/shared/For';
import { DotProps } from '@/components/shared/types';
import clsx from 'clsx';

const Dot = ({ count, className, ...props }: DotProps) => {
    return (
        <For each={[...Array(count)]}>
            {() => (
                <span
                    className={clsx(
                        'block size-1  rounded-full bg-blue-600',
                        className,
                    )}
                    aria-hidden="true"
                    {...props}
                ></span>
            )}
        </For>
    );
};

export default Dot;
