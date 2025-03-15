import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home, Register, Sponsors, Team, Events, Update} from './pages/index';

function App() {
  

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/reg" element={<Register/>} />
      <Route path="/sponsors" element={<Sponsors/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/update" element={<Update/>} />
     
    </Routes>
  </Router>
  )
}

export default App
