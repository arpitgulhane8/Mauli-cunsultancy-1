import React from "react";
import "../Styles/cta.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-text">
          <h2>Ready to Start Your Project?</h2>
          <p>
            From planning to construction, Mauli Consultancy & Services is here
            to deliver strong, reliable, and cost-effective solutions.
          </p>
        </div>

        <div className="cta-actions">
          <a href="#contact" className="cta-btn primary">
            <FaEnvelope /> Get Free Consultation
          </a>
          <a href="tel:+91 91562 44799" className="cta-btn secondary">
            <FaPhoneAlt /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
