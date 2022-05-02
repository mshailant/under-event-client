import React from "react";
import { Card, Button, CardGroup, Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import style from "./Card.module.css";
import img from "../images/logo.png"

export default function Cardi({ id, title, imagen, description, date, place }) {
  const handleClickDirectiontoDetail = () => {
    window.location.href = "/" + id;
  };
  return (
    <Container>
      <Row>
        <Card>
          <Card.Img style={{height: "250px", width:"auto", }} variant="top" src={imagen ? imagen : img } />
          <Card.Body style={{height: "260px", width:"auto", }} >
            <Card.Text>{title}</Card.Text>
            <Card.Text>{place}</Card.Text>
            <Card.Text>Date: {date}</Card.Text>

            <Button
              className={style.btn}
              style={{ marginTop: 45, marginLeft: 100 }}
              variant="outline-dark"
              onClick={handleClickDirectiontoDetail}
            >
              Buy
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
