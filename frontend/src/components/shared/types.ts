export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type AvatarProps = React.HTMLAttributes<HTMLElement> & {
    size?: 'xs' | 'sm' | 'md';
    src: string;
    alt: string;
};

export type ForProps<T> = {
    each: T[];
    children: (data: T, i: number) => React.ReactNode;
};

export type BackdropProps = React.HTMLAttributes<HTMLDivElement>;

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    invalid?: boolean;
};

export type InputGroupProps = InputProps & {
    label?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
};

export type PasswordInputProps = InputGroupProps;

export type DotProps = React.HTMLAttributes<HTMLSpanElement> & {
    count?: number;
};

export type HgroupProps = React.HTMLAttributes<HTMLElement> & {
    label?: string;
    title?: string;
    description?: string;
};
