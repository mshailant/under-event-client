import React from "react";
import { Carousel, Item, Caption } from "react-bootstrap";
import image from "../images/pexels-pixabay-264279.jpg"
import imagen from "../images/pexels-teddy-yang-2263436.jpg"

import imagenes from "../images/pexels-wendy-wei-1916816.jpg"



export default function Carousely() {
  return (
    <div  >
      <Carousel>
        <Carousel.Item style={{marginTop: 50,  width: "1250px",  height: 650,  marginLeft: "18%", borderRadius: 15,  marginTop: 35 }}>
          <img 
            style={{borderRadius: 8, }}
            className="d-block w-100"
            src={image}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{marginTop: 50 ,    width: "1250px",  height: 650 , marginLeft: "18%", borderRadius: 15,  marginTop: 35}}>
          <img 
            className="d-block w-100"
            src={imagen}
            alt="Second slide"
          />
        

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{marginTop: 50 ,   width: "1250px", height: 650 , marginLeft: "18%" , borderRadius: 15, marginTop: 35  }}>
          <img 
            className="d-block w-100"
            src={imagenes}
            alt="Third slide"
            
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
