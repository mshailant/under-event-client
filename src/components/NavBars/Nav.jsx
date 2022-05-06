import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LinkContainer } from "react-router-bootstrap";
import * as Action from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
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
import { getAllEvent, byFilterDate, getAllCities, getAllGeneros } from "../../redux/actions/actions";
import Searchbar from "../Searchbar";
import styles from "./Nav.module.css";
import scrollHalf from "../ScrollButtom/scrollHalfButtom";
import scrollBottom from "../ScrollButtom/scrollBottom";
import aboutUs from "../ScrollButtom/scrollAboutUs";
import ShoppingCart from "../shopCart";

export default function NavTop() {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <header className={styles.nav}>
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="secondary">
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
              <div>
                <ShoppingCart/>
              </div>
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
  const eventosBack = useSelector((state) => state.eventosBack);
  const filterDate = useSelector((state) => state.filterDate);
  const cities = useSelector((state) => state.allCities);
  const generos = useSelector((state) => state.allGeneros);

  const [filterCity, setFilterCity] = useState("");
  const [filterGenero, setFilterGenero] = useState("");
  const [filtroMes, setFilterMes] = useState("")
  const [filterActivo, setFilterActivo] = useState("sin filtro")

  useEffect(() => {
    dispatch(byFilterDate());
    dispatch(getAllCities());
    dispatch(getAllGeneros())
    
    if(localStorage.getItem('filtro') === "sin filtro" || localStorage.getItem('filtro') === null){
      dispatch(getAllEvent())
    }else if(localStorage.getItem('filtro') === "ciudad"){
      dispatch(Action.getState(localStorage.getItem('nombre')))
    }else if(localStorage.getItem('filtro') === "genero"){
      dispatch(Action.byEventType(localStorage.getItem('genero')))
    }else if(localStorage.getItem('filtro') === "searchbar"){
      dispatch(Action.getByTitle(localStorage.getItem('searchbar')))
    }else if(localStorage.getItem('filtro') === "mes"){
      dispatch(Action.byFilterDate(localStorage.getItem('mes')))
    }
  }, []);

    

  const dispatch = useDispatch();

  function handleDate(e) {
    e.preventDefault();
    const mes = e.target.value;
    setFilterMes(mes)
    window.localStorage.setItem('mes', mes)
    dispatch(Action.byFilterDate(localStorage.getItem('mes')/* e.target.value */));
    window.localStorage.setItem('filtro','mes')
  }

  const getMes = () => {
    return localStorage.getItem('mes')
  }

  //--------------------------------------------------------------------

  function handleEventType(e) {
    e.preventDefault();
    const genero = e.target.value
    setFilterGenero(genero)
    window.localStorage.setItem('genero', genero)
    dispatch(Action.byEventType(localStorage.getItem('genero')));
    window.localStorage.setItem('filtro', "genero")
  }

  const saveGenero = () => {
    localStorage.setItem('genero', filterGenero);
  }

  const getGenero = () => {
    return localStorage.getItem('genero')
  }

  useEffect (() => {
    setFilterCity(getGenero());
 }, []);
  // -----------------------------------------
  function handleStates(e) {
    e.preventDefault();
    const city = e.target.value
    setFilterCity(city)
    window.localStorage.setItem('nombre', city)
    /* console.log(localStorage.getItem('nombre')) */
    dispatch(Action.getState(localStorage.getItem('nombre')));
    window.localStorage.setItem('filtro', "ciudad")
  }

  const saveData = () => {
    localStorage.setItem('nombre', filterCity);
  }

  const getData = () => {
    return localStorage.getItem('nombre')
  }

  useEffect (() => {
     setFilterCity(getData());
  }, []);
  //----------------------------------------------------


  /* function handleDate(e) {
    e.preventDefault();
    dispatch(Action.byFilterDate(e.target.value));
  } */
  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <Col><Navbar
            style={{ width: "90%", marginBottom: "25px", marginLeft: "5%" }}
            bg="secondary" variant="secondary"
          >
            <Container>
              <Navbar.Brand
                style={{ marginLeft: "auto", color: "rgb(226, 181, 0)", fontWeight: "bold" }}
                href="#"
              >
                UnderEventsApp
              </Navbar.Brand>

              <Form.Select
                style={{ width: "400px" }}
                size="sm"
                onChange={handleStates}
              >
                <option value="All" key="All">Ciudades</option>
                {cities?.map((item) => <option onClick={ saveData()} key={item} value={item}>{item}</option>)}


              </Form.Select>


              {/* <Form.Select
    style={{ width: "400px" }}
    size="sm"
    onChange={handleStates}
  >
    <option onClick={() => scrollHalf()} value="All" key="All">
      Ciudades
    </option>

    <option onClick={() => scrollHalf()} value="Buenos Aires" key="Buenos Aires">
    Buenos Aires
    </option>
    <option onClick={() => scrollHalf()} value="Cordoba Capital" key="Cordoba Capital">
    Cordoba Capital
    </option>
    <option onClick={() => scrollHalf()} value="Cordoba" key="Cordoba">
    Cordoba
    </option>
    <option onClick={() => scrollHalf()} value="Mar del Plata" key="Mar del Plata">
    Mar del Plata
    </option>
  </Form.Select> */}

              <br />
              <Form.Select
                style={{ width: "400px" }}
                size="sm"
                onChange={handleEventType}
              >
                <option value="All" key="All">Generos</option>
                {generos?.map((item) => <option onClick={ getGenero()} key={item} value={item}>{item}</option>)}
                
              </Form.Select>
              {/* <Form.Select
                style={{ width: "400px" }}
                size="sm"
                onChange={handleEventType}
              >
                <option value="All" key="All">
                  Generos
                </option>
                <option
                  onClick={() => scrollHalf()}
                  value="Reggae"
                  key="Reggae"
                >
                  Reggae
                </option>
                <option
                  onClick={() => scrollHalf()}
                  value="Urbano latino"
                  key="Urbano latino"
                >
                  Urbano latino
                </option>
                <option
                  onClick={() => scrollHalf()}
                  value="Pop"
                  key="Pop"
                >
                  Pop
                </option>
                <option
                  onClick={() => scrollHalf()}
                  value="Rock Nacional"
                  key="Rock Nacional"
                >
                  Rock Nacional
                </option>
                <option
                  onClick={() => scrollHalf()}
                  value="Rock"
                  key="Rock"
                >
                  Rock
                </option>
                <option
                  onClick={() => scrollHalf()}
                  value="Ska"
                  key="Ska"
                >
                  Ska
                </option>
              </Form.Select> */}

              {/* <Form.Select style={{ width: "400px" }} size="sm">
                <option>Small select</option>
              </Form.Select> */}

              <Form.Select
                style={{ width: "400px" }}
                size="sm"
                onChange={handleDate}
              >
                <option /* onClick={() => scrollHalf()} */ onClick={ getMes()} value="All" key="All">Por mes</option>
                <option /* onClick={() => scrollHalf()} */ onClick={ getMes()} value="Enero">Enero de 2022</option>
                <option /* onClick={() => scrollHalf()} */ onClick={ getMes()} value="Febrero">Febrero de 2022</option>
                <option /* onClick={() => scrollHalf()} */ onClick={ getMes()} value="Marzo">Marzo de 2022</option>
                <option /* onClick={() => scrollHalf()} */ onClick={ getMes()} value="Abril">Abril de 2022</option>
                <option /* onClick={() => scrollHalf()} */ onClick={ getMes()} value="Mayo">Mayo de 2022</option>
                <option /* onClick={() => scrollHalf()} */ onClick={ getMes()} value="Junio">Junio de 2022</option>
                <option /* onClick={() => scrollHalf()} */ onClick={ getMes()} value="Julio">Julio de 2022</option>
                <option /* onClick={() => scrollHalf()} */ onClick={ getMes()} value="Agosto">Agosto de 2022</option>
                <option /* onClick={() => scrollHalf()} */ onClick={ getMes()} value="Septiembre">Septiembre de 2022</option>
                <option /* onClick={() => scrollHalf()} */ onClick={ getMes()} value="Octubre">Octubre de 2022</option>
                <option /* onClick={() => scrollHalf()} */ onClick={ getMes()} value="Noviembre">Noviembre de 2022</option>
                <option /* onClick={() => scrollHalf()} */ onClick={ getMes()} value="Diciembre">Diciembre de 2022</option>
                {/* {filterDate?.map((e) => {
      return (
        <option key={e.month} value={e.month}>
          {e.month[0] + e.month.slice(1)}
        </option>
      );
    })} */}
              </Form.Select>

              <Searchbar />
            </Container>
          </Navbar></Col>
        </Row>
      </Container>
    </div>
  );
}



