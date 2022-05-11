import { useState } from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import './CardBanner.css'

export default function CardBanner(): JSX.Element {
    const [screenW, setScreenW] = useState(window.innerWidth);
    window.addEventListener("resize", () => { setScreenW(window.innerWidth) })
    return (
        <Container>
            <Row className={`row-card-banner`}>
                <Col xl={4} md={4} sm={12} xs={12} className={`col-banner p-0`}>
                    <Card className={"text-center p-1 border-0 card-banner"}>
                        <Card.Title className={`p-1 m-0`}>{`Adress`}</Card.Title>
                        <Card.Body className={`p-1 m-0`}>
                            <span style={{ fontSize: 20 }} className={`d-block w-100`}><strong>Monday, Wednesday:</strong> 8:00 AM to 5:30 PM</span>
                            <span style={{ fontSize: 20 }} className={`d-block w-100`}><strong>Thursday, Friday:</strong> 9:00 AM to 6:00 PM</span>
                            <span style={{ fontSize: 20 }} className={`d-block w-100`}><strong>Saturday, Sunday:</strong> Closed</span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={4} sm={12} xs={12} className={`col-banner p-0`}>
                    <Card className={"text-center p-1 border-0 card-banner"}>
                        <Card.Title className={`p-1 m-0`}>{`Adress`}</Card.Title>
                        <Card.Body className={`p-1 m-0`}>
                            <span style={{ fontSize: 20 }} className={`d-block w-100`}><strong>Monday, Wednesday:</strong> 8:00 AM to 5:30 PM</span>
                            <span style={{ fontSize: 20 }} className={`d-block w-100`}><strong>Thursday, Friday:</strong> 9:00 AM to 6:00 PM</span>
                            <span style={{ fontSize: 20 }} className={`d-block w-100`}><strong>Saturday, Sunday:</strong> Closed</span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={4} sm={12} xs={12} className={`col-banner p-0`}>
                    <Card className={"text-center p-1 border-0 card-banner"}>
                        <Card.Title className={`p-1 m-0`}>{`Adress`}</Card.Title>
                        <Card.Body className={`p-1 m-0`}>
                            <span style={{ fontSize: 20 }} className={`d-block w-100`}><strong>Monday, Wednesday:</strong> 8:00 AM to 5:30 PM</span>
                            <span style={{ fontSize: 20 }} className={`d-block w-100`}><strong>Thursday, Friday:</strong> 9:00 AM to 6:00 PM</span>
                            <span style={{ fontSize: 20 }} className={`d-block w-100`}><strong>Saturday, Sunday:</strong> Closed</span>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}