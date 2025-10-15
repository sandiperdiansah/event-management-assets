export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type AvatarProps = React.HtmlHTMLAttributes<HTMLElement> & {
    size?: 'xs' | 'sm' | 'md';
    src: string;
    alt: string;
};

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
