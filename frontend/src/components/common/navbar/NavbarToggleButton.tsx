'use client';

import TextAlignJustify from '@/components/shared/icons/TextAlignJustify';
import X from '@/components/shared/icons/X';
import { useAppStore } from '@/hooks/useAppStore';
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
