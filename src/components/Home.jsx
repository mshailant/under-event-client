import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Action from "../redux/actions/actions";
import styles from "./Home.module.css";



import Footer from './Footer/Footer';
import ScrollButton from "./Button/ScrollButton";
import Carousely from "./Carousel";
import Cardi from "./Cardi";
import Buttom from "./Button/ScrollButton";
import ContactUs from "./ContactUs"
import { Alert } from "react-bootstrap";
import Nav from "./NavBars/Nav"
import scrollHalf from "./ScrollButtom/scrollHalfButtom";
import { FaArrowDown } from 'react-icons/fa';
import { SpinnerCircularFixed } from 'spinners-react';




export default function Home() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventosDb);
  const [carga, setCarga] = useState(true);
  console.log(events)

  
  useEffect(() => {
    dispatch(Action.getAllEvent()).then(() => setCarga(false));
  }, [dispatch]);

  

  if (carga) {
    return (
      <div className={styles.containerSpinner}>
        <div style={{background: "black", width: "2000px", height: "100vh"}}>
        < SpinnerCircularFixed style={{marginLeft: "940px", fontWeight: "bold", marginTop: "250px"}}/>;
        </div>
      </div>
    );
  }
  
  return (
    <div className={styles.containerGeneral}>
      
    <Nav/>
      <div className={styles.parallax}> 
     
      <div className={styles.Welcome}>
      <div className={styles.imgHeader}>
    <div className={styles.Welcome}>
        <h1>UnderEvents App</h1>
        <hr/>
        <p>Web Site of selling tickets </p>
        {/* <button onClick = {() => scrollHalf()} >Upcoming Events</button> */}
        <div className={styles.arrowContainer}>
    <FaArrowDown className={styles.btnArrowDown} onClick = {() => scrollHalf()} /> 
    </div>  
       
            
    </div>
    </div>
    </div>   
    </div>
    
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
  

</div >
      <div className={styles.cardsContainer}>
        <h2 className={styles.events}>Next Events</h2>
        <div className={styles.Date}>
          
     
      </div>
      <div className={styles.cards}>
      { Array.isArray(events) && events.length ? events.map( (e) => {
            
             
             

                return (
                    
                      <div key={e.id}>
                        
                    
                    <Cardi title={e.title} 
                    imagen={e.imagen} 
                    date={e.date} 
                    id={e.id}
                    eventType={e.eventType}
                    state={e.state}
                    place={e.place}
                    key={e.id}
                   
                    
                    />
                   
                    </div>
                    )  
                }) : ( <Alert style={{width: "850px", height: "350px", marginLeft: "75%"}} variant="light">
                <Alert.Heading>Ups... Something went wrong</Alert.Heading>
                <p>
                  Aww yeah, you successfully read this important alert message. This example
                  text is going to run a bit longer so that you can see how spacing within an
                  alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                  Whenever you need to, be sure to use margin utilities to keep things nice
                  and tidy.
                </p>
              </Alert>)
                }
      </div>
      <div className={styles.contactUS}>

<ContactUs/>
</div>
      </div>
      <Buttom />
     

    </div>
    
     <ScrollButton/>
     
    <Footer/>
    </div>
    


  );
}