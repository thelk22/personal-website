import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import pdf from '../../Assets/Resume-Luke_Kirwan.pdf'
import Particle from '../Particle'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

function Resume() {
    const [showDocument, setShowDocument] = useState(false)
    const [width, setWidth] = useState(1200)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    return (
        <Container fluid className="resume-section">
            <Particle />
            <h1 className="project-heading">
                My <strong className="purple">Resume </strong>
            </h1>
            {!showDocument ? (
                <>
                    <Row>
                        <p className="home-about-body">
                            My resume contains personal information so I have it
                            password protected. <br /> <br /> Please contact me
                            on one of the listed channels and I will provide
                            access!
                            <br />
                            <br />
                        </p>
                    </Row>
                    <Row>
                        <Button
                            variant="primary"
                            onClick={() => {
                                setShowDocument(true)
                            }}
                            style={{ maxWidth: '250px' }}
                        >
                            &nbsp;Enter password
                        </Button>
                    </Row>
                </>
            ) : (
                <Row className="resume">
                    <Document
                        file={pdf}
                        className="d-flex justify-content-center"
                    >
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </Row>
            )}
        </Container>
    )
}

export default Resume
