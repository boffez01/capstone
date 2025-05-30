import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Importa useLocation e useNavigate
import { FaUserAlt, FaSignOutAlt } from 'react-icons/fa'; // Importa FaSignOutAlt

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Inizializza useLocation
  const navigate = useNavigate(); // Inizializza useNavigate

  // Stato per monitorare se l'utente è autenticato come admin
  // Legge il localStorage al mount e ogni volta che la location cambia (per essere reattivo)
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(!!localStorage.getItem('adminAuthToken'));

  // Aggiorna lo stato di autenticazione quando la location cambia
  useEffect(() => {
    setIsAdminAuthenticated(!!localStorage.getItem('adminAuthToken'));
  }, [location.pathname]); // Dipende dal cambio di path per ri-controllare il token

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthToken'); // Rimuove il token
    setIsAdminAuthenticated(false); // Aggiorna lo stato per far cambiare il link nella navbar
    navigate('/admin/login'); // Reindirizza alla pagina di login
  };

  // Determina se il link "Accedi/Disconnettiti" deve essere visibile o disattivato
  // Mostra "Disconnettiti" SOLO se l'utente è autenticato E non è sulla pagina di login
  const shouldShowLogout = isAdminAuthenticated && location.pathname !== '/admin/login';

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
            

            {shouldShowLogout ? ( 
              <Nav.Link onClick={handleLogout} style={{ cursor: 'pointer' }} className="ms-lg-3">
                <FaSignOutAlt style={{ marginRight: '5px' }} /> Disconnettiti
              </Nav.Link>
            ) : ( 
              <Nav.Link as={Link} to="/admin/login" className="ms-lg-3">
                <FaUserAlt style={{ marginRight: '5px' }} /> Accedi
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;