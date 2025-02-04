import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import pdf from '../../Assets/../Assets/MSc_Thesis.pdf'
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
                <Row
                    style={{ justifyContent: 'center', paddingBottom: '10px' }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatify}
                            isBlog={false}
                            title="Using Bitcoin’s Transaction Network to Determine Price Trends"
                            description="My MSc thesis, written whilst studying at the University of Bristol. The paper explores the relationship between the structure of the Bitcoin transaction network and the price of Bitcoin."
                            ghLink="https://github.com/thelk22/bitcoin-network-analysis"
                            // demoLink="https://github.com/thelk22?tab=repositories"
                            pdf={pdf}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatify}
                            isBlog={false}
                            title="Coming Soon"
                            description="Other projects coming soon."
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
