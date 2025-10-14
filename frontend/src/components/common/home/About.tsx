import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

const About = () => {
    return (
        <section className="r-px r-py mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-0">
            <article className="space-y-6">
                <hgroup>
                    <h3 className="text-xl font-medium text-blue-600">About Us</h3>
                    <h4 className="text-4xl leading-tight font-bold">
                        Better design, better experience
                    </h4>
                </hgroup>

                <div className="space-y-4">
                    <p className="text-theme">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                        porro. Consequatur deserunt nostrum molestiae dicta quas,
                        explicabo est deleniti assumenda.
                    </p>

                    <p className="text-theme">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                        porro. Consequatur deserunt nostrum molestiae dicta quas,
                        explicabo est deleniti assumenda.
                    </p>
                </div>
            </article>

            <article className="space-y-8">
                <hgroup className="space-y-4">
                    <h4 className="text-4xl leading-tight font-bold">Connect With Us</h4>
                    <p className="text-theme">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                        tempore porro cupiditate quibusdam autem placeat aliquid, officiis
                        sint adipisci voluptas dolorem quo quisquam, cumque maiores
                        reiciendis vero iusto perferendis dolor.
                    </p>
                </hgroup>

                <ul className="flex flex-wrap items-center justify-start gap-4">
                    <li>
                        <Link
                            href="/"
                            className="flex items-center justify-center rounded-full p-1 text-gray-600 dark:text-gray-400 ring-1 transition-colors hover:bg-blue-600 hover:text-white"
                        >
                            <Facebook className="size-4" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className="flex items-center justify-center rounded-full p-1 text-gray-600 dark:text-gray-400 ring-1 transition-colors hover:bg-blue-600 hover:text-white"
                        >
                            <Instagram className="size-4" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className="flex items-center justify-center rounded-full p-1 text-gray-600 dark:text-gray-400 ring-1 transition-colors hover:bg-blue-600 hover:text-white"
                        >
                            <Linkedin className="size-4" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className="flex items-center justify-center rounded-full p-1 text-gray-600 dark:text-gray-400 ring-1 transition-colors hover:bg-blue-600 hover:text-white"
                        >
                            <Youtube className="size-4" />
                        </Link>
                    </li>
                </ul>
            </article>
        </section>
    );
};

export default About;
