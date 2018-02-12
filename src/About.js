import React from 'react';

const About = () => {
  return(
    <div className="About">
      <div className="row">
        <div className="col-lg-4">
          <div className="profile-picture-contact-container">
            <div className="profile-picture-container">
              <div className="profile-picture">
{/*              <img className="profile-picture" src="./profile-picture.jpg"></img>*/}
              </div>
            </div>
            <a href="mailto:j.mitchell.real@gmail.com?subject=Blog Feedback">
              <i className="fa fa-envelope-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/justin-paul-mitchell/" target="_blank">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://github.com/JustinPMitchell" target="_blank">
              <i className="fa fa-github-square"></i>
            </a>
            <a href="https://twitter.com/Mishuboom" target="_blank">
              <i className="fa fa-twitter-square"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="profile-content">
            <h1>Justin Mitchell</h1>
            <h2>A Web Developer and Educator</h2>
            <h5>Detail-oriented full-stack developer with a background in education.  Experience with learning and teaching a variety of new materials quickly.</h5>
            <div className="technologies-container">
              <h3>Some of the technologies I have experience with include: </h3>
              <br/>
              <div className="technologies">
                <p>LANGUAGES: HTML5, CSS3, Javascript, Python, Node.js</p>
                <p>FRAMEWORKS: Django, Express.js, React, Sails.js </p>
                <p>DATABASE TOOLS: PostgreSQL, MongoDB</p>
                <p>TESTING: Chai, Mocha</p>
                <p>OTHER: Git/Github, jQuery, Heroku, AJAX, JSON, Bootstrap, Materialize, React Bootstrap</p>
              </div>
            </div>
            <h6>For more details, feel free to check out my <a href='./JustinPaulMitchellResume.pdf' target="_blank">RESUME</a>.</h6>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;