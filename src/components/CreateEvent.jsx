import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../redux/actions/actions";
import styles from "./CreateEvent.module.css";
import { Button, FormControl, Col, Row, Container, Form, InputGroup,  SplitButton, Dropdown  } from "react-bootstrap";
import Footer from "./Footer/Footer";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import NavTop from "./NavBars/Nav";
import imagen from '../images/pexels-darya-sannikova-3824763.jpg'
import FormExample from "./FormBootstrap/FormBotstrap";


export function validate(input) {
  let errors = {};

  if (!input.title) {
    errors.title = "title is require";
  } else if (!input.description) {
    errors.description = "Please description is require";
  }
  // if (!input.performers.length <= 0) {
  //   errors.performers = " Please performers ir require";
  // }
  else if (!input.imagen) {
    errors.imagen = "Please image is require";
  } else if (!input.date) {
    errors.date = "Please enter the date";
  } else if (!input.time) {
    errors.time = "Please insert a valid time";
  } else if (!input.stock) {
    errors.stock = "Please, insert how many tickets you want to buy";
  } else if (!input.eventType) {
    errors.eventType = "Please, insert type of event ";
  } else if (!input.state) {
    errors.state = "Please, insert state you want to buy";
  } else if (!input.place) {
    errors.state = "Please, insert place";
  }

  return errors;
}

export default function CreateEvent() {
  const { user, isLoading } = useAuth0();

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
    place: "",
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
      input.stock === "" &&
      input.state === "" &&
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
        place: "",
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

 return (
   <div className={styles.container1} >
     <Container fluid>
  <Row>
    <Col><NavTop/>
     <Container  >
  <Row>
    <Col xs><div className={styles.container1}>
       <div style={{marginTop: "85px"}}>
       <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Tu Email: </Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  
  
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    
  </Form.Group>
  
  <FormExample/>
  <div><h5>INGRESA LOS DATOS DE TU EVENTO</h5></div>
  <Form.Label>Provincia de destino</Form.Label>
  <Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>

  
</Form.Select>
<Form.Label>Tipo de evento</Form.Label>
<Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>

  
</Form.Select>
<div>
<Form.Text id="passwordHelpBlock" muted>
    Your password must be 8-20 characters long, contain letters and numbers, and
    must not contain spaces, special characters, or emoji.
  </Form.Text>
</div>
<Form.Label>Evento solo para mayores de edad</Form.Label>
<Form.Select aria-label="Default select example">
  <option>No</option>
  <option value="1">No</option>
  <option value="1">Si</option>

  
</Form.Select>
<>
  <Form.Label htmlFor="inputPassword5">Nombre del evento</Form.Label>
  <Form.Control
    type="text"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
  />
  
  <Form.Label htmlFor="inputPassword5">Escribe la categoria del evento</Form.Label>
  <Form.Control
    type="text"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
  />

<Form.Label htmlFor="inputPassword5">Artistas Participantes</Form.Label>
  <Form.Control
    type="text"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
  />
<Form.Label htmlFor="inputPassword5">Escribe detalle del evento</Form.Label>
<InputGroup>
    <InputGroup.Text>With textarea</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
 
  <div><Container>
  <Row>

    <Form.Label htmlFor="inputPassword5">Fecha de inicio del evento</Form.Label>
    <Col xs={{ order: 12 }}><Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select></Col>
    <Col xs={{ order: 1 }}><Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select></Col>
  </Row>
</Container>

<Container>
  <Row>

    <Form.Label htmlFor="inputPassword5">Escribe detalle del evento</Form.Label>
    <Col xs={{ order: 12 }}><Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select></Col>
    <Col xs={{ order: 1 }}><Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select></Col>
  </Row>
</Container></div>

<div><Container>
  <Row>

    <Form.Label htmlFor="inputPassword5">Fecha y hora de termino de tu evento</Form.Label>
    <Col xs={{ order: 12 }}><Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select></Col>
    <Col xs={{ order: 1 }}><Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select></Col>
  </Row>
</Container>

<Container>
  <Row>

    <Form.Label htmlFor="inputPassword5"></Form.Label>
    <Col xs={{ order: 12 }}><Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select></Col>
    <Col xs={{ order: 1 }}><Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select></Col>
  </Row>
</Container>
<div className={styles.direcction}>
<Form.Label htmlFor="inputPassword5">Provincia: </Form.Label>
<Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>

<>

  <Form.Label htmlFor="inputPassword5">Direccion:  </Form.Label>
  <Form.Control
    type="password"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
  />
  
</>

<>

  <Form.Label htmlFor="inputPassword5">Lugar del evento: </Form.Label>
  <Form.Control
    type="password"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
  />
  
  <InputGroup style={{marginTop: "17px"}}  className="mb-3">
    <SplitButton
      variant="outline-secondary"
      title="Cargar Imagen"
      id="segmented-button-dropdown-1"
      type="file"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </SplitButton>
   
  </InputGroup>

</>

<div className="d-grid gap-2">
  <Button style={{fontWeight: "bolder"}} variant="warning" size="lg">
    Crea tu Evento
  </Button>
  
</div>
</div>
</div>

</>


</Form>

       </div>
      </div></Col>
    <Col xs={{ order: 12 }}>
    <div className={styles.divImg}><img className={styles.img} src={imagen} width="620px" height="auto" /></div></Col>
    
  </Row>
</Container>
<div className={styles.footer}>
<Footer/>
</div>

</Col>
  </Row>
</Container>
     
   </div>
 )

  }


