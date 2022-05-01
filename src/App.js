import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateEvent from "./components/CreateEvent";

import UserProfile from "./components/UserProfile";

import Detail from "./components/Detail";

import Nav from "./components/NavBars/Nav";


function App() {
  return (
    <BrowserRouter>
   
      <Nav/>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/createEvent" element={<CreateEvent />} />
        <Route exact path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
