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

            <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-red-500">s</div>
                <div className="bg-red-500"></div>
                <div className="bg-red-500"></div>
            </div>
        </section>
    );
};

export default Testimonials;
