import { enIE } from "date-fns/locale";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders } from "../redux/actions/actions";

export default function Metricas() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllOrders());
    }, [dispatch]);

    try {
        const orders = useSelector((state) => state.allOrders);

        console.log(orders, "soy las ordenes")

        const ticketsito = orders.orders.map(e => e.Tickets)
        console.log(ticketsito, "orders"); 




        let ids;
        let coleccion = []
        for (let i = 0; i < ticketsito.length; i++) {
            ids = ticketsito[i].map(e => e.EventId)

            coleccion.push(ids.join(',')/* .split(' ') */)
            console.log(coleccion, "soy la coleccion")


        }

        let coleccionDeEventId = coleccion.join(',')
        console.log(coleccionDeEventId.toString(), "soy coleccioneventid")
        // AHORA DEBO SEPARARLO POR LAS COMAS

        let coleccionSeparadaPorComas = coleccionDeEventId.split(',')

        console.log(coleccionSeparadaPorComas, "soy separado por comas")

        // AHORA QUIERO HACER EL SORT
        console.log(coleccionSeparadaPorComas.sort(), "soy EL SORT")

        //TENGO EL SORT LISTO
        let coleccionConSort = coleccionSeparadaPorComas.sort()


        //DESDE AQUI APLICARE EL VIDEO DE YOU TUBE
        let unicosElementos = []
        let almacenadorDeVecesRepetidas = []

        let contador = 1

        for (let i = 0; i < coleccionConSort.length; i++) {
            if (coleccionConSort[i + 1] === coleccionConSort[i]) {
                console.log(coleccionConSort[i], "soy la vez")
                contador++
            } else {
                unicosElementos.push(coleccionConSort[i])
                almacenadorDeVecesRepetidas.push(contador)
                contador = 1
            }
        }
        console.log(unicosElementos, "soy unicos elementos")
        console.log(almacenadorDeVecesRepetidas, "soy almacenador de veces repetidas")



        return (
            <div>
                <h1>Ranking de los eventos mas vendidos</h1>
                {/* <h3>El evento {unicosElementos} se compro {almacenadorDeVecesRepetidas}</h3> */}
                {unicosElementos.map(e => <h4>{e}</h4>)}
                {almacenadorDeVecesRepetidas.map(e => <h4>{e}</h4>)}
            </div>

        )

    } catch (error) {
        console.log(error)
    }


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