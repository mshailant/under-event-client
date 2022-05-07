import { React, useState, useEffect } from "react";
import { connect } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../redux/actions/actions";
import styles from "./CreateEvent.module.css";
import {
  Button,
  FormControl,
  Col,
  Row,
  Container,
  Form,
  InputGroup,
  SplitButton,
  Dropdown,
  FormSelect,
} from "react-bootstrap";
import Footer from "./Footer/Footer";

import { Formik } from "formik";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import NavTop from "./NavBars/Nav";
import imagen from "../images/pexels-darya-sannikova-3824763.jpg";
import FormExample from "./FormBootstrap/FormBotstrap";
import * as Action from "../redux/actions/actions";

export default function CreateEvent() {
  const { user, isLoading } = useAuth0();

  const stateInitialForms = {
    title: "",
    imagen: "",
    city: "",
    place: "",
    genero: "",
    date: "",
    time: "",
    stock: "",
    cost: "",
    month: "",
    address: "",
    location: "",
    description: "",
    

  };

  const [input, setInput] = useState(stateInitialForms);
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.allGeneros);
  const cities = useSelector((state) => state.allCities);

  useEffect(() => {
    dispatch(Action.getAllCities());
    dispatch(Action.getAllGeneros());
  }, [dispatch]);

  const handleInputChange = (e) => {
    setInput({
      ...input,

      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setInput({
      ...input,

      genero: e.target.value
    });
  };

  const handleCitySelect = (e) => {
    setInput({
      ...input,

      city:  e.target.value
    });
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    dispatch(Action.createEvent(input))
    alert("New event added successfully!");
    setInput({
      title: "",
      imagen: "",
      city: "",
      place: "",
      genero: "",
      date: "",
      time: "",
      stock: "",
      cost: "",
      month: "",
      address: "",
      location: "",
      description: "",
   
      
      
    });

    setValidated(true);
  };

  return (
    <div className={styles.container1}>
      <Container fluid>
        <Row>
          <Col>
            <NavTop />
            <Container>
              <Row>
                <Col xs>
                  <div className={styles.container1}>
                    <div style={{ marginTop: "85px" }}>
                      <Form
                        
                        validated={validated}
                        onSubmit={handleSubmit}
                       
                      >
                        <div>
                          <h5>INGRESA LOS DATOS DE TU EVENTO</h5>
                        </div>

                        <>
                        <Form.Group controlId="validationCustom01">
                                  <Form.Label>Nombre de evento o Banda: </Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="title"
                                    value={input.title}
                                    required
                                    onChange={handleInputChange}
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group>

                          <Form.Group controlId="validationCustom02">
                            <Form.Label>Genero Musical</Form.Label>
                            <FormSelect required onChange={(e) => handleSelect(e)}>
                              {genres?.map((dl, i) => (
                                <option key={i * 3} value={dl}>
                                  {dl}
                                </option>
                              ))}
                            </FormSelect>
                            <Form.Control.Feedback type="invalid">
                              Please choose a username.
                            </Form.Control.Feedback>
                          </Form.Group>

                          <div>
                            <Form.Text  muted>
                              Seleccion el tipo de genero con el que quieras
                              mostrarte
                            </Form.Text>
                          </div>

                          <div>
                            <Container>
                              <Row>
                                <Form.Group controlId="validationCustom03">
                                  <Form.Label>
                                    Fecha de inicio de evento
                                  </Form.Label>
                                  <Form.Control
                                    required
                                    name="date"
                                    type="date"
                                    value={input.date}
                                    onChange={handleInputChange}
                                    
                                  />
                                </Form.Group>

                              

                                <Form.Group controlId="validationCustom05">
                                  <Form.Label>
                                    Fecha de fin de evento
                                  </Form.Label>
                                  <Form.Control
                                    name="time"
                                    value={input.time}
                                    type="time"
                                    required
                                    onChange={handleInputChange}
                                  />
                                </Form.Group>
                              </Row>
                            </Container>

                            <Container>
                              <Row>
                                <Form.Group controlId="validationCustom06">
                                  
                                  <Form.Label >
                                    Escribe detalle del evento
                                  </Form.Label>

                                  <InputGroup>
                                    <InputGroup.Text>
                                      With textarea
                                    </InputGroup.Text>
                                    <FormControl
                                      as="textarea"
                                      aria-label="With textarea"
                                      name="description"
                                      value={input.description}
                                      required
                                      onChange={handleInputChange}
                                    />
                                  </InputGroup>
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Row>
                            </Container>
                          </div>

                          <div>
                            <div className={styles.direcction}>
                              <Form.Group controlId="validationCustomUsername">
                                <Form.Label>Selecciona tu ciudad</Form.Label>
                                <FormSelect
                                 required onChange={(e) => handleCitySelect(e)}
                                >
                                  {cities?.map((dl, i) => (
                                    <option key={i} value={dl}>
                                      {dl}
                                    </option>
                                  ))}
                                </FormSelect>
                                <Form.Control.Feedback type="invalid">
                                  Please choose a username.
                                </Form.Control.Feedback>
                              </Form.Group>

                              <Form.Group controlId="validationCustom07">
                                <Form.Label>Localidad: </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="location"
                                  value={input.location}
                                  required
                                  onChange={handleInputChange}
                                />
                                 <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                              </Form.Group>
                              <>
                                <Form.Group controlId="validationCustom08">
                                  <Form.Label>Direccion: </Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="address"
                                    value={input.address}
                                    required
                                    onChange={handleInputChange}
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="validationCustom09">
                                  <Form.Label>Lugar: </Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="place"
                                    value={input.place}
                                    required
                                    onChange={handleInputChange}
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="validationCustom10">
                                  <Form.Label>Imagen: </Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="imagen"
                                    value={input.imagen}
                                    required
                                    onChange={handleInputChange}
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="validationCustom11">
                                  <Form.Label>Costo: </Form.Label>
                                  <Form.Control
                                    type="number"
                                    name="cost"
                                    value={input.cost}
                                    required
                                    onChange={handleInputChange}
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="validationCustom12">
                                  <Form.Label>Stock de entradas: </Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="stock"
                                    value={input.stock}
                                    required
                                    onChange={handleInputChange}
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group>
{/* 
                                <Form.Group controlId="validationCustom13">
                                  <Form.Label>Lat: </Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="lat"
                                    value={input.lat}
                                    required
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group>

                                
                                <Form.Group controlId="validationCustom14">
                                  <Form.Label>Long: </Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="long"
                                    value={input.long}
                                    required
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group> */}

                                <Form.Group controlId="validationCustom15">
                                  <Form.Label>Mes: </Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="month"
                                    value={input.month}
                                    required
                                    onChange={handleInputChange}
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </>

                              <div className="d-grid gap-2">
                                <Button
                                  style={{ fontWeight: "bolder", marginTop: "25px" }}
                                  variant="warning"
                                  size="lg"
                                  type="submit"
                                >
                                  Crea tu Evento
                                </Button>
                              </div>
                            </div>
                          </div>
                        </>
                      </Form>
                    </div>
                  </div>
                </Col>
                <Col xs={{ order: 12 }}>
                  <div className={styles.divImg}>
                    <img
                      className={styles.img}
                      src={imagen}
                      width="620px"
                      height="auto"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
            <div className={styles.footer}>
              <Footer />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
