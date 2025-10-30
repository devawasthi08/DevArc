import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Services />
        <Process />
        <Work />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
