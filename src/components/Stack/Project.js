import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiNodejs, DiNpm, DiReact } from "react-icons/di";
import { SiJavascript, SiVercel } from "react-icons/si";

function Project() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
        color: "white",
      }}
    >
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Project;
