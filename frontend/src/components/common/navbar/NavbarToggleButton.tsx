'use client';

import { useAppStore } from '@/hooks/useAppStore';
import { TextAlignJustify, X } from 'lucide-react';
import { useShallow } from 'zustand/shallow';

const NavbarToggleButton = () => {
    const [isOpenNavigation, togleNavigation] = useAppStore(
        useShallow((state) => [state.isOpenNavigation, state.togleNavigation]),
    );

    return (
        <button
            className="cursor-pointer transition"
            aria-label="toggle navigation"
            onClick={togleNavigation}
        >
            {!isOpenNavigation ? <TextAlignJustify /> : <X />}
        </button>
    );
};

export default NavbarToggleButton;
