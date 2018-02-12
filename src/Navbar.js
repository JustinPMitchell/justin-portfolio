import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Projects from './Projects.js';
import About from './About.js';
import Blog from './Blog.js';
import Contact from './Contact.js';
import './App.css';

const Navbar = () => {
  return(
    <Router>
      <div className="Navbar">
        <img className="backdrop-image" src="./low-poly-background.jpg"></img>
        <ul className="nav d-flex">
          <Link className="navbar-logo mr-auto p-1" to="/">
            <img className='initials' src='./initials.png'></img>
          </Link>
          <li className="nav-item p-2">
            <Link className="nav-link" to='/Projects'>Projects</Link>
          </li>          
          <li className="nav-item p-2">
            <a className="nav-link" href='./JustinPaulMitchellResume.pdf' target="_blank">Resume</a>
          </li>
          {/*<Link className="navbar-link" to='/Blog'>Blog</Link>*/}
          <li className="nav-item p-2">          
            <Link className="nav-link" to='/'>Contact</Link>
          </li>
        </ul>

        <div className='content-container'>
          <Route exact path='/' component={About} />
          <Route exact path='/Projects' component={Projects} />
          {/*<Route exact path='/Blog' component={Blog} />*/}
          <Route exact path='/Contact' component={Contact} />
        </div>
      </div>
    </Router>
  );
}


export default Navbar;