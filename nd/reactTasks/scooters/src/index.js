import React from 'react';
import ReactDOM from 'react-dom/client';  // <-- Changed from 'react-dom' to 'react-dom/client'
import App from './App';
import './index.css';

// Create a root using the `createRoot` method
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the `render` method of the created root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
