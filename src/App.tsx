import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Features from './components/sections/Features';
import PromoSection from './components/sections/PromoSection';
import Testimonials from './components/sections/Testimonials';
import BlogSection from './components/sections/BlogSection';
import FAQ from './components/sections/FAQ';

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Features />
      <PromoSection />
      <Testimonials />
      <FAQ />
      <BlogSection />
    </Layout>
  );
}

export default App;
