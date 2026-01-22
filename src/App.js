import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSlider />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
