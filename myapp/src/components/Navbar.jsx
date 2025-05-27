import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { 
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`chiarenza-navbar fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/images/logo_tech.jpeg" 
            alt="NexusTech Solutions Logo"
            height="100" 
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="main-navbar" />
        
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto me-0"> 
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/chi-siamo">Chi Siamo</Nav.Link>
            
            <NavDropdown title="Servizi" id="basic-nav-dropdown" menuVariant="dark"> 
              <NavDropdown.Item as={Link} to="/servizi/carpenteria-saldatura">Carpenteria e Saldatura</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/servizi/lavorazione-lamiera">Lavorazione Lamiera</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/servizi/manutenzione-industriale">Manutenzione Industriale</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/servizi/piping">Piping</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/servizi/impiantistica">Impiantistica</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contenitori">Vendita Container</NavDropdown.Item> 
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/servizi">Tutti i Servizi</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/contenitori">Contenitori</Nav.Link> 
            <Nav.Link as={Link} to="/contatti">Contatti</Nav.Link>
            <Button as={Link} to="/contatti" variant="primary" className="ms-lg-3 py-2 px-4">
              Richiedi Preventivo
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;