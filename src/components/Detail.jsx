
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../redux/actions/actions.jsx";
import { useParams } from "react-router"


const Detail = () => {
    const dispatch = useDispatch();
    const detalles = useSelector((state) => state.detailEventos);
    const { id } = useParams();
    

    useEffect(() => {
        dispatch(getDetail(id));
    }, []);

   
   

    const handleDirectToHomeFromDetail = () => {
       
        window.location.href = "/"
    };
    return ( 
        <div>
            {
                detalles ?
                <div>
                <h4>Hola, {detalles.title} </h4> 
                <p> TIPO DE EVENTOS {detalles.eventType}</p>
                <p> CUANDO ? {detalles.eventTime} </p>
                <img src={detalles.imagen} alt= "imagen no encontrada"/>
                </div>
                :
                <h4>Chau</h4>
            }
        </div>
    )
}

export default Detail 