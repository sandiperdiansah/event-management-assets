import For from '@/components/shared/For';
import Hgroup from '@/components/shared/Hgroup';
import { FEATURES } from '@/lib/data';

const Features = () => {
    return (
        <section
            className="r-px r-py mt-8 space-y-8 lg:mt-0"
            id="features"
        >
            <Hgroup
                label="Features"
                title="Powerful Tools to Manage Your Event Assets Seamlessly"
                description=" Our platform offers essential features to streamline your event asset
                    management — from real-time tracking to detailed reporting. All in one
                    user-friendly system."
            />

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
