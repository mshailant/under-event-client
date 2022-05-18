import React, { useState } from "react";

import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllOrders, getAllEvent } from "../redux/actions/actions";
import { useEffect } from "react";
import { Container, Row, Col, Table, Card, ListGroup, Alert } from "react-bootstrap";
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

  const allEvents = useSelector((state) => state.eventosBack)
  console.log(allEvents, "soy todos los eventos")

  const dispatch = useDispatch();
  /* const [idTicket, setIdTicket] = useState(); */

  useEffect(() => {
    dispatch(getAllOrders());
    dispatch(getAllEvent());
  }, [dispatch]);


  try {
    const usuario = allOrders?.orders?.map((e) => e.User);
    console.log(usuario, " soy el usuario que creo la orden"); //esto queda (son los datos del usuario que creo la orden)


    const ticketsito = allOrders?.orders?.map((e) => e.Tickets);
    console.log(ticketsito, "soy el tickets de la orden")

    

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

    /* console.log(nombreSolo, "soy el nombre del usuario")
    console.log(apellidoSolo, "soy el apellido del usuario") */

    //--------------------------------------------------------------------------------------------------------------------
    //ahora quiero solo los ids de los eventos (lo voy a sacar de los ticket)

    let soloIdsDeLosEventos = [];/*  = ticketsito[0].map(e => e.id)
    console.log(soloIdsDeTickets, "quiero solo los ids de los tickets") */ // hasta aca tengo un ticket en el arreglo (en formad e string)
    
    for (let y = 0; y<ticketsito.length; y++){
      soloIdsDeLosEventos.push(ticketsito[y].map(e => e.EventId))
    }
    console.log(soloIdsDeLosEventos, "quiero solo los ids de los eventos")

    let IdsDeLosEventosJoin = soloIdsDeLosEventos.join(",")
    console.log(IdsDeLosEventosJoin, "soy join de los eventos ids")

    let IdsDeLosEventosSlpit = IdsDeLosEventosJoin.split(",")
    console.log(IdsDeLosEventosSlpit, "soy slpit de los eventos ids")
    //----------------------------------------------------------------------------------------------------------------------------
    //ahora quiero los nombre de los eventos (para ello usare el id del evento)

    let nombreDeLosEventos = []
    let ciudad = []
    let costo = []
    let lugar = []
    let hora = []
    let fecha = []

    //place
    //time
    //date

    for (let l = 0; l < IdsDeLosEventosSlpit.length; l++){
      for (let m = 0; m < allEvents.length; m++){
        if (IdsDeLosEventosSlpit[l] == allEvents[m].id){
          nombreDeLosEventos.push(allEvents[m].title)
          ciudad.push(allEvents[m].city)
          costo.push(allEvents[m].cost)
          lugar.push(allEvents[m].place)
          hora.push(allEvents[m].time)
          fecha.push(allEvents[m].date)
        }
      }
    }
    console.log(nombreDeLosEventos, "soy el nombre de los eventos")
    console.log(ciudad, "soy la ciudad de los eventos")
    console.log(costo, "soy el costo de los eventos")

    

    return (
      <div className={styles.Container}>
        <NavTop />

        <Container bg="white" mt={5} mb={5}/* fluid */>

        <div className={styles.Container}>

          <Container bg="white" mt={5} mb={5}>
            <Row>
              <Col className={styles.container}>
                <div className="row justify-content-center">

                <div className="row mt-3">
                <Table striped hover>
                  {/* <table className="table  text-center"> */}
                    <thead>
                      <tr>
                        <th style={{fontWeight: "bold", fontSize: "20px"}}  scope="col">Index </th>
                        <th style={{fontWeight: "bold", fontSize: "20px"}} scope="col">Ticket ID </th>
                        <th style={{fontWeight: "bold", fontSize: "20px"}} scope="col">Evento ID</th>
                        <th style={{fontWeight: "bold", fontSize: "20px"}} scope="col">Nombre del evento</th>
                        <th style={{fontWeight: "bold", fontSize: "20px"}} scope="col">Ciudad</th>
                        <th style={{fontWeight: "bold", fontSize: "20px"}} scope="col">Lugar</th>
                        <th style={{fontWeight: "bold", fontSize: "20px"}} scope="col">fecha</th>
                        <th style={{fontWeight: "bold", fontSize: "20px"}} scope="col">Hora</th>
                        <th style={{fontWeight: "bold", fontSize: "20px"}} scope="col">Costo</th>
                        <th style={{fontWeight: "bold", fontSize: "20px"}} scope="col">Id de Usuario </th>
                        {/* <th scope="col">Nombre </th>
                        <th scope="col">Apellido </th> */}
                      </tr>
                    </thead>
                    {ticketSlpit?.map((e, index) => (
                      <tr key={index}>
                        {<td style={{fontWeight: "bold"}} >{index}</td>}
                        <td style={{fontWeight: "bold"}} >{ticketSlpit[index]}</td>
                        <td style={{fontWeight: "bold"}} >{IdsDeLosEventosSlpit[index]}</td>
                        <td style={{fontWeight: "bold"}} >{nombreDeLosEventos[index]}</td>
                        <td style={{fontWeight: "bold"}} >{ciudad[index]}</td>
                        <td style={{fontWeight: "bold"}} >{lugar[index]}</td>
                        <td style={{fontWeight: "bold"}} >{fecha[index]}</td>
                        <td style={{fontWeight: "bold"}} >{hora[index]}</td>
                        <td style={{fontWeight: "bold"}}>${costo[index]}</td>
                        <td style={{fontWeight: "bold"}} >{idDelUsuario}</td>
                        {/* <td>{nombreSolo}</td>
                        <td>{apellidoSolo}</td> */}
                      </tr>
                    ))}
                    </Table>
                  {/* </table> */}
                </div>
                </div>
                <div style={{marginTop: '250px'}}>

                <Carousely/>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        </Container>
        <div style={{marginTop: "15px"}}>

        <Footer/>
        </div>
      </div>
    );


  } catch (error) {
    console.log(error)

  }

}