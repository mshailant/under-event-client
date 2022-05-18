import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Action from "../redux/actions/actions";
import styles from "./Home.module.css";
import { useAuth0 } from "@auth0/auth0-react";

import Footer from "./Footer/Footer";
import Carousely, { Carouse2 } from "./Carousel";
import Cardi from "./Cardi";
import Buttom from "./Button/ScrollButton";
import imag from "../images/Crea tu propio evento (1).jpg";
import { SpinnerCircularFixed } from "spinners-react";
import { Selector } from "./NavBars/Nav";
import NavTop from "./NavBars/Nav";
import CalendarioMejorado from "./CalendarioMejorado";
import img from "../images/pexels-darya-sannikova-3824763.jpg";
import imagen from "../images/pexels-wendy-wei-1918159.jpg";

import {
  Container,
  Col,
  Row,
  ToastContainer,
  Toast,
  Alert,
  Card,
  ListGroupItem,
  Button,
} from "react-bootstrap";

export default function Home() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventosDb);
  const [carga, setCarga] = useState(true);
  const { isLoading, error, user, isAuthenticated } = useAuth0();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    dispatch(Action.getAllEvent()).then(() => setCarga(false));
    if (error) {
      console.log(error);
      setShowToast(true);
    }
  }, [dispatch]);

  if (carga) {
    return (
      <div className={styles.containerSpinner}>
        <div style={{ background: "white", width: "2000px", height: "100vh" }}>
          <SpinnerCircularFixed
            style={{
              marginLeft: "940px",
              fontWeight: "bold",
              marginTop: "250px",
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.containerGeneral}>
      <ToastContainer className="p-3 py-5 mt-5" position={"bottom-end"}>
        <Toast
          bg={"danger"}
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Error</strong>
          </Toast.Header>
          <Toast.Body>{error?.message}</Toast.Body>
        </Toast>
      </ToastContainer>

      <NavTop />
      <div style={{marginTop: "15px"}}>
        <Carousely />

        <div className={styles.navegation}>
          <Selector />
          
        </div>
      
        <div className={styles.background}>
          <div className={styles.infoContainer}></div>
          <div className={styles.cardsContainer}>
            <div className={styles.Date}></div>

            <Container fluid style={{ width: "100wh" }}>
              <Row>
                <Col style={{ width: "100wh" }} >
                  {" "}
                  <div className={styles.cards}>
                    {Array.isArray(events) && events.length ? (
                      events.map((e) => {
                        return (
                          <div key={e.id}>
                            <Cardi
                              title={e.title}
                              imagen={e.imagen}
                              date={e.date}
                              id={e.id}
                              eventType={e.eventType}
                              state={e.state}
                              place={e.place}
                              key={e.id}
                              month={e.month}
                            />
                          </div>
                        );
                      })
                    ) : (
                      <Alert
                        style={{
                          width: "850px",
                          height: "150px",
                          marginLeft: "75%",
                          background: "#292b2c",
                          color: "#f0ad4e"
                        }}
                        variant="dark"
                      >
                        <Alert.Heading>
                          No se han encontrado eventos
                        </Alert.Heading>
                        <p>
                          Explore los filtros para encontrar el evento que busca.
                        </p>
                        <hr />
                        <p className="mb-0">
                          Si tenés un problema podés hablarnos en la sección de contacto en el pie de página
                        </p>
                      </Alert>
                    )}
                  </div>
                </Col>
                <Col style={{ marginTop: "120px", float: "rigth" }} md="auto">
                  <div
                    className={styles.calendarContainer}
                    style={{ marginLeft: "5%", maringTop: "5px" }}
                  >
                    <CalendarioMejorado />
                  </div>
                  <Card  style={{ width: "17rem", marginTop: "15px", background: "#1C2833 " }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "Bolder" }}
                      >
                       
                      </Card.Title>
                      
                      <Card.Text
                        style={{ fontSize: "17px", fontWeight: "Bolder" }}
                      >
                        
                      </Card.Text>
                    </Card.Body>

                    <Card.Img src={imagen} />
                    <ListGroupItem style={{ fontSize: "19px", fontWeight: "Bolder", background: "#1C2833 "  }}  >
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "Bolder", background: "#1C2833 "  }}
                      >
                      
                      </Card.Title>
                      <hr />
                      <Card.Text
                        style={{ fontSize: "17px", fontWeight: "Bolder", background: "#1C2833 "  }}
                      >
                        
                      </Card.Text>
                    </ListGroupItem>
                  </Card>
                </Col>
              </Row>
            </Container>

            {/* <div className={styles.contactUS}>
            <ContactUs />
          </div> */}
          </div>

          <Buttom />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
