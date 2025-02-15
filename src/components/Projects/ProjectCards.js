import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { BsGithub } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                {'\n'}
                {'\n'}

                {props.ghLinks &&
                    props.ghLinks.map((link, index) => {
                        return (
                            <Button
                                variant="primary"
                                href={link}
                                target="_blank"
                                style={{ marginLeft: '10px' }}
                            >
                                <BsGithub /> &nbsp;
                                {index > 0 ? `GitHub ${index + 1}` : 'Github'}
                            </Button>
                        )
                    })}

                {props.pdf && (
                    <Button
                        variant="primary"
                        href={props.pdf}
                        target="_blank"
                        style={{ marginLeft: '10px' }}
                    >
                        <CgWebsite />
                        &nbsp;Paper
                    </Button>
                )}

                {props.demoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: '10px' }}
                    >
                        <CgWebsite /> &nbsp;
                        {'Demo'}
                    </Button>
                )}
            </Card.Body>
        </Card>
    )
}
export default ProjectCards
