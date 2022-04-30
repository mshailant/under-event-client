import React from "react";
import { Card, Button, CardGroup, Container, Row, Col } from "react-bootstrap";
import style from "./Card.module.css"






export default function Cardi({id, title, imagen,}){

  const handleClickDirectiontoDetail = () => {
    window.location.href = "/" + id;
  };
  return(
 
    <Container>
  
  <Row>
    <Col sm><Card className={style.cards} style={{ width: '23rem', height: "32rem", background: "rgba(255, 255, 255, 0.821)",}}>
  <Card.Img className={style.img} variant="top" src={imagen}/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className={style.btn} style={{marginTop: 45, marginLeft: 100}} variant="outline-dark" onClick={handleClickDirectiontoDetail}>Go to details</Button>
  </Card.Body>
</Card></Col>
    
  </Row>
</Container>
  
 
  
  
  )
}