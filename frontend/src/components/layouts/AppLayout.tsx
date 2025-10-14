import Navbar from '@/components/common/navbar';
import Backdrop from '@/components/shared/Backdrop';
import TopLoader from '@/components/shared/TopLoader';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <TopLoader />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Backdrop />
        </>
    );
};

export default AppLayout;
