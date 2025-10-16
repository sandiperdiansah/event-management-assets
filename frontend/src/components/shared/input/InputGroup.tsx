import { InputGroupProps } from '@/components/shared/types';
import clsx from 'clsx';

const InputGroup = (props: InputGroupProps) => {
    const {
        invalid = false,
        label,
        type = 'text',
        name,
        startIcon,
        endIcon,
        className,
        ...rest
    } = props;

    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2 block font-medium text-gray-600"
            >
                {label}
            </label>

            <div className="relative">
                {startIcon && (
                    <span className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center pl-2">
                        <svg
                            className="size-4 text-gray-400 dark:text-gray-500"
                            aria-hidden="true"
                        >
                            {startIcon}
                        </svg>
                    </span>
                )}

                <input
                    id={name}
                    name={name}
                    type={type}
                    className={clsx(
                        'input',
                        !invalid ? 'input-primary' : 'input-error',
                        {
                            'pl-10': startIcon,
                            'pe-8': endIcon,
                        },
                        className,
                    )}
                    {...rest}
                />

                {endIcon && (
                    <span className="absolute inset-y-0 right-0 inline-flex items-center pe-2">
                        {endIcon}
                    </span>
                )}
            </div>
        </div>
    );
};

export default InputGroup;
