import React from "react";
import Nav from "../Nav";

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <h1 className="navbar-brand">
        <a href="#about">Clint Strange</a>
      </h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Nav />
    </header>
  );
}

export default Header;
