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
import img from "../images/pexels-darya-sannikova-3824763.jpg"

export default function Cardi({ id, title, imagen, description, date, place }) {
 
  return (
    <Container>
      <Row>
        <Card
          className={style.cards}
          style={{
            width: "18rem",
            height: "520px",
            width: "400px",
            background: "#979a9a",
          }}
        >
          <Card.Img
            style={{ height: "220px" }}
            variant="top"
            src={imagen ? imagen : img}
          />
          <Card.Body style={{ width: "400px" }}>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <ListGroup
            style={{ background: "  #979a9a " }}
            className="list-group-flush"
          >
            <ListGroupItem
              style={{ background: "  #979a9a " }}
            ></ListGroupItem>
            <ListGroupItem style={{ background: "  #979a9a " }}>
              <FaCalendar /> {date}
            </ListGroupItem>
            <ListGroupItem style={{ background: "  #979a9a  " }}>
              <FaSearchLocation /> {place}
            </ListGroupItem>
          </ListGroup>
          <Card.Body></Card.Body>
          <LinkContainer to={`/${id}`}>
            <Button
              className={style.btn}
              style={{ width: "auto" }}
              variant="warning"
            >
              <FaTicketAlt /> Add to cart
            </Button>
          </LinkContainer>
        </Card>
      </Row>
    </Container>
  );
}
