import React from 'react';
import '../Styles/whyChooseUs.css';
import { FaHardHat, FaUsers, FaClock, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaHardHat />,
    title: 'Expert Engineers',
    desc: 'Highly skilled professionals delivering world-class construction quality.'
  },
  {
    icon: <FaUsers />,
    title: 'Client Focused',
    desc: 'We work closely with clients to turn their vision into reality.'
  },
  {
    icon: <FaClock />,
    title: 'On-Time Delivery',
    desc: 'We follow strict timelines and ensure timely project completion.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Quality & Safety',
    desc: 'Premium materials, safety compliance, and long-lasting structures.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="why-header">
        <span className="why-tag">Why Choose Us</span>
        <h2>Building Trust Through Quality & Experience</h2>
        <p>
          We deliver excellence in construction by combining innovation,
          experience, and commitment.
        </p>
      </div>

      <div className="why-grid">
        {features.map((item, index) => (
          <div key={index} className="why-card">
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
