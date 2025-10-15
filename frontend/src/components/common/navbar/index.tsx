import NavbarLink from '@/components/common/navbar/NavbarLink';
import NavbarLogo from '@/components/common/navbar/NavbarLogo';
import NavbarToggleButton from '@/components/common/navbar/NavbarToggleButton';
import NavbarUser from '@/components/common/navbar/NavbarUser';
import ColorModeButton from '@/components/shared/ColorModeButton';

const Navbar = () => {
    return (
        <header className="bg-glass r-px sticky top-0 right-0 left-0 z-99 flex h-18 w-full items-center justify-between shadow-xs">
            <NavbarLogo />

            <div className="inline-flex items-center md:space-x-8">
                <NavbarLink />
                <div className="absolute top-1/2 right-12 -translate-y-1/2 items-center justify-center md:static md:flex md:translate-y-0">
                    <ColorModeButton />
                </div>
                <NavbarUser className="hidden lg:block" />
            </div>

            <div className="md:hidden">
                <NavbarToggleButton />
            </div>
        </header>
    );
};

export default Navbar;
