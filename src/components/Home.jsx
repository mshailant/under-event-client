import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Action from "../redux/actions/actions"
import Logo from "../components/Logo.jsx";

import * as Action from "../redux/actions/actions";
import { Container, Row, Col } from "react-bootstrap";
import Individual from "./Card";
import Nav from "./Nav"


export default function Home() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventosDb);

  console.log(events);
  useEffect(() => {
    dispatch(Action.getAllEvent());
  }, [dispatch]);


    console.log(events);
    useEffect(() => {
        dispatch(Action.getAllEvent())
    }, [dispatch])
    return (
        <div>
            <p>HOLA SOY EL HOME !</p>
            <Logo />


  return (
    <div>
        <Nav/>
      
      <Container >
        <Row className="rows">
          <Col className="columns" >
            {events?.map((c) => (
              <div>
                <Individual id={c.id} title={c.title} imagen={c.imagen} />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
