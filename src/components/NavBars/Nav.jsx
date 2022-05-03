import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LinkContainer } from "react-router-bootstrap";
import * as Action from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import ProfileButton from '../ProfileButton'
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
import LoginButton from "../LoginButton";

import Searchbar from "../Searchbar";
import styles from "./Nav.module.css";
import scrollHalf from "../ScrollButtom/scrollHalfButtom";
import scrollBottom from "../ScrollButtom/scrollBottom";
import aboutUs from "../ScrollButtom/scrollAboutUs";

export default function NavTop() {
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading, error } = useAuth0();

  function handleEventType(e) {
    e.preventDefault();
    dispatch(Action.byEventType(e.target.value));
  }

  function handleStates(e) {
    e.preventDefault();
    dispatch(Action.getState(e.target.value));
  }

  return (
    <header className={styles.nav}>

 
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand style={{color: "#f1c40f"}}  href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{color: "white"}} href="#features">Features</Nav.Link>
              <Nav.Link style={{color: "white"}} href="#pricing">Pricing</Nav.Link>
              <NavDropdown
                style={{ marginLeft: "30px"}}
                className={styles.nav}
                title={
                  <span  className="text-primary my-auto">More Information</span>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item onClick={() => scrollBottom()}>
                  Contact Us
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => aboutUs()}>
                  About Us
                </NavDropdown.Item>
              
                <NavDropdown.Divider />
                <LinkContainer to="/createEvent">
                  <NavDropdown.Item>Create your own event</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Nav>
             
              <Nav.Link style={{color: "white", }}  eventKey={2} >
              {isAuthenticated ? <ProfileButton onClick={() => aboutUs()} /> : <LoginButton />}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>










      {/* <Navbar bg="dark" expand="lg" style={{ position: "relative" }}>
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
              <select  onChange={ handleStates}>
                <option onClick={() => scrollHalf()} value='All' key='All'>States</option>
              
                <option onClick={() => scrollHalf()}  value='VA' key='VA' >Virginia</option>
                <option onClick={() => scrollHalf()} value='LA' key='LA' >Los Angeles</option>
                <option  onClick={() => scrollHalf()} value='GA' key='GA' >Georgia</option>
                <option  onClick={() => scrollHalf()} value='TN'key='TN'  >Tennessee</option>
                <option  onClick={() => scrollHalf()} value='MD' key='MD' >Maryland</option>
                <option onClick={() => scrollHalf()} value='WI' key='WI' >Wisconsin</option>
              </select>

            </Nav.Link>

            <Nav.Link href="#action2">
              <select  onChange={handleEventType}>
                <option value='All' key='All'>All events</option>
                <option value='ncaa_baseball' key='ncaa_baseball' >Baseball</option>
                <option value='minor_league_baseball' key='minor_league_baseball'>Minor League Baseball</option>
                <option value='music_festival' key='music_festival'>Music Festival</option>
                <option value='concert' key='concert'>Concert</option>
              </select>

            </Nav.Link> 

             

              <br />

              <NavDropdown
                style={{ marginLeft: "30px" }}
                className={styles.nav}
                title={
                  <span className="text-primary my-auto">More Information</span>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item onClick={() => scrollBottom()}>
                  Contact Us
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => aboutUs()}>
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <LinkContainer to="/createEvent">
                  <NavDropdown.Item>Create your own event</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>

            <Searchbar />

            {isAuthenticated ? <ProfileButton onClick={() => aboutUs()} /> : <LoginButton />}
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </header>
  );
}


export function Selector () {

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
       <Navbar  style={{width: "100%",  marginBottom: "25px"}} variant="light" bg="light">
  <Container>
  <Navbar.Brand style={{marginLeft: "auto"}} href="#">Navbar</Navbar.Brand>
       <Form.Select style={{width: "400px"}} size="sm"  onChange={handleStates} >
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
              <Form.Select style={{width: "400px"}} size="sm"
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
                <option
                  onClick={() => scrollHalf()}
                  value="concert"
                  key="concert"
                >
                  Concert
                </option>
              </Form.Select>

              <Form.Select style={{width: "400px"}} size="sm">
    <option>Small select</option>
  </Form.Select>

             
              
  <Searchbar />
              </Container>
              </Navbar>
    </div>
  )
}



