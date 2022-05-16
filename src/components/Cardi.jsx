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
    <Card.Body border = "warning" style={{ width: "425px", height: "50px"}}>
      <Card.Title variant="warning" style={{fontWeight: "bold", color: "#ffcc5c"}}  >{title}</Card.Title>
    </Card.Body>
    <ListGroup
      style={{ background: "   #1c2833  " }}
      className="list-group-flush"
    >
     
      <ListGroupItem style={{ background: "     #171717   ", width: "auto" }}  variant="warning">
        <FaCalendar /> {date}
      </ListGroupItem>
      <ListGroupItem variant="warning" style={{ background: "     #171717   ", height: "57px" }}>
        <FaSearchLocation /> {place}
      </ListGroupItem>
      <ListGroupItem variant="warning" style={{ background: "     #171717    ", height: "50px" }}>
        <ReactStars
          count={5}
          onChange={RatingChanged}
          size={30}
          activeColor="#ffd700"
        />
        
      </ListGroupItem>
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


