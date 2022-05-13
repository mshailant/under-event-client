import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import history from "./utils/history";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateEvent from "./components/CreateEvent";

import UserProfile from "./components/UserProfile";
import UserManagement from "./components/UserManagement";
import Detail from "./components/Detail";
import Pay from "./components/Payment";
import Carrito from "./components/Carrito";
import OrderDetail from "./components/OrderDetail";
import Cart from "./components/Cart";


function App() {
  const user = useSelector((state) => state.userLoged);

  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/createEvent" element={<CreateEvent />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route
          exact
          path="/userManagement"
          element={
            user?.roll === "Admin" ? (
              <UserManagement />
            ) : (
              <div>
                <h1>No tienes permisos para acceder a esta seccion</h1>
              </div>
            )
          }
        />
        <Route exact path="/:id" element={<Detail />} />
        <Route exact path="/payment" element={<Pay />} />
        <Route exact path="/carrito" element={<Carrito />} />
        <Route exact path="/orderDetail" element={<OrderDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
