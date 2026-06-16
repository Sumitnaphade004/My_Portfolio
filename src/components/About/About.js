import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/AboutImg.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      {" "}
      <Container fluid className="about-section">
        <Container>
          <div className="section-divider">
            <span>Know Who <strong className="purple">I'M</strong></span>
          </div>
          <Row style={{ justifyContent: "center"}}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingBottom: "50px",
              }}
            >
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img-section"
            >
              <img src={laptopImg} alt="about" className="about-img" />
            </Col>
          </Row>
          <h1 className="project-heading my-4">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading my-4">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
