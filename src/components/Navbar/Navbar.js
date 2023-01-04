import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
       <>    
       <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" >Mercado-Salta</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
                <Nav.Link as={Link} to="/about">Sobre Nosotros</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>               
            </Nav>
            <Nav>
                <Nav.Link>
                <CartWidget />
                </Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        0
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
    )
}
export default NavBar