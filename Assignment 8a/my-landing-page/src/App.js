import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <nav>
        {/* Navigation links use the 'Link' component */}
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* The 'Routes' component wraps all individual 'Route' configurations */}
      <Routes>
        {/* Each 'Route' defines a path and the element (component) to render */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
