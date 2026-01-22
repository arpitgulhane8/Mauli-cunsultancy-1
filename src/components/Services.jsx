import React from 'react';
import '../Styles/services.css';

const services = [
  {
    title: 'Planning & Design',
    desc: 'Architectural planning, structural design, and 3D visualization.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    icon: '📐'
  },
  {
    title: 'Construction',
    desc: 'Residential, commercial & industrial construction services.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    icon: '🏗️'
  },
  {
    title: 'Consulting',
    desc: 'Project management, estimation, supervision & quality control.',
    img: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=1200&q=80',
    icon: '📊'
  }
];


const Services = () => (
  <section id="services" className="services-section">
    <div className="services-header">
      <span className="services-tag">Our Expertise</span>
      <h2>Our Services</h2>
      <p>Complete civil engineering and construction solutions under one roof</p>
    </div>

    <div className="services-grid">
      {services.map((s, i) => (
        <div key={i} className="service-card">
          <div
            className="service-img"
            style={{ backgroundImage: `url(${s.img})` }}
          >
            <span className="service-icon">{s.icon}</span>
          </div>

          <div className="service-content">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
