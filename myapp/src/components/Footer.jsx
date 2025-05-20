import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <img 
              src="/images/logo-white.png" 
              alt="Chiarenza Impianti" 
              height="50"
              className="mb-3"
            />
            <p>
              Con un team dedicato, una vasta rete di fornitori e diverse capacità, Chiarenza ha l'esperienza di 
              produzione pronta per supportarti con il tuo prossimo progetto.
            </p>
          </Col>
          
          <Col lg={4} className="mb-4 mb-lg-0">
            <h5>Servizi</h5>
            <ListGroup variant="flush" className="bg-dark">
              <ListGroup.Item className="bg-dark text-white border-secondary">
                <Link to="/servizi" className="text-white text-decoration-none">Carpenteria e Saldatura</Link>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white border-secondary">
                <Link to="/servizi" className="text-white text-decoration-none">Lavorazione Lamiera</Link>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white border-secondary">
                <Link to="/servizi" className="text-white text-decoration-none">Manutenzione Industriale</Link>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white border-secondary">
                <Link to="/servizi" className="text-white text-decoration-none">Impiantistica</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          
          <Col lg={4}>
            <h5>Contatti</h5>
            <address>
              <p>Via Industriale 11/13, Corzano (BS)</p>
              <p>+39 0309718894</p>
              <p>info@chiarenzagroup.com</p>
              <p>P.IVA 03984770986</p>
            </address>
            
            <div className="mt-3">
              <h6>Orari Ufficio</h6>
              <p>Lun-Ven: 08:00 - 12:00 / 13:30 - 17:30</p>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-4 pt-3 border-top border-secondary">
          <Col md={6} className="mb-3 mb-md-0">
            <small>&copy; {new Date().getFullYear()} Chiarenza Impianti SRL. Tutti i diritti riservati.</small>
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