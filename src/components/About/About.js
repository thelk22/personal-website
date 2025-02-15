import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Tilt from 'react-parallax-tilt'
import headshot from '../../Assets/headshot.png'
import Particle from '../Particle'
import Skills from '../Stack/Skills'
import Tools from '../Stack/Tools'
import Github from './Github'

function About() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: '2.6em' }}>
                            LET ME <span className="purple"> INTRODUCE </span>{' '}
                            MYSELF
                        </h1>
                        <p className="home-about-body">
                            🌟 &nbsp;&nbsp; I have many interests! Some clues...
                            &nbsp;&nbsp; 📖&nbsp; ⚽&nbsp; 🚲&nbsp; ✈️&nbsp;
                            🏰&nbsp; 🌱&nbsp; 🚀
                            <br />
                            <br />
                            📚 &nbsp;&nbsp; I have a BSc in Mathematics and an
                            MSc in Fintech with Data Science.
                            <br />
                            <br />
                            💼 &nbsp;&nbsp; Now I'm building a career solving
                            problems.
                            <br />
                            <br />
                            🛠️ &nbsp;&nbsp; My favourite tech stack is
                            <i>
                                <b className="purple">
                                    {' '}
                                    React, Node.js/Python, and AWS.{' '}
                                </b>
                            </i>
                            <br />
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={headshot}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                </Row>

                <h1 className="project-heading">
                    Professional <strong className="purple">Skillset </strong>
                </h1>

                <Skills />

                <h1 className="project-heading">
                    <strong className="purple">Tools</strong> I use
                </h1>
                <Tools />

                <Github />
            </Container>
        </Container>
    )
}

export default About
