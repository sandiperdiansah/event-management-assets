import { Accordion } from '@/components/shared/Accordion';

const Faq = () => {
    return (
        <section
            className="r-px r-py space-y-8"
            id="faq"
        >
            <hgroup>
                <h3 className="text-xl font-medium text-blue-500">FAQ</h3>
                <h4 className="text-4xl leading-tight font-bold">
                    Lorem ipsum dolor sit amet.
                </h4>
                <p className="text-theme mt-4 max-w-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente
                    excepturi dicta iure temporibus expedita.
                </p>
            </hgroup>

            {/* <Accordion.Root>
                <Accordion.Trigger />
                <Accordion.Item>
                    <Accordion.Label>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Accordion.Label>
                    <Accordion.Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                        sit aut et ut quas laborum commodi delectus perspiciatis aperiam
                        quisquam!
                    </Accordion.Description>
                </Accordion.Item>
            </Accordion.Root> */}
        </section>
    );
};

export default Faq;
