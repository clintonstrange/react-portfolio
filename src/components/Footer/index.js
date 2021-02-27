import React from "react";

function Footer() {
  return (
    <div>
      <h3>
        Email:{" "}
        <a href="mailto:clintonstrange@hotmail.com">
          <span>clintonstrange@hotmail.com</span>
        </a>
      </h3>
      <h3>
        gitHub:{" "}
        <a href="https://github.com/clintonstrange">
          <span>clintonstrange</span>
        </a>
      </h3>
      <h3>
        LinkedIn:{" "}
        <span>
          {" "}
          <a href="www.linkedin.com/in/clint-strange" target="blank">
            Clint Strange
          </a>
        </span>
      </h3>
    </div>
  );
}

export default Footer;
