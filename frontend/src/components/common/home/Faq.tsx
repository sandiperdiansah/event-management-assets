import For from '@/components/shared/For';
import Hgroup from '@/components/shared/Hgroup';
import { FAQS } from '@/lib/data';

const Faq = () => {
    return (
        <section
            className="r-px r-py space-y-8"
            id="faq"
        >
            <Hgroup
                label="FAQ"
                title="Frequently Asked Questions"
                description=" Find answers to frequently asked questions about managing our event
                    assets."
            />

            <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
                <For each={FAQS}>
                    {(data) => (
                        <details>
                            <summary className="font-medium">{data.question}</summary>
                            <p className="text-theme p-4">{data.answer}</p>
                        </details>
                    )}
                </For>
            </div>
        </section>
    );
};

export default Faq;
