import React, { useState, useEffect } from "react";
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
import Loading from "../components/Loading";
import NavTop from "./NavBars/Nav";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, getUserByExternalId } from "../redux/actions/actions";

export function UserProfile() {
  const dispatch = useDispatch();
  const { user, isLoading } = useAuth0();
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
      console.log("user", userLoged);
      console.log("userData", userData);
      setShowToast(true);
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    console.log("userData", userData);
  };

  // if (isLoading) {
  //   return <Loading />;
  // }

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
                      type="text"
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
      {/* <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                class="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span class="font-weight-bold">Edogaru</span>
              <span class="text-black-50">edogaru@mail.com.my</span>
              <span> </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <label class="labels">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="first name"
                    value=""
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Surname</label>
                  <input
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="surname"
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Mobile Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter phone number"
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Address Line 1</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter address line 1"
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Address Line 2</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter address line 2"
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Postcode</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter address line 2"
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">State</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter address line 2"
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Area</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter address line 2"
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Email ID</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter email id"
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Education</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="education"
                    value=""
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="labels">Country</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="country"
                    value=""
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">State/Region</label>
                  <input
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="state"
                  />
                </div>
              </div>
              <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" type="button">
                  Save Profile
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center experience">
                <span>Edit Experience</span>
                <span class="border px-3 p-1 add-experience">
                  <i class="fa fa-plus"></i>&nbsp;Experience
                </span>
              </div>
              <br></br>
              <div class="col-md-12">
                <label class="labels">Experience in Designing</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="experience"
                  value=""
                />
              </div>{" "}
              <br></br>
              <div class="col-md-12">
                <label class="labels">Additional Details</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="additional details"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default withAuthenticationRequired(UserProfile);
