import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home, About, Sponsors, Team, Events, Update} from './pages/index';

function App() {
  

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/sponsors" element={<Sponsors/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/update" element={<Update/>} />
     
    </Routes>
  </Router>
  )
}

export default App
