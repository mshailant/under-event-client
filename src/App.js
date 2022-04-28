import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


import CreateEvent from "./components/CreateEvent";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/createEvent" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
