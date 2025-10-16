import { HgroupProps } from '@/components/shared/types';

const Hgroup = ({ label, title, description, ...props }: HgroupProps) => {
    return (
        <hgroup {...props}>
            <h3 className="mb-1 text-xl font-medium text-blue-500">{label}</h3>
            <h4 className="max-w-2xl text-4xl leading-tight font-bold">{title}</h4>
            <p className="text-theme mt-4 max-w-xl">{description}</p>
        </hgroup>
    );
};

export default Hgroup;
