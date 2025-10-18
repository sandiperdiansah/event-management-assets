import Dot from '@/components/shared/Dot';
import For from '@/components/shared/For';
import AudioLines from '@/components/shared/icons/AudioLines';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="r-px grid min-h-screen w-full grid-cols-1 gap-8 pt-8 md:gap-0 lg:-mt-10 lg:grid-cols-[1fr_36%] lg:gap-8 lg:pt-0">
            <div className="flex flex-col items-start justify-center gap-6">
                <hgroup className="space-y-4">
                    <h1 className="max-w-2xl text-5xl leading-tight font-bold">
                        Manage Your Event Assets Easily and Efficiently
                    </h1>

                    <p className="text-theme max-w-xl">
                        An integrated platform to manage inventory, tracking, and event
                        asset transactions in real-time. Optimize your event management
                        process with automation features, QR code scanning, and
                        comprehensive reports.
                    </p>
                </hgroup>

                <div className="flex w-full max-w-xs items-center justify-start gap-2">
                    <Link
                        href="/auth/signin"
                        className="btn btn-primary px-8 py-4"
                        aria-label="signin"
                    >
                        Get Started
                    </Link>
                    <Link
                        href="/auth/signup"
                        className="btn btn-outline px-8 py-4"
                        aria-label="try for free"
                    >
                        Try For Free
                    </Link>
                </div>

                <div className="mt-10 space-y-6">
                    <div className="flex items-center justify-start gap-2">
                        <span className="text-theme inline-block text-sm">
                            Trusted by the best
                        </span>
                        <span className="inline-block h-[1.2px] w-24 bg-gray-600"></span>
                    </div>

                    <ul className="flex flex-wrap items-center justify-start gap-4">
                        <For each={[...Array(3)]}>
                            {() => (
                                <li className="inline-flex items-center justify-center gap-2">
                                    <AudioLines className="size-8 text-blue-600" />
                                    <span className="inline-block text-lg font-semibold">
                                        Lineicons
                                    </span>
                                </li>
                            )}
                        </For>
                    </ul>
                </div>
            </div>

            <div className="relative mt-6 md:pt-14">
                <div className="relative h-[500px] w-full overflow-hidden rounded-sm rounded-tl-[8rem] shadow-xl transition-transform hover:scale-105">
                    <Image
                        src="/hero.webp"
                        alt="banner"
                        fill
                        sizes="100%"
                        className="object-cover object-center"
                        loading="lazy"
                    />
                </div>

                <div
                    className="absolute -bottom-6 left-0 -z-10 flex w-24 flex-wrap items-center justify-center gap-4 md:bottom-6 lg:bottom-0 lg:-left-10 xl:-bottom-14"
                    aria-hidden="true"
                >
                    <Dot count={25} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
