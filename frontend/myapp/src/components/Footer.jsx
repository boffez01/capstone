import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="justify-content-between g-4">
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <img
              src="/images/logo_tech.jpeg" 
              alt="Nexustech Solutions Logo" 
              height="50"
              className="mb-3"
            />
            <p>
              Nexustech Solutions: Il tuo partner affidabile per l'eccellenza industriale, dalla progettazione all'implementazione.
            </p>
          </Col>

          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h5>Servizi</h5>
            <ListGroup variant="flush" className="bg-dark">
              <ListGroup.Item className="bg-dark text-white border-secondary">
                <Link to="/servizi/carpenteria-saldatura" className="text-white text-decoration-none">Carpenteria e Saldatura</Link>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white border-secondary">
                <Link to="/servizi/lavorazione-lamiera" className="text-white text-decoration-none">Lavorazione Lamiere</Link>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white border-secondary">
                <Link to="/servizi/manutenzione-industriale" className="text-white text-decoration-none">Manutenzione Industriale</Link>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white border-secondary">
                <Link to="/servizi/piping" className="text-white text-decoration-none">Piping e Tubazioni</Link> 
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white border-secondary">
                <Link to="/servizi/impiantistica" className="text-white text-decoration-none">Impiantistica</Link>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white border-secondary">
                <Link to="/servizi/montaggi" className="text-white text-decoration-none">Montaggi Industriali</Link> 
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col lg={4} md={12}>
            <h5>Contatti</h5>
            <address>
              <p>Via Innovazione Digitale, 42, 20124 Milano (MI)</p>
              <p>+39 02 12345678</p>
              <p>info@nexustechsolutions.com</p>
              <p>P.IVA 01234567890</p>
            </address>

            <div className="mt-3">
              <h6>Orari Ufficio</h6>
              <p>Lun-Ven: 09:00 - 13:00</p>
              <p>14:00 - 18:00</p>
            </div>
          </Col>
        </Row>

        <Row className="mt-4 pt-3 border-top border-secondary align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <small>&copy; {new Date().getFullYear()} Nexustech Solutions SRL. Tutti i diritti riservati.</small>
          </Col>
          <Col md={6} className="text-md-end">
            <Link to="/privacy" className="text-white text-decoration-none me-3">Privacy Policy</Link>
            <Link to="/termini" className="text-white text-decoration-none">Termini e Condizioni</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;