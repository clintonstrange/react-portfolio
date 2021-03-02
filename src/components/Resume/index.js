import React from "react";

function Resume() {
  return (
    <div className="d-flex justify-content-center">
      <div id="resume-container" className="font-color m-3 p-2">
        <h2 className="font-color text-center pt-2">Clint's Resume</h2>
        <h3 className="font-color text-center m-4 p-2">
          Download my{" "}
          <span>
            {" "}
            <a
              className="card-text"
              href="clint-strange-resume.pdf"
              download="clint-strange-resume.pdf"
            >
              resume.
            </a>
          </span>
        </h3>
        <div className="d-flex justify-content-center">
          <div>
            <h4 className="font-color">Front End</h4>
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
            <h4 className="font-color">Back End</h4>
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
        </div>
      </div>
    </div>
  );
}

export default Resume;
