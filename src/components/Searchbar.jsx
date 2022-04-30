import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByTitle } from "../redux/actions/actions";

import { Container, Row, Col, Navbar, Nav, NavDropdown, FormControl, Form, Collapse, Brand, Item, Button } from "react-bootstrap";

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

        <Form className="d-flex">
            <FormControl 
                type="search"
                placeholder="Search"
                onChange={(e) => handleInput(e)}
                className="me-2"
                aria-label="Search"
            />
            <Button onClick={(e) => handleSubmit(e)} variant="light">Search</Button>
        </Form>
    )
}