import React from "react";
import Card from "react-bootstrap/Card";
import { FaHandPointRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{textAlign: "justify"}}>
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Sumit Naphade</span> from{" "}
            <span className="purple">Jalgaon, India</span>.
            <br />I am a passionate{" "}
            <span className="purple">Full-Stack Developer</span> who enjoys
            building modern web applications and solving real-world problems
            through technology.
            <br />I hold a degree in{" "}
            <span className="purple">Computer Engineering</span> and have
            hands-on experience developing scalable and user-friendly
            applications.
            <br />
            <br />
            My primary tech stack includes{" "}
            <span className="purple">
              React.js, Node.js, Express.js, MongoDB, and React Native
            </span>
            . I enjoy creating efficient backend systems, responsive user
            interfaces, and real-time applications.
            <br />
            <br />
            Outside of coding, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <FaHandPointRight className="mx-3" /> Building Personal Projects 🚀
            </li>
            <li className="about-activity">
              <FaHandPointRight className="mx-3" /> Exploring New Technologies 💡
            </li>
            <li className="about-activity">
              <FaHandPointRight className="mx-3" /> Playing Games 🎮
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }} className="text-center">
            "Turning ideas into scalable digital experiences."
          </p>

          {/* <footer className="blockquote-footer">Sumit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
