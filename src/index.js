import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


if (localStorage.getItem('theme') === "dark")
    document.documentElement.setAttribute('data-theme', "dark")
else
    document.documentElement.setAttribute('data-theme',"light")
document.documentElement.setAttribute('data-theme',"dark");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);