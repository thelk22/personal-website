import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import folioPdf from '../../Assets/Projects/Folio.pdf'
import folio from '../../Assets/Projects/Folioweb.png'
import mscPdf from '../../Assets/Projects/MSc_Thesis.pdf'
import ban from '../../Assets/Projects/bitcoin-network.png'
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
                            imgPath={ban}
                            isBlog={false}
                            title="Using Bitcoin’s Transaction Network to Determine Price Trends"
                            description="My MSc thesis, written whilst studying at the University of Bristol. The paper explores the relationship between the structure of the Bitcoin transaction network and the price of Bitcoin."
                            ghLinks={[
                                'https://github.com/thelk22/bitcoin-network-analysis',
                            ]}
                            pdf={mscPdf}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={folio}
                            isBlog={false}
                            title="Decentralised index funds"
                            description="Built an app called 'Folio' during the MSc group project whilst studying at the University of Bristol. Folio is a decentralised application (React front-end + Ethereum smart contract back-end) that enables users to create and trade tokens that track the price of a 'portfolio' of other tokens."
                            ghLinks={[
                                'https://github.com/thelk22/folio-dapp-contracts',
                                'https://github.com/thelk22/folio-dapp-interface',
                            ]}
                            pdf={folioPdf}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatify}
                            isBlog={false}
                            title="Coming Soon"
                            description="Other projects coming soon."
                            ghLinks={[
                                'https://github.com/thelk22?tab=repositories',
                            ]}
                            demoLink="https://github.com/thelk22?tab=repositories"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Projects
