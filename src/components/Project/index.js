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
    <div>
      {projects.map((project) => (
        <div>
          <div>
            <img
              alt={project.title}
              src={require(`../../assets/images/${project.image}`).default}
            />
          </div>
          <h2>{project.title}</h2>
          <p>
            <a href={project.link}>Deployed Application</a>
          </p>
          <p>
            <a href={project.repo}>Project Repository</a>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Project;
