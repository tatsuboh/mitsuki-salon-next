import Header from '@/src/components/Header';
import Hero from '@/src/components/Hero';
import Concept from '@/src/components/Concept';
import Services from '@/src/components/Services';
import Therapist from '@/src/components/Therapist';
import Access from '@/src/components/Access';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Concept />
      <Services />
      <Therapist />
      <Access />
      <Contact />
      <Footer />
    </div>
  );
}