import InputGroup from '@/components/shared/input/InputGroup';
import PasswordInput from '@/components/shared/input/PasswordInput';
import Link from 'next/link';

const FormSignin = () => {
    return (
        <form className="space-y-4">
            <InputGroup
                label="Email"
                name="email"
                placeholder="Email address"
                autoComplete="on"
            />

            <PasswordInput
                label="Password"
                name="password"
                placeholder="Password"
            />
            <div className="flex items-center justify-end">
                <Link
                    href="/auth/forgot-password"
                    className="text-sm text-blue-600 hover:underline"
                >
                    Forgot password?
                </Link>
            </div>

            <button type="submit" className="btn btn-primary">Sign in</button>

            <span className="inline-block w-full text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link
                    href="/auth/signup"
                    className="text-sm text-blue-600 hover:underline"
                >
                   Sign up
                </Link>
            </span>
        </form>
    );
};

export default FormSignin;
