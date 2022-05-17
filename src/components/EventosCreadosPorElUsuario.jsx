import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders, getAllEvent } from "../redux/actions/actions";
import {
    Container,
    Card,
    Row,
    Table,
    Col,
    Form,
    Button,
    Modal,
} from "react-bootstrap";


export function EventosCreadosPorElUsuario() {
    const dispatch = useDispatch();

    let MyUserId = "0630dcbd-136a-4045-98e8-5a473b8175ba";

    useEffect(() => {
        dispatch(getAllOrders());
        dispatch(getAllEvent());
    }, [dispatch]);

    // me haria falta el id del usuario -------------------------------------------------------
    const usuario = useSelector((state) => state.userLoged);
    console.log(usuario, "soy el usuario")
    // pero encima no esta en este estado, ¿de donde lo puedo sacar?---------------------------

    try{

        //aqui me traigo los eventos
        const objetos = useSelector((state) => state.eventosBack);
        /* const usuario = useSelector((state) => state.userLoged); */
        console.log(objetos, "soy los eventos")

        //quiero recorrerlos

        let nombre = []
        let stock = []
        let ciudad = []
        let fecha = []
        let hora = []
        let precio = []

        for (let i=0; i < objetos.length; i++){
             if(objetos[i].UserId === MyUserId){
                 nombre.push(objetos[i].title)
                 stock.push(objetos[i].stock)
                 ciudad.push(objetos[i].city)
                 fecha.push(objetos[i].date)
                 hora.push(objetos[i].time)
                 precio.push(objetos[i].cost)

             }

        }

        console.log(nombre, "soy el titulo del creado")
        console.log(stock, "soy el stock del creado")

        return(
            <div>
                <div>
                <Container bg="white" mt={5} mb={5}>
                <h2>Eventos que has creado</h2>
                <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre del evento</th>
                                        <th>Ciudad</th>
                                        <th>Fecha</th>
                                        <th>Hora</th>
                                        <th>Cantidad de entradas</th>
                                        <th>Precio</th>
                                        <th>Necesitas cambiar algo?</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {nombre?.map((e, index) => (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{e}</td>
                                            <td>{ciudad[index]}</td>
                                            <td>{fecha[index]}</td>
                                            <td>{hora[index]}</td>
                                            <td>{stock[index]}</td>
                                            <td>$ {precio[index]}</td>
                                            <td><button>modificar</button></td>

                                            

                                        </tr>
                                    ))}


                                </tbody>
                            </Table>
                            </Container>
                </div>
                
            </div>

            
        )

    }catch(e){
        console.log(e)
    }

    
}

export default EventosCreadosPorElUsuario;