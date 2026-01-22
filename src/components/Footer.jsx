import React from 'react';
import '../Styles/footer.css';

const Footer = () => (
  <footer className="footer">
    
    <div className="footer-container">

      {/* ABOUT */}
      <div className="footer-box">
        <h3>Mauli Consultancy & Services</h3>
        <p>
          We provide reliable civil engineering, construction,
          and consulting services with a commitment to quality,
          safety, and timely delivery.
        </p>
      </div>

      {/* CONTACT */}
      <div className="footer-box">
        <h3>Contact Us</h3>
        <p>📞 +91 95187 17206</p>
        <p>📧 mauliconsultancy@gmail.com</p>
        <p>⏰ Mon – Sat : 9:00 AM – 7:00 PM</p>
      </div>

      {/* ADDRESS */}
      <div className="footer-box">
        <h3>Office Address</h3>
        <p>
          Mauli Consultancy & Services<br />
          Near Gurunanak Mangal Karyalaya,<br />
          Guruji Ward,<br />
          Arvi, Maharashtra – 440001<br />
          India
        </p>
      </div>

      {/* QUICK LINKS */}
      <div className="footer-box">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

    </div>

    {/* BOTTOM BAR */}
    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Mauli Consultancy & Services. All Rights Reserved.</p>
    </div>

  </footer>
);

export default Footer;
