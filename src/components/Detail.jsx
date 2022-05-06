import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../redux/actions/actions.jsx";
import { useParams } from "react-router";
import styles from "./Detail.module.css";

import { Card, Button } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import Footer from "./Footer/Footer.js";

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
} from "react-bootstrap";

import NavTop from "./NavBars/Nav.jsx";
import imagen from "../images/concert2.jpg";





const Detail = () => {
  const dispatch = useDispatch();
  const detalles = useSelector((state) => state.detailEventos);
  const { id } = useParams();
  console.log(detalles, "detallaso");

  useEffect(() => {
    dispatch(getDetail(id));
  }, []);

  const handleDirectToHomeFromDetail = () => {
    window.location.href = "/";
  };

  const handleOnClick = (e) =>{
    e.preventDefault();
    alert("Event added succesfully")
  }

  return (
    <div className={styles.containerGral}>
      <Container fluid >
  <Row>
    <Col >
    {detalles ? (
        <div className={styles.container}>
          <NavTop />
          <Container
            className={styles.containerGrid}
            style={{ background: "#979a9a", marginTop: "25px" }}
          >
            <Row>
              <Col xl>
                <Figure>
                  <Figure.Image
                    className={styles.cardImg}
                    width={620}
                    height={700}
                    alt="171x250"
                    src={detalles.imagen}
                  />
                </Figure>
              </Col>
              <Col xs={{ order: 12 }}>
                <div
                  className={styles.container2}
                  style={{ backGround: "#979a9a", height: "auto" }}
                >
                  <div className={styles.ticketContainer}>
                    <Container>
                      <Row>
                        <Col xs>Tipo de Ticket</Col>
                        <Col xs={{ order: 12 }}>Valor</Col>
                        <Col xs={{ order: 1 }}>Cantidad</Col>
                      </Row>
                    </Container>
                  </div>
                  <div className={styles.ticketContainer}>
                    <Container>
                      <Row>
                        <Col xs>Cuota {detalles.title}</Col>
                        <Col xs={{ order: 12 }}>$ 3500 </Col>
                        <Col xs={{ order: 1 }}>
                          <Form.Select aria-label="Default select example">
                            <option>0</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Col>
                      </Row>
                    </Container>{" "}
                  </div>
                  <div className={styles.ticketContainer}>
                    <Container>
                      <Row>
                        <Col xs>First, but unordered</Col>
                        <Col xs={{ order: 12 }}>Second, but last</Col>
                        <Col xs={{ order: 1 }}>
                          <Form.Select aria-label="Default select example">
                            <option>0</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Col>
                      </Row>
                    </Container>{" "}
                  </div>

                  <div className={styles.ticketContainer}>
                    <Container>
                      <Row>
                        <Col xs>First, but unordered</Col>
                        <Col xs={{ order: 12 }}>Second, but last</Col>
                        <Col xs={{ order: 1 }}>
                          <Form.Select aria-label="Default select example">
                            <option>0</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Col>
                      </Row>
                    </Container>{" "}
                  </div>

                  <div className={styles.ticketContainerBuy}>
                    <Container>
                      <Row>
                        <Col xs></Col>
                        <Col xs={{ order: 12 }}></Col>
                        <Col style={{ marginLeft: "270px" }} xs={{ order: 1 }}>
                          <Button variant="warning" onClick={handleOnClick}>Comprar</Button>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <Figure.Caption>
                    <div>hola aca pone el calendario!!!</div>
                  </Figure.Caption>
                  <Figure.Caption>
                    <div>
                      <div>
                        {" "}
                        <hr style={{color: " #f1c40f "}}/>
                      </div>
                      <div className={styles.caption}>
                        <>
                          <p aria-hidden="false">
                            <h2>{detalles.title}</h2>
                          </p>
                          <p aria-hidden="false">
                            <p>{detalles.description}</p>
                          </p>{" "}
                          <hr style={{color: " #f1c40f "}} />
                          <div className={styles.containerDate}>
                            <p aria-hidden="false">
                              <h4>Fecha : {detalles.date}</h4>
                            </p>
                            <p aria-hidden="false">
                              <h5>Horario : {detalles.time}</h5>
                            </p>
                          </div>
                        </>
                      </div>
                    </div>
                  </Figure.Caption>
                </div>
              </Col>
            </Row>
          </Container>
          <div className={styles.footer}>
      <Footer />
      </div>
        </div>
      ) : (
        <h1>error</h1>
      )}</Col>
  </Row>
</Container>
      
     
    </div>
  );
};

export default Detail;
