import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import WebSockets from "../../Assets/TechIcons/WebSockets.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Express from "../../Assets/TechIcons/Express.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Bootstrap from "../../Assets/TechIcons/Bootstrap.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import RestAPIs from "../../Assets/TechIcons/RestAPIs.svg";
import Html from "../../Assets/TechIcons/Html.svg";
import Css from "../../Assets/TechIcons/Css.svg";
import Figma from "../../Assets/TechIcons/Figma.svg";
import Xampp from "../../Assets/TechIcons/Xampp.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
            <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React Native</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Express} alt="express" />
        <div className="tech-icons-text">Express.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={WebSockets} alt="WebSockets" />
        <div className="tech-icons-text">WebSockets</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={RestAPIs} alt="REST APIs" />
        <div className="tech-icons-text">REST APIs</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Html} alt="html" />
        <div className="tech-icons-text">HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Css} alt="css" />
        <div className="tech-icons-text">CSS3</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Bootstrap} alt="bootstrap" />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redis} alt="redis" />
        <div className="tech-icons-text">Redis</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Figma} alt="figma" />
        <div className="tech-icons-text">Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Xampp} alt="xampp" />
        <div className="tech-icons-text">XAMPP</div>
      </Col>
    </Row>
  );
}

export default Techstack;
