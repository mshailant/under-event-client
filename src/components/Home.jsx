import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Action from "../redux/actions/actions"
import Logo from "../components/Logo.jsx";


import Card from "./Card"

export default function Home() {

    const dispatch = useDispatch();
    const events = useSelector((state) => state.eventosDb);

    console.log(events);
    useEffect(() => {
        dispatch(Action.getAllEvent())
    }, [dispatch])
    return (
        <div>
            <p>HOLA SOY EL HOME !</p>
            <Logo />
            {events?.map((c) => (
                <div key={c.id}>
                    <Card
                        id={c.id}
                        title={c.title}
                        imagen={c.imagen}
                    />

                </div>
            ))}

        </div>
    )
};