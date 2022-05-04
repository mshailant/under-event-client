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
        <Card
          className={style.cards}
          style={{
            width: "18rem",
            height: "520px",
            width: "400px",
            background: "  #d0d3d4  ",
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
            style={{ background: "  #d0d3d4  " }}
            className="list-group-flush"
          >
            <ListGroupItem
              style={{ background: "  #d0d3d4  " }}
            ></ListGroupItem>
            <ListGroupItem style={{ background: "  #d0d3d4  " }}>
              <FaCalendar /> {date}
            </ListGroupItem>
            <ListGroupItem style={{ background: "  #d0d3d4  " }}>
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
