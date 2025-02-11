import React from "react";
import bgimage4 from "../../../src/images/bg4.jpg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Telephone, Envelope, GeoAlt } from "react-bootstrap-icons";
import Footer from "./Footer";

import CustomerNavbar2 from "./CustomerNavbar2";
import CustomerNavbar from "./CustomerNavbar";

function ContactUs() {
  var isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const containerStyle = {
    width: "100%",
    height: "100vh",
    position: "relative",
    paddingTop: "180px",
  };

  const backgroundStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bgimage4})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    filter: "blur(10px)",
    zIndex: -1,
  };

  const formControlStyle = {
    marginBottom: "15px",
    width: "100%",
    alignItems: "center",
  };

  const btnPrimaryStyle = {
    backgroundColor: "gold",
    border: "none",
  };

  const picStyle = {
    position: "relative",
    width: "100px",
    height: "100px",
  };

  // const nutriTiffLogoStyle = {
  //   position: "relative",
  //   top: "10px",
  //   left: "20px",
  //   width: "50px",
  // };

  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textAlign: "center",
  };

  if (isLoggedIn) {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${bgimage4})`,
            backgroundAttachment: "fixed",
            content: "",
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: -1,
            opacity: 0.5,
          }}
        ></div>
        <CustomerNavbar2 />
        <div className="row" style={{ paddingTop: "180px" }}>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div
              style={{
                backgroundColor: "black",
                padding: "20px",
                borderRadius: "20px",
              }}
            >
              <h2 style={{ color: "gold" }}>
                <br />
                <center>Get in Touch</center>
              </h2>
              <Form>
                <Form.Group controlId="name">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    style={formControlStyle}
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    style={formControlStyle}
                  />
                </Form.Group>
                <Form.Group controlId="message">
                  <Form.Control
                    as="textarea"
                    placeholder="Your Message"
                    rows={4}
                    style={formControlStyle}
                  />
                </Form.Group>
                <center>
                  <Button
                    variant="primary"
                    type="submit"
                    style={btnPrimaryStyle}
                  >
                    Send Message
                  </Button>
                </center>
              </Form>
              <hr />
              <div style={{ color: "white" }}>
                <Row>
                  <center>
                    <Telephone size={30}></Telephone>
                    <span style={{ marginRight: "20px" }}></span>
                    <Envelope size={30}></Envelope>
                    <span style={{ marginRight: "20px" }}></span>
                    <GeoAlt size={30}></GeoAlt>
                    <br />
                    <br />
                    <Col>
                      <b>Contact: +91- 999-999-9999</b>
                    </Col>
                    <br />
                    <Col>
                      <b>Email: hungerhive@gmail.com</b>
                    </Col>
                    <br />
                    <Col>
                      <b>Address: Shivaji Nagar, Pune, 411016</b>
                    </Col>
                  </center>
                </Row>

                <br />
                <hr />
                <br />
                <center>
                  <h2>Our Team</h2>
                  <br />

                  <h1>Praveen , Vaishnavi , Ashish , Prafull , Abhiraj</h1>
                  <br />
                </center>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${bgimage4})`,
            backgroundAttachment: "fixed",
            content: "",
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: -1,
            opacity: 0.5,
          }}
        ></div>
        <CustomerNavbar />
        <div className="row" style={{ paddingTop: "180px" }}>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div
              style={{
                backgroundColor: "black",
                padding: "20px",
                borderRadius: "20px",
              }}
            >
              <h2 style={{ color: "gold" }}>
                <br />
                <center>Get in Touch</center>
              </h2>
              <Form>
                <Form.Group controlId="name">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    style={formControlStyle}
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    style={formControlStyle}
                  />
                </Form.Group>
                <Form.Group controlId="message">
                  <Form.Control
                    as="textarea"
                    placeholder="Your Message"
                    rows={4}
                    style={formControlStyle}
                  />
                </Form.Group>
                <center>
                  <Button
                    variant="primary"
                    type="submit"
                    style={btnPrimaryStyle}
                  >
                    Send Message
                  </Button>
                </center>
              </Form>
              <hr />
              <div style={{ color: "white" }}>
                <Row>
                  <center>
                    <Telephone size={30}></Telephone>
                    <span style={{ marginRight: "20px" }}></span>
                    <Envelope size={30}></Envelope>
                    <span style={{ marginRight: "20px" }}></span>
                    <GeoAlt size={30}></GeoAlt>
                    <br />
                    <br />
                    <Col>
                      <b>Contact: +91- 999-999-9999</b>
                    </Col>
                    <br />
                    <Col>
                      <b>Email: hungerhive@gmail.com</b>
                    </Col>
                    <br />
                    <Col>
                      <b>Address: Shivaji Nagar, Pune, 411016</b>
                    </Col>
                  </center>
                </Row>

                <br />
                <hr />
                <br />
                <center>
                  <h2>Our Team</h2>
                  <br />
                  <h4>Ashish Abhiraj Prafull Praveen Vaishnavi</h4>

                  <br />
                </center>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactUs;
