import React, { Component } from 'react';

class About extends Component {
  render() {
    if (this.props.data) {
      var bio = this.props.data.bio;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      var image = 'images/' + this.props.data.image;
    }
    return (
      <section id="about">
        <div className="about-content">
          <div className="profile-image">
            <img src={image} alt="Salman Djingueinabaye" />
          </div>
          <div className="section-header">
            <h2>About Me</h2>
          </div>
          <p className="bio">{bio}</p>
          <div className="about-actions">
            <a href={resumeDownload} target="_blank" rel="noopener noreferrer" className="btn-primary">
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
}

export default About;
