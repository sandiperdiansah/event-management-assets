import Dot from '@/components/shared/Dot';
import For from '@/components/shared/For';
import Hgroup from '@/components/shared/Hgroup';
import { PRICINGS } from '@/lib/data';
import Link from 'next/link';

const Pricing = () => {
    return (
        <section
            className="r-px r-py space-y-8"
            id="pricing"
        >
            <Hgroup
                label="Pricing"
                title="Flexible Plans for Every Event Size"
                description="Whether you're running a small gathering or a large-scale event,
                    we offer the right plan to help you manage assets efficiently and
                    cost-effectively."
            />

            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <For each={PRICINGS}>
                    {(data) => (
                        <li className="relative flex flex-col space-y-6 overflow-hidden rounded-xl bg-white p-6 shadow-sm transition hover:scale-105 hover:shadow-xl dark:bg-gray-800">
                            <div
                                className="absolute top-4 right-4 z-10 flex w-10 flex-wrap items-center gap-2"
                                aria-hidden="true"
                            >
                                <Dot count={28} />
                            </div>
                            <div className="absolute top-8 -right-2 h-20 w-20 rotate-y-12 rounded-tl-full bg-gradient-to-b from-blue-100 transition-colors dark:from-gray-700"></div>

                            {/* content */}
                            <hgroup className="mt-4 space-y-6 border-b border-gray-100 pb-6 dark:border-gray-700">
                                <span className="block font-medium text-blue-600">
                                    {data.level}
                                </span>
                                <h6 className="text-5xl font-bold">
                                    {data.price}
                                    <span className="text-theme ms-1 inline-block text-base">
                                        /year
                                    </span>
                                </h6>
                                <p className="text-theme">{data.description}</p>
                            </hgroup>

                            <ul className="text-theme list-disc space-y-2 ps-4 text-sm">
                                <For each={data.features}>
                                    {(feature) => <li>{feature}</li>}
                                </For>
                            </ul>

                            <Link
                                href="/auth/signin"
                                className="btn btn-primary mt-auto px-8 py-3"
                                aria-label="signin"
                            >
                                Try For Free
                            </Link>
                        </li>
                    )}
                </For>
            </ul>
        </section>
    );
};

export default Pricing;
