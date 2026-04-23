import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import AdmissionProcess from '@/components/AdmissionProcess';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import Blog from '@/components/Blog';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      <Hero />
      <About />
      <Programs />
      <AdmissionProcess />
      <Testimonials />
      <Stats />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}
