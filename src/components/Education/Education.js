import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Education() {
  return (
    <Container fluid className="education-section">
      <Container>
        <div className="section-divider">
          <span> My <strong className="purple">Education</strong></span>
        </div>

        <div className="education-timeline">
          {/* Bachelor's */}
          <Row className="justify-content-center mb-5">
            <Col md={8}>
              <div className="education-card">
                <span className="education-year">2022 - 2026</span>
                <h3>Bachelor of Technology (B.Tech)</h3>
                <h5 className="purple">GF's Godavari College of Engineering, Jalgaon</h5>
                <span>(Affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere.)</span><br />
                <span className="education-score">
                  CGPA: 7.83 / 10
                </span>
              </div>
            </Col>
          </Row>

          {/* HSC */}
          <Row className="justify-content-center mb-5">
            <Col md={8}>
              <div className="education-card">
                <span className="education-year">2020 - 2022</span>
                <h3>Higher Secondary Certificate (HSC)</h3>
                <h5 className="purple">J. E. School & Jr. College, Muktainagar</h5>
                <span className="education-score">
                  Percentage: 83.83%
                </span>
              </div>
            </Col>
          </Row>

          {/* SSC */}
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="education-card">
                <span className="education-year">2020</span>
                <h3>Secondary School Certificate (SSC)</h3>
                <h5 className="purple">J. E. School & Jr. College, Muktainagar</h5>
                <span className="education-score">
                  Percentage: 87.20%
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Education;