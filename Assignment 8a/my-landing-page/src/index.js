import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// If using BrowserRouter inside App.js, you don't need this import here
// import { BrowserRouter } from 'react-router-dom'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* If using BrowserRouter in index.js, wrap App here */}
    <App /> 
  </React.StrictMode>
);
