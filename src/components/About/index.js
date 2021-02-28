import React from "react";

function About() {
  return (
    <div>
      <h2 id="about" className="text-center">
        About Me
      </h2>
      <div id="about-container" className="d-flex flex-wrap">
        <div className="d-flex justify-content-center" id="propic-container">
          <img
            id="propic"
            className="img-fluid p-5"
            alt="Clint Strange"
            src={require(`../../assets/images/002_0.jpg`).default}
          ></img>
        </div>
        <div id="about-text" className="w-70">
          <p className="p-4 text-center">
            Full Stack Web Developer leveraging background as a sales manager in
            hospitality to develop websites and applications that are secure and
            accessible for all users. Earned a certificate in Full Stack
            Development from Vanderbilt University Coding Boot Camp. Skills
            include problem-solving, collaborating, communication,
            time-management and attention to detail.  
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
