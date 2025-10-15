import For from '@/components/shared/For';
import ChartNoAxesGantt from '@/components/shared/icons/ChartNoAxesGantt';

const Features = () => {
    return (
        <section
            className="r-px r-py mt-8 space-y-8 lg:mt-0"
            id="features"
        >
            <hgroup>
                <h3 className="text-xl font-medium text-blue-500">Features</h3>
                <h4 className="text-4xl leading-tight font-bold">
                    Lorem ipsum dolor sit amet.
                </h4>
                <p className="text-theme mt-4 max-w-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente
                    excepturi dicta iure temporibus expedita.
                </p>
            </hgroup>

            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <For each={[...Array(7)]}>
                    {() => (
                        <li className="space-y-6 rounded-xl bg-white p-6 shadow-sm transition hover:scale-105 hover:shadow-xl dark:bg-gray-800">
                            <ChartNoAxesGantt className="size-14 text-blue-600" />
                            <hgroup className="space-y-6">
                                <h5 className="text-2xl leading-tight font-semibold">
                                    Lorem ipsum dolor sit amet.
                                </h5>
                                <p className="text-theme">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit. Veritatis nesciunt velit voluptatum harum quos.
                                </p>
                            </hgroup>
                        </li>
                    )}
                </For>
            </ul>
        </section>
    );
};

export default Features;
