import React from "react";
import "../Styles/contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Have a project in mind? Let’s build something strong and lasting
            together.
          </p>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>
              Mauli Consultancy & Services<br />
              Arvi, Maharashtra, India
            </span>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <span>+91 91562 44799</span>
          </div>

          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>mauliconsultancy@gmail.com</span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-box">
          <h3>Send Us a Message</h3>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="4" placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
