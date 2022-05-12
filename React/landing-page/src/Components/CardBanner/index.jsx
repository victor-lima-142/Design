import { Card, Col, Row, Container } from 'react-bootstrap';
import './CardBanner.css';
import data from './data';

export default function CardBanner() {
    return (
        <Container fluid className="container-card-banner-info">
            <Row className={`row-card-banner`}>
                {data.map((card, index) => {
                    return (<Col key={index} xl={4} md={4} sm={12} xs={12} className={`col-banner p-0`}>
                        {renderCard(card)}
                    </Col>);
                })}
            </Row>
        </Container>
    )
}

function renderCard({ title, icon, body }) {
    return (
        <Card className={"text-center card-banner h-100"}>
            <Card.Header className={`border-0 bg-transparent`}>
                <Card.Title className={`p-1 m-0`}>{title}</Card.Title>
                <div className={"icon-card-header bg-light bg-gradient border shadow-sm border-3 border-dark"}>
                    {icon}
                </div>
            </Card.Header>
            <Card.Body className={`p-1 m-0`}>
                {body}
            </Card.Body>
        </Card>
    );
}