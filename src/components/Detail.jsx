import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../redux/actions/actions.jsx";
import { useParams } from "react-router";
import styles from "./Detail.module.css";

import { Card, Button, } from "react-bootstrap";

import {LinkContainer} from 'react-router-bootstrap'

import {Nav, Navbar, NavDropdown, Container} from "react-bootstrap"


import imagen from "../images/cret.jpg"


const Detail = () => {
  const dispatch = useDispatch();
  const detalles = useSelector((state) => state.detailEventos);
  const { id } = useParams();
  console.log(detalles)

  useEffect(() => {
    dispatch(getDetail(id));
  }, []);

  const handleDirectToHomeFromDetail = () => {
    window.location.href = "/";
  };
  return (
      <div className={styles.containerDetail}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
      <LinkContainer to = "/">
  <Navbar.Brand style={{}} >UnderEventApp</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
      {detalles ? (
        <Card  style={{ width: "75%",  height: "850px", background: "rgba(255, 255, 255, 0.781)", marginLeft: "13%", marginBottom: "55px", marginTop: "25px"}}>
          <Card.Img style={{width: "40%", height: "100%", background: "rgba(0, 0, 0, 0.6)", marginTop: "10px", marginBottom: "15px"}} variant="top" src={detalles.imagen} />
          
          <Card.Body style={{width: "100%", height: "auto", background: "rgba(0, 0, 0, 0.6)", }} >
            <Card.Text style={{color: "white", fontSize: "31px"}}>{detalles.title}</Card.Text>
            <Card.Text style={{color: "white", fontSize: "28px"}}>Date: {detalles.date} {detalles.eventTime}</Card.Text>
            <Card.Text style={{color: "white", fontSize: "28px"}}>Time: {detalles.time} {detalles.eventTime}</Card.Text>
          <Button style={{fontSize: "25px", }} variant="success" >Buy your tickets</Button>
          </Card.Body>
        </Card>
      ) : (
        <h4>Chau</h4>
      )}
      

      <Card  style={{ width: "100%",  height: "5%", background: "rgba(255, 255, 255, 0.781)", marginTop: "5px"}}>
      <Card.Img style={{width: "600px", height: "15%", background: "rgba(0, 0, 0, 0.6)", marginTop: "3px", marginBottom: "3px", marginLeft: "32%"}} variant="top" src={imagen} />
          
         
        </Card>
    </div>
  );
};

export default Detail;


