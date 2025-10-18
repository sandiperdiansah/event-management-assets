import Boxes from '@/components/shared/icons/Boxes';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="min-h-screen">
            <section className="bg-theme flex min-h-screen w-full flex-col items-center justify-center gap-6 py-6">
                <Boxes
                    className="size-24 text-blue-600"
                    strokeWidth={1}
                />
                <div className="w-full p-6 md:w-sm">{children}</div>
            </section>
        </main>
    );
};

export default AuthLayout;
