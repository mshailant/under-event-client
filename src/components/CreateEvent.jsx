import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../redux/actions/actions";
import styles from  "./CreateEvent.module.css";
import { Button, FormControl, Col, Row, Container} from "react-bootstrap";
import Footer from './Footer/Footer';
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'

export function validate(input) {
  let errors = {};

  if (!input.title) {
    errors.title = "title is require";
  }
  else if (!input.description) {
    errors.description = "Please description is require";
  }
  // if (!input.performers.length <= 0) {
  //   errors.performers = " Please performers ir require";
  // }
  else if (!input.imagen) {
    errors.imagen = "Please image is require";
  }
  else if (!input.date) {
    errors.date = "Please enter the date";
  }
  else if (!input.time) {
    errors.time = "Please insert a valid time";
  }
  else if (!input.stock) {
    errors.stock = "Please, insert how many tickets you want to buy";
  }
  else if (!input.eventType) {
    errors.eventType = "Please, insert type of event ";
  }
  else if (!input.state) {
    errors.state = "Please, insert state you want to buy";
  }
  else if (!input.place) {
    errors.state = "Please, insert place";
  }

  return errors;
}

export default function CreateEvent() {
  const stateInitialForms = {
    title: "",
    description: "",
    // performers: "",
    eventType: "",
    imagen: "",
    date: "",
    time: "",
    stock: "",
    state: "",
    place: ""
  };

  const [input, setInput] = useState(stateInitialForms);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).length > 0) {
      alert("Please complete the information required");
    } else if (
      input.title === "" &&
      input.description === "" &&
      // input.performers === "",
      input.eventType === "" &&
     
      input.imagen === "" &&
      input.date === "" &&
      input.time === "" &&
      input.stock === ""&&
      input.state === ""&&
      input.place === ""
    ) {
      alert("Please complete the form");
    } else {
      dispatch(createEvent(input));
      alert("New event added successfully!");
      setInput({
        title: "",
        description: "",
        // performers: "",
        imagen: "",
        date: "",
        time: "",
        stock: "",
        eventType: "",
        state: "",
        place: ""
      });
    }
  };

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  // const handlePerformers = (e) => {
  //   setInput({
  //     ...input,
  //     performers: [input.performers, e.target.value],
  //   });

  //   setErrors(
  //     validate({
  //       ...input,
  //       performers: [input.performers, e.target.value],
  //     })
  //   );

  // };

  return (
    <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
      <LinkContainer to = "/">
  <Navbar.Brand style={{}} >UnderEventApp</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    
    </Nav>
    <Nav>
    
   
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    <div className={styles.containerCreate}>
      <div className={styles.containerInput}>
        
         
            
            <div className={styles.container}>
          <div className={styles.img}>
            {/* <img 
            style={{borderRadius: 8, }}
            className="d-block w-50"
            src={Event}
            alt="First slide"
          />  */}
          </div>
        
        <div className={styles.container}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.title}>
              <h2>Create your Events</h2>
            </div>

            <div className={styles.allLabel}>
              <label className={styles.labelInput} >Title:</label>

              <input
                type="text"
                name="title"
                value={input.title}
                onChange={(e) => handleInputChange(e)}
                className={styles.allInput}
              />
              <div className={styles.alert}>
              {errors.title && <p className={styles.danger}>{errors.title}</p>}
              </div>

              <label className={styles.labelInput} >Description:</label>
              <input
                type="text"
                name="description"
                value={input.description}
                onChange={(e) => handleInputChange(e)}
                className={styles.allInput}
              />
              <div className={styles.alert} >
              {errors.description && (
                <p className={styles.danger}>{errors.description}</p>
              )}
              </div>

              <label className={styles.labelInput} >Place:</label>
              <input
                type="text"
                name="place"
                value={input.place}
                onChange={(e) => handleInputChange(e)}
                className={styles.place}
              />
              <div className={styles.alert} >
              {errors.place && (
                <p className={styles.danger}>{errors.place}</p>
              )}
              </div>

             

             
              {/* <label>Performers:</label>
           <input
            type="text"
            name="performers"
            value={input.performers}
            onChange={(e) => handlePerformers(e)}
          />
          {errors.performers && <p className="danger">{errors.performers}</p>}  */}
              <label className={styles.labelInput}>Imagen:</label>
              <input
                type="text"
                name="imagen"
                value={input.imagen}
                onChange={(e) => handleInputChange(e)}
                className={styles.allInput}
              />
              <div className={styles.alert}>
              {errors.imagen && <p className={styles.danger}>{errors.imagen}</p>}
              </div>
              <label className={styles.labelInput}>Date:</label>
              <input
                type="text"
                name="date"
                value={input.date}
                onChange={(e) => handleInputChange(e)}
                className={styles.allInput}
              />
              <div className={styles.alert} >
              {errors.date && <p className={styles.danger}>{errors.date}</p>}
              </div>
              <label className={styles.labelInput} >Time:</label>
              <input
                type="text"
                name="time"
                value={input.time}
                onChange={(e) => handleInputChange(e)}
                className={styles.allInput}
                
              />
              <div className={styles.alert} >
              {errors.time && <p className={styles.danger}>{errors.time}</p>}
              </div>
              <label className={styles.labelInput} >Tickets:</label>
              <input
                type="text"
                name="stock"
                value={input.stock}
                onChange={(e) => handleInputChange(e)}
                className={styles.allInput}
              />
              <div className={styles.alert}>
              {errors.stock && <p className={styles.danger}>{errors.stock}</p>}
              </div>
              <label className={styles.labelInput} >Event Type:</label>
              <input
                type="text"
                name="eventType"
                value={input.eventType}
                onChange={(e) => handleInputChange(e)}
                className={styles.allInput}
              />
              <div className={styles.alert}>
              {errors.stock && <p className={styles.danger}>{errors.stock}</p>}
              </div>
              <label className={styles.labelInput}>State:</label>
              <input
                type="text"
                name="state"
                value={input.state}
                onChange={(e) => handleInputChange(e)}
                className={styles.allInput}
              />
              <div className={styles.alert}>
              {errors.state && <p className={styles.danger}>{errors.state}</p>}
              </div>
            </div>
            <Button
              style={{ marginTop: 10, marginLeft: 140, marginTop: 45 }}
              variant="outline-light"
              type="submit"
            >
              Create Event
            </Button>
          </form>
          </div>
        </div>
        
            
            
           
           
            
          
        
        
      </div>
      
    </div>
    <Footer/>
    </div>
  );
}