import React, { useState } from "react";

function Project() {
  const [projects] = useState([
    {
      image: "movie-hub.png",
      title: "Movie-Hub",
      link: "https://clintonstrange.github.io/movie-hub/",
      repo: "https://github.com/clintonstrange/movie-hub",
    },
    {
      image: "victor.png",
      title: "Victor's Dealership",
      link: "https://victorscardealership.herokuapp.com/",
      repo: "https://github.com/clintonstrange/simad",
    },
    {
      image: "teton2.jpeg",
      title: "Photo Port",
      link: "https://clintonstrange.github.io/photo-port/",
      repo: "https://github.com/clintonstrange/photo-port",
    },
    {
      image: "lilly2.jpeg",
      title: "Budget Tracker (PWA)",
      link: "https://clints-budget-tracker.herokuapp.com/",
      repo: "https://github.com/clintonstrange/budget-tracker",
    },
    {
      image: "leia2.jpeg",
      title: "Clint's Tech Blog",
      link: "https://shielded-mountain-93398.herokuapp.com/",
      repo: "https://github.com/clintonstrange/tech-blog",
    },
    {
      image: "run-buddy2.jpeg",
      title: "run Buddy",
      link: "https://clintonstrange.github.io/run-buddy/",
      repo: "https://github.com/clintonstrange/run-buddy",
    },
  ]);
  return (
    <div
      id="project container"
      className="d-flex flex-wrap justify-content-around mb-3"
    >
      {projects.map((project) => (
        <div id="project" className="card p-3 m-3">
          <div className="card-img-top">
            <img
            id="project-img"
              className="img-fluid rounded mx-auto"
              alt={project.title}
              src={require(`../../assets/images/${project.image}`).default}
              key={project.title}
            />
          </div>
          <h2 className="text-center">
            <a href={project.link} className="card-text">
              {project.title}
            </a>
          </h2>
          <p className="text-center">
            <a href={project.repo}>
              <span className="card-text fab fa-github text-center display-4"></span>
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Project;
