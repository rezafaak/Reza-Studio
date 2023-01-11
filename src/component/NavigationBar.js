import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#" className="brand-fak">REZAFAK STUDIO</Navbar.Brand>
                <Nav>
                <Nav.Link href="#trending" className="brand-fak">TRENDING</Nav.Link>
                <Nav.Link href="#superhero" className="brand-fak">SUPERHERO</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;