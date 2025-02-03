import { Col, Container, Row } from 'react-bootstrap'
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

function Contact() {
    return (
        <Container>
            <Row>
                <Col md={12} className="home-about-social">
                    <p>
                        Feel free to <span className="purple">connect </span>
                        with me
                    </p>
                    <ul className="home-about-social-links">
                        <li className="social-icons">
                            <a
                                href="https://github.com/thelk22"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://linkedin.com/in/luke-kirwan"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://x.com/lukeyk221?s=21&t=XgACtjHcGI6Qg27zPqQhUg"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/lukekirwan_?igsh=cnhwZHhiNXg1dmZ2&utm_source=qr"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact
