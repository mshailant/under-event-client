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
        <Card
          className={style.cards}
          style={{
            
            width: "700px",
            height: "600px",
            background: "#979a9a",
          }}
        >
          <Card.Img
            style={{ height: "220px" }}
            variant="top"
            src={imagen}
          />
          <Card.Body style={{ width: "400px", height: "auto"}}>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <ListGroup
            style={{ background: "  #979a9a " }}
            className="list-group-flush"
          >
            <ListGroupItem style={{ background: "  #979a9a " }}></ListGroupItem>
            <ListGroupItem style={{ background: "  #979a9a " }}>
              <FaCalendar /> {date}
            </ListGroupItem>
            <ListGroupItem style={{ background: "  #979a9a  " }}>
              <FaSearchLocation /> {place}
            </ListGroupItem>
            <ListGroupItem style={{ background: "  #979a9a  ", height: "100px" }}>
              <ReactStars
                count={5}
                onChange={RatingChanged}
                size={30}
                activeColor="#ffd700"
              />
              ,
            </ListGroupItem>
          </ListGroup>
          <Card.Body></Card.Body>
          <LinkContainer to={`/${id}`}>
            <Button
              className={style.btn}
              style={{ width: "auto" }}
              variant="warning"
            >
              <FaTicketAlt /> Ver detalle del evento
            </Button>
          </LinkContainer>
        </Card>
      </Row>
    </Container>
  );
}
