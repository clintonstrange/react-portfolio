import React from "react";

function Footer() {
  return (
    <div className="d-flex justify-content-center">
      <a href="mailto:clintonstrange@hotmail.com">
        <span className="foot-icon far fa-envelope display-4 m-4"></span>
      </a>
      <a href="https://github.com/clintonstrange">
        <span className="foot-icon fab fa-github display-4 m-4"></span>
      </a>
      <a href="www.linkedin.com/in/clint-strange" target="blank">
        <span className="foot-icon fab fa-linkedin display-4 m-4"></span>
      </a>
    </div>
  );
}

export default Footer;
