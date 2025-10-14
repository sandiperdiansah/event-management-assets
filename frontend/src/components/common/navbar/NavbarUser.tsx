import Link from 'next/link';

const NavbarUser = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props}>
            <Link
                href="/auth/signin"
                className="btn btn-primary "
                aria-label="to signin"
            >
                Sign in
            </Link>
        </div>
    );
};

export default NavbarUser;
