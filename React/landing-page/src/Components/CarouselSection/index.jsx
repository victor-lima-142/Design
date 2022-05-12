import { Carousel } from "react-bootstrap"
import './CarouselSection.css'

export default function CarouselSection() {
    const images = [
        require('../../assets/1.png'),
        require('../../assets/2.png'),
        require('../../assets/3.png'),
        require('../../assets/4.png')
    ]
    return (
        <Carousel fade controls={false} className={'my-carousel'} indicators={false} interval={4000}>
            {images.map((image, index) => {
                return (
                    <Carousel.Item>
                        <img className="d-block w-100" src={image} key={index} alt="First slide" />
                        <Carousel.Caption>
                            <h5>Inove,</h5>
                            <h3>Escolha o melhor!</h3>
                            <p>Com os custos de energia subindo, a energia solar é a alternativa inteligente</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
}