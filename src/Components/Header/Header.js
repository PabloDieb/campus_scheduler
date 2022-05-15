import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logout } from '../../Services/Firebase';
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const nav = useNavigate();
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
        <Navbar.Brand href="home">MyIFCE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="salas" active="true">Salas</Nav.Link>
            <Nav.Link href="display" active="true">Display</Nav.Link>
            <Nav.Link href="itinerario" active="true">Itinerario</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Admin" id="collasible-nav-dropdown">
              <NavDropdown.Item href="admin/salas">Salas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => {logout(); nav("/") }}>Sair</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}