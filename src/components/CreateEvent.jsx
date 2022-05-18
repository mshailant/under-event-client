import { React, useState, useEffect } from "react";
import { connect } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../redux/actions/actions";
import styles from "./CreateEvent.module.css";
import Loading from "./Loading";
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
} from "react-bootstrap";
import Footer from "./Footer/Footer";
import * as Action from "../redux/actions/actions";

import { Formik } from "formik";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import NavTop from "./NavBars/Nav";
import imagen from "../images/pexels-darya-sannikova-3824763.jpg";
import UploadImg from "./UploadImg/UploadImg";

export function CreateEvent() {
  const stateInitialForms = {
    title: "",
    imagen: "",
    city: "",
    place: "",
    description: "",
    genero: "",
    date: "",
    time: "",
    stock: "",
    cost: "",
    month: "",
    address: "",
    location: "",
  };

  const { user, isLoading } = useAuth0();

  const [input, setInput] = useState(stateInitialForms);
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const userLoged = useSelector((state) => state.userLoged);
  const genres = useSelector((state) => state.allGeneros);
  const city = useSelector((state) => state.allCities);
  const [urlImg, setUrlImg] = useState("");
  useEffect(() => {
    dispatch(Action.getAllGeneros());
    dispatch(Action.getAllCities());
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
      genero: e.target.value,
    });
  };

  const handleCitySelect = (e) => {
    setInput({
      ...input,
      city: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    dispatch(Action.createEvent({ ...input, userEmail: userLoged.email, imagen: urlImg }));
    alert("New event added successfully!");
    setInput({
      title: "",
      imagen: "",
      city: "",
      place: "",
      description: "",
      genero: "",
      date: "",
      time: "",
      stock: "",
      cost: "",
      month: "",
      address: "",
      location: "",
    });

    setValidated(true);
  };

  return (
    <div className={styles.container1}>
      
            <NavTop />
            <Container>
              <Row>
                <Col xs>
                  <div className={styles.container1}>
                    <div style={{ marginTop: "85px" }}>
                      <Form  validated={validated} onSubmit={handleSubmit}>
                        <div>
                          <h5   style={{ color:  " #f7dc6f " , borderColor: "black", fontWeight:"bold"}}>INGRESA LOS DATOS DE TU EVENTO</h5>
                        </div>

                        <Form.Group controlId="validationCustom01">
                          <Form.Label  style={{ color:  " #f7dc6f " , fontWeight:"bold", marginTop:"18px"}}>Nombre del evento</Form.Label>
                          <Form.Control
                          required
                            type="text"
                            name="title"
                            value={input.title}
                            onChange={(e) => handleInputChange(e)}
                            style={{ background:  " #f7dc6f " , borderColor: "black"}}
                          />
                        </Form.Group>

                        <Form.Group controlId="validationCustom02">

                          <Form.Label style={{ color:  " #f7dc6f " , fontWeight:"bold", marginTop:"18px"}} >Genero Musical</Form.Label>
                          <Form.Select  style={{ background:  " #f7dc6f " , borderColor: "black"}} required onChange={(e) => handleSelect(e)}>
                          <option>Seleccion tu Genero</option>
                            {genres?.map((dl) => (
                              <option value={dl}>{dl}</option>
                            ))}
                          </Form.Select>
                          <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div>
                          <Form.Text style={{ color:  " #f7dc6f " , fontWeight:"bold", marginTop:"8px"}}  muted>
                            Seleccion el tipo de genero con el que quieras
                            mostrarte
                          </Form.Text>
                        </div>

                        <>
                          <Form.Group controlId="validationCustom03">
                            <Form.Label style={{ color:  " #f7dc6f " , fontWeight:"bold", marginTop:"18px"}} >Escribe detalle del evento</Form.Label>
                            <InputGroup>
                             
                              <FormControl
                                as="textarea"
                                aria-label="With textarea"
                                name="description"
                                value={input.description}
                                onChange={(e) => handleInputChange(e)}
                                required
                                style={{ background:  " #f7dc6f " , borderColor: "black"}}
                              />
                            </InputGroup>
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                          </Form.Group>

                          <div>
                            <Container>
                              <Row>
                                <Form.Group controlId="validationCustom04">
                                  <Form.Label style={{ color:  " #f7dc6f " , fontWeight:"bold", marginTop:"18px"}}  >
                                    Fecha de inicio de evento
                                  </Form.Label>
                                  <Form.Control
                                    name="date"
                                    value={input.date}
                                    type="date"
                                    onChange={(e) => handleInputChange(e)}
                                    required
                                    style={{ background:  " #f7dc6f " , borderColor: "black"}}
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Row>
                            </Container>

                            <Container>
                              <Row>
                                <Form.Group controlId="validationCustom05">
                                  <Form.Label style={{ color:  " #f7dc6f " , fontWeight:"bold", marginTop:"18px"}} >
                                    Fecha de inicio de evento
                                  </Form.Label>
                                  <Form.Control
                                    name="time"
                                    value={input.time}
                                    type="time"
                                    onChange={(e) => handleInputChange(e)}
                                    required
                                    style={{ background:  " #f7dc6f " , borderColor: "black"}}
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="validationCustom06">
                                  <Form.Label style={{ color:  " #f7dc6f " , fontWeight:"bold", marginTop:"18px"}} >
                                    Mes de Evento
                                  </Form.Label>
                                  <Form.Control
                                    name="month"
                                    value={input.month}
                                    type="text"
                                    onChange={(e) => handleInputChange(e)}
                                    required
                                    style={{ background:  " #f7dc6f " , borderColor: "black"}}
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                  
                                </Form.Group>

                                
                              </Row>
                            </Container>

                            
                          </div>

                          <div>
                            <div className={styles.direcction}>
                              <Form.Group
                                
                                controlId="validationCustom07"
                              >
                                <Form.Label style={{ color:  " #f7dc6f " , fontWeight:"bold", marginTop:"18px"}} >Provincia</Form.Label>
                              
                                <Form.Select   style={{ background:  " #f7dc6f " , borderColor: "black"}} required onChange={(e) => handleCitySelect(e)}>
                                <option>Selecciona tu Provincia</option>
                                  {city?.map((dl) => (
                                    <option value={dl}>{dl}</option>
                                  ))}
                                </Form.Select>

                                <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                              </Form.Group>

                              <Form.Group controlId="validationCustom08">
                                  <Form.Label style={{ color:  " #f7dc6f " , fontWeight:"bold", marginTop:"18px"}} >
                                    Localidad
                                  </Form.Label>
                                  <Form.Control
                                    name="location"
                                    value={input.location}
                                    type="text"
                                    onChange={(e) => handleInputChange(e)}
                                    required
                                    style={{ background:  " #f7dc6f " , borderColor: "black"}}
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group>
                                
                              <>
                              <Form.Group controlId="validationCustom09">
                                  <Form.Label style={{ color:  " #f7dc6f " , fontWeight:"bold", marginTop:"18px"}} >
                                    Direccion
                                  </Form.Label>
                                  <Form.Control
                                    name="address"
                                    value={input.address}
                                    type="text"
                                    onChange={(e) => handleInputChange(e)}
                                    required
                                    style={{ background:  " #f7dc6f " , borderColor: "black"}}
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="validationCustom10">
                                  <Form.Label style={{ color:  " #f7dc6f " , fontWeight:"bold", marginTop:"18px"}} >
                                    Lugar del evento
                                  </Form.Label>
                                  <Form.Control
                                    name="place"
                                    value={input.place}
                                    type="text"
                                    onChange={(e) => handleInputChange(e)}
                                    required
                                    style={{ background:  " #f7dc6f " , borderColor: "black"}}
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="validationCustom11">
                              
                                  < UploadImg  setimgUp={setUrlImg} />
                                  {urlImg && <img src= {urlImg}/>}
                                </Form.Group>

                                <Form.Group controlId="validationCustom12">
                                  <Form.Label style={{ color:  " #f7dc6f " , fontWeight:"bold", marginTop:"18px"}} >
                                    Cost
                                  </Form.Label>
                                  <Form.Control
                                    name="cost"
                                    value={input.cost}
                                    type="text"
                                    onChange={(e) => handleInputChange(e)}
                                    required
                                    style={{ background:  " #f7dc6f " , borderColor: "black"}}
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="validationCustom13">
                                  <Form.Label style={{ color:  " #f7dc6f " , fontWeight:"bold", marginTop:"18px"}} >
                                    Stock
                                  </Form.Label>
                                  <Form.Control
                                    name="stock"
                                    value={input.stock}
                                    type="text"
                                    onChange={(e) => handleInputChange(e)}
                                    required
                                    style={{ background:  " #f7dc6f " , borderColor: "black"}}
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group>
                               
                              </>

                              <div className="d-grid gap-2">
                                <Button
                                  style={{ fontWeight: "bolder", marginTop: "25px" }}
                                  variant="outline-warning"
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
                      alt="imagen"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
            <div className={styles.footer}>
              <Footer />
            </div>
        
    </div>
  );
}

export default withAuthenticationRequired(CreateEvent, {
  onRedirecting: () => <Loading />,
});
