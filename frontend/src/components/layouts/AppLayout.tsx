import dynamic from 'next/dynamic';
import Footer from '@/components/common/Footer';

const Navbar = dynamic(() => import('@/components/common/navbar'));

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pb-12">{children}</main>
            <Footer />
        </>
    );
};

export default AppLayout;
