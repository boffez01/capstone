import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="hero text-white d-flex align-items-center text-start"
      style={{
        backgroundImage: 'url("/images/industrie1.jpg")', 
      }}
    >
      <div className="hero-overlay"></div>
      <Container className="hero-content py-5">
        <Row className="justify-content-start"> 
          <Col lg={10} className="offset-lg-1"> 
            <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInDown">
              INNOVAZIONE E PRECISIONE <br /> PER OGNI SETTORE
            </h1>
            <p className="lead mb-5 animate__animated animate__fadeInUp">
              NexusTech Solutions: Il tuo partner affidabile per l'eccellenza industriale, dalla progettazione all'implementazione.
            </p>
            <div className="d-flex flex-wrap gap-3 animate__animated animate__fadeInUp"> 
              <Button 
                as={Link} 
                to="/contatti" 
                variant="primary" 
                size="lg"
                className="px-5 py-3"
              >
                CONTATTACI
              </Button>
              <Button 
                as={Link} 
                to="/chi-siamo" 
                variant="outline-light" 
                size="lg"
                className="px-5 py-3"
              >
                SCOPRI DI PIÙ
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;