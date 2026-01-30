import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import PromoSection from './components/sections/PromoSection';
import Testimonials from './components/sections/Testimonials';
import BlogSection from './components/sections/BlogSection';
import FAQ from './components/sections/FAQ';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <HowItWorks />
      <PromoSection />
      <Testimonials />
      <Features />
      <BlogSection />
      <FAQ />
      <ContactSection />
    </Layout>
  );
}

export default App;
