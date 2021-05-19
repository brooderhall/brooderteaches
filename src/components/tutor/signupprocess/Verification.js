import React, { useState, useEffect } from "react";

// navbar import
import Navbar from "../../Navbar";
import Footer from "../../Footer";

// boostrap impots
import { Container, Row, Button, Col } from "react-bootstrap";

// material ui imports
import { DropzoneArea } from "material-ui-dropzone";

export default function Verification(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // NAVBAR CONTROLS
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div fluid className="height-full">
      <Navbar
        toggle={toggle}
        navbar={navbar}
        changeBackground={changeBackground}
      />
      <Row className="page-header">
        <Col md={10} className="mx-auto text-center my-auto">
          <h1>Verification</h1>
          <p className="text-muted">
            Fill in Your Personal Information >> Verification >> Payments
          </p>
        </Col>
      </Row>

      <Container className="height-half">
        <Row className="mt-4 mb-4 text-center">
          <Col md={8} className="mx-auto">
            <h5 className="mb-4 mt-2">
              *Upload any valid National Identification Card for successful
              verification
            </h5>
            <DropzoneArea />
            <Button onClick={props.prevStep} className="primary-button">
              Go Back
            </Button>
            <Button onClick={props.nextStep} className="primary-button">
              Proceed
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}