import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Features from '../components/sections/Features';
import PromoSection from '../components/sections/PromoSection';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import BlogSection from '../components/sections/BlogSection';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Features />
            <PromoSection />
            <Testimonials />
            <FAQ />
            <BlogSection />
        </>
    );
}

export default Home;
