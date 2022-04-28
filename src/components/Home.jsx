import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Action from "../redux/actions/actions"

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

            {events?.map((c) => (
                <div>
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