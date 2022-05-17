import { React, useState, useEffect } from "react";
import { connect } from "formik";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const { user, isLoading } = useAuth0();

  const [input, setInput] = useState(stateInitialForms);
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const userLoged = useSelector((state) => state.userLoged);
  const genres = useSelector((state) => state.allGeneros);
  const city = useSelector((state) => state.allCities);
  const [eventData, setEventData] = useState({
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
    lat: "",
    long: "",
    externalId: user.sub,
  });

  useEffect(() => {
    dispatch(Action.getAllGeneros());
    dispatch(Action.getAllCities());
  }, [dispatch]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("formulario no valido");
      event.preventDefault();
      event.stopPropagation();
    } else {
      dispatch(createEvent(eventData, userLoged.externalId)).then((res) => {
        console.log("asdasdasd", res);
        navigate(`/${res.payload.newEvent.id}`);
      });
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });
    console.log(eventData);
  };

  const date = new Date();

  return (
    <div className={styles.container1}>
      <NavTop />
      <Container>
        <Row>
          <Col xs>
            <div className={styles.container1}>
              <div style={{ marginTop: "85px" }}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <div>
                    <h5
                      style={{
                        color: " #f7dc6f ",
                        borderColor: "black",
                        fontWeight: "bold",
                      }}
                    >
                      INGRESA LOS DATOS DE TU EVENTO
                    </h5>
                  </div>

                  <Form.Group controlId="validationCustom01">
                    <Form.Label
                      style={{
                        color: " #f7dc6f ",
                        fontWeight: "bold",
                        marginTop: "18px",
                      }}
                    >
                      Nombre del evento
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="title"
                      value={eventData?.title}
                      onChange={handleChange}
                      style={{ background: " #f7dc6f ", borderColor: "black" }}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid name.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="validationCustom02">
                    <Form.Label
                      style={{
                        color: " #f7dc6f ",
                        fontWeight: "bold",
                        marginTop: "18px",
                      }}
                    >
                      Genero Musical
                    </Form.Label>
                    <Form.Select
                      style={{ background: " #f7dc6f ", borderColor: "black" }}
                      required
                      name="genero"
                      defaultValue={eventData?.genero}
                      onChange={handleChange}
                    >
                      <option>Seleccion tu Genero</option>
                      {genres?.map((dl) => (
                        <option value={dl}>{dl}</option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please select genre.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="validationCustom03">
                    <Form.Label
                      style={{
                        color: " #f7dc6f ",
                        fontWeight: "bold",
                        marginTop: "18px",
                      }}
                    >
                      Escribe detalle del evento
                    </Form.Label>
                    <FormControl
                      as="textarea"
                      name="description"
                      type="text"
                      value={eventData?.description}
                      onChange={handleChange}
                      required
                      style={{
                        background: " #f7dc6f ",
                        borderColor: "black",
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid detail.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Row>
                    <Form.Group controlId="validationCustom04">
                      <Form.Label
                        style={{
                          color: " #f7dc6f ",
                          fontWeight: "bold",
                          marginTop: "18px",
                        }}
                      >
                        Fecha de inicio de evento
                      </Form.Label>
                      <Form.Control
                        as={"input"}
                        name="date"
                        value={eventData?.date}
                        type="date"
                        min={`${date.getFullYear()}-${
                          date.getMonth() + 1 < 10 ? "0" : ""
                        }${date.getMonth() + 1}-${date.getDate()}`}
                        onChange={handleChange}
                        required
                        style={{
                          background: " #f7dc6f ",
                          borderColor: "black",
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid date.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <Row>
                    <Form.Group controlId="validationCustom05">
                      <Form.Label
                        style={{
                          color: " #f7dc6f ",
                          fontWeight: "bold",
                          marginTop: "18px",
                        }}
                      >
                        Fecha de inicio de evento
                      </Form.Label>
                      <Form.Control
                        name="time"
                        value={eventData?.time}
                        type="time"
                        onChange={handleChange}
                        required
                        style={{
                          background: " #f7dc6f ",
                          borderColor: "black",
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide time.
                      </Form.Control.Feedback>{" "}
                    </Form.Group>

                    <Form.Group controlId="validationCustom06">
                      <Form.Label
                        style={{
                          color: " #f7dc6f ",
                          fontWeight: "bold",
                          marginTop: "18px",
                        }}
                      >
                        Mes de Evento
                      </Form.Label>
                      <Form.Control
                        name="month"
                        value={eventData?.month}
                        type="text"
                        onChange={handleChange}
                        required
                        style={{
                          background: " #f7dc6f ",
                          borderColor: "black",
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please select month.
                      </Form.Control.Feedback>{" "}
                    </Form.Group>
                  </Row>

                  <Form.Group controlId="validationCustom07">
                    <Form.Label
                      style={{
                        color: " #f7dc6f ",
                        fontWeight: "bold",
                        marginTop: "18px",
                      }}
                    >
                      Provincia
                    </Form.Label>

                    <Form.Select
                      name="city"
                      style={{
                        background: " #f7dc6f ",
                        borderColor: "black",
                      }}
                      required
                      defaultValue={eventData?.city}
                      onChange={handleChange}
                    >
                      <option>Selecciona tu Provincia</option>
                      {city?.map((dl) => (
                        <option value={dl}>{dl}</option>
                      ))}
                    </Form.Select>

                    <Form.Control.Feedback type="invalid">
                      Please select state.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="validationCustom08">
                    <Form.Label
                      style={{
                        color: " #f7dc6f ",
                        fontWeight: "bold",
                        marginTop: "18px",
                      }}
                    >
                      Localidad
                    </Form.Label>
                    <Form.Control
                      name="location"
                      value={eventData?.location}
                      type="text"
                      onChange={handleChange}
                      required
                      style={{
                        background: " #f7dc6f ",
                        borderColor: "black",
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please select city.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <>
                    <Form.Group controlId="validationCustom09">
                      <Form.Label
                        style={{
                          color: " #f7dc6f ",
                          fontWeight: "bold",
                          marginTop: "18px",
                        }}
                      >
                        Direccion
                      </Form.Label>
                      <Form.Control
                        name="address"
                        value={eventData?.address}
                        type="text"
                        onChange={handleChange}
                        required
                        style={{
                          background: " #f7dc6f ",
                          borderColor: "black",
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid direcction.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="validationCustom10">
                      <Form.Label
                        style={{
                          color: " #f7dc6f ",
                          fontWeight: "bold",
                          marginTop: "18px",
                        }}
                      >
                        Lugar del evento
                      </Form.Label>
                      <Form.Control
                        name="place"
                        value={eventData?.place}
                        type="text"
                        onChange={handleChange}
                        required
                        style={{
                          background: " #f7dc6f ",
                          borderColor: "black",
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid place.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="validationCustom11">
                      <Form.Label
                        style={{
                          color: " #f7dc6f ",
                          fontWeight: "bold",
                          marginTop: "18px",
                        }}
                      >
                        Imagen
                      </Form.Label>
                      <Form.Control
                        name="imagen"
                        value={eventData?.imagen}
                        type="url"
                        onChange={handleChange}
                        required
                        style={{
                          background: " #f7dc6f ",
                          borderColor: "black",
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid url.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="validationCustom12">
                      <Form.Label
                        style={{
                          color: " #f7dc6f ",
                          fontWeight: "bold",
                          marginTop: "18px",
                        }}
                      >
                        Cost
                      </Form.Label>
                      <Form.Control
                        name="cost"
                        value={eventData?.cost}
                        type="number"
                        min="0"
                        onChange={handleChange}
                        required
                        style={{
                          background: " #f7dc6f ",
                          borderColor: "black",
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid cost.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="validationCustom13">
                      <Form.Label
                        style={{
                          color: " #f7dc6f ",
                          fontWeight: "bold",
                          marginTop: "18px",
                        }}
                      >
                        Stock
                      </Form.Label>
                      <Form.Control
                        as={"input"}
                        name="stock"
                        min={0}
                        value={eventData?.stock}
                        type={"number"}
                        onChange={handleChange}
                        required
                        style={{
                          background: " #f7dc6f ",
                          borderColor: "black",
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid stock.
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
