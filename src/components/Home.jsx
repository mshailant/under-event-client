import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Action from "../redux/actions/actions";
import styles from "./Home.module.css";

import { Container, Row, Col } from "react-bootstrap";
import Individual from "./Card";
import Nav from "./Nav";
import Carousely from "./Carousel";

export default function Home() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventosDb);

  console.log(events);
  useEffect(() => {
    dispatch(Action.getAllEvent());
  }, [dispatch]);

  console.log(events);
  useEffect(() => {
    dispatch(Action.getAllEvent());
  }, [dispatch]);
  return (
    <div className={styles.background}>
      <Carousely />

      <div className={styles.cards}>
        {events?.map((c) => (
          <div key={c.id}>
            <Individual id={c.id} title={c.title} imagen={c.imagen} />
          </div>
        ))}
      </div>
    </div>
  );
}
