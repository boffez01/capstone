import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="py-5 text-white"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4">Dove gli altri non arrivano noi siamo in prima linea</h1>
            <p className="lead mb-4">
              AZIENDA LEADER NELLE ATTIVITÀ DI CARPENTERIA, MANUTENZIONE E TUTTO
              CIÒ CHE RIGUARDA LA LAVORAZIONE METALLICA.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button 
                as={Link} 
                to="/contatti" 
                variant="primary" 
                size="lg"
                className="px-4 py-2"
              >
                Contatta Chiarenza
              </Button>
              <Button 
                as={Link} 
                to="/servizi" 
                variant="outline-light" 
                size="lg"
                className="px-4 py-2"
              >
                I Nostri Servizi
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <img 
              src="/images/hero-image.jpg" 
              alt="Lavorazione metallica" 
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;