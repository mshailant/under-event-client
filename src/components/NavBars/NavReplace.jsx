import React from 'react'

export default function NavTop(){

    const dispatch = useDispatch();

    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
    const userLoged = useSelector((state) => state.userLoged);
    const [userFound, setUserFound] = useState(false);

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
      }, [isAuthenticated, userFound]);
    
  
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/createEvent">Crear Eventos</Nav.Link>
      <Nav.Link href="#pricing">Detalle de Orden</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
}