import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center d-flex">
          <Col lg={6} md={12} className="mb-4 mb-lg-0">
            <h2 className="mb-4">La Nostra Visione</h2>
            <p>
              In **NexusTech Solutions**, trasformiamo le sfide industriali in opportunità di successo. Dalla concezione più audace alla realizzazione più complessa, siamo il tuo partner strategico in ogni fase del percorso produttivo. Ogni progetto è un'espressione del nostro impegno, gestito con dedizione da un team esperto e multidisciplinare, garantendo risultati impeccabili e superando le aspettative.
            </p>
            <p>
              Con una vasta rete di fornitori certificati e competenze consolidate in diverse aree chiave – dalla precisione della carpenteria metallica all'avanguardia dell'impiantistica industriale – NexusTech Solutions è pronta a supportare la tua prossima grande idea. La nostra esperienza è la tua garanzia di innovazione, efficienza e qualità superiore, progettata per far progredire la tua azienda nel panorama industriale moderno.
            </p>
          </Col>
          <Col lg={6} md={12}>
            <img
              src="/images/foto_tecnici.jpg" 
              alt="Ingegneria Industriale"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;