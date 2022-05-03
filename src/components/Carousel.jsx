import React from "react";
import { Carousel, Item, Caption } from "react-bootstrap";
import image from "../images/concert1.jpg"
import imagen from "../images/concert2.jpg"

import imagenes from "../images/maxresdefault.jpg"



export default function Carousely() {
  return (
    <div   >
      <Carousel  style={{height: "420px",   width: "auto",  }} >
        <Carousel.Item style={{marginTop: 0, height: "580px",   width: "100%",   }}>
          <img 
            
            className="d-block w-100"
            src={imagen}
            alt="First slide"
            style={{height: "85%", width: "auto", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed"}}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{marginTop: 0, height: "580px",  width: "100%",   }}>
          <img 
            className="d-block w-100"
            src={imagen}
            alt="Second slide"
            style={{height: "85%", width: "400px"}}
          />
        

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{marginTop: 0, height: "580px",   width: "100%",   }}>
          <img 
            className="d-block w-100"
            src={imagenes}
            alt="Third slide"
            style={{height: "85%", width: "auto"}}
            
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export function Carouse2(){
  return (
    <div>
         <Carousel variant="warning" style={{width: "85%", marginLeft: "6%"}}> 
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
</Carousel>
    </div>
  )
}
