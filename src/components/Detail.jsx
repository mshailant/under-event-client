import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getDetail, getTickets, detailClean } from "../redux/actions/actions.jsx";
import { useParams } from "react-router";
import styles from "./Detail.module.css";
import { useContext, useRef } from "react";

import { Card, Button } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import Footer from "./Footer/Footer.js";

import { FaCalendar, FaSearchLocation, FaTicketAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import ReactStars from "react-stars";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { ImLocation } from "react-icons/im";

import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Row,
  Col,
  Figure,
  Form,
  Placeholder,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

import NavTop from "./NavBars/Nav.jsx";
import imagen from "../images/concert2.jpg";
import ModalForm from "./ModalForm.jsx";
import { Link } from "react-router-dom";

// [lat, long] = detalles{lat, long}

const Detail = () => {
  const dispatch = useDispatch();
  const detalles = useSelector((state) => state.detailEventos);
  // const tickets = useSelector((state) => state.tickets);

  console.log(detalles, "detalles"); // {data full} // necesito sacar id  de aca //

  const { id } = useParams();

  const [comprar, setComprar] = useState("");

  const [canti, setCanti] = useState(0);

  useEffect(() => {
    dispatch(getDetail(id));
    dispatch(getTickets(id))
    dispatch(detailClean());
  }, []);

  const handleDirectToHomeFromDetail = () => {
    window.location.href = "/";
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    alert("Event added succesfully");

    JSON.parse(localStorage.getItem("id-evento"));

    localStorage.setItem("id-evento", JSON.stringify(id));

    //----------------------------------------------------------//

    let contador = JSON.parse(localStorage.getItem("carrito"));

    localStorage.setItem("carrito visual", parseInt(contador.length));

    var cantidad = parseInt(localStorage.getItem("carrito visual"));

    setCanti(cantidad);
  };

  const RatingChanged = (newRating) => {
    console.log(newRating);
  };

  // ------------------------------------------------------------------------------------//

  return (
    <div className={styles.containerGral}>
      {detalles ? (
        <div className={styles.container}>
          <div>
            <NavTop />
          </div>

          <Container>
            <Row>
              <Col>
                <Card
                  style={{ width: "44rem", height: "850px", marginTop: "15px" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <Container>
                        <Row>
                          <Col xs>
                            <h5>Tickets</h5>
                          </Col>
                          <Col xs={{ order: 12 }}>
                            <h5>Valor</h5>
                          </Col>
                          <Col>
                            <h5>Cantidad</h5>
                          </Col>
                          <hr />
                        </Row>
                      </Container>
                      <br />{" "}
                    </Card.Title>
                    <Card.Text>
                      <Container>
                        <Row>
                          <Col xs>
                            <h5 style={{ maringTop: "25px" }}>
                              {detalles.title}
                            </h5>
                          </Col>
                          <Col xs={{ order: 12 }}>
                            <h5> $ {detalles.cost}.00</h5>
                          </Col>
                          <Col>
                            <h5>{detalles.stock}</h5>
                          </Col>
                          <hr />
                        </Row>
                      </Container>
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem
                      style={{ height: "380px", marginBottom: "20px" }}
                    >
                      <MapContainer
                        style={{ height: "100%", width: "100wh" }}
                        center={[35.67, 139.65]}
                        zoom={10}
                        scrollWheelZoom={false}
                      >
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[35.67, 139.65]}>
                          <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                          </Popup>
                        </Marker>
                      </MapContainer>
                    </ListGroupItem>
                    <ListGroupItem>
                      Evento solo para Mayores de 18 Años. Rayos Laser se
                      presentará por primera vez en Niceto el 12 de mayo.
                      Despidiendo su último albúm "El Reflejo" y adelantando
                      algunas canciones de lo que será su nuevo álbum a
                      estrenarse en septiembre de 2022. Además harán un repaso
                      por su discografía y contarán con invitados sorpresa.
                    </ListGroupItem>

                    <ListGroupItem style={{ marginTop: "15px" }}>
                      <p style={{ fontSize: "12px" }}>
                        Los comentarios y/o textos ingresados son de exclusiva
                        responsabilidad del Productor y/o Organizador del
                        Evento. Passline no se hace responsable por
                        declaraciones emitidas por estos en lo relativo a los
                        Eventos. El Productor/Organizador es el único y
                        exclusivo responsable de la producción y organización
                        del Evento, en forma oportuna y en conformidad a la ley.
                      </p>
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#"></Card.Link>
                    <Card.Link href="#"></Card.Link>
                  </Card.Body>
                </Card>

                <Button
                  style={{
                    width: "600px",
                    marginTop: "20px",
                    marginLeft: "7%",
                    fontWeight: "bold",
                  }}
                  variant="warning"
                  size="lg"
                  value={detalles}
                  onClick={(e) => handleOnClick(e)}
                  className={styles.btn}
                >
                  Comprar
                </Button>
              </Col>

              <Col xs={{ order: 5 }}>
                {" "}
                <div className={styles.firstContainer}>
                  <Card style={{ width: "35rem", marginTop: "15px" }}>
                    <Card.Img variant="top" src={detalles.imagen} />
                    <Card.Body>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "Bolder" }}
                      >
                        {detalles.title}
                      </Card.Title>
                      <hr />
                      <Card.Text
                        style={{ fontSize: "17px", fontWeight: "Bolder" }}
                      >
                        {detalles.description}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem
                        style={{ fontSize: "18px", fontWeight: "Bold" }}
                      >
                        {" "}
                        <FaCalendar /> {detalles.date}
                      </ListGroupItem>
                      <ListGroupItem
                        style={{ fontSize: "16px", fontWeight: "Bold" }}
                      >
                        <GoLocation /> {detalles.place}
                      </ListGroupItem>
                      <ListGroupItem
                        style={{ fontSize: "16px", fontWeight: "Bold" }}
                      >
                        <GoLocation /> {detalles.address}
                      </ListGroupItem>
                    </ListGroup>
                    <Card.Img src={detalles.imagen} />
                    <ListGroupItem></ListGroupItem>
                    <LinkContainer to={`/reviews${detalles.id}`}>
                      <Button style={{ width: "auto",  fontWeight: "bold"}} variant="warning">
                        Deja tu Reseña 
                      </Button>
                    </LinkContainer>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
};

export default Detail;
