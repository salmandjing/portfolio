import React from 'react';

function Contact({ data }) {
  if (!data) return null;

  const { email, social } = data;

  const networks = social.map((network) => (
    <a key={network.name} href={network.url} target="_blank" rel="noopener noreferrer">
      <i className={network.className}></i>
      <span>{network.name}</span>
    </a>
  ));

  return (
    <section id="contact">
      <div className="contact-content">
        <div className="section-header">
          <h2>Let's Connect</h2>
          <p>Interested in working together or just want to chat about tech?</p>
        </div>
        <div className="contact-links">
          {networks}
          <a href={`mailto:${email}`}>
            <i className="fa fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
