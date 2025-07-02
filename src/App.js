// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/footer';
import ScrollHome from './pages/ScrollHome'; // scrollable homepage
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ScrollHome />} /> {/* Scroll-based sections */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
