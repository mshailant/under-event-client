import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getDetail, getTickets } from "../redux/actions/actions.jsx";
import { useParams } from "react-router";
import styles from "./Detail.module.css";
import { useCart } from "react-use-cart";
import { Button } from "react-bootstrap";

import Footer from "./Footer/Footer.js";

import { Container, Row, Col, Figure } from "react-bootstrap";

import NavTop from "./NavBars/Nav.jsx";

const Detail = () => {
  const dispatch = useDispatch();
  const detalles = useSelector((state) => state.detailEventos);
  const tickets = useSelector((state) => state.tickets);

  const { addItem, items, cartTotal, emptyCart } = useCart();
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

  return (
    <div className={styles.containerGral}>
      {detalles ? (
        <div className={styles.container}>
          <div>
            <NavTop />
          </div>

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
                        <Col xs>
                          <h3 style={{ fontSize: "21px" }}> Tipo de Ticket </h3>
                        </Col>
                        <Col xs={{ order: 12 }}>
                          <h3 style={{ fontSize: "21px" }}> Valor </h3>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <div className={styles.ticketContainer}>
                    <Container>
                      <Row>
                        <Col xs>
                          <h3 style={{ fontSize: "21px" }}>
                            {" "}
                            {detalles.title}
                          </h3>
                        </Col>
                        <Col xs={{ order: 12 }}>
                          {" "}
                          <h3 style={{ fontSize: "21px" }}>
                            {" "}
                            ${detalles.cost}.00
                          </h3>{" "}
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
                          <Button
                            variant="warning"
                            value={detalles}
                            onClick={() => {
                              addItem(
                                {
                                  id: detalles.id,
                                  name: detalles.title,
                                  price: Number(detalles.cost.replace(".", "")),
                                  image: detalles.imagen,
                                },
                                1
                              );
                            }}
                          >
                            Comprar
                          </Button>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <Figure.Caption></Figure.Caption>
                  <Figure.Caption>
                    <div>
                      <div>
                        {" "}
                        <hr style={{ color: " #f1c40f " }} />
                      </div>
                      <div className={styles.caption}>
                        <>
                          <p aria-hidden="false">
                            <h2>{detalles.title}</h2>
                          </p>
                          <p aria-hidden="false">
                            <p>{detalles.description}</p>
                          </p>{" "}
                          <hr style={{ color: " #f1c40f " }} />
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
      )}
    </div>
  );
};

export default Detail;
