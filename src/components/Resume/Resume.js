import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import pdf from '../../Assets/../Assets/Resume-Luke_Kirwan.pdf'
import Particle from '../Particle'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

function Resume() {
    const [showDocument, setShowDocument] = useState(false)
    const [width, setWidth] = useState(1200)

    function onPassword(callback, reason) {
        function callbackProxy(password) {
            if (password === null) {
                setShowDocument(false)
            }

            callback(password)
        }
        switch (reason) {
            case 1: {
                const password = prompt(
                    'Enter the password to open this PDF file.'
                )
                callbackProxy(password)
                break
            }
            case 2: {
                const password = prompt('Invalid password. Please try again.')
                callbackProxy(password)
                break
            }
            default:
        }
    }

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />
                {!showDocument ? (
                    <Row
                        style={{
                            justifyContent: 'center',
                            position: 'relative',
                        }}
                    >
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
                ) : (
                    <Row className="resume">
                        <Document
                            file={pdf}
                            className="d-flex justify-content-center"
                            onPassword={onPassword}
                        >
                            <Page
                                pageNumber={1}
                                scale={width > 786 ? 1.7 : 0.6}
                            />
                        </Document>
                    </Row>
                )}
            </Container>
        </div>
    )
}

export default Resume
