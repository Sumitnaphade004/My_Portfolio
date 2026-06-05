import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
              Hi, I'm <b className="purple">Sumit Naphade</b>, a passionate
              Full-Stack Developer who enjoys building modern, scalable, and
              user-friendly web applications. I love turning ideas into
              real-world solutions through clean code and innovative technology.
              <br />
              <br />I have hands-on experience with
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, React.js, Node.js, Express.js, MongoDB, and React
                  Native
                </b>
              </i>
              , and I enjoy developing both frontend and backend systems.
              <br />
              <br />    
              I'm always eager to learn new technologies, solve challenging
              problems, and create applications that make a meaningful impact.
              Whenever possible, I enjoy working with
              <b className="purple"> Node.js </b>,
              <b className="purple"> React.js </b>, and modern web technologies
              to build efficient and engaging digital experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
