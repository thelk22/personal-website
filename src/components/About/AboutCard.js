import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: 'justify' }}>
                        Hi Everyone, I am{' '}
                        <span className="purple">Luke Kirwan </span>
                        from <span className="purple"> the UK</span>
                        <br />
                        I am currently employed as a software engineer at Scyne
                        Advisory.
                        <br />
                        I have completed a BSc in Maths at the University of
                        Bath and an MSc in Fintech with Data Science at the
                        University of Bristol.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to
                        do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Sport and exercise
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Reading
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                    </ul>

                    <p style={{ color: 'rgb(155 126 172)' }}>
                        "Strive to build things that make a difference!"{' '}
                    </p>
                    <footer className="blockquote-footer">Luke</footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default AboutCard
