'use client';

import Boxes from '@/components/shared/icons/Boxes';
import { useAppStore } from '@/hooks/useAppStore';
import Link from 'next/link';

const NavbarLogo = () => {
    const closeNavigation = useAppStore((state) => state.closeNavigation);

    return (
        <Link
            href="/"
            className="group inline-flex items-center justify-center gap-1"
            onClick={closeNavigation}
        >
            <Boxes
                className="size-8 animate-bounce text-blue-600"
                strokeWidth={1}
            />
            <h1 className="text-xl font-medium transition-transform group-hover:scale-105">
                Ema.
            </h1>
        </Link>
    );
};

export default NavbarLogo;
