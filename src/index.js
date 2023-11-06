import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MediaCard from '../src/component/News'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <MediaCard/>
  </React.StrictMode>
);
