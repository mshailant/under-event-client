import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateEvent from "./components/CreateEvent";
import Nav from "./components/Nav";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/createEvent" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
