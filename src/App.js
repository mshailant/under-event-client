import React from "react";
import  Home  from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route exact path="/home" element={<Home />} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
