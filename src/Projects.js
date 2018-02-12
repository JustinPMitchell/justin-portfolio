import React from 'react';
import './App.css';

const Projects = () => {
  return(
      <div className="Projects">
        <h1>Projects page</h1>
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-3">
              <a href="https://justinpmitchell.github.io/Dino-Dynasty/" target="_blank">
                <div className='project'>
                  <img className='project-img' src='./dino-dynasty.png'></img>
                  <div className='project-title'>
                      Dino-Dynasty
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6 col-lg-3">
              <a href="https://chomper-macro-count.herokuapp.com/" target="_blank">
                <div className='project'>
                  <img className='project-img' src='./chomper.png'></img>
                  <div className='project-title'>
                      Chomper
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6 col-lg-3">
              <a href="https://mathymathy.herokuapp.com/" target="_blank">
                <div className='project'>
                  <img className='project-img' src='./mathymathy.png'></img>
                  <div className='project-title'>
                      MathyMathy
                  </div>          
                </div>
              </a>
            </div>
          </div>          
        </div>
      </div>
  );
}



export default Projects;