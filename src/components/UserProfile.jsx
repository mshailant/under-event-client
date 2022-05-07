import React, { useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import {
  Container,
  Row,
  Col,
  Form,
  Toast,
  Button,
  ToastContainer,
} from "react-bootstrap";
import NavTop from "./NavBars/Nav";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, getUserByExternalId } from "../redux/actions/actions";

export function UserProfile() {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const [validated, setValidated] = useState(false);
  const userLoged = useSelector((state) => state.userLoged);
  const [userData, setUserData] = useState({});
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("formulario no valido");
      event.preventDefault();
      event.stopPropagation();
    } else {
      dispatch(updateUser(userData, userLoged.externalId));
      dispatch(getUserByExternalId(user.sub));
      setShowToast(true);
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <ToastContainer className="p-3 py-5 mt-5" position={"bottom-end"}>
        <Toast
          bg="success"
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body>Profile Updated Successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
      <NavTop />
      <Container bg="white" mt={5} mb={5}>
        <Row>
          <Col md={5} className="border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                class="rounded-circle mt-5"
                width="150px"
                src={userLoged?.picture}
                alt="profile"
              />
              <span class="font-weight-bold">{`${userLoged?.name} ${userLoged?.lastName}`}</span>
              <span class="text-black-50">{userLoged?.email}</span>
              <span> </span>
            </div>
          </Col>
          <Col md={5} border-right>
            <div class="p-1 py-5">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
              </div>

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      required
                      placeholder="First name"
                      defaultValue={userLoged?.name}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      name="lastName"
                      required
                      type="text"
                      placeholder="Last name"
                      defaultValue={userLoged?.lastName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      name="city"
                      type="text"
                      placeholder="City"
                      defaultValue={userLoged?.city}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      name="state"
                      type="text"
                      placeholder="State"
                      defaultValue={userLoged?.state}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid state.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button type="submit" variant="warning">
                  Save Profile
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withAuthenticationRequired(UserProfile);
