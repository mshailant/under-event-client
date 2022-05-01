import React from "react";
import { Card, Button, CardGroup, Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import style from "./Card.module.css"






export default function Cardi({id, title, imagen, description}){

  const handleClickDirectiontoDetail = () => {
    window.location.href = "/" + id;
  };
  return(
 
    <Container>
  
  <Row>
    
<Card>
    <Card.Img variant="top" src={imagen} />
    <Card.Body>
      <Card.Text>
       {title}
      </Card.Text>
      
      <Button className={style.btn} style={{marginTop: 45, marginLeft: 100}} variant="outline-dark" onClick={handleClickDirectiontoDetail}>Buy</Button>
      
    </Card.Body>
  </Card>
    
  </Row>
</Container>
  
 
  
  
  )
}