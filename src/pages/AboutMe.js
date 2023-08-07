import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "../App.css";
const AboutMe = () => {
  return (
    <>
      <Container fluid="md" className="pageLayout">
        <div>
          <Card>
            <Card.Body>
              <h1>Eugene Man Hin Ho</h1>
              <h3>Open work premit owner</h3>
            </Card.Body>
          </Card>
          <Card className="cardLayout">
            <Card.Body>
              <h1></h1>
              <h3>Open work premit owner</h3>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default AboutMe;
