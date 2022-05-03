import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../redux/actions/actions.jsx";
import { useParams } from "react-router";
import styles from "./Detail.module.css";

import { Card, Button, } from "react-bootstrap";

import {LinkContainer} from 'react-router-bootstrap'

import {Nav, Navbar, NavDropdown, Container, Row, Col, Figure, Form, Placeholder } from "react-bootstrap"
import NavTop from "./NavBars/Nav.jsx";


import imagen from "../images/concert2.jpg"
import FooterPage from "./NewFooter.jsx";


const Detail = () => {
  const dispatch = useDispatch();
  const detalles = useSelector((state) => state.detailEventos);
  const { id } = useParams();
  console.log(detalles, "detallaso")

  useEffect(() => {
    dispatch(getDetail(id));
  }, []);

  const handleDirectToHomeFromDetail = () => {
    window.location.href = "/";
  };
  return (
    <div  >

    {detalles ? (
    <div className={styles.container} >
    <NavTop/>
  <Container style={{background: "#ecf0f1", marginTop: "25px"}}>

  <Row>
    <Col xl><Figure>
<Figure.Image
  width={500}
  height={500}
  alt="171x180"
  src={detalles.imagen}
/>

</Figure></Col>
    <Col  xs={{ order: 12 }}><div className={styles.container2} style={{backGround: "black", height: "auto" }}>
     
      <div className={styles.ticketContainer}><Container>
  <Row >
    <Col xs>Tipo de Ticket</Col>
    <Col xs={{ order: 12 }}>Valor</Col>
    <Col xs={{ order: 1 }}>Cantidad</Col>
  </Row>
</Container></div>
      <div className={styles.ticketContainer} ><Container>
  <Row >
    <Col xs>Cuota {detalles.title}</Col>
    <Col xs={{ order: 12 }}>$ 3500 </Col>
    <Col xs={{ order: 1 }}><Form.Select aria-label="Default select example">
  <option>0</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select></Col>
  </Row>
</Container> </div>
      <div className={styles.ticketContainer} ><Container>
  <Row>
    <Col xs>First, but unordered</Col>
    <Col xs={{ order: 12 }}>Second, but last</Col>
    <Col xs={{ order: 1 }}><Form.Select aria-label="Default select example">
  <option>0</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select></Col>
  </Row>
</Container> </div>

<div className={styles.ticketContainer} ><Container>
  <Row>
    <Col xs>First, but unordered</Col>
    <Col xs={{ order: 12 }}>Second, but last</Col>
    <Col xs={{ order: 1 }}><Form.Select aria-label="Default select example">
  <option>0</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select></Col>
  </Row>
</Container> </div>

<div className={styles.ticketContainer} ><Container>
  <Row>
    <Col xs>First, but unordered</Col>
    <Col xs={{ order: 12 }}>Second, but last</Col>
    <Col xs={{ order: 1 }}>Third, but second</Col>
  </Row>
</Container>
 </div>
 <Figure.Caption>
  <div>
    <div  > <hr/>
    </div>
    <div className={styles.caption} ><>
  <p  aria-hidden="false">
    <h2>{detalles.title}</h2>
  </p>
  <p aria-hidden="false">
    <p>{detalles.description}</p>
  </p> <hr/>
  <div className={styles.containerDate}>
  <p aria-hidden="false">
    <h4>Fecha : {detalles.date}</h4>
  </p>
  <p aria-hidden="false">
    <h5>Horario : {detalles.time}</h5>
  </p>
  </div>

  
</></div>


  </div>
</Figure.Caption>
      </div>
      
      </Col>
    
  </Row>
</Container>
<FooterPage/>
</div>): <h1>error</h1>}
</div>


    
  );
};

export default Detail;


