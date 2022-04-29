import React from "react";
import { Card, Button, CardGroup, Container, Row, Col } from "react-bootstrap";







export default function Cardi({id, title, imagen,}){

  const handleClickDirectiontoDetail = () => {
    window.location.href = `/` + id;
  };
  return(
 
    <Container>
  
  <Row>
    <Col sm><Card style={{ width: '20rem', height: "32rem"  }}>
  <Card.Img variant="top" src={imagen}/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button style={{marginTop: 45, marginLeft: 75}} variant="outline-dark" onClick={handleClickDirectiontoDetail}>Go to details</Button>
  </Card.Body>
</Card></Col>
    
  </Row>
</Container>
  
 
  
  
  )
}