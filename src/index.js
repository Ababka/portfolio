import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home';
import Portfolio from './portfolio';
import Contact from './contact';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Portfolio />
    <Contact />
  </React.StrictMode>
);

reportWebVitals();