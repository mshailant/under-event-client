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
import Footer from "./Footer/Footer.js";


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
    
    </Nav>
    <Nav>
    
   
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
      {detalles ? (
        <Card  style={{ width: "60%",  height: "650px", background: "rgba(210, 210, 210, 0.529)", marginLeft: "20%", marginBottom: "150px", marginTop: "25px"}}>
          <Card.Img style={{width: "40%", height: "50%", background: "rgba(0, 0, 0, 0.6)", marginTop: "10px", marginBottom: "15px"}} variant="top" src={detalles.imagen} />
          
          <Card.Body style={{width: "100%", height: "auto", height: "30%",  background: "rgba(0, 0, 0, 0.6)", }} >
            <Card.Text style={{color: "white", fontSize: "31px"}}>{detalles.title}</Card.Text>
            <Card.Text style={{color: "white", fontSize: "28px"}}>Date: {detalles.date} {detalles.eventTime}</Card.Text>
            <Card.Text style={{color: "white", fontSize: "28px"}}>Time: {detalles.time} {detalles.eventTime}</Card.Text>
        
          </Card.Body>
          <Button style={{fontSize: "25px",  }} variant="success" >Buy your tickets</Button>
        </Card>
      ) : (
        <h4>Chau</h4>
      )}
      

      <Card  style={{ width: "100%",  height: "5%", background: "rgba(210, 210, 210, 0.529)", }}>
      <Card.Img style={{width: "600px", height: "15%", background: "rgba(0, 0, 0, 0.6)", marginTop: "3px", marginBottom: "3px", marginLeft: "34%"}} variant="top" src={imagen} />
          
         
        </Card>
        <Footer/>
    </div>
  );
};

export default Detail;


