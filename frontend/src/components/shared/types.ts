// button
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

// avatar
export type AvatarProps = React.HtmlHTMLAttributes<HTMLElement> & {
    size?: 'xs' | 'sm' | 'md';
    src: string;
    alt: string;
};

// for
export type ForProps<T> = {
    each: T[];
    children: (data: T, i: number) => React.ReactNode;
};

export type BackdropProps = React.HTMLAttributes<HTMLDivElement>;

// accordion
export type AccordionProps = React.HTMLAttributes<HTMLUListElement>;
export type AccordionItemProps = React.HTMLAttributes<HTMLLIElement>;
export type AccordionLabelProps = React.HTMLAttributes<HTMLDivElement>;
export type AccordionDescriptionProps = React.HTMLAttributes<HTMLDivElement>;

// input
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    invalid?: boolean;
};

export type InputGroupProps = InputProps & {
    label?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
};

export type PasswordInputProps = InputGroupProps;

// dot
export type DotProps = React.HTMLAttributes<HTMLSpanElement> & {
    count?: number;
};

// hgroup
export type HgroupProps = React.HTMLAttributes<HTMLElement> & {
    label?: string;
    title?: string;
    description?: string;
};
