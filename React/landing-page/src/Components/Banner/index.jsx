import { Button, Card } from 'react-bootstrap';
import './Banner.css'

export default function Banner() {
    return (
        <div id={`banner`}>
            <Card className={"bg-transparent border-0 w-50"} id={`card-in-banner`}>
                <Card.Header id={`card-header`} className={`shadow rounded-0`}>
                    <Card.Title className="mb-3">
                        <h1 style={{ fontWeight: 100, fontSize: 50 }}><strong>Melhor valor</strong><br /> e <strong>qualidade</strong></h1>
                    </Card.Title>
                    <Card.Subtitle>
                        <h2 style={{ fontWeight: 100, fontSize: 30 }}>Soluções inteligentes para melhor instalação da sua placa solar</h2>
                    </Card.Subtitle>
                </Card.Header>
                <section className="text-center mx-auto mt-2">
                    <Button variant={`warning`} className=' border-0 shadow bg-gradient rounded-0'>
                        Conhecer
                    </Button>
                </section>

            </Card>

        </div>
    );
}