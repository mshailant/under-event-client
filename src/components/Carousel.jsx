import React from "react";
import { Carousel, Item, Caption } from "react-bootstrap";

export default function Carousely() {
  return (
    <div>
      <Carousel>
        <Carousel.Item style={{marginTop: 50}}>
          <img
            className="d-block w-100"
            src={"./img/01.jpg"}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{marginTop: 50}}>
          <img
            className="d-block w-100"
            src={"./img/02.jpg"}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{marginTop: 50  }}>
          <img
            className="d-block w-100"
            src={"./img/03.jpg" }
            alt="Third slide"
            
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
