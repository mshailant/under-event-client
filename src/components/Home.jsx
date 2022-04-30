import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Action from "../redux/actions/actions";
import styles from "./Home.module.css";

import { Container, Row, Col } from "react-bootstrap";

import Footer from './Footer/Footer';

import Carousely from "./Carousel";
import Cardi from "./Cardi";
import Buttom from "./Button/ScrollButton";





export default function Home() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventosDb);

  console.log(events);
  useEffect(() => {
    dispatch(Action.getAllEvent());
  }, [dispatch]);

  console.log(events);
  useEffect(() => {
    dispatch(Action.getAllEvent());
  }, [dispatch]);
  return (
    <div>
      <div className={styles.parallax}>  
      <div className={styles.Welcome}>
      <div className={styles.imgHeader}>
    <div className={styles.Welcome}>
        <h1>UnderEvents App</h1>
        <hr/>
        <p>Web Site of selling tickets </p>
        <button className={styles.myBtn}></button>
        
    </div>
</div>
    </div>      </div>
    <div className={styles.background}>
     <div className={styles.parallax} >
       
     </div>
     <div className={styles.acercaDe}>

     <div className={styles.infoContainer}>
    <h1 className={styles.h1}>Acerca de Nosotros</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, nulla minus? Exercitationem, similique dolore laborum quod maiores dolores officiis eius inventore tempora voluptas deleniti repellat iusto tenetur, dolor blanditiis alias.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quisquam molestias qui deserunt fugiat delectus iusto, natus veniam voluptatibus expedita sint sed magnam quasi. Blanditiis iste eum aperiam optio veniam!</p>

    <div className={styles.aboutGallery}>
    <Carousely />
    </div>
    </div>
  

</div>

      <div className={styles.cards}>
        {events?.map((c) => (
          <div key={c.id}>
            <Cardi id={c.id} title={c.title} imagen={c.imagen} />
          </div>
        ))}
      </div>
      <Buttom />

     
    </div>
    <Footer/>
    </div>


  );
}
