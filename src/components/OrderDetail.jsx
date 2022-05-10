import React from 'react';
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getOrderDetail} from "../redux/actions/actions";
import { useEffect } from "react";



const OrderDetail = () => {
    
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
                    EventId: "a4bd45ee-658a-40c9-9a37-a5ab4c7cf70e"
                }
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
                updatedAt: "2022-05-10T17:37:52.536Z"
            }
        }
    }
    return (
        <div>
            <h1>Detalle de la orden</h1>
            {order ? (
                <div>
                    <h2>{order.msg}</h2>
                    <h3>{order.orderRes.status}</h3>
                    <h3>{order.orderRes.date}</h3>
                    <h3>{order.orderRes.quantity}</h3>
                    <h3>{order.orderRes.totalPrice}</h3>
                    <h3>{order.orderRes.createdAt}</h3>
                    <h3>{order.orderRes.updatedAt}</h3>
                    <h3>{order.orderRes.UserId}</h3>
                    <h3>{order.orderRes.Tickets[0].id}</h3>
                    <h3>{order.orderRes.Tickets[0].status}</h3>
                    <h3>{order.orderRes.Tickets[0].createdAt}</h3>
                    <h3>{order.orderRes.Tickets[0].updatedAt}</h3>
                    <h3>{order.orderRes.Tickets[0].OrderId}</h3>
                    <h3>{order.orderRes.Tickets[0].EventId}</h3>
                    <h3>{order.orderRes.User.id}</h3>
                    <h3>{order.orderRes.User.externalId}</h3>
                    <h3>{order.orderRes.User.name}</h3>
                    <h3>{order.orderRes.User.lastName}</h3>
                    <h3>{order.orderRes.User.email}</h3>
                    <h3>{order.orderRes.User.roll}</h3>
                    <h3>{order.orderRes.User.picture}</h3>
                    <h3>{order.orderRes.User.city}</h3>
                    <h3>{order.orderRes.User.state}</h3>
                    <h3>{order.orderRes.User.createdAt}</h3>
                    <h3>{order.orderRes.User.updatedAt}</h3>
                </div>
            ) : (
                    <div>
                        <h2>No hay ordenes</h2>
                    </div>
                )}
        </div>
    );
}

export default OrderDetail;
