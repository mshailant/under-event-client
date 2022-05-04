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
import img from "../images/logo.png";
import { FaCalendar, FaSearchLocation, FaTicketAlt } from "react-icons/fa";

export default function Cardi({ id, title, imagen, description, date, place }) {
  const handleClickDirectiontoDetail = () => {
    window.location.href = "/" + id;
  };
  return (
    <Container>
      <Row>
        <Card style={{ width: "18rem", height: "500px" }}>
          <Card.Img
            style={{ height: "200px" }}
            variant="top"
            src={imagen ? imagen : img}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem></ListGroupItem>
            <ListGroupItem>
              <FaCalendar /> {date}
            </ListGroupItem>
            <ListGroupItem>
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
              <FaTicketAlt /> Buy
            </Button>
          </LinkContainer>
        </Card>
      </Row>
    </Container>
  );
}
