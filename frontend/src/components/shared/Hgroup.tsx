import { HgroupProps } from '@/components/shared/types';

const Hgroup = ({ label, title, description, ...props }: HgroupProps) => {
    return (
        <hgroup {...props}>
            <h2 className="mb-1 text-xl font-medium text-blue-600">{label}</h2>
            <h3 className="max-w-2xl text-4xl leading-tight font-bold">{title}</h3>
            <p className="text-theme mt-4 max-w-xl">{description}</p>
        </hgroup>
    );
};

export default Hgroup;
