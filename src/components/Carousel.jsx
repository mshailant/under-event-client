import React from "react";
import { Carousel, Item, Caption } from "react-bootstrap";
import image from "../images/1646431090104-null-04-2022-04-02-lvp-kbz-accesoya-1920x720.jpg"
import imagen from "../images/DETALLE_CARRO_DE_COMPRAS_HOME.jpg"

import imagenes from "../images/1649175668524-null-cabecera_crowder.jpg"
import {Col, Row, Container} from "react-bootstrap"


export default function Carousely() {
  return (
    <Container fluid>
  <Row>
    <Col>  <div>

      <Carousel  style={{height: "350px",   width: "auto",  }} >
        <Carousel.Item style={{marginTop: 0, height: "420px",   width: "75%", marginLeft: "12%"   }}>
          <img 
            
            className="d-block w-100"
            src={image}
            alt="First slide"
            style={{height: "85%", width: "auto", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed"}}
          />
         
        </Carousel.Item>
        <Carousel.Item style={{marginTop: 0, height: "420px",   width: "75%", marginLeft: "12%"   }}>
          <img 
            className="d-block w-100"
            src={imagen}
            alt="Second slide"
            style={{height: "85%", width: "400px"}}
          />
        

         
        </Carousel.Item>
        <Carousel.Item style={{marginTop: 0, height: "420px",   width: "75%", marginLeft: "12%"  }}>
          <img 
            className="d-block w-100"
            src={imagenes}
            alt="Third slide"
            style={{height: "85%", width: "400px"}}
            
          />

         
        </Carousel.Item>
      </Carousel>
    </div></Col>
  </Row>
</Container>
  
  );
}

export function Carouse2(){
  return (
    <div>

<Container fluid>
  <Row>
    <Col> <Carousel variant="warning" style={{width: "85%", marginLeft: "6%"}}> 
  <Carousel.Item style={{height: "250px" , width: "50%", marginLeft: "25%"}} >
    <img
      className="d-block w-100"
      src={imagenes}
      alt="First slide"
      style={{height: "250px", width: "400px"}}
    />
   
  </Carousel.Item>
  <Carousel.Item style={{height: "250px" , width: "50%", marginLeft: "25%"}} >
    <img
      className="d-block w-100"
      src={image}
      alt="Second slide"
      style={{height: "250px", width: "400px"}}
    />
   
  </Carousel.Item>
  <Carousel.Item style={{height: "250px" , width: "50%", marginLeft: "25%"}} >
    <img
      className="d-block w-100"
      src={imagen}
      alt="Third slide"
      style={{height: "250px"}}
    />
  
  </Carousel.Item>
</Carousel></Col>
  </Row>
</Container>
        
    </div>
  )
}
