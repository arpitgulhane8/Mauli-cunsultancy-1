import React from "react";
import "../Styles/about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-left">
          <h2>About Mauli Consultancy & Services</h2>
          <p>
            <strong>Mauli Consultancy & Services</strong> is a trusted civil
            engineering and construction consultancy delivering reliable,
            cost-effective, and high-quality solutions.
          </p>

          <p>
            We specialize in planning, design, construction execution, and
            project consulting. Our focus is on safety, durability, and timely
            project delivery while maintaining the highest quality standards.
          </p>

          <p>
            With practical industry experience and a client-first approach, we
            aim to turn ideas into strong, long-lasting structures.
          </p>
        </div>

        <div className="about-right">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
            alt="Construction Site"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
