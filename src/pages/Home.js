// Home.js
import React from "react";
//import { motion } from "framer-motion";
import "./Home.css";
import profileImage from "../img/me3.jpg";

function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1 className="intro-heading">
          Hello, I'm <span className="highlight">Ratna Kumari</span>
        </h1>
        <h2 className="intro-subheading">
          Passionate Web Developer | Creative Thinker | Tech Enthusiast
        </h2>
        <p className="intro-paragraph">
          I'm a Computer Science student at Shyama Prasad Mukherjee College, University of Delhi, with hands-on experience in building real-world applications using HTML, CSS, JavaScript, React, and PHP.
        </p>
        <p className="intro-paragraph">
          Beyond coding, I’m an artist at heart — I love painting and dancing, which shapes my eye for design and aesthetics.
        </p>
        <p className="quote">“I turn ideas into interactive experiences.”</p>
        </div>
        <img src={profileImage} alt="Profile" className="profile-img" />
    </div>
  );
}

export default Home;
