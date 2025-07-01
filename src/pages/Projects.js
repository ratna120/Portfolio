import React from "react";

import "./Projects.css";
import news from '../img/news1.jpeg';
import weather from '../img/weather.jpeg';
import game from '../img/game.jpeg';
import blog from '../img/blog.png';

function Projects() {
  

  return (
    <div className="container">
      <div className="gallery" data-aos="fade-down">
        <h3>Projects</h3>
      </div>

      <div className="card">
        <div className="card1" data-aos="fade-up">
          <img className="img1" src={news} alt="NewsMonkey" />
          <div className="layer">
            <h2>NewsMonkey</h2>
            <p className="project-desc">
              A fully functional news application developed using <strong>React.js</strong> and integrated with the <strong>NewsApi</strong>. It dynamically loads headlines by category, supports infinite scrolling, and uses functional components with props and state management.
            </p>
            <div className="card-buttons">
              <a href="https://github.com/ratna120/Newsapp" target="_blank" className="btn-card" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href=" https://ratna120.github.io/Newsapp/" target="_blank" className="btn-card" rel="noreferrer">
                <i className="fas fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="card1" data-aos="fade-up" data-aos-delay="100">
          <img className="img1" src={weather} alt="Weather App" />
          <div className="layer">
            <h2>Weather App</h2>
            <p className="project-desc">
              A responsive weather forecast app using <strong>HTML, CSS, JavaScript</strong> and a public API. Displays real-time weather, temperature, and wind speed.
            </p>
            <div className="card-buttons">
              <a href="https://github.com/ratna120/Weather-website/" target="_blank" className="btn-card" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://ratna120.github.io/Weather-website/" target="_blank" className="btn-card" rel="noreferrer">
                <i className="fas fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="card1" data-aos="fade-up" data-aos-delay="200">
          <img className="img1" src={game} alt="Tic Tac Toe" />
          <div className="layer">
            <h2>Tic-Tac-Toe Game</h2>
            <p className="project-desc">
              A 2-player game using <strong>HTML, CSS, JS</strong>. Includes win/tie detection and a clean UI.
            </p>
            <div className="card-buttons">
              <a href="https://ratna120.github.io/Tic-Tac-Toe/" target="_blank" className="btn-card" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://ratna120.github.io/Tic-Tac-Toe/" target="_blank" className="btn-card" rel="noreferrer">
                <i className="fas fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="card1" data-aos="fade-up" data-aos-delay="300">
          <img className="img1" src={blog} alt="Blog" />
          <div className="layer">
            <h2>Blogging Website</h2>
            <p className="project-desc">
              Built using <strong>MERN stack</strong>. A blog platform with authentication, user management, and post creation.
            </p>
            <div className="card-buttons">
              <a href="https://github.com/ratna120/Blogging" target="_blank" className="btn-card" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://blogging-2-ricl.onrender.com/" target="_blank" className="btn-card" rel="noreferrer">
                <i className="fas fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
