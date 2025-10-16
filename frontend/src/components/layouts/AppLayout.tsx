import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/common/navbar'));

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default AppLayout;
