import React, { useEffect } from "react";

function Nav(props) {
  const {
    titles = [],
    currentTitle,
    setCurrentTitle,
    aboutSelected,
    setAboutSelected,
    portfolioSelected,
    setPortfolioSelected,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
  } = props;

  //   useEffect(() => {
  //     document.title = currentTitle.name;
  //   }, [currentTitle]);

  return (
    <nav className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li
          className="nav-item mx-4"
          onClick={() => {
            setAboutSelected(true);
            setPortfolioSelected(false);
            setContactSelected(false);
            setResumeSelected(false);
          }}
        >
          <button className={`nav-btn ${aboutSelected && "navActive"}`}>
            About Me
          </button>
        </li>
        <li
          className="nav-item mx-4"
          onClick={() => {
            setAboutSelected(false);
            setPortfolioSelected(true);
            setContactSelected(false);
            setResumeSelected(false);
          }}
        >
          <button className={`nav-btn ${portfolioSelected && "navActive"}`}>
            Portfolio
          </button>
        </li>
        <li
          className="nav-item mx-4"
          onClick={() => {
            setAboutSelected(false);
            setPortfolioSelected(false);
            setContactSelected(true);
            setResumeSelected(false);
          }}
        >
          <button className={`nav-btn ${contactSelected && "navActive"}`}>
            Contact Me
          </button>
        </li>
        <li
          className="nav-item mx-4"
          onClick={() => {
            setAboutSelected(false);
            setPortfolioSelected(false);
            setContactSelected(false);
            setResumeSelected(true);
          }}
        >
          <button className={`nav-btn ${resumeSelected && "navActive"}`}>
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
