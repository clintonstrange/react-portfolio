import React from "react";

function About() {
  return (
    <div className="d-flex justify-content-center">
      <div className="about-container m-3">
        <h2 id="about" className="font-color text-center">
          About Me
        </h2>
        <div
          id="about-card-container"
          className="d-flex flex-wrap justify-content-center m-2"
        >
          <div className="d-flex justify-content-center" id="propic-container">
            <img
              id="propic"
              className="px-2"
              alt="Clint Strange"
              src={require(`../../assets/images/002_0.jpg`).default}
            ></img>
          </div>
          <div id="about-text" className="w-70">
            <p className="font-color p-4 text-center">
              Full Stack Web Developer leveraging background as a sales manager
              in hospitality to develop websites and applications that are
              secure and accessible for all users. Earned a certificate in Full
              Stack Development from Vanderbilt University Coding Boot Camp.
              Skills include problem-solving, collaborating, communication,
              time-management and attention to detail.  
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
