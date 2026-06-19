import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCode,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";

function Experience() {
  return (
    <Container fluid className="about-section" id="experience">
      <Container>
        <div className="section-divider">
          <span>
            {" "}
            Professional <strong className="purple">Experience</strong>
          </span>
        </div>

        <Row className="justify-content-center">
          <Col lg={9}>
            <div className="experience-card">
              <div className="experience-header">
                <div className="experience-info">
                  <h3 className="experience-role">
                    <FaBriefcase className="purple me-2" />
                    Software Developer Intern
                  </h3>

                  <a
                    href="https://cronicodigital.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-company"
                  >
                    Cronico Digital Private Limited
                  </a>
                </div>

                <span className="experience-badge">Aug 2025 - Jan 2026</span>
              </div>

              <div className="experience-meta">
                <span>
                  <MdWorkspacePremium style={{ marginBottom: "5px" }} />{" "}
                  Internship
                </span>
                <span>
                  <FaCalendarAlt style={{ marginBottom: "5px" }} /> 6 months
                </span>
                <span>
                  <FaMapMarkerAlt style={{ marginBottom: "5px" }} /> On-Site
                </span>
              </div>

              <hr />

              <h4 className="purple mb-4">Projects Worked On</h4>

              {/* CRM */}
              <div className="project-highlight">
                <FaCode className="project-icon" />
                <div>
                  <h5>CRM Application</h5>
                  <p>
                    Contributed to the development of a Customer Relationship
                    Management system by building UI components, implementing &
                    integrating APIs, and improving user workflows.
                  </p>
                </div>
              </div>

              {/* Landscape */}
              <div className="project-highlight">
                <FaCode className="project-icon" />
                <div>
                  <h5>Landscape Management Project</h5>
                  <p>
                    Worked on a web application and mobile application for
                    managing landscape operations, project tracking, customer
                    records, and service management.
                  </p>
                </div>
              </div>

              {/* Landing Pages */}
              <div className="project-highlight">
                <FaCode className="project-icon" />
                <div>
                  <h5>Landing Pages & SPA Websites</h5>
                  <p>
                    Designed and developed responsive landing pages and
                    single-page applications with a focus on performance, user
                    experience, and mobile compatibility.
                  </p>
                </div>
              </div>

              <hr />

              <h5 className="purple mb-3">Technologies Used</h5>

              <div className="tech-stack">
                JavaScript • React.js • React Native • Bootstrap • Node.js •
                Express.js • MySQL • Sequelize • XAMPP • Git • GitHub • REST
                APIs
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
