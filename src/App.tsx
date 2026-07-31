import { useScrollReveal } from '@/hooks';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Blends from '@/components/Blends';
import Features from '@/components/Features';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-cream-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Blends />
        <Features />
        <WhyChooseUs />
        <Contact />
      </main>
    </div>
  );
}
