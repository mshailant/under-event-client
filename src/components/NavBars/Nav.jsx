import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LinkContainer } from "react-router-bootstrap";
import * as Action from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

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
  Dropdown,
  Image,
} from "react-bootstrap";
import Logo from "../Logo.jsx";

import Searchbar from "../Searchbar";
import styles from "./Nav.module.css";
import scrollHalf from "../ScrollButtom/scrollHalfButtom";
import scrollBottom from "../ScrollButtom/scrollBottom";
import aboutUs from "../ScrollButtom/scrollAboutUs";

export default function NavTop() {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [userData, setUserData] = useState({});

  const userLogedin = useSelector((state) => state.userLogedin);

  return (
    <header className={styles.nav}>
      <Navbar collapseOnSelect expand="lg" bg="warning" variant="warning">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand
              style={{
                color: "#f1c40f",
                fontFamily: "font-family: 'Rubik Glitch', cursive;",
              }}
            >
              <h2 className={styles.title}>UnderVentsApp</h2>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/createEvent">
                <Nav.Link style={{ color: "black" }}>Crear Eventos</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              <Nav.Link style={{ color: "white" }} eventKey={2}>
                {!isAuthenticated && (
                  <Button
                    style={{ color: "white" }}
                    className="m-2"
                    variant="outline-warning"
                    onClick={() => loginWithRedirect()}
                  >
                    Log In
                  </Button>
                )}
                {isAuthenticated && (
                  <Dropdown align="end" className="m-1">
                    <Dropdown.Toggle
                      as={Image}
                      roundedCircle={true}
                      src={user.picture}
                      width="45px"
                    ></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>{user.name}</Dropdown.Item>
                      <LinkContainer to="/profile">
                        <Dropdown.Item>Profile</Dropdown.Item>
                      </LinkContainer>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        onClick={() =>
                          logout({ returnTo: window.location.origin })
                        }
                      >
                        Log Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export function Selector() {
  const dispatch = useDispatch();

  function handleEventType(e) {
    e.preventDefault();
    dispatch(Action.byEventType(e.target.value));
  }

  function handleStates(e) {
    e.preventDefault();
    dispatch(Action.getState(e.target.value));
  }
  return (
    <div>
      <Navbar
        style={{ width: "100%", marginBottom: "25px" }}
        variant="warning"
        bg="warning"
      >
        <Container>
          <Navbar.Brand
            style={{ marginLeft: "auto", color: "white", fontWeight: "bold" }}
            href="#"
          >
            UnderEventsApp
          </Navbar.Brand>
          <Form.Select
            style={{ width: "400px" }}
            size="sm"
            onChange={handleStates}
          >
            <option onClick={() => scrollHalf()} value="All" key="All">
              States
            </option>

            <option onClick={() => scrollHalf()} value="VA" key="VA">
              Virginia
            </option>
            <option onClick={() => scrollHalf()} value="LA" key="LA">
              Los Angeles
            </option>
            <option onClick={() => scrollHalf()} value="GA" key="GA">
              Georgia
            </option>
            <option onClick={() => scrollHalf()} value="TN" key="TN">
              Tennessee
            </option>
            <option onClick={() => scrollHalf()} value="MD" key="MD">
              Maryland
            </option>
            <option onClick={() => scrollHalf()} value="WI" key="WI">
              Wisconsin
            </option>
          </Form.Select>

          <br />
          <Form.Select
            style={{ width: "400px" }}
            size="sm"
            onChange={handleEventType}
          >
            <option value="All" key="All">
              All events
            </option>
            <option
              onClick={() => scrollHalf()}
              value="ncaa_baseball"
              key="ncaa_baseball"
            >
              Baseball
            </option>
            <option
              onClick={() => scrollHalf()}
              value="minor_league_baseball"
              key="minor_league_baseball"
            >
              Minor League Baseball
            </option>
            <option
              onClick={() => scrollHalf()}
              value="music_festival"
              key="music_festival"
            >
              Music Festival
            </option>
            <option onClick={() => scrollHalf()} value="concert" key="concert">
              Concert
            </option>
          </Form.Select>

          <Form.Select style={{ width: "400px" }} size="sm">
            <option>Small select</option>
          </Form.Select>

          <Searchbar />
        </Container>
      </Navbar>
    </div>
  );
}
