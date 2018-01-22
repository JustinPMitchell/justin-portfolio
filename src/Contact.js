import React, { Component } from 'react';
import './App.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h1>Contact</h1>
        <hr />
        <div className='contact-information'>
          <p><b>Justin Mitchell</b>
          <br/>210-325-4062
          <br/>j.mitchell.real@gmail.com</p>
        </div>
        <hr />
        <div id="map"></div>
      </div>
    );
  }
}

export default Contact;