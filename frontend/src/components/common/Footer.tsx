import { NAVIGATIONS } from '@/lib/data';
import For from '@/components/shared/For';
import Link from 'next/link';
import Boxes from '@/components/shared/icons/Boxes';

const Footer = () => {
    return (
        <footer className="r-px r-py grid grid-cols-1 gap-6 bg-gray-900 text-white md:grid-cols-2 lg:grid-cols-3">
            <hgroup className="space-y-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2"
                >
                    <Boxes
                        className="size-16 text-blue-600"
                        strokeWidth={1}
                    />
                    <h6 className="text-4xl font-bold">Ema.</h6>
                </Link>
                <p className="text-gray-400">
                    sfsd ffsdf dsf ds f dsf ds f dsf dsfdks f shhfsdfhshfh sh fsh fkshfkks
                </p>
            </hgroup>

            <div className="space-y-6">
                <h6 className="text-xl font-medium">Quick Links</h6>
                <nav className="flex flex-col gap-3 text-gray-400">
                    <For each={NAVIGATIONS}>
                        {(nav) => (
                            <Link
                                href={nav.href}
                                className="hover:underline"
                            >
                                {nav.label}
                            </Link>
                        )}
                    </For>
                </nav>
            </div>

            <div></div>
        </footer>
    );
};

export default Footer;
