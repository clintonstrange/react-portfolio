import React from "react";

function Resume() {
  return (
    <div id="resume-container" className="font-color m-3 p-2">
      <h2 className="font-color text-center">Clint's Resume</h2>
      <p className="font-color">
        Download my{" "}
        <span>
          {" "}
          <a className="card-text" href="/" target="blank">
            resume.
          </a>
        </span>
      </p>
      <h3 className="font-color">Front End</h3>
      <ul>
        <li className="font-color">CSS</li>
        <li className="font-color">JavaScript</li>
        <li className="font-color">JQuery</li>
        <li className="font-color">Responsive Design</li>
        <li className="font-color">Progressive Web Applicaitons</li>
        <li className="font-color">React</li>
        <li className="font-color">Bootstrap</li>
        <li className="font-color">Bulma</li>
      </ul>
      <h3 className="font-color">Back End</h3>
      <ul>
        <li className="font-color">APIs</li>
        <li className="font-color">Node</li>
        <li className="font-color">Express</li>
        <li className="font-color">MySQL, Sequlize</li>
        <li className="font-color">MongoDB, Mongoose</li>
        <li className="font-color">REST</li>
        <li className="font-color">GraphQL</li>
      </ul>
    </div>
  );
}

export default Resume;
