import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Footer = () => {
  return(
      <Router>
        <footer>
          © <a href="https://www.MDBootstrap.com"> Justin Mitchell </a> 2018
        </footer>
      </Router>
  );
}


export default Footer;