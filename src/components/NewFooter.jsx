import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">UnderEventApp</h5>
            <p>
              Tu lugar para poder mostrar tu talento..
            </p>
          </MDBCol>
          <MDBCol md="6">
          
            <ul style={{color: "black"}}>
              <li  className="list-unstyled">
                <a style={{color: "black" }}  href="#!">Contact Us</a>
              </li>
              <li className="list-unstyled">
                <a style={{color: "black"}} href="#!">About Us</a>
              </li>
              <li className="list-unstyled">
                <a  style={{color: "black"}} href="#!">Social Media</a>
              </li>
              <li className="list-unstyled">
                <a  style={{color: "black"}} href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a style={{color: "black"}} href="https://www.underEventApp.com"> UnderEventApp.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;