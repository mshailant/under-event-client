import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Action from "../redux/actions/actions";
import styles from "./Home.module.css";


import Footer from "./Footer/Footer";
import Carousely, { Carouse2 } from "./Carousel";
import Cardi from "./Cardi";
import Buttom from "./Button/ScrollButton";
//import ContactUs from "./ContactUs";
import { Alert } from "react-bootstrap";
import { SpinnerCircularFixed } from "spinners-react";
import { Selector } from "./NavBars/Nav";
import NavTop from "./NavBars/Nav";
import { Container, Col, Row } from "react-bootstrap";

export default function Home() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventosDb);
  const [carga, setCarga] = useState(true);
  console.log(events);

  useEffect(() => {
     dispatch(Action.getAllEvent()).then(() => setCarga(false));
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
          ;
        </div>
      </div>
    );
  }

  return (
    <div className={styles.containerGeneral}>
    <Container  fluid >
  <Row>
    <Col>
   
      <NavTop />

      <Carousely />

      <div className={styles.navegation}>
        <Selector />
      </div>
      <Carouse2 />

      <div className={styles.background}>
        <div className={styles.infoContainer}></div>
        <div className={styles.cardsContainer}>
          <div className={styles.Date}></div>
          <Container fluid>
  <Row>
    <Col><div className={styles.cards}>
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
                style={{ width: "850px", height: "350px", marginLeft: "75%" }}
                variant="light"
              >
                <Alert.Heading>Ups... Something went wrong</Alert.Heading>
                <p>
                  Aww yeah, you successfully read this important alert message.
                  This example text is going to run a bit longer so that you can
                  see how spacing within an alert works with this kind of
                  content.
                </p>
                <hr />
                <p className="mb-0">
                  Whenever you need to, be sure to use margin utilities to keep
                  things nice and tidy.
                </p>
              </Alert>
            )}
          </div></Col>
  </Row>
</Container>
          
          {/* <div className={styles.contactUS}>
            <ContactUs />
          </div> */}
        </div>

        <Buttom />
      </div >
         <div className={styles.footer}>
      <Footer />
      </div>
      
   </Col>
  </Row>
</Container>
</div>
  );
}



