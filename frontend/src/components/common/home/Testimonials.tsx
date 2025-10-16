import Hgroup from '@/components/shared/Hgroup';

const Testimonials = () => {
    return (
        <section
            className="r-px r-py space-y-8"
            id="testimonials"
        >
            <Hgroup
                label="Testimonials"
                title="What Our Users Are Saying"
                description="Trusted by event organizers and vendors across the region. Here’s how
                    our platform is helping teams manage their event assets better."
            />
        </section>
    );
};

export default Testimonials;
