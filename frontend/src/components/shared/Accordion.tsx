'use client';

import type {
    AccordionDescriptionProps,
    AccordionItemProps,
    AccordionLabelProps,
    AccordionProps,
} from '@/components/shared/types';

const AccordionRoot = ({ children, ...props }: AccordionProps) => {
    return (
        <ul
            className="w-full"
            {...props}
        >
            {children}
        </ul>
    );
};

const AccordionItem = ({ children, ...props }: AccordionItemProps) => {
    return (
        <li
            className="w-full p-4"
            {...props}
        >
            {children}
        </li>
    );
};

const AccordionTrigger = () => {
    return <button>ok</button>;
};

const AccordionLabel = ({ children, ...props }: AccordionLabelProps) => {
    return (
        <div
            className="w-full"
            {...props}
        >
            <span>{children}</span>
        </div>
    );
};

const AccordionDescription = ({ children, ...props }: AccordionDescriptionProps) => {
    return (
        <div
            className="w-full"
            {...props}
        >
            <p>{children}</p>
        </div>
    );
};

export const Accordion = {
    Root: AccordionRoot,
    Item: AccordionItem,
    Trigger: AccordionTrigger,
    Label: AccordionLabel,
    Description: AccordionDescription,
};
