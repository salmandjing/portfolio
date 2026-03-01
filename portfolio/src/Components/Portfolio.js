import React from 'react';

function Portfolio({ data }) {
  if (!data) return null;

  const portfolio = data.projects.map((project) => {
    const imageUrl = 'images/portfolio/' + project.image;
    return (
      <a
        key={project.title}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card"
      >
        <div className={`project-image${project.image === 'outagephoto.jpg' ? ' project-image--outage' : ''}${project.image === 'agenticvirtualagent.jpeg' ? ' project-image--agent' : ''}`}>
          <img alt={project.title} src={imageUrl} />
        </div>
        <div className="project-info">
          <span className="project-category">{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.tags.split(', ').map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </a>
    );
  });

  return (
    <section id="portfolio">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <p>Enterprise AI systems built for production scale</p>
      </div>
      <div className="projects-grid">
        {portfolio}
      </div>
    </section>
  );
}

export default Portfolio;
