import dynamic from 'next/dynamic';
import Hero from '@/components/common/home/Hero';

const Features = dynamic(() => import('@/components/common/home/Features'));
const Pricing = dynamic(() => import('@/components/common/home/Pricing'));
const Faq = dynamic(() => import('@/components/common/home/Faq'));
const Testimonials = dynamic(() => import('@/components/common/home/Testimonials'));

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
