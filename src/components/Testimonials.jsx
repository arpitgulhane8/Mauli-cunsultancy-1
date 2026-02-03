import React from "react";
import "../Styles/testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Bhikesh Malani",
    role: "Residential Project Owner",
    feedback:
      "Mauli Consultancy & Developers delivered our home project on time with excellent quality. Their planning and execution were outstanding.",
  },
  {
    name: "Gajanan Shingare",
    role: "Commercial Property Owner",
    feedback:
      "Very professional team. Clear communication, accurate cost estimation, and great site supervision throughout the project.",
  },
  {
    name: "Ali Asgar Mohmmad Hussain Bohara",
    role: "Factory Construction Client",
    feedback:
      "Strong technical knowledge and reliable service. I highly recommend Mauli Consultancy for civil and construction work.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2>What Our Clients Say</h2>
        <p className="testimonials-subtitle">
          Trusted by clients for quality, commitment, and reliability
        </p>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">"{item.feedback}"</p>
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
