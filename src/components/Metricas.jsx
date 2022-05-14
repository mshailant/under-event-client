import { enIE } from "date-fns/locale";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders } from "../redux/actions/actions";

export default function Metricas() {
    const dispatch = useDispatch();

    const orders = useSelector((state) => state.allOrders);

    useEffect(() => {
        dispatch(getAllOrders());
    }, [dispatch]);

    console.log(orders, "soy las ordenes")

    const ticketsito = orders.orders.map(e => e.Tickets)
    console.log(ticketsito, "orders"); // tickets 
    /* console.log(ticketsito.map(e => e.id), "ssssss") */

    /* function aa() { */

        let ids;
        let aaa = []
        for (let i = 0; i < ticketsito.length; i++) {
            ids = ticketsito[i].map(e => e.EventId)

            aaa.push(ids.join(',')/* .split(' ') */)
            console.log(aaa, "soy aaa")
            

        }
        console.log(aaa, "soy aaa")
        
    
        return aaa.sort()
    /* } */

    //---------------------------------------------------------------------

    /* let coleccion = []
  
    let hechoArray = Object.values(orders)  // lo transformo en array para trabajarlo mas facil

    console.log(hechoArray); */


    //lo hago para tomar solo lo que esta en ticket
    /* for (let i = 0; i < hechoArray.length; i++){          
        coleccion.push(hechoArray[i].map(e => e.Tickets))
        console.log(coleccion, "soy la coleccion")
    }  */

    //--------------------------------------------

    let coleccionNueva = []

    //pero ahora quiero solo los ids
    let suma;
    /* for (let j = 0; j < coleccion.length; j++){
        coleccionNueva = coleccion[j].map(e => e.EventId)
        console.log(coleccionNueva, "soy la nueva coleccion")
    } */

    /* function aa (){

        let ids;
        let aaa = []
          for(let i = 0; i < ticketsito.length; i++){
            ids = ticketsito[i].map(e => e.id)
        
           aaa.push(ids) 
        
         
        
          }
        
        return aaa.join(',').split(' ')
      } */



    return (
        <div> "soy la metrica" </div>
    )

}