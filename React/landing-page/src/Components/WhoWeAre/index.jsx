import { Card, Col, Container, Image, Row } from "react-bootstrap";
import './WhoWeAre.css'

export default function WhoWeAre() {
    return (
        <Container fluid className={'who-we-are-container'}>
            <Row className={`align-items-center`}>
                <Col md={6} sm={12} xs={12} lg={6}>
                    <Image src={require('../../assets/panels-figure.png')} className='panels-figure'/>
                </Col>
                <Col md={6} sm={12} xs={12} lg={6}>
                    <Card className={`border-0 rounded-0 card-who-we-are`}>
                        <div className={`border-0 rounded-0 text-center mb-0 pb-0`}><Card.Title><h1>Who We Are</h1></Card.Title></div>
                        <Card.Body className='who-we-are-text-section mt-0 pt-0 bg-gradient'>
                            A Infinitus Solar é uma empresa habilitada e qualificada para desenvolver projetos, instalações e manutenções de sistemas de energia solar.
                            A produção da energia solar alcança ótimos benefícios tanto para a natureza quanto para famílias que pagam tão caro pela energia elétrica fornecida pelas concessionárias.
                            Entendendo essa realidade a Infinitus Solar oferece a solução: vendemos e instalamos sistemas de energia solar fotovoltaica que gera energia limpa e ilimitada.
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}