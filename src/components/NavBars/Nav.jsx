import React, { useEffect } from "react";
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
import axios from "axios";

import Logo from "../Logo.jsx";
import { getAllEvent, byFilterDate } from "../../redux/actions/actions";
import Searchbar from "../Searchbar";
import styles from "./Nav.module.css";
import scrollHalf from "../ScrollButtom/scrollHalfButtom";
import scrollBottom from "../ScrollButtom/scrollBottom";
import aboutUs from "../ScrollButtom/scrollAboutUs";

export default function NavTop() {
  const dispatch = useDispatch();

  const { user, isAuthenticated, loginWithRedirect, logout, isLoading } =
    useAuth0();

  const userLoged = useSelector((state) => state.userLoged);

  useEffect(() => {
    console.log("usefec");
    if (isAuthenticated) {
      console.log("user", userLoged);
      console.log("user", user);
      dispatch(Action.getUserByExternalId(user.sub));
      if (!userLoged) {
        dispatch(
          Action.createUser({
            externalId: user.sub,
            name: user.given_name,
            email: user.email,
            picture: user.picture,
            role: "User",
            lastName: user.family_name,
          })
        );
      }
    }
  }, [isAuthenticated, user]);

  console.log("render navbar");
  return (
    <header className={styles.nav}>
      <Navbar expand="lg" bg="warning" variant="warning">
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
          <Navbar.Toggle bg="white" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
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
                      src={userLoged?.picture}
                      width="45px"
                    ></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>{userLoged?.name}</Dropdown.Item>
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
  const eventosBack = useSelector((state) => state.eventosBack);
  const filterDate = useSelector((state) => state.filterDate);

  useEffect(() => {
    dispatch(getAllEvent());
    dispatch(byFilterDate());
  }, []);

  const dispatch = useDispatch();

  function handleEventType(e) {
    e.preventDefault();
    dispatch(Action.byEventType(e.target.value));
  }

  function handleStates(e) {
    e.preventDefault();
    dispatch(Action.getState(e.target.value));
  }

  function handleDate(e) {
    e.preventDefault();
    dispatch(Action.byFilterDate(e.target.value));
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
              Ciudades
            </option>

            <option
              onClick={() => scrollHalf()}
              value="Buenos Aires"
              key="Buenos Aires"
            >
              Buenos Aires
            </option>
            <option
              onClick={() => scrollHalf()}
              value="Cordoba Capital"
              key="Cordoba Capital"
            >
              Cordoba Capital
            </option>
            <option onClick={() => scrollHalf()} value="Cordoba" key="Cordoba">
              Cordoba
            </option>
            <option
              onClick={() => scrollHalf()}
              value="Mar del Plata"
              key="Mar del Plata"
            >
              Mar del Plata
            </option>
          </Form.Select>

          <br />
          <Form.Select
            style={{ width: "400px" }}
            size="sm"
            onChange={handleEventType}
          >
            <option value="All" key="All">
              Generos
            </option>
            <option onClick={() => scrollHalf()} value="Reggae" key="Reggae">
              Reggae
            </option>
            <option
              onClick={() => scrollHalf()}
              value="Urbano latino"
              key="Urbano latino"
            >
              Urbano latino
            </option>
            <option onClick={() => scrollHalf()} value="Pop" key="Pop">
              Pop
            </option>
            <option
              onClick={() => scrollHalf()}
              value="Rock Nacional"
              key="Rock Nacional"
            >
              Rock Nacional
            </option>
            <option onClick={() => scrollHalf()} value="Rock" key="Rock">
              Rock
            </option>
            <option onClick={() => scrollHalf()} value="Ska" key="Ska">
              Ska
            </option>
          </Form.Select>

          <Form.Select style={{ width: "400px" }} size="sm">
            <option>Small select</option>
          </Form.Select>

          <Form.Select
            style={{ width: "400px" }}
            size="sm"
            onChange={handleDate}
          >
            <option value="All" key="All">
              Por mes
            </option>
            {filterDate?.map((e) => {
              return (
                <option key={e.month} value={e.month}>
                  {e.month[0] + e.month.slice(1)}
                </option>
              );
            })}
          </Form.Select>

          <Searchbar />
        </Container>
      </Navbar>
    </div>
  );
}
