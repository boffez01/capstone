import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/images/logo.png"
            alt="Chiarenza Impianti"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="main-navbar" />
        
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/chi-siamo">Chi Siamo</Nav.Link>
            <Nav.Link as={Link} to="/servizi">Servizi</Nav.Link>
            <Nav.Link as={Link} to="/contenitori">Contenitori</Nav.Link>
            <Nav.Link as={Link} to="/contatti">Contatti</Nav.Link>
          </Nav>
          
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
            <div className="me-md-3 mb-2 mb-md-0">
              <i className="bi bi-geo-alt me-2"></i>
              <span>Via Industriale, 11/13, 25030 Corzano BS</span>
            </div>
            <div className="me-md-3 mb-2 mb-md-0">
              <i className="bi bi-telephone me-2"></i>
              <span>+39 0309718894</span>
            </div>
            <div>
              <i className="bi bi-envelope me-2"></i>
              <span>info@chiarenzagroup.com</span>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;