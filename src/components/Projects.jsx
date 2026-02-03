import React, { useEffect, useState } from 'react';
import '../Styles/project.css';

const projects = [
  {
    title: 'Amol City',
    location: 'Nagpur, Maharashtra',
    type: 'Residential',
    images: [
      'project1-1.jpeg',
      'project1-2.jpeg',
      'project1-3.jpeg'
    ]
  },
  {
    title: 'Commercial Complex',
    location: 'Pune, Maharashtra',
    type: 'Commercial',
    images: [
    'project2-1.jpeg',
    'project2-2.jpeg',
    'project2-3.jpeg'
    ]
  },
  {
    title: 'Luxury Bungalow',
    location: 'Amravati, Maharashtra',
    type: 'Residential',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

const ProjectCard = ({ project }) => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // 🔁 Auto slide
  useEffect(() => {
    if (project.images.length <= 1) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % project.images.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % project.images.length);
      setFade(true);
    }, 300);
  };

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
      setFade(true);
    }, 300);
  };

  return (
    <div className="project-card">
      <div className={`project-image ${fade ? 'fade-in' : 'fade-out'}`}>
        <img src={project.images[current]} alt={project.title} />

        <span className="project-type">{project.type}</span>

        {project.images.length > 1 && (
          <>
            <button className="nav left" onClick={prev}>‹</button>
            <button className="nav right" onClick={next}>›</button>
          </>
        )}

        <div className="project-overlay">
          <h3>{project.title}</h3>
          <p>{project.location}</p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="projects-header">
      <span className="projects-tag">Our Work</span>
      <h2>Recent Projects</h2>
      <p>Delivering quality construction with modern engineering solutions</p>
    </div>

    <div className="projects-grid">
      {projects.map((p, i) => (
        <ProjectCard key={i} project={p} />
      ))}
    </div>
  </section>
);

export default Projects;
