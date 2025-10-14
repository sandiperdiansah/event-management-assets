import For from '@/components/shared/For';
import { AudioLines } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section
            className="r-px grid min-h-screen w-full grid-cols-1 gap-8 pt-8 md:gap-0 md:pt-0 lg:grid-cols-[1fr_36%] lg:gap-8"
            role="banner"
        >
            <div className="flex flex-col items-start justify-center gap-6">
                <hgroup className="space-y-4">
                    <h2 className="text-5xl leading-tight font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae?
                    </h2>

                    <p className="text-theme max-w-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                        nostrum hic maiores atque deserunt doloribus corrupti obcaecati
                        rem reiciendis, sed vero officia, in cumque esse iusto amet
                        voluptas veritatis repellat!
                    </p>
                </hgroup>

                <div className="flex items-center justify-start gap-2">
                    <button className="btn btn-primary px-8 py-4">Try For Free</button>
                    <button className="btn btn-outline px-8 py-4">Try For Free</button>
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

            <div className="relative md:pt-14">
                <div className="relative h-[500px] w-full overflow-hidden rounded-md rounded-tl-[8rem] transition-transform hover:scale-105">
                    <Image
                        src="/hero.webp"
                        alt="banner"
                        fill
                        sizes="100%"
                        className="object-cover object-center"
                    />
                </div>

                <div className="absolute -bottom-6 left-0 -z-10 flex w-24 flex-wrap items-center justify-center gap-4 md:bottom-6 lg:bottom-0 lg:-left-10">
                    <For each={[...Array(25)]}>
                        {() => (
                            <span
                                className="block size-1 animate-bounce rounded-full bg-blue-600"
                                aria-hidden="true"
                            ></span>
                        )}
                    </For>
                </div>
            </div>
        </section>
    );
};

export default Hero;
