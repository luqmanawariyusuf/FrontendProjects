import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import './App.css'; // Optional: for basic styling

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          {/* The Link component is used for navigation within the app */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Main Content Area */}
        <main className="main-content">
          {/* The Routes component wraps all individual Route configurations */}
          <Routes>
            {/* Each Route defines the path and the component to render */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Optional: Add a route for unmatched paths (404 Not Found) */}
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
