import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaUserAlt, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(!!localStorage.getItem('adminAuthToken'));

  useEffect(() => {
    const handleStorageChange = () => {
        setIsAdminAuthenticated(!!localStorage.getItem('adminAuthToken'));
    };

    window.addEventListener('storage', handleStorageChange);
    setIsAdminAuthenticated(!!localStorage.getItem('adminAuthToken'));

    return () => {
        window.removeEventListener('storage', handleStorageChange);
    };
  }, [location.pathname]);

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
    localStorage.removeItem('adminAuthToken');
    setIsAdminAuthenticated(false);
    navigate('/admin/login');
  };

  const shouldShowAdminArea = location.pathname !== '/admin/login';

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
          <Nav className="ms-auto me-0 align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/chi-siamo">Chi Siamo</Nav.Link>

            <NavDropdown title="Servizi" id="servizi-nav-dropdown" menuVariant="dark">
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

            {shouldShowAdminArea && (
              isAdminAuthenticated ? (
                <NavDropdown
                  title={<FaUserAlt title="Area Amministratore" />}
                  id="admin-nav-dropdown"
                  align="end"
                  className="ms-lg-3"
                  menuVariant="dark"
                >
                  <NavDropdown.Item as={Link} to="/admin/dashboard">
                    <FaTachometerAlt className="me-2" />
                    Pannello Admin
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    <FaSignOutAlt className="me-2" />
                    Disconnettiti
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to="/admin/login" className="ms-lg-3">
                  <FaUserAlt className="me-2" />
                  Accedi
                </Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;