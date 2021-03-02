import React from "react";

function Footer() {
  return (
    <div className="d-flex justify-content-center">
      <a
        href="https://stackoverflow.com/users/14321581/clintonstrange"
        target="blank"
      >
        <span className="foot-icon fab fa-stack-overflow display-4 m-4"></span>
      </a>
      <a href="https://github.com/clintonstrange" target="blank">
        <span className="foot-icon fab fa-github display-4 m-4"></span>
      </a>
      <a href="https://www.linkedin.com/in/clint-strange/" target="blank">
        <span className="foot-icon fab fa-linkedin display-4 m-4"></span>
      </a>
    </div>
  );
}

export default Footer;
