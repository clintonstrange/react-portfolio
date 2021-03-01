import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [titles] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);

  const [currentTitle, setCurrentTitle] = useState(titles[0]);

  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  return (
    <div>
      <main>
        <Header
          titles={titles}
          currentTitle={currentTitle}
          setCurrentTitle={setCurrentTitle}
          aboutSelected={aboutSelected}
          setAboutSelected={setAboutSelected}
          portfolioSelected={portfolioSelected}
          setPortfolioSelected={setPortfolioSelected}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}
        ></Header>
        {aboutSelected ? (
          <>
            <About></About>
          </>
        ) : portfolioSelected ? (
          <>
            <Project></Project>
          </>
        ) : contactSelected ? (
          <>
            <Contact></Contact>
          </>
        ) : resumeSelected ? (
          <>
            <Resume></Resume>
          </>
        ) : (
          <>
            <About></About>
          </>
        )}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
