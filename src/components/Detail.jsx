import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getDetail,
  getTickets,
  detailClean,
} from "../redux/actions/actions.jsx";
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
import Example from "./Modal";

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
  Modal
} from "react-bootstrap";
import { render } from "react-dom";

import NavTop from "./NavBars/Nav.jsx";
import imagen from "../images/concert2.jpg";
import ModalForm from "./ModalForm.jsx";
import { Link } from "react-router-dom";
import L from "leaflet";

// [lat, long] = detalles{lat, long}

const Detail = () => {
  const dispatch = useDispatch();
  const detalles = useSelector((state) => state.detailEventos);
  // const tickets = useSelector((state) => state.tickets);

  console.log(detalles, "detalles"); // {data full} // necesito sacar id  de aca //

  const { id } = useParams();

  const [comprar, setComprar] = useState("");

  const [canti, setCanti] = useState(0);

  const leafletIcon = L.icon({
    iconUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconSize: [20, 30],
  });

  useEffect(() => {
    dispatch(getDetail(id));
    dispatch(getTickets(id));
    
  }, [dispatch]);

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
              {[
    
    'Dark ',
  ].map((variant) => (
    <Card
    bg={variant.toLowerCase()}
    key={variant}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem', width: "44rem", height: "850px", marginTop: "15px"  }}
    className="mb-2"
    border="warning"
                  
                >
                  <Card.Body bg= "waring" variant= "warning">
                    <Card.Title bg= "waring" variant= "warning" >
                      <Container>
                        <Row>
                          <Col  xs>
                            <h5  style={{ maringTop: "25px", color: "#f4d03f", fontSize: "22px", fontWeight: "bold" }} >Tickets</h5>
                          </Col>
                          <Col xs={{ order: 12 }}>
                            <h5 style={{ maringTop: "25px", color: "#f4d03f", fontSize: "22px", fontWeight: "bold" }} >Valor</h5>
                          </Col>
                          <Col>
                            <h5 style={{ maringTop: "25px", color: "#f4d03f", fontSize: "22px", fontWeight: "bold" }} >Cantidad</h5>
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
                            <h5 style={{ maringTop: "25px", color: "#f4d03f" }}>
                              {detalles.title}
                            </h5>
                          </Col>
                          <Col xs={{ order: 12 }}>
                            <h5 style={{color: "#f4d03f"}}> $ {detalles.cost}.00</h5>
                          </Col>
                          <Col>
                            <h5 style={{color: "#f4d03f"}} >{detalles.stock}</h5>
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
                        center={[detalles.lat, detalles.long]}
                        zoom={10}
                        scrollWheelZoom={false}
                      >
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker icon={leafletIcon} position={[detalles.lat, detalles.long]}>
                          <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                          </Popup>
                        </Marker>
                      </MapContainer>
                    </ListGroupItem>
                    <ListGroupItem bg= "waring" variant= "warning" style={{color: "black"}} >
                      Evento solo para Mayores de 18 Años. Rayos Laser se
                      presentará por primera vez en Niceto el 12 de mayo.
                      Despidiendo su último albúm "El Reflejo" y adelantando
                      algunas canciones de lo que será su nuevo álbum a
                      estrenarse en septiembre de 2022. Además harán un repaso
                      por su discografía y contarán con invitados sorpresa.
                    </ListGroupItem>

                    <ListGroupItem bg= "waring" variant= "warning" style={{ marginTop: "15px", color: "black" }}>
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
  ))}
                

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
                {[
   
    'Dark',
  ].map((variant) => (
    <Card  bg={variant.toLowerCase()}
    key={variant}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    
    className="mb-2"
    style={{ width: "35rem", marginTop: "15px" }}>
    <Card.Img variant="top" src={detalles.imagen} />
    <Card.Body>
      <Card.Title
        style={{ fontSize: "22px", fontWeight: "Bolder", color: "#f4d03f" }}
      >
        {detalles.title}
      </Card.Title>
      <hr />
      <Card.Text
        style={{ fontSize: "17px", fontWeight: "Bolder", color: "#f4d03f" }}
      >
        {detalles.description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem bg="dark" variant="warning"
        style={{ fontSize: "18px", fontWeight: "Bold" }}
      >
        {" "}
        <FaCalendar /> {detalles.date}
      </ListGroupItem>
      <ListGroupItem  bg="dark" variant="warning"
        style={{ fontSize: "16px", fontWeight: "Bold" }}
      >
        <GoLocation /> {detalles.place}
      </ListGroupItem>
      <ListGroupItem  bg="dark" variant="warning" 
        style={{ fontSize: "16px", fontWeight: "Bold" }}
      >
        <GoLocation /> {detalles.address}
      </ListGroupItem>
    </ListGroup>
    <Card.Img src={detalles.imagen} />
    <ListGroupItem  bg="dark" variant="warning" ></ListGroupItem>
    
     <Example/>
   
  </Card>
  ))}
               
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

export default Detail

