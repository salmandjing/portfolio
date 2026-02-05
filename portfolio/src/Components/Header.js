import React, { Component } from 'react';

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var networks = this.props.data.social.map(function (network) {
        return (
          <a key={network.name} href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.className}></i>
          </a>
        );
      });
    }
    return (
      <header id="home">
        <nav id="nav-wrap">
          <ul id="nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Experience</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="hero">
          <div className="hero-content">
            <p className="greeting">Hi, I'm</p>
            <h1>{name}</h1>
            <p className="tagline">{occupation}</p>
            <p className="description">{description}</p>
            <div className="social-links">
              {networks}
            </div>
            <a href="#portfolio" className="cta-button">View My Work</a>
          </div>
        </div>

        <div className="scroll-indicator">
          <span></span>
        </div>
      </header>
    );
  }
}

export default Header;
