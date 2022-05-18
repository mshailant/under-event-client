import React from "react";
import { Carousel, Item, Caption } from "react-bootstrap";
import image from "../images/a8ec34ed-a379-4fe2-89e6-c10f66f1f97c.jpg"
import imagen from "../images/c873bb0b-034a-47aa-a91e-1e8cfa421b1d.jpg"

import imagenes from "../images/f2140f52-0ad4-4beb-916c-7ab5e8c507f2.jpg"
import iim from "../images/eac7c77b-a43a-454d-8b1e-be1f71baa26e.jpg"
import imaggg from "../images/4647b209-94c4-419f-b753-c8b8db66464c.jpg"
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

        <Carousel.Item style={{marginTop: 0, height: "420px",   width: "75%", marginLeft: "12%"  }}>
          <img 
            className="d-block w-100"
            src={iim}
            alt="Third slide"
            style={{height: "85%", width: "400px"}}
            
          />

          

         
        </Carousel.Item>

        <Carousel.Item style={{marginTop: 0, height: "420px",   width: "75%", marginLeft: "12%"  }}>
          <img 
            className="d-block w-100"
            src={imaggg}
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
    <Col> <Carousel variant="warning" style={{width: "85%", marginLeft: "8%"}}> 
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
      style={{height: "250px", width: "400px"}}
    />
  
  </Carousel.Item>
</Carousel></Col>
  </Row>
</Container>
        
    </div>
  )
}
