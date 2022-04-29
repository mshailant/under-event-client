import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as Action from "../redux/actions/actions";

import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Collapse,
  Brand,
  Item,
  Button,
} from "react-bootstrap";
import Logo from "../components/Logo.jsx";
import LoginButton from "./LoginButton.jsx";
import ProfileButton from "./ProfileButton.jsx";
import Searchbar from "./Searchbar";
import styles from "./Nav.module.css"
export default function Navegacion() {
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading, error } = useAuth0();

  function handleEventType(e) {
    e.preventDefault();
    dispatch(Action.byEventType(e.target.value))
  }

  return (
    <header className={styles.nav}>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">
              <select  onChange={handleEventType}>
                <option value='All' key='All'>All events</option>
                <option value='ncaa_baseball' key='ncaa_baseball'>ncaa_baseball</option>
                <option value='minor_league_baseball' key='minor_league_baseball'>minor_league_baseball</option>
                <option value='music_festival' key='music_festival'>music_festival</option>
                <option value='concert' key='concert'>concert</option>
              </select>

            </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>

          <Searchbar />

          {isAuthenticated ? <ProfileButton /> : <LoginButton />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  );
}

