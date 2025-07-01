// Footer.js
import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
       <p className="footer-tagline">© {new Date().getFullYear()} | Designed & Developed by You</p>
        <div className="footer-socials">
          <a href="https://github.com/ratna120" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ratna-kumari-328a09259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:ratnakumari20032006@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20there!">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
