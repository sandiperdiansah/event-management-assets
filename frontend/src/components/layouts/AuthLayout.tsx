import Boxes from '@/components/shared/icons/Boxes';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="bg-theme flex min-h-screen w-full flex-col py-6 items-center justify-center gap-6">
            <Boxes className="size-20 text-blue-600" />
            <div
                className="p-6 w-full md:w-sm"
               
            >
                {children}
            </div>
        </section>
    );
};

export default AuthLayout;
