import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/PortFolio_Pic.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi, I'm <b className="purple">Sumit Naphade</b>, a Computer Engineering graduate and Full Stack Developer with a strong interest in building practical and user-friendly web and mobile applications.
              enjoy working with technologies like
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, React.js, Node.js, Express.js, MongoDB, and React
                  Native {" "}
                </b>
              </i>
              to create efficient solutions for real-world problems.
              <br />
              <br />    
              Through academic projects and internship experience, I have gained hands-on exposure to full-stack web development, mobile application development, REST APIs, database management, and modern development workflows. I enjoy turning ideas into functional applications, solving technical challenges, and continuously learning new technologies to improve my skills as a developer.
              <br /><br />
              I'm always eager to explore new opportunities, contribute to meaningful projects, and build software that delivers a great user experience across both web and mobile platforms.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="avatar-img" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
