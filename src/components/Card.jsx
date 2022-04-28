import React from "react";
import { Card, Button } from "react-bootstrap";







export default function Individual({id, title, imagen,}){
  return(
    <div className="grid" key={id}>

    <Card style={{ width: '18rem' }} className="box">
    <Card.Img variant="top" src={imagen} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button class="btn btn-outline-primary" variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </div>
  
  )
}