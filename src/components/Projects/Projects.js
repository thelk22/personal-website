import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import chatify from '../../Assets/Projects/chatify.png'
import Particle from '../Particle'
import ProjectCard from './ProjectCards'

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Projects </strong>
                </h1>
                <p style={{ color: 'white' }}>Feature coming soon.</p>
                <Row
                    style={{ justifyContent: 'center', paddingBottom: '10px' }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatify}
                            isBlog={false}
                            title="Coming Soon"
                            description="Project coming soon."
                            ghLink="https://github.com/thelk22?tab=repositories"
                            demoLink="https://github.com/thelk22?tab=repositories"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Projects
