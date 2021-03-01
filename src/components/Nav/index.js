import React from "react";

function Nav(props) {
  const {
    setAboutSelected,
    setPortfolioSelected,
    setContactSelected,
    setResumeSelected,
  } = props;

  return (
    <nav className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item mx-4">
          <span
            onClick={() => {
              setAboutSelected(true);
              setPortfolioSelected(false);
              setContactSelected(false);
              setResumeSelected(false);
            }}
          >
            About me
          </span>
        </li>
        <li className="nav-item mx-4">
          <span
            onClick={() => {
              setAboutSelected(false);
              setPortfolioSelected(true);
              setContactSelected(false);
              setResumeSelected(false);
            }}
          >
            Portfolio
          </span>
        </li>
        <li className="nav-item mx-4">
          <span
            onClick={() => {
              setAboutSelected(false);
              setPortfolioSelected(false);
              setContactSelected(true);
              setResumeSelected(false);
            }}
          >
            Contact me
          </span>
        </li>
        <li className="nav-item mx-4">
          <span
            onClick={() => {
              setAboutSelected(false);
              setPortfolioSelected(false);
              setContactSelected(false);
              setResumeSelected(true);
            }}
          >
            Resume
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
