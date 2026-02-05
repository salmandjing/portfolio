import React, { Component } from 'react';

class Contact extends Component {
  render() {
    if (this.props.data) {
      var email = this.props.data.email;
      var networks = this.props.data.social.map(function (network) {
        return (
          <a key={network.name} href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.className}></i>
            <span>{network.name}</span>
          </a>
        );
      });
    }
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
}

export default Contact;
