import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Home/Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route>
       <Route path='/*' element={<App />}/>
        </Route>
      </Routes>

    </Router>
 
  </React.StrictMode>
);

