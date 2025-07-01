import React from "react";
import "./About.css";
import cvFile from "../assets/RatnaKumariResume.pdf";

function About() {
  const handleViewResume = () => {
    window.open(cvFile, "_blank");
  };

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
      </div>

      <div className="infosection">
        {/* Skills Section */}
        <div className="imageSection">
          <h2 className="skills-heading">Skills</h2>
          <div className="skills-grid">
            <div className="skill"><i className="fas fa-code"></i><span>C++</span></div>
            <div className="skill"><i className="fas fa-python"></i><span>Python</span></div>
            <div className="skill"><i className="fab fa-html5"></i><span>HTML</span></div>
            <div className="skill"><i className="fab fa-css3-alt"></i><span>CSS</span></div>
            <div className="skill"><i className="fab fa-js-square"></i><span>JavaScript</span></div>
            <div className="skill"><i className="fab fa-react"></i><span>React</span></div>
            <div className="skill"><i className="fab fa-php"></i><span>PHP</span></div>
            <div className="skill"><i className="fas fa-node-js"></i><span>Node Js</span></div>
            <div className="skill"><i className="fas fa-mongo-db"></i><span>MongoDB</span></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-content">
          <p>
           I'm a passionate and curious developer with a strong foundation in both frontend and backend technologies. As a computer science student, I've built several meaningful projects, including a credit card fraud detection system and a portfolio website, which have helped me gain hands-on experience in modern tech stacks like React.js, Node.js, Express, and MongoDB. I love crafting clean, responsive, and visually engaging user interfaces while ensuring strong backend functionality. Every project I take on is an opportunity to combine creativity with logic, learn something new, and deliver a solution that makes an impact. I'm always excited to take on new challenges, grow as a developer, and contribute to innovative, real-world solutions.
          </p>
          <div className="personalInfo">
            <div><span>Name</span><span>: Ratna Kumari</span></div>
            <div><span>Email</span><span>: ratnakumari20032006@gmail.com</span></div>
            <div><span>Address</span><span>: Asansol, West Bengal-713324</span></div>
            <div><span>College</span><span>: Shyama Prasad Mukherjee College, University of Delhi</span></div>
            <div><span>Graduation Year</span><span>: 2022–2025</span></div>
          </div>

          <div className="button">
            <button onClick={handleViewResume}>View Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
