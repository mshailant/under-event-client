import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getOrderDetail } from "../redux/actions/actions";
import { useEffect } from "react";
import { Container, Row, Col, Card, ListGroup, Alert } from "react-bootstrap";
import imagen from "../images/Crea tu propio evento (1).jpg";
import NavTop from "./NavBars/Nav";
import Footer from "./Footer/Footer";
import styles from "./OrderDetail.module.css";
import { Link } from "react-router-dom";
import Carousely from "./Carousel";

export default function OrderDetail() {
  // const { id} = useParams();
  // const order = useSelector(state => state.orderDetail);
  // const dispatch = useDispatch();

  //     useEffect(() => {
  //         dispatch(getOrderDetail(id));
  //     }, []);

  const order = {
    msg: "Orden Creada",
    orderRes: {
      id: 6,
      status: "Pending",
      date: "Tue May 10 2022 14:40:51 GMT-0300 (hora estándar de Argentina)",
      quantity: 1,
      totalPrice: 1500,
      createdAt: "2022-05-10T17:40:51.305Z",
      updatedAt: "2022-05-10T17:40:51.305Z",
      UserId: "b23e456f-c0d7-449b-ba74-6ab4279ae7df",
      Tickets: [
        {
          id: "8a60918b-2505-4d20-a13c-6e10a1e0aefc",
          status: "Reservado",
          createdAt: "2022-05-10T17:37:23.226Z",
          updatedAt: "2022-05-10T17:40:51.328Z",
          OrderId: 6,
          EventId: "a4bd45ee-658a-40c9-9a37-a5ab4c7cf70e",
        },
      ],
      User: {
        id: "b23e456f-c0d7-449b-ba74-6ab4279ae7df",
        externalId: "google-oauth2|100691098426977273143",
        name: "La sara",
        lastName: "sara",
        email: "blackwilson1495@gmail.com",
        roll: "User",
        picture: "jajajajajjaj",
        city: null,
        state: false,
        createdAt: "2022-05-10T17:37:52.536Z",
        updatedAt: "2022-05-10T17:37:52.536Z",
      },
    },
  };

  //   return (
  //   <div>

  //   </div>
  //   );

  // };

  // export default OrderDetail;

  return (
    <div className={styles.Container}>
      <NavTop />
      <Container>
          
        <Row>
          <Col xs>
            {" "}
            {order ? (
              <Card style={{ width: "50rem", marginTop: "20px" }}>
              
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h2>{order.msg}</h2>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <h3>Estado de la orden: {order.orderRes.status}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3>Fecha: {order.orderRes.date}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3>Cantidad: {order.orderRes.quantity}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3>Precio Total: {order.orderRes.totalPrice}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <h3>Fecha de creacion de orden: {order.orderRes.createdAt}</h3>
                  </ListGroup.Item>
                 
                  <ListGroup.Item>
                    <h3>Codigo de Usuario: {order.orderRes.UserId}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3> Codigo de Ticket: {order.orderRes.Tickets[0].id}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <h3> Estado del ticket: {order.orderRes.Tickets[0].status}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3> Creacion de Ticket: {order.orderRes.Tickets[0].createdAt}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3> Cantidad de Ordenes: {order.orderRes.Tickets[0].OrderId}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3> Codigo de Evento: {order.orderRes.Tickets[0].EventId}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3>Codigo del Usuario: {order.orderRes.User.id}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <h3>Usuario : {order.orderRes.User.externalId}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3>Nombre de Usuario: {order.orderRes.User.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <h3>Apellido de Usuario: {order.orderRes.User.lastName}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <h3>Email de Usuario{order.orderRes.User.email}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <h3>Roll: {order.orderRes.User.roll}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3>Imagen de Usuario: {order.orderRes.User.picture}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3>{order.orderRes.User.city}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3>{order.orderRes.User.state}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3>{order.orderRes.User.createdAt}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3>{order.orderRes.User.updatedAt}</h3>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            ) : (
              <Alert
                style={{
                  width: "850px",
                  height: "350px",
                  marginLeft: "75%",
                }}
                variant="light"
              >
                <Alert.Heading>Ups... Something went wrong</Alert.Heading>
                <p>
                  Aww yeah, you successfully read this important alert message.
                  This example text is going to run a bit longer so that you can
                  see how spacing within an alert works with this kind of
                  content.
                </p>
                <hr />
                <p className="mb-0">
                  Whenever you need to, be sure to use margin utilities to keep
                  things nice and tidy.
                </p>
              </Alert>
            )}
          </Col>
         
          <Col xs={{ order: 1 }}>
            {" "}
            <Link to = "/createEvent">
            <div className={styles.divImg}>
              <img
                className={styles.img}
                src={imagen}
                width="370px"
                height="670px"
                alt="imagen"
              />
            </div>
            </Link>
          </Col>
        </Row>
      </Container>
      <div style={{marginTop: "35px"}}>

      <Carousely/>
      </div>
      <div style={{ marginTop: "26px" }}>
        <Footer />
      </div>
    </div>
  );
}
