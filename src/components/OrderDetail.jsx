import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllOrders } from "../redux/actions/actions";
import { useEffect } from "react";
import { Container, Row, Col, Card, ListGroup, Alert } from "react-bootstrap";
import imagen from "../images/Crea tu propio evento (1).jpg";
import NavTop from "./NavBars/Nav";
import Footer from "./Footer/Footer";
import styles from "./OrderDetail.module.css";
import { Link } from "react-router-dom";
import Carousely from "./Carousel";
import { ajaxUpload } from "rsuite/esm/utils";


export default function OrderDetail() {
const allOrders = useSelector(state => state.allOrders)
console.log(allOrders, "orders")
const dispatch = useDispatch()

  // const ticketsito = allOrders.orders.map(e => e.Tickets)
  // console.log(ticketsito, "tickesito"); // tickets 
  //  console.log(ticketsito.map(e => e.id), "sssssssssss")

  // function aa (){

  //   let ids;
  //   let aaa = []
  //     for(let i = 0; i < ticketsito.length; i++){
  //       ids = ticketsito[i].map(e => e.id)
    
  //      aaa.push(ids) 
    
     
  //   console.log(aaa, "resultado")
  //     }
  //     // console.log(aaa.join(', ').split(','), 'sfsafasfsafsa')
    
  //   return aaa.join(',').split(' ')
  // }

useEffect(()=>{
  dispatch(getAllOrders())
}, [dispatch])

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
    <div>
      <NavTop/>
    
    <div>
    <div  className="container mt-3 ">
            <div className="row justify-content-center"></div>

            <div className="row mt-3">
              <table className="table  text-center">
                <thead>
                  <tr>
                    
                    <th scope="col">Id </th>
                    <th scope="col">Status </th>
                    <th scope="col">ID </th>
                    <th scope="col">Estado  </th>
                    <th scope="col">Fecha  </th>
                    <th scope="col">Cantidad  </th>
                    <th scope="col">Precio Total  </th>
                    <th scope="col">Usuario  </th>
                    <th scope="col">Apellido  </th>
                    <th scope="col">Email  </th>
                    <th scope="col">Ticket ID  </th>
                    
                    
                  </tr>
                </thead>
                
              
      
            
                <tbody>
                  
                <tr >
                  <th scope="row"></th>
                  <th scope="row">
                    <img  style={{ width: "4rem" }} />
                  </th>
                  <td>{}</td>
                  <td> </td>
                  <td> {order.orderRes.date}</td>
                  <td> {order.orderRes.quantity}</td>
                  <td>$ {order.orderRes.totalPrice}</td>
                  <td>{order.orderRes.User.name}</td>
                  <td> {order.orderRes.User.lastName}</td>
                  <td> {order.orderRes.User.email}</td>
                  <td>  </td>

                
               
                 
                </tr>

              
            </tbody> 
         
            </table>
            </div>
            </div>
            </div>
            <Container fluid>
  <Row>
    <Col style={{marginTop: "370px"}}> <Carousely/></Col>
  </Row>
</Container>
  
   <Footer/>

</div>
  );
}


{/* <div  className="container mt-2">
            <div className="row justify-content-center"></div>

            <div className="row mt-3">
              <table className="table  text-center">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Nombre del Producto</th>
                    <th scope="col">Precio </th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Remover</th>
                  </tr>
                </thead>
                
              

               
              </table>
            </div>
            </div>

 */}






            // <Card style={{ width: "50rem", marginTop: "20px" }}>
              
            //     <ListGroup variant="flush">
            //       <ListGroup.Item>
            //         <h2>{order.msg}</h2>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         {" "}
            //         <h3>Estado de la orden: {order.orderRes.status}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         <h3>Fecha: {order.orderRes.date}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         <h3>Cantidad: {order.orderRes.quantity}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         <h3>Precio Total: {order.orderRes.totalPrice}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         {" "}
            //         <h3>Fecha de creacion de orden: {order.orderRes.createdAt}</h3>
            //       </ListGroup.Item>
                 
            //       <ListGroup.Item>
            //         <h3>Codigo de Usuario: {order.orderRes.UserId}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         <h3> Codigo de Ticket: {order.orderRes.Tickets[0].id}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         {" "}
            //         <h3> Estado del ticket: {order.orderRes.Tickets[0].status}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         <h3> Creacion de Ticket: {order.orderRes.Tickets[0].createdAt}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         <h3> Cantidad de Ordenes: {order.orderRes.Tickets[0].OrderId}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         <h3> Codigo de Evento: {order.orderRes.Tickets[0].EventId}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         <h3>Codigo del Usuario: {order.orderRes.User.id}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         {" "}
            //         <h3>Usuario : {order.orderRes.User.externalId}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         <h3>Nombre de Usuario: {order.orderRes.User.name}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         {" "}
            //         <h3>Apellido de Usuario: {order.orderRes.User.lastName}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         {" "}
            //         <h3>Email de Usuario{order.orderRes.User.email}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         {" "}
            //         <h3>Roll: {order.orderRes.User.roll}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         <h3>Imagen de Usuario: {order.orderRes.User.picture}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         <h3>{order.orderRes.User.city}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         <h3>{order.orderRes.User.state}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         <h3>{order.orderRes.User.createdAt}</h3>
            //       </ListGroup.Item>
            //       <ListGroup.Item>
            //         <h3>{order.orderRes.User.updatedAt}</h3>
            //       </ListGroup.Item>
            //     </ListGroup>
            //   </Card>