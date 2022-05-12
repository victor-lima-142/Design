import * as React from "react"
import { Container, Navbar, Nav, Image, Offcanvas, Button } from "react-bootstrap"
import "./Navigation.css"
export default function Navigation() {
    return <>
        <Navbar key={`sm`} fixed={`top`} bg="transparent" expand={`sm`} id={`my-nav`} variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <Image fluid={true} width={`15%`} height={`15%`} src={require('../../assets/logo.png')} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`navigation-offcanvas`} />
                <Navbar.Offcanvas id={`navigation-offcanvas`} placement="start" >
                    <Offcanvas.Header id={`offcanvas-nav-header`} closeButton />
                    <Offcanvas.Body id={`offcanvas-nav-body`}>
                        <Nav className="justify-content-end bg-transparent flex-grow-1 pe-3">
                            <Nav.Link className="offcanvas-link-nav" href="#features">Features</Nav.Link>
                            <Nav.Link className="offcanvas-link-nav" href="#pricing">Pricing</Nav.Link>
                            <Nav.Link className="offcanvas-link-nav" href="#pricing">Pricing</Nav.Link>
                            <Nav.Link className="offcanvas-link-nav" href="#pricing">Pricing</Nav.Link>
                            <Nav.Link className="offcanvas-link-nav" href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </>
}