import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "5px" }}>
        Github <strong className="purple">Contributions</strong>
      </h1>
      <p style={{ paddingBottom: "20px" }}>
        I've been busy on my professional Github account 👀
      </p>
      <GitHubCalendar
        username="thelk22"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
