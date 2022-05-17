import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getDetail,
  getTickets,
  addReviews,
  getReviews,
} from "../redux/actions/actions.jsx";
import { useParams } from "react-router";
import styles from "./Detail.module.css";

import { Card, Button } from "react-bootstrap";
import { useCart } from "react-use-cart";

import Footer from "./Footer/Footer.js";

import { FaCalendar, FaSearchLocation, FaTicketAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import {
  Container,
  Row,
  Col,
  Form,
  ListGroup,
  ListGroupItem,
  Modal,
} from "react-bootstrap";
import { render } from "react-dom";

import NavTop from "./NavBars/Nav.jsx";
import imagen from "../images/concert2.jpg";
import ModalForm from "./ModalForm.jsx";
import { Link } from "react-router-dom";
import L from "leaflet";
import { RiStarSFill } from "react-icons/ri";
import DetailCard from "./DetailReviewsCard.jsx";

// [lat, long] = detalles{lat, long}

const Detail = () => {
  const dispatch = useDispatch();
  const detalles = useSelector((state) => state.detailEventos);
<<<<<<< HEAD
  console.log(detalles)
  
 
 
 
=======
  const stock = useSelector((state) => state.tickets);
  const detallesReviews = useSelector((state) => state.detailReviews);
  console.log(detallesReviews, "holi");
>>>>>>> dev

  const initialState = {
    name: "",
    description: "",
    rating: "",
  };

  const [carga, setCarga] = useState(true);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState(initialState);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const tickets = useSelector((state) => state.tickets);

  const { addItem } = useCart();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
    
    dispatch(getTickets(id)).then((tickets) => {
      console.log(tickets);
    });
    
    

    
  }, []);



  const handleDirectToHomeFromDetail = () => {
    window.location.href = "/";
  };

  const RatingChanged = (newRating) => {
    console.log(newRating);
  };

  const leafletIcon = L.icon({
    iconUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconSize: [20, 30],
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,

      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      rating: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addReviews(input, detalles.id));
    alert("comentario enviado");
    setInput({
      name: "",
      description: "",
      rating: "",
    });
  }

  function handleOnClick(e) {
    const result = e.target.value;
    JSON.parse(localStorage.getItem("id"));
    localStorage.setItem("id", JSON.stringify(result));
  }

  // ------------------------------------------------------------------------------------//

  return (
   <div> 
    <div className={styles.containerGral}>
      {detalles ? (
        <div className={styles.container}>
          <div>
            <NavTop />
          </div>

          <Container>
            <Row>
              <Col>
                {["Dark "].map((variant) => (
                  <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === "light" ? "dark" : "white"}
                    style={{
                      width: "44rem",
                      height: "850px",
                      marginTop: "25px",
                    }}
                    className="mb-2"
                    border="warning"
                  >
                    <Card.Body bg="waring" variant="warning">
                      <Card.Title bg="waring" variant="warning">
                        <Container>
                          <Row>
                            <Col xs>
                              <h5
                                style={{
                                  maringTop: "25px",
                                  color: "#f4d03f",
                                  fontSize: "22px",
                                  fontWeight: "bold",
                                }}
                              >
                                Tickets
                              </h5>
                            </Col>
                            <Col xs={{ order: 12 }}>
                              <h5
                                style={{
                                  maringTop: "25px",
                                  color: "#f4d03f",
                                  fontSize: "22px",
                                  fontWeight: "bold",
                                }}
                              >
                                Valor
                              </h5>
                            </Col>
                            <Col>
                              <h5
                                style={{
                                  maringTop: "25px",
                                  color: "#f4d03f",
                                  fontSize: "22px",
                                  fontWeight: "bold",
                                }}
                              >
                                Cantidad
                              </h5>
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
                              <h5
                                style={{ maringTop: "25px", color: "#f4d03f" }}
                              >
                                {detalles.title}
                              </h5>
                            </Col>
                            <Col xs={{ order: 12 }}>
                              <h5 style={{ color: "#f4d03f" }}>
                                {" "}
                                $ {detalles.cost}.00
                              </h5>
                            </Col>
                            <Col>
                              <h5 style={{ color: "#f4d03f" }}>{stock}</h5>
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
                          <Marker
                            icon={leafletIcon}
                            position={[detalles.lat, detalles.long]}
                          >
                            <Popup>
                              A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                          </Marker>
                        </MapContainer>
                      </ListGroupItem>
                      <ListGroupItem
                        bg="waring"
                        variant="warning"
                        style={{
                          color: "black",
                          fontSize: "18px",
                          fontWeight: "bolder",
                        }}
                      >
                        {detalles.description}
                      </ListGroupItem>

                      <ListGroupItem
                        bg="waring"
                        variant="warning"
                        style={{ marginTop: "15px", color: "black" }}
                      >

{detalles.Reviews.map(e => e.description)}
             
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
                  className={styles.btn}
                  variant="warning"
                  size="lg"
                  value={detalles}
                  onClick={() => {
                    addItem(
                      {
                        id: detalles.id,
                        name: detalles.title,
                        price: Number(detalles.cost.replace(".", "")),
                        image: detalles.imagen,
                        stock: stock,
                      },
                      1
                    );
                  }}
                >
                  Comprar
                </Button>
              </Col>

              <Col xs={{ order: 5 }}>
                {" "}
                <div className={styles.firstContainer}>
                  {["Dark"].map((variant) => (
                    <Card
                      bg={variant.toLowerCase()}
                      key={variant}
                      text={
                        variant.toLowerCase() === "light" ? "dark" : "white"
                      }
                      className="mb-2"
                      style={{ width: "35rem", marginTop: "15px" }}
                    >
                      <Card.Img variant="top" src={detalles.imagen} />
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontSize: "22px",
                            fontWeight: "Bolder",
                            color: "#f4d03f",
                          }}
                        >
                          {detalles.title}
                        </Card.Title>
                        <hr />
                        <Card.Text
                          style={{
                            fontSize: "17px",
                            fontWeight: "Bolder",
                            color: "#f4d03f",
                          }}
                        >
                          {detalles.description}
                        </Card.Text>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem
                          bg="dark"
                          variant="warning"
                          style={{ fontSize: "18px", fontWeight: "Bold" }}
                        >
                          {" "}
                          <FaCalendar /> {detalles.date}
                        </ListGroupItem>
                        <ListGroupItem
                          bg="dark"
                          variant="warning"
                          style={{ fontSize: "16px", fontWeight: "Bold" }}
                        >
                          <GoLocation /> {detalles.place}
                        </ListGroupItem>
                        <ListGroupItem
                          bg="dark"
                          variant="warning"
                          style={{ fontSize: "16px", fontWeight: "Bold" }}
                        >
                          <GoLocation /> {detalles.address}
                        </ListGroupItem>
                      </ListGroup>
                      <Card.Img src={detalles.imagen} />
                      <ListGroupItem
                        bg="dark"
                        variant="warning"
                      ></ListGroupItem>

                      <Button variant="outline-warning" onClick={handleShow}>
                        Launch demo modal
                      </Button>

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header
                          style={{ background: "gold" }}
                          closeButton
                        >
                          <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body
                          style={{ background: "rgba(65, 65, 65, 0.293)" }}
                        >
                          <Form variant="warning" onSubmit={handleSubmit}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Nombre </Form.Label>
                              <Form.Control
                                type="text"
                                autoFocus
                                name="name"
                                value={input.name}
                                onChange={handleInputChange}
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label>Descripcion del evento</Form.Label>
                              <Form.Control
                                name="description"
                                value={input.description}
                                as="textarea"
                                rows={3}
                                onChange={handleInputChange}
                              />
                            </Form.Group>

                            <Form.Select
                              name="rating"
                              value={input.rating}
                              onChange={handleSelect}
                              aria-label="Default select example"
                            >
                              <option>Open this select menu</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </Form.Select>
                            <Button
                              type="submit"
                              variant="primary"
                              onClick={handleClose}
                            >
                              Save Changes
                            </Button>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer style={{ background: "gold" }}>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
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
    </div>
  );
};

export default Detail;
