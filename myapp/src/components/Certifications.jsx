import { Container, Row, Col, Card } from 'react-bootstrap';

const Certifications = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">I nostri certificati di qualità</h2>
        <Row className="justify-content-center">
          <Col md={6} lg={4} className="mb-4">
            <Card className="h-100 text-center p-4">
              <Card.Body>
                <div className="display-4 mb-3">ISO 3834</div>
                <Card.Text>
                  Certificazione che attesta la nostra competenza nel settore della saldatura.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card className="h-100 text-center p-4">
              <Card.Body>
                <div className="display-4 mb-3">ISO 9001</div>
                <Card.Text>
                  Sistema di Gestione di Qualità per la prefabbricazione e saldatura di carpenteria metallica.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Certifications;