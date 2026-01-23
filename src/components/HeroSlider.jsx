import React, { useEffect, useState } from 'react';
import '../Styles/HeroSlider.css';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    title: 'Engineering the Future',
    slogan: 'Modern construction with precision & trust'
  },
  {
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
    title: 'From Planning to Perfection',
    slogan: 'End-to-end civil engineering solutions'
  },
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
    title: 'Built Strong. Built Smart.',
    slogan: 'Quality structures that stand the test of time'
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-content">
            <span className="accent-line"></span>
            <h1>{slide.title}</h1>
            <p>{slide.slogan}</p>

            <div className="hero-buttons">
              <a href="#contact" className="btn primary">Get Quote</a>
              <a href="tel:+91 91562 44799" className="btn outline">Call Now</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSlider;
