import * as React from "react"
import { Container, Navbar, Nav, Image } from "react-bootstrap"

export default function Navigation() {
    return (
        <Navbar collapseOnSelect expand="sm" bg="transparent" fixed="top" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <Image fluid={true} width={`15%`} height={`15%`} src={require('../assets/logo.png')} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav className="me-0">
                        <Nav.Link className="me-3 ms-3" href="#features">Features</Nav.Link>
                        <Nav.Link className="me-3 ms-3" href="#pricing">Pricing</Nav.Link>
                        <Nav.Link className="me-3 ms-3" href="#pricing">Pricing</Nav.Link>
                        <Nav.Link className="me-3 ms-3" href="#pricing">Pricing</Nav.Link>
                        <Nav.Link className="me-3 ms-3" href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}