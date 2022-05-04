import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "../components/Loading";

export function UserProfile() {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md={1}>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>{"Mis Compras"}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>{"Mis Eventos"}</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default withAuthenticationRequired(UserProfile);
