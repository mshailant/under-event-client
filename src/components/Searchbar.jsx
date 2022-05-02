import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByTitle } from "../redux/actions/actions";
import scrollToCards from "./ScrollButtom/scrollToCars";

import {  FormControl, Form, Button } from "react-bootstrap";

export default function Searchbar() {
    const [name, setName] = useState("");
    const [buscador, setBuscador] = useState("");

    const dispatch = useDispatch();

    function handleInput(e) {
        e.preventDefault(e);
        setName(e.target.value);
        setBuscador("");
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getByTitle(name));
    }

    return (

        <Form onSubmit={(e) => handleSubmit(e)} className="d-flex">
            <FormControl 
                type="search"
                placeholder="Search"
                onChange={(e) => handleInput(e)}
                className="me-2"
                aria-label="Search"
            />
            <Button type="submit" onClick={() => scrollToCards()} variant="light">Search</Button>
        </Form>
    )
}