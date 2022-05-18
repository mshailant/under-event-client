import React, { useState } from "react";

import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllOrders, getAllEvent } from "../redux/actions/actions";
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
import CartItemOrder from "./DetailOrdenCart";

export default function OrderDetail() {
  const allOrders = useSelector((state) => state.allOrders);

  console.log(allOrders, "ordenes");
  const events = useSelector((state) => state.eventosBack);
  console.log(events);

  console.log(allOrders, "soy las ordenes");


  const dispatch = useDispatch();
  /* const [idTicket, setIdTicket] = useState(); */

  useEffect(() => {
    dispatch(getAllOrders());
    dispatch(getAllEvent());
  }, [dispatch]);


  try {
    var obj = allOrders.orders?.map((e) => e.User);
    console.log(obj, "soy el obj"); // un arreglo de un objeto de info de usuario //
    // var names = allOrders.orderes?.map((e) => e.name)
    // var lastName = allOrders.orderes?.map((e) => e.lastName)

    var setNames = [...new Set(allOrders.orders.map((e) => e.User.name))];

    var setLastNames = [
      ...new Set(allOrders.orders.map((e) => e.User.lastName)),
    ];
    var setObj = [...new Set(obj.map((e) => e.email))];
    var setPrice = [...new Set(allOrders.orders.map((e) => e.totalPrice))];

    const ticketsito = allOrders?.orders?.map((e) => e.Tickets);
    console.log(ticketsito, "tickets");

    var dataTickets = [];

    var tickets;
    for (let f = 0; f < ticketsito.length; f++) {
      tickets = ticketsito[f]?.map((e) => e.id);
      dataTickets.push(tickets.join(" / ").split(" "));

      console.log(dataTickets, "idSSSS");
    }

    var data = [];

    var ids;
    for (let j = 0; j < ticketsito.length; j++) {
      ids = ticketsito[j]?.map((e) => e.EventId);
      data.push(ids.join(""));

      console.log(data, "eventIDsss");
    }

    //tengo los ids de los eventos pero ahora quiero el nombre
    var nombres = [];
    var fechas = [];

    for (let n = 0; n < events.length; n++) {
      for (let p = 0; p < data.length; p++)
        for (let i = 0; i < data[p].length; i++) {
          if (events[n].id === data[i]) {
            nombres.push(events[n].title);
            fechas.push(events[n].date);
            var setNombres = [...new Set(nombres.map((e) => e))];
            var setFechas = [...new Set(fechas.map((e) => e))];
          }
        }
    }

    var nombresNuevos = [setNombres.join(" ,").split(" ,")];
    var fechasHoy = [setFechas.join(" ,").split(" ,")];

    var unicosElementos = [];
    var almacenadorDeVecesRepetidas = [];

    var unicosElementosFechas = [];
    var almacenadorDeVecesRepetidasFechas = [];

    let contador = 1;

    for (let i = 0; i < nombresNuevos.length; i++) {
      if (nombresNuevos[i + 1] === nombresNuevos[i]) {
        //console.log(coleccionConSort[i], "soy la vez")
        contador++;
      } else {
        unicosElementos.push(nombresNuevos[i]);
        almacenadorDeVecesRepetidas.push(contador);
        contador = 1;
      }
    }

    let contadores = 1;

    for (let i = 0; i < fechasHoy.length; i++) {
      if (fechasHoy[i + 1] === fechasHoy[i]) {
        // console.log(coleccionConSort[i], "soy la vez")
        contadores++;
      } else {
        unicosElementosFechas.push(fechasHoy[i]);
        almacenadorDeVecesRepetidasFechas.push(contadores);
        contadores = 1;
      }
    }
    // console.log(unicosElementosFechas, "soy unicos elementos fechas")
    // console.log(almacenadorDeVecesRepetidas, "soy almacenador de veces repetidas")
  } catch (error) {
    console.log(error);
  }

  //


  try {
    const usuario = allOrders?.orders?.map((e) => e.User);
    console.log(usuario, " soy el usuario que creo la orden"); //esto queda (son los datos del usuario que creo la orden)


    const ticketsito = allOrders?.orders?.map((e) => e.Tickets);
    console.log(ticketsito, "soy el tickets de la orden")

    /* for (let p = 0; p < ticketsito.length; p++){
      console.log(ticketsito[p].id)


    } */

    /* let ticketsConJoin = ticketsito.join(',')
    console.log(ticketsConJoin, "soy los tickets con el join") */

    //--------------------------------------------------------------------------------------------------------------------------

    let soloIdsDeTickets = [];/*  = ticketsito[0].map(e => e.id)
    console.log(soloIdsDeTickets, "quiero solo los ids de los tickets") */ // hasta aca tengo un ticket en el arreglo (en formad e string)
    
    for (let y = 0; y<ticketsito.length; y++){
      soloIdsDeTickets.push(ticketsito[y].map(e => e.id))
    }
    console.log(soloIdsDeTickets, "quiero solo los ids de los tickets")

    let ticketsJoin = soloIdsDeTickets.join(",")
    console.log(ticketsJoin, "soy join")

    let ticketSlpit = ticketsJoin.split(",")
    console.log(ticketSlpit, "soy slpit")

    //-------------------------------------------------------------------------------------------------------------------------

    // aca voy a intentar tomar el nombre y el apellido del usuario
    let nombre = []
    let apellido = []
    let idDelUsuario = []
    let precioTotal = []
    for (let t = 0; t < usuario.length; t++) {
      nombre.push(usuario[t].name)
      apellido.push(usuario[t].lastName)
      idDelUsuario.push(usuario[t].id)
    }


    let nombreSolo = [...new Set(nombre)]
    let apellidoSolo = [...new Set(apellido)]

    console.log(nombreSolo, "soy el nombre del usuario")
    console.log(apellidoSolo, "soy el apellido del usuario")

    //--------------------------------------------------------------------------------------------------------------------



    return (
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
                      <th scope="col">Email </th>

                      <th scope="col">Fecha </th>
                      <th scope="col">Ticket ID </th>
                      <th scope="col">Precio Total</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Nombre </th>
                      <th scope="col">Apellido </th>
                      <th scope="col">Ticket ID </th>
                      <th scope="col">Banda </th>
                      <th scope="col">Cantidad  </th>
                    </tr>
                  </thead>
                  <tbody>
                  {allOrders ? (
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
                       

                         <td> {setObj}</td>
                        <td>{unicosElementosFechas} </td>
                        <td>{dataTickets.map(e => e)}</td>

                        <td> {setPrice}.00</td>
                        <td> {allOrders.orders?.map((e) => e.quantity)}</td>
                        <td> {setNames}</td>
                        <td> {setLastNames}</td>
                        <td></td>
                        <td> {unicosElementos}</td>
                        <td> {almacenadorDeVecesRepetidas}</td> 
                      </tr>
                  ) : (
                    <h1>error</h1>
                    )}
                    </tbody>
                </table>
              </div>

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
                        <th scope="col">Index </th>
                        <th scope="col">Ticket ID </th>
                        <th scope="col">Nombre del evento</th>
                        <th scope="col">Id de Usuario </th>
                        <th scope="col">Nombre </th>
                        <th scope="col">Apellido </th>
                      </tr>
                    </thead>
                    {ticketSlpit?.map((e, index) => (
                      <tr key={index}>
                        {<td>{index}</td>}
                        <td>{ticketSlpit[index]}</td>
                        <td>{ }</td>
                        <td>{idDelUsuario}</td>
                        <td>{nombreSolo}</td>
                        <td>{apellidoSolo}</td>




                      </tr>
                    ))}
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


  } catch (error) {
    console.log(error)

  }

}




