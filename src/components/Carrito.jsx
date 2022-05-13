import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Cardi from "./Cardi";
import CardCarrito from "./CardCarrito";
import { Col, Container, Row, Alert } from "react-bootstrap";
//import styles from "./Detail.module.css";
import { Figure, Form, Button } from "react-bootstrap";
import Footer from "./Footer/Footer";
import "./Carrito.css";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import * as Action from "../redux/actions/actions";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getTickets } from "../redux/actions/actions";
import ProductCard from "./ProductCard"

// ----- ------- -- - -- - - -- - - ///

const MySwal = withReactContent(Swal);

function Carrito() {
  const dispatch = useDispatch();
  const ticketsDisponibles = useSelector((state) => state.tickets);

  const [comprar, setComprar] = useState("");

  const { id } = useParams();
  useEffect(()=>{
    dispatch(getTickets(id))
  })
  
  console.log(ticketsDisponibles, "tickets ");
  
  function getTicketId(id) {
    dispatch(getTicketId(id));
  }

  let variable = JSON.parse(localStorage.getItem("carrito"));
  var cantidad = parseInt(localStorage.getItem("carrito visual counter"))

  const [render, setRender] = useState(variable);
  const [sum, setSum] = useState(0);
  const [amount, setAmount] = useState(0);
  let totalAmount = 0;

  console.log(render, "soy render");

  useEffect(() => {
    setAmount(cantidad)
    
  }, []);

  

// - - - - - - - - - - - - - - - - - - - - - - -
// Funciones para el carrito


  function removeItemFromCart(id) {
    console.log(id);
    let temp = variable.filter((item) => item.id !== id);
    //localStorage.setItem('carrito', JSON.stringify(temp))
    localStorage.setItem("carrito", JSON.stringify(temp));
    setRender(temp);
  }

  // function increaseItems() {
  //   var quantity = 1
  //   var suma = 0;
  //   var items = JSON.parse(localStorage.getItem("carrito"));

  //   for (var i = 0; i < items.length; i++) {
  //     suma += (items.price * quantity )
      
  //   }
  //   return suma;
  //   setSum(suma)
  // }


//   const handleAddOnClick = () => {

//     setCartAmount(cartAmount + 1)

//     /* console.log(comprar) */
//     /* localStorage.setItem('carrito', JSON.stringify(detalles)) */

//     // -------------------------------------------------------
//     //const localStorageContent = localStorage.getItem('carti')

//     let data = [];
//     let carritoCounter = JSON.parse(localStorage.getItem("carritoCounter"));

//     if (carritoCounter != null) {
//       for (let i = 0; i < carritoCounter.length; i++) {
//         if (carritoCounter[i].id === id) {
//           data.push(carritoCounter[i]);
//         }
//       }
//     }

//     data.push(render);
//     localStorage.setItem("carritoCounter", JSON.stringify(data)); 

//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -- 

//     let contador = JSON.parse(localStorage.getItem("carritoCounter"));

//     localStorage.setItem("carrito visual counter", parseInt(contador.length));
//   }

// // - - - - - - - - - - - - - - - - - - - - - -- - - - - - --  
//   function handleDecressCart() {
//     setCartAmount(cartAmount -1)
  
//     let data = [];
//     let carritoCounter = JSON.parse(localStorage.getItem("carritoCounter"));

//     if (carritoCounter != null) {
//       for (let i = 0; i < carritoCounter.length; i++) {
//         if (carritoCounter[i].id === id) {
//           data.push(carritoCounter[i]);
//         }
//       }
//     }

//     data.push(render);
//     localStorage.setItem("carritoCounter", JSON.stringify(data)); 

//     let contador = JSON.parse(localStorage.getItem("carritoCounter"));

//     localStorage.setItem("carrito visual counter", parseInt(contador.length));
//   }

// - - - - - - - - - - - - - - - - - - - - - - -
// Funciones relacionado a Stripe

  const handlePrice = () => {
    let ans = 0;
    render.map((item) => (ans += item.stock * item.cost));
    setRender(ans);
    setSum(ans);
  };

  // - - - - - - - - - - - - - - - - - - - - - - - - -
// Funciones relacionado a Stripe

  return (
    <Container className="div" style={{ backGround: "black" }} fluid>
      <Row>
        <Col>
          <div  className="container mt-2">
            <div className="row justify-content-center"></div>

            <div className="row mt-3">
              <table className="table  text-center">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Nombre del Producto</th>
                    <th scope="col">Precio </th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Remover</th>
                  </tr>
                </thead>
                <tbody>
                  {render.map((i, index) => (
                    <ProductCard 
                      key={index}
                      titulo={i.title}
                      precio={i.cost}
                      stock={i.stock}
                      imagen={i.imagen}
                      id={i.id}
                      removeItemFromCart={removeItemFromCart}
                      totalAmount={totalAmount}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col text-center">
                <h4>TOTAL: {totalAmount}</h4>{" "}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Carrito;
