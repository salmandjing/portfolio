import React from 'react';

function Resume({ data }) {
  if (!data) return null;

  const education = data.education.map((edu) => (
    <div key={edu.school} className="timeline-item">
      <div className="timeline-content">
        <h3>{edu.school}</h3>
        <p className="role">{edu.degree}</p>
        <p className="desc">{edu.description}</p>
      </div>
    </div>
  ));

  const work = data.work.map((job) => (
    <div key={job.company} className="timeline-item">
      <div className="timeline-content">
        <h3>{job.company}</h3>
        <p className="role">{job.title}</p>
        {job.bullets && (
          <ul className="job-bullets">
            {job.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  ));

  const certifications = data.certifications ? (
    <div className="certifications">
      <h4>Certifications</h4>
      <div className="cert-list">
        {data.certifications.map((cert, index) => (
          <span key={index} className="cert-badge">{cert}</span>
        ))}
      </div>
    </div>
  ) : null;

  return (
    <section id="resume">
      <div className="resume-content">
        <div className="resume-section">
          <div className="section-header">
            <h2>Experience</h2>
          </div>
          <div className="timeline">
            {work}
          </div>
        </div>

        <div className="resume-section">
          <div className="section-header">
            <h2>Education</h2>
          </div>
          <div className="timeline">
            {education}
          </div>
          {certifications}
        </div>
      </div>
    </section>
  );
}

export default Resume;
