import For from '@/components/shared/For';
import { FEATURES } from '@/lib/data';

const Features = () => {
    return (
        <section
            className="r-px r-py mt-8 space-y-8 lg:mt-0"
            id="features"
        >
            <hgroup>
                <h3 className="text-xl font-medium text-blue-500">Features</h3>
                <h4 className="text-4xl leading-tight font-bold max-w-2xl">
                    Powerful Tools to Manage Your Event Assets Seamlessly
                </h4>
                <p className="text-theme mt-4 max-w-xl">
                    Our platform offers essential features to streamline your event asset
                    management — from real-time tracking to detailed reporting. All in one
                    user-friendly system.
                </p>
            </hgroup>

            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <For each={FEATURES}>
                    {(data) => {
                        const Icon = data.icon;

                        return (
                            <li className="space-y-6 rounded-xl bg-white p-6 shadow-sm transition hover:scale-105 hover:shadow-xl dark:bg-gray-800">
                                <Icon className="size-12 text-blue-600" />
                                <hgroup className="space-y-6">
                                    <h5 className="text-2xl leading-tight font-semibold">
                                        {data.title}
                                    </h5>
                                    <p className="text-theme">{data.description}</p>
                                </hgroup>
                            </li>
                        );
                    }}
                </For>
            </ul>
        </section>
    );
};

export default Features;
