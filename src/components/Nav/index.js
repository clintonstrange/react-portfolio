import React from "react";

function Nav() {
  return (
    <nav className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item mx-4">
          <a className="nav-link" href="#about">
            About me
          </a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link" href="/">
            Portfolio
          </a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link" href="/">
            Contact me
          </a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link" href="/">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
