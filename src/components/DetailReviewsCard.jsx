import React from "react";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap"

const DetailCard = ({  description, rating, name }) => {
  return (
    
    <Card style={{ width: "100%" }}>
      <ListGroup variant="flush">
        <ListGroup.Item>{name}</ListGroup.Item>
        <ListGroup.Item>{rating}</ListGroup.Item>
        <ListGroup.Item>{description}</ListGroup.Item>
      </ListGroup>
    </Card>
    
  );
}

export default DetailCard;