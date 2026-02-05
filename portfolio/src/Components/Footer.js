import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>&copy; {new Date().getFullYear()} Salman Djingueinabaye</p>
      </footer>
    );
  }
}

export default Footer;
