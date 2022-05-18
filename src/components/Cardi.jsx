import React from "react";
import {
  Card,
  Button,
  CardGroup,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import style from "./Card.module.css";

import { FaCalendar, FaSearchLocation, FaTicketAlt } from "react-icons/fa";

import Foo from "./StartsComponent";
import ReactStars from "react-rating-stars-component";

import { render } from "react-dom";
import img from "../images/pexels-alena-darmel-7715762.jpg"


export default function Cardi({ id, title, imagen, description, date, place }) {
  const RatingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <Container>
      <Row>
      {[
    
    
    'Dark',
  ].map((variant) => (
    <Card 
    
    bg={variant.toLowerCase()}
    key={variant}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem', height: "auto" }}
    className={style.cards}
  >
    <Card.Img
      style={{ height: "175px" }}
      variant="top"
      src={imagen}
    />
    <Card.Body border = "warning" style={{  height: "50px",  width: "auto"}}>
      <Card.Title variant="warning" style={{fontWeight: "bold", color: "#f0ad4e", width: "auto"}}  >{title}</Card.Title>
    </Card.Body>
    <ListGroup
      style={{ background: "   #1c2833  " }}
      className="list-group-flush"
    >
     
      <ListGroupItem style={{ background: "     #292b2c   ", width: "auto", color: "#f0ad4e", fontWeight: "bold"}}  variant="warning">
        <FaCalendar /> {date}
      </ListGroupItem>
      <ListGroupItem variant="warning" style={{ background: "     #292b2c   ", height: "57px", color: "#f0ad4e", fontWeight: "bold" }}>
        <FaSearchLocation /> {place}
      </ListGroupItem>
      {/* <ListGroupItem variant="warning" style={{ background: "     #292b2c   ", height: "50px", color: "#f0ad4e", fontWeight: "bold" }}>
        <ReactStars
          count={5}
          onChange={RatingChanged}
          size={30}
          activeColor="#ffd700"
        />
        
      </ListGroupItem> */}
    </ListGroup>
    <Card.Body>
    
    </Card.Body>
    <LinkContainer to={`/${id}`}>
      <Button
        className={style.btn}
        style={{ width: "800px", marginLeft: "20px" }}
        variant="warning"
      >
        <FaTicketAlt /> Ver detalle del evento
      </Button>
    </LinkContainer>
   
  </Card>
  ))}

      </Row>
    </Container>
  );
}


