import React, { useState } from "react";

function Project() {
  const [projects] = useState([
    {
      image: "movie-hub.gif",
      title: "Movie-Hub",
      link: "https://clintonstrange.github.io/movie-hub/",
      repo: "https://github.com/clintonstrange/movie-hub",
    },
    {
      image: "victors.gif",
      title: "Victor's Dealership",
      link: "https://victorscardealership.herokuapp.com/",
      repo: "https://github.com/clintonstrange/simad",
    },
    {
      image: "oh-snap.gif",
      title: "Oh Snap!",
      link: "https://clintonstrange.github.io/photo-port/",
      repo: "https://github.com/clintonstrange/photo-port",
    },
    {
      image: "budget-tracker.gif",
      title: "Budget Tracker (PWA)",
      link: "https://clints-budget-tracker.herokuapp.com/",
      repo: "https://github.com/clintonstrange/budget-tracker",
    },
    {
      image: "tech-blog.gif",
      title: "Clint's Tech Blog",
      link: "https://shielded-mountain-93398.herokuapp.com/",
      repo: "https://github.com/clintonstrange/tech-blog",
    },
    {
      image: "run-buddy.gif",
      title: "run Buddy",
      link: "https://clintonstrange.github.io/run-buddy/",
      repo: "https://github.com/clintonstrange/run-buddy",
    },
  ]);
  return (
    <div id="project-container" className="m-3">
      {projects.map((project) => (
        <div id="project" className="card p-3 m-3" key={project.title}>
          <div className="card-img-top">
            <img
              id="project-img"
              className="img-fluid rounded mx-auto"
              alt={project.title}
              src={require(`../../assets/images/${project.image}`).default}
            />
          </div>
          <h2 className="text-center">
            <a href={project.link} target="blank" className="card-text">
              {project.title}
            </a>
          </h2>
          <p className="text-center">
            <a href={project.repo} target="blank">
              <span className="card-text fab fa-github text-center display-4"></span>
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Project;
