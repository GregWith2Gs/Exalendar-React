import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("TEST");
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);