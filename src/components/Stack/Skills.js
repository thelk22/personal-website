import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { DiDjango, DiJava, DiNodejs, DiPython, DiReact } from 'react-icons/di'
import { FaAws } from 'react-icons/fa'
import {
    SiExpress,
    SiJavascript,
    SiKubernetes,
    SiMicrosoftazure,
    SiPostgresql,
    SiRedis,
    SiSpringboot,
    SiTypescript,
} from 'react-icons/si'
import { TbSql } from 'react-icons/tb'

function Skills() {
    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJavascript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <TbSql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiDjango />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiExpress />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSpringboot />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedis />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaAws />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMicrosoftazure />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKubernetes />
            </Col>
        </Row>
    )
}

export default Skills
