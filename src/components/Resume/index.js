import React from "react";

function Resume() {
  return (
    <div>
      <h2 className="text-center">Clint's Resume</h2>
      <p>
        Download my{" "}
        <span>
          {" "}
          <a href="/" target="blank">
            resume.
          </a>
        </span>
      </p>
      <h3>Front End</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsive Design</li>
        <li>Progressive Web Applicaitons</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>Bulma</li>
      </ul>
      <h3>Back End</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequlize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}

export default Resume;
