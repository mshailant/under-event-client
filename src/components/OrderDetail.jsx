import React, { useState } from "react";

import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllOrders } from "../redux/actions/actions";
import { useEffect } from "react";
import { Container, Row, Col, Card, ListGroup, Alert } from "react-bootstrap";
import imagen from "../images/Crea tu propio evento (1).jpg";
import NavTop from "./NavBars/Nav";
import Footer from "./Footer/Footer";
import styles from "./OrderDetail.module.css";
import { Link } from "react-router-dom";
import Carousely from "./Carousel";
import { ajaxUpload } from "rsuite/esm/utils";
import { User } from "@auth0/auth0-react";

export default function OrderDetail() {
  const allOrders = useSelector((state) => state.allOrders);
  console.log(allOrders, "orders");
  const dispatch = useDispatch();
  const [idTicket, setIdTicket] = useState();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

 
 try {
  const obj = allOrders?.orders?.map((e) => e.User);
  
  console.log(arregloGeneral, "obj1");

  const ticketsito = allOrders?.orders?.map((e) => e.Tickets);
  
  console.log(ticketsito, "tickets")
   let ids; 
  for (let j = 0; j < ticketsito.length; j++) {
    ids = ticketsito[j].map((e) => e);

    

    console.log(ids, "resultado");
    var arregloGeneral= [...obj, ...ids]
  }

  console.log(arregloGeneral, "generalTodo")
 } catch (error) {
   console.log(error)
   
 }

  // 

  
  

  //   return (
  //   <div>

  //   </div>
  //   );

  // };

  // export default OrderDetail;

  return (
    <div className={styles.Container}>
      <NavTop />

      <div className={styles.Container}>
        
          <Container fluid>
            <Row>
              <Col className={styles.container}>
                <div className="row justify-content-center"></div>

                <div className="row mt-3">
                  <table className="table  text-center">
                    <thead>
                      <tr>
                        <th scope="col"> </th>
                        <th scope="col"></th>
                        <th scope="col">Ticket ID </th>
                        <th scope="col">Id de Usuario </th>
                        <th scope="col">Fecha </th>
                        <th scope="col">Cantidad </th>
                        <th scope="col">Precio Total </th>
                        <th scope="col">Estado </th>
                        <th scope="col">Nombre </th>
                        <th scope="col">Apellido </th>
                     
                       
                        
                      </tr>
                    </thead>
                    {arregloGeneral ? arregloGeneral?.map( e =>  (
                    <tbody>
                      <tr>
                        <th scope="row"></th>
                        <th scope="row">
                          <img style={{ width: "4rem" }} />
                        </th>
                        {/* <td>{idTicke()}</td>
                        {/* <td>{allOrders.orders?.map((e) => e.UserId)} </td> */}
                         {/* <td> {allOrders.orders?.map((e) => e.date)}</td>
                        <td>
                          {" "}
                          {allOrders.orders?.map((e) => e.quantity + " ")}
                        </td>
                        <td>
                          {allOrders.orders?.map((e) => e.totalPrice + " ")}
                        </td>
                        <td>{allOrders.orders?.map((e) => e.status + " ")}</td>
                        <td> {allOrders.orders[1]?.User?.name}</td>
                        <td> {allOrders.orders[1]?.User?.lastName}</td> */}
                        
                        <td> {e.externalId}</td>  
                        <td> {e.name}</td>
                        <td> {e.EventId}</td>
                        <td> {e.lastName}</td>
                        <td>{e.email} </td>
                       
                        <td> {e.totalPrice}</td>
                      </tr>
                    </tbody>
                      )) : (
                        <Alert variant="success">
                          <Alert.Heading>No hay ordenes de Tickets</Alert.Heading>
              
                          <p className="mb-0">Parece que no hay ninguna orden de Tickets</p>
                        </Alert>
                      )}
                  </table>
                </div>
              </Col>
            </Row>
          </Container>
      </div>
      <Container fluid>
        <Row>
          <Col style={{ marginTop: "370px" }}> </Col>
        </Row>
      </Container>
    </div>
  );
}






const order = {
  msg: "Orden Creada",
  orderRes: {
    id: 6,
    status: "Pending",
    date: "Tue May 10 2022 14:40:51 GMT-0300 (hora estándar de Argentina)",
    quantity: 1,
    totalPrice: 1500,
    createdAt: "2022-05-10T17:40:51.305Z",
    updatedAt: "2022-05-10T17:40:51.305Z",
    UserId: "b23e456f-c0d7-449b-ba74-6ab4279ae7df",
    Tickets: [
      {
        id: "8a60918b-2505-4d20-a13c-6e10a1e0aefc",
        status: "Reservado",
        createdAt: "2022-05-10T17:37:23.226Z",
        updatedAt: "2022-05-10T17:40:51.328Z",
        OrderId: 6,
        EventId: "a4bd45ee-658a-40c9-9a37-a5ab4c7cf70e",
      },
    ],
    User: {
      id: "b23e456f-c0d7-449b-ba74-6ab4279ae7df",
      externalId: "google-oauth2|100691098426977273143",
      name: "La sara",
      lastName: "sara",
      email: "blackwilson1495@gmail.com",
      roll: "User",
      picture: "jajajajajjaj",
      city: null,
      state: false,
      createdAt: "2022-05-10T17:37:52.536Z",
      updatedAt: "2022-05-10T17:37:52.536Z",
    },
  },
};