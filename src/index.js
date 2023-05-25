import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import A from './A-component.js';
import B from './B-component.js';
import CircleCounter from './circle.js';
import './circle.css';
import Button from './button.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <A/>
    <CircleCounter/>
    <Button/>
  </React.StrictMode>
);

