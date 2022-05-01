import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import MyComponent from "../DateRangePicker";
import * as Action from "../../redux/actions/actions";
import style from "./Nav.module.css"


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
import Logo from "../Logo.jsx";
import LoginButton from "../LoginButton.jsx";
import ProfileButton from "../ProfileButton.jsx";
import Searchbar from "../Searchbar";
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
        
    <Navbar bg="dark" expand="lg" style={{position: "relative"}}>
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
            
            <Nav.Link href="#action2">
              <select  onChange={handleEventType}>
                <option value='All' key='All'>All events</option>
                <option value='ncaa_baseball' key='ncaa_baseball'>ncaa_baseball</option>
                <option value='minor_league_baseball' key='minor_league_baseball'>minor_league_baseball</option>
                <option value='music_festival' key='music_festival'>music_festival</option>
                <option value='concert' key='concert'>concert</option>
              </select>

            </Nav.Link>
          
          
            <NavDropdown  title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item   href="#action3">More</NavDropdown.Item>
              <NavDropdown.Item  href="#action4">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <LinkContainer to = "/createEvent">
              
              <NavDropdown.Item >

              
                
                Create your own event
                
              </NavDropdown.Item>

              </LinkContainer>
              
            </NavDropdown>
            <Nav.Link href="#"   disabled>
              Link
            </Nav.Link>
            
          </Nav>

          <Searchbar />
          

          {isAuthenticated ? <ProfileButton /> : <LoginButton  />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  );
}

