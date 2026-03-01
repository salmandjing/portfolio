import React from 'react';

function About({ data }) {
  if (!data) return null;

  const { bio, email, resumedownload, image } = data;
  const imageSrc = 'images/' + image;

  return (
    <section id="about">
      <div className="about-content">
        <div className="profile-image">
          <img src={imageSrc} alt="Salman Djingueinabaye" />
        </div>
        <div className="section-header">
          <h2>About Me</h2>
        </div>
        <p className="bio">{bio}</p>
        <div className="about-actions">
          <a href={resumedownload} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Download Resume
          </a>
          <a href={`mailto:${email}`} className="btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
