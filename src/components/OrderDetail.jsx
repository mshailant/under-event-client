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
  console.log(allOrders, "soy las ordenes");

  const dispatch = useDispatch();
  /* const [idTicket, setIdTicket] = useState(); */

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);


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


  } catch (error) {
    console.log(error)

  }

}



