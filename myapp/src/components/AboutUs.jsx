import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="mb-4">Chi Siamo</h2>
            <p>
              Chiarenza supporta i clienti in ogni fase del processo di produzione. Dalla progettazione alla consegna, 
              a ogni cliente viene assegnato un team di supporto dedicato per gestire senza problemi i programmi 
              attraverso la produzione.
            </p>
            <p>
              Con un team dedicato, una vasta rete di fornitori e diverse capacità, Chiarenza ha l'esperienza di 
              produzione pronta per supportarti con il tuo prossimo progetto.
            </p>
          </Col>
          <Col lg={6}>
            <img 
              src="/images/about-us.jpg" 
              alt="Lavorazione metallica" 
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;