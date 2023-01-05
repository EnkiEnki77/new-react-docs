//module that contains all react api's
import React from 'react';
//React's api for talking to web browsers
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//this file is the bridge between your components and the DOM. 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

