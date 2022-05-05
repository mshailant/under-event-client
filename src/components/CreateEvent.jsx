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
} from "react-bootstrap";
import Footer from "./Footer/Footer";

import { Formik } from "formik";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import NavTop from "./NavBars/Nav";
import imagen from "../images/pexels-darya-sannikova-3824763.jpg";
import FormExample from "./FormBootstrap/FormBotstrap";
import * as Yup from "yup";

let schema = Yup.object().shape({
  title: Yup.string().required(),
  imagen: Yup.string().required(),
  city: Yup.string().required(),
  place: Yup.string().required(),
  description: Yup.string().required(),
  genero: Yup.string().required(),
  startDate: Yup.string().required(),
  endDate: Yup.string().required(),
  time: Yup.string().required(),
  stock: Yup.number().required(),
  cost: Yup.string().required(),
  month: Yup.string().required(),
});

export default function CreateEvent() {
  const { user, isLoading } = useAuth0();

  
  
  

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
                      <Formik
                        validationSchema={schema}
                        onSubmit={console.log}
                        initialValues={{
                          title: "",
                          imagen: "",
                          city: "",
                          place: "",
                          description: "",
                          genero: "",
                          startDate: "",
                          endDate: "",
                          time: "",
                          stock: "",
                          cost: "",
                          month: "",
                        }}
                      >

                      
                        {({
                          handleSubmit,
                          handleChange,

                          values,
                          touched,
                          isValid,
                          errors,
                        }) => (
                          <Form noValidate onSubmit={handleSubmit} >
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicPassword"
                            ></Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicCheckbox"
                            ></Form.Group>

                            <FormExample />
                            <div>
                              <h5>INGRESA LOS DATOS DE TU EVENTO</h5>
                            </div>
                            
                            <Form.Label>Genero Musical</Form.Label>
                            <Form.Select
                              name="genero"
                              value={values.genero}
                              aria-label="Default select example"
                            >
                              <option>Selecciona tu Genero</option>
                              <option value="1">Rock</option>
                              <option value="2">Reggae</option>
                              <option value="3">Pop</option>
                              <option value="4">Otros</option>
                            </Form.Select>
                            <div>
                              <Form.Text id="passwordHelpBlock" muted>
                                Seleccion el tipo de genero con el que quieras
                                mostrarte
                              </Form.Text>
                            </div>

                            <>
                              <Form.Label>Nombre del evento</Form.Label>
                              <Form.Control
                                type="text"
                                name="title"
                                value={values.title}
                              />

                              <Form.Label htmlFor="inputPassword5">
                                Artistas Participantes
                              </Form.Label>
                              <Form.Control type="text" />
                              <Form.Label htmlFor="inputPassword5">
                                Escribe detalle del evento
                              </Form.Label>
                              <InputGroup>
                                <InputGroup.Text>With textarea</InputGroup.Text>
                                <FormControl
                                  as="textarea"
                                  aria-label="With textarea"
                                  name="description"
                                  value={values.description}
                                />
                              </InputGroup>

                              <div>
                                <Container>
                                  <Row>
                                    <Form.Label htmlFor="inputPassword5">
                                      Fecha de inicio de evento
                                    </Form.Label>
                                    <Form.Control
                                      name="startDate"
                                      value={values.startDate}
                                      type="date"
                                    />

                                    <Form.Label htmlFor="inputPassword5">
                                      Fecha de fin del evento
                                    </Form.Label>
                                    <Form.Control
                                      name="endDate"
                                      value={values.endDate}
                                      type="date"
                                    />
                                  </Row>
                                </Container>

                                <Container>
                                  <Row>
                                    <Form.Label
                                      name="description"
                                      value={values.description}
                                    >
                                      Escribe detalle del evento
                                    </Form.Label>
                                  </Row>
                                </Container>
                              </div>

                              <div>
                               
                                <div className={styles.direcction}>
                                <Form.Label>Provincia de destino</Form.Label>
                            <Form.Select
                              name="city"
                              value={values.city}
                              aria-label="Default select example"
                            >
                              <option>Selecciona tu Ciudad</option>
                              <option value="1">Cordoba</option>
                              <option value="2">Buenos Aires</option>
                              <option value="3">Tucson</option>
                            </Form.Select>

                                  <>
                                    <Form.Label htmlFor="inputPassword5">
                                      Direccion:{" "}
                                    </Form.Label>
                                    <Form.Control
                                      type="text"
                                      
                                    />
                                  </>

                                  <>
                                    <Form.Label htmlFor="inputPassword5">
                                      Lugar del evento:{" "}
                                    </Form.Label>
                                    <Form.Control
                                      type="text"
                                      name="place"
                                      value={values.place}
                                    />
                                    
                                      

                                    <InputGroup
                                      style={{ marginTop: "17px" }}
                                      className="mb-3"
                                    >
                                      <SplitButton
                                        variant="outline-secondary"
                                        title="Cargar Imagen"
                                        id="segmented-button-dropdown-1"
                                        type="file"
                                      >
                                        <Dropdown.Item href="#">
                                          Action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                          Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                          Something else here
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#">
                                          Separated link
                                        </Dropdown.Item>
                                      </SplitButton>
                                    </InputGroup>
                                  </>

                                  <div className="d-grid gap-2">
                                    <Button
                                      style={{ fontWeight: "bolder" }}
                                      variant="warning"
                                      size="lg"
                                    >
                                      Crea tu Evento
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </>
                          </Form>
                        )}
                      </Formik>
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


