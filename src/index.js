import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import Hat from './hat';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hat />
    <About />
    <Portfolio />
    <Contact /> 
  </React.StrictMode>
);

reportWebVitals();