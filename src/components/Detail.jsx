import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../redux/actions/actions.jsx";
import { useParams } from "react-router"

export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const detailEventos = useSelector(state => state.detailEventos);
    console.log(detailEventos, "Hola soy el estado de redux de detail");

    useEffect(() => {
        dispatch(getDetail(id));
    }, []);
    const handleDirectToHomeFromDetail = () => {
        window.location.href = "/";
    }

    return (
        <div>
            <h4> holA soy el Detail  </h4>
            <h1> {detailEventos.title}</h1>
            <p >⭐ TIPO DE EVENTOS {detailEventos.eventType}</p>
            <p> CUANDO ? {detailEventos.eventTime} </p>
            <img src={detailEventos.imagen} alt= "imagen no encontrada"/>
            <div>

            <button onClick={handleDirectToHomeFromDetail}>VOLVER AL HOME</button>
            </div>

        </div>
    )
};
