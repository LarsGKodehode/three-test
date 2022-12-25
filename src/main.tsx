// Librareis
import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './styles/basic.css';
import './styles/tailwind.css';

// Components
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
