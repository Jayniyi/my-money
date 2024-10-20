import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/authcontext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);