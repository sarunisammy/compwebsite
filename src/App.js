import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'


function App() {
  return (
    <div>
     
        <Routes>
          <Route>
            <Route index element={<Home />}/>
          </Route>
        </Routes>
   
    </div>
  )
}

export default App