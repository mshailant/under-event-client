import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders, getAllEvent, getUsers } from "../redux/actions/actions";
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
import Footer from "./Footer/Footer";


export function EventosCreadosPorElUsuario() {
    const dispatch = useDispatch();

    /* let MyUserId = "0630dcbd-136a-4045-98e8-5a473b8175ba"; */

    useEffect(() => {
        dispatch(getAllOrders());
        dispatch(getAllEvent());
        dispatch(getUsers())
    }, [dispatch]);

    // me haria falta el id del usuario LOGUEADO-------------------------------------------------------
    let usuario = useSelector((state) => state.userLoged);
    console.log(usuario.email, "soy el usuario logueado")
    // pero encima no esta en este estado, ¿de donde lo puedo sacar?----------|
    //----------------------------------------------------------------------- |
    //                                                                        |
    // aqui me traigo todos los usuarios de la pagina [{...}] <--- de aqui lo puedo sacar
    let allUser = useSelector((state) => state.users);
    console.log(allUser, "soy todos los usuarios")

    // tomare solo el mail de los usuarios -----------> por que es lo unico que no se puede repetir entre usuarios
    // y con ello podre descubrir el id del usuario logueado
    let soloEmails = allUser.map(e => e.email)
    console.log(soloEmails, "soy solo los mails")

    // ahora puedo obtener el id del usuario logueado
    let idDelUsuarioLogueado;
    for (let i = 0; i < soloEmails.length; i++){
        if (soloEmails[i] == usuario.email){
            /* var coincide = true
            console.log(coincide) */
            idDelUsuarioLogueado = allUser.map(e => e.id)
        }  
    }


    console.log(idDelUsuarioLogueado, "soy el id del usuario logueado")




    try{

        //aqui me traigo los eventos
        const objetos = useSelector((state) => state.eventosBack);
        /* console.log(objetos, "soy los eventos") */

        //quiero recorrerlos

        let nombre = []
        let stock = []
        let ciudad = []
        let fecha = []
        let hora = []
        let precio = []

        for (let i=0; i < objetos.length; i++){
            if(objetos[i].UserId == idDelUsuarioLogueado/* MyUserId */){
                nombre.push(objetos[i].title)
                stock.push(objetos[i].stock)
                 ciudad.push(objetos[i].city)
                 fecha.push(objetos[i].date)
                 hora.push(objetos[i].time)
                 precio.push(objetos[i].cost)

             }

        }
        
   
        /* console.log(nombre, "soy el titulo del creado")
        console.log(stock, "soy el stock del creado") */

        return(
            
            <div style={{background: "#f0ad4e",  height: "100%"}} >
                <div style={{background: "#f0ad4e"}} >
                <Container style={{background: "#f0ad4e", height: "500px"}} bg="white" mt={5} mb={5}>
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
               
                <Footer/>
            </div>

            
        )

    }catch(e){
        console.log(e)
    }


    
}

export default EventosCreadosPorElUsuario;