import React from 'react';
import '../Styles/project.css';

const projects = [
  {
    title: 'Residential Apartment',
    location: 'Nagpur, Maharashtra',
    type: 'Residential',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Commercial Complex',
    location: 'Pune, Maharashtra',
    type: 'Commercial',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Luxury Bungalow',
    location: 'Amravati, Maharashtra',
    type: 'Residential',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  }
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="projects-header">
      <span className="projects-tag">Our Work</span>
      <h2>Recent Projects</h2>
      <p>Delivering quality construction with modern engineering solutions</p>
    </div>

    <div className="projects-grid">
      {projects.map((p, i) => (
        <div key={i} className="project-card">
          <div
            className="project-image"
            style={{ backgroundImage: `url(${p.img})` }}
          >
            <span className="project-type">{p.type}</span>

            <div className="project-overlay">
              <h3>{p.title}</h3>
              <p>{p.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
