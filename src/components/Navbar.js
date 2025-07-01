// Navbar.js
import React, { useState } from "react";
import './Navbar.css';
import { Link as ScrollLink } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="wrapper">
      <nav>
        <h2 className="logo">Ratna.</h2>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {isHome ? (
            <>
              <li><ScrollLink to="home" smooth={true} offset={-80} duration={500} onClick={closeMenu}>Home</ScrollLink></li>
              <li><ScrollLink to="about" smooth={true} offset={-80} duration={500} onClick={closeMenu}>About</ScrollLink></li>
              <li><ScrollLink to="projects" smooth={true} offset={-80} duration={500} onClick={closeMenu}>Projects</ScrollLink></li>
              <li><ScrollLink to="contact" smooth={true} offset={-80} duration={500} onClick={closeMenu}>Contact</ScrollLink></li>
            </>
          ) : (
            <>
              <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
              <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
              <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
