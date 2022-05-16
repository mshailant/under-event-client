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
  Form,
  Button,
  Dropdown,
  Image,
  DropdownButton,
  NavDropdown
} from "react-bootstrap";

import {
  getAllEvent,
  byFilterDate,
  getAllCities,
  getAllGeneros,
} from "../../redux/actions/actions";
import Searchbar from "../Searchbar";
import styles from "./Nav.module.css";
import ShoppingCart from "../shopCart";
import Calendario from "../Calendario"
import { Select, CaretIcon, ModalCloseButton } from 'react-responsive-select';
import imagen from '../../images/1649175668524-null-cabecera_crowder.jpg'


export default function NavTop() {
  const dispatch = useDispatch();

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const userLoged = useSelector((state) => state.userLoged);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(Action.getUserByExternalId(user.sub));
      if (!userLoged) {
        dispatch(
          Action.createUser({
            externalId: user.sub,
            name: user.given_name,
            email: user.email,
            picture: user.picture,
            lastName: user.family_name,
          })
        );
      }
    }
  }, [isAuthenticated]);

  const handleLogin = async () => {
    loginWithRedirect({
      appState: {
        targetUrl: window.location.pathname,
      },
    });
  };

  return (
    
      <header className={styles.nav}>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav.Link style={{color:"yellow", fontSize: "22px", fontWeight: "bold"}} bg='warning' href="/">UnderEventsApp</Nav.Link>
      <Nav className="me-auto">
       
        
        <NavDropdown variant="warning" bg="waring" style={{color:"yellow", fontSize: "15px", fontWeight: "bold"}} title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/createEvent"> Crea tu Evento </NavDropdown.Item>
         
         
          <NavDropdown.Divider />
          <NavDropdown.Item href="/detailOrden">Ordenes</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
              <ShoppingCart />
            </Nav>
      <Nav>
        
        <Nav.Link style={{ color: "white" }} eventKey={2}>
                  {!isAuthenticated && (
                    <Button
                      style={{ color: "white", height: "15px" }}
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
                        <Dropdown.Item show={false}>
                          {userLoged?.name}
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <LinkContainer to="/profile">
                          <Dropdown.Item>Profile</Dropdown.Item>
                        </LinkContainer>
                        {userLoged?.roll === "Admin" && (
                          <LinkContainer to="/userManagement">
                            <Dropdown.Item>User Management</Dropdown.Item>
                          </LinkContainer>
                        )}
  
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
    const cities = useSelector((state) => state.allCities);
    const generos = useSelector((state) => state.allGeneros);
  
    const [filterCity, setFilterCity] = useState("");
    const [filterGenero, setFilterGenero] = useState("");
    const [filtroMes, setFilterMes] = useState("");
    const [filterActivo, setFilterActivo] = useState("sin filtro");
  
    useEffect(() => {
      dispatch(byFilterDate());
      dispatch(getAllCities());
      dispatch(getAllGeneros());
  
      if (
        localStorage.getItem("filtro") === "sin filtro" ||
        localStorage.getItem("filtro") === null
      ) {
        dispatch(getAllEvent());
      } else if (localStorage.getItem("filtro") === "ciudad") {
        dispatch(Action.getState(localStorage.getItem("nombre")));
      } else if (localStorage.getItem("filtro") === "genero") {
        dispatch(Action.byEventType(localStorage.getItem("genero")));
      } else if (localStorage.getItem("filtro") === "searchbar") {
        dispatch(Action.getByTitle(localStorage.getItem("searchbar")));
      } else if (localStorage.getItem("filtro") === "mes") {
        dispatch(Action.byFilterDate(localStorage.getItem("mes")));
      }
    }, []);
  
    const dispatch = useDispatch();
  
    function handleDate(e) {
      e.preventDefault();
      const mes = e.target.value;
      setFilterMes(mes);
      window.localStorage.setItem("mes", mes);
      dispatch(
        Action.byFilterDate(/* localStorage.getItem("mes") */ e.target.value)
      );
      window.localStorage.setItem("filtro", "mes");
    }
  
    const getMes = () => {
      return localStorage.getItem("mes");
    };
  
    //--------------------------------------------------------------------
  
    function handleEventType(e) {
      e.preventDefault();
      const genero = e.target.value;
      setFilterGenero(genero);
      window.localStorage.setItem("genero", genero);
      dispatch(Action.byEventType(localStorage.getItem("genero")));
      window.localStorage.setItem("filtro", "genero");
    }
  
    const saveGenero = () => {
      localStorage.setItem("genero", filterGenero);
    };
  
    const getGenero = () => {
      return localStorage.getItem("genero");
    };
  
    useEffect(() => {
      setFilterCity(getGenero());
    }, []);
    // -----------------------------------------
    function handleStates(e) {
      e.preventDefault();
      const city = e.target.value;
      setFilterCity(city);
      window.localStorage.setItem("nombre", city);
      dispatch(Action.getState(localStorage.getItem("nombre")));
      window.localStorage.setItem("filtro", "ciudad");
    }
  
    const saveData = () => {
      localStorage.setItem("nombre", filterCity);
    };
  
    const getData = () => {
      return localStorage.getItem("nombre");
    };
  
    useEffect(() => {
      setFilterCity(getData());
    }, []);
    //----------------------------------------------------
  
    /* function handleDate(e) {
      e.preventDefault();
      dispatch(Action.byFilterDate(e.target.value));
  
      
    } */
    
    return (
      <div className={styles.container}>
        <Container >
    <Row>
      <Col>
      <Navbar style={{width: "auto"}} bg="dark" variant="dark">
      <Container>
      <Navbar.Brand bg= "warning" variant = "warning" style={{color: " #f4d03f", fontWeight: "bold"}}>UnderEventsApp</Navbar.Brand>
      <Nav style={{gap: "10px"}} className="me-auto">
      
      <Form.Select
      
                    variant= "warning"
                    bg="warning"
                    style={{ width: "120px", height: "37px", background: "#B7950B" , borderColor: "black" }}
                    size="sm"
                    onChange={handleStates}
                  >
                    <option value="All" key="All">
                      Ciudades
                    </option>
                    {cities?.map((item) => (
                      <option onClick={saveData()} key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Select
                    style={{ width: "120px", height: "37px", background: "#B7950B", borderColor: "black"}}
                    size="sm"
                    onChange={handleEventType}
                  >
                    <option value="All" key="All">
                      Generos
                    </option>
                    {generos?.map((item) => (
                      <option onClick={getGenero()} key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </Form.Select>
               
                  <Form.Select
                    style={{width: "120px", height: "37px", background: "#B7950B", borderColor: "black" }}
                    size="sm"
                    onChange={handleDate}
                  >
                    <option onClick={() => getMes()} value="All" key="All">
                      Por mes
                    </option>
                    <option onClick={() => getMes()} value="Enero">
                      Enero de 2022
                    </option>
                    <option onClick={() => getMes()} value="Febrero">
                      Febrero de 2022
                    </option>
                    <option onClick={() => getMes()} value="Marzo">
                      Marzo de 2022
                    </option>
                    <option onClick={() => getMes()} value="Abril">
                      Abril de 2022
                    </option>
                    <option onClick={() => getMes()} value="Mayo">
                      Mayo de 2022
                    </option>
                    <option onClick={() => getMes()} value="Junio">
                      Junio de 2022
                    </option>
                    <option onClick={() => getMes()} value="Julio">
                      Julio de 2022
                    </option>
                    <option onClick={() => getMes()} value="Agosto">
                      Agosto de 2022
                    </option>
                    <option onClick={() => getMes()} value="Septiembre">
                      Septiembre de 2022
                    </option>
                    <option onClick={() => getMes()} value="Octubre">
                      Octubre de 2022
                    </option>
                    <option onClick={() => getMes()} value="Noviembre">
                      Noviembre de 2022
                    </option>
                    <option onClick={() => getMes()} value="Diciembre">
                      Diciembre de 2022
                    </option>
                  </Form.Select>
                  <div style={{marginLeft: "380px"}}>
  
                  <Searchbar/>
                  </div>
      </Nav>
      </Container>
    </Navbar>
      <hr  style={{color: " #f7dc6f", fontSize: "10px"}} />
                 
          </Col>
    </Row>
  </Container>
        
              
      </div>
    );
  }
