import Faq from '@/components/common/home/Faq';
import Features from '@/components/common/home/Features';
import Hero from '@/components/common/home/Hero';
import Pricing from '@/components/common/home/Pricing';
import Testimonials from '@/components/common/home/Testimonials';

const Page = () => {
    return (
        <>
            <Hero />
            <Features />
            <Pricing />
            <Faq />
            <Testimonials />
        </>
    );
};

export default Page;
