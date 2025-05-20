import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContainersSection = () => {
  const containerTypes = [
    {
      title: "Benne Ribaltabili",
      description: "Contenitori industriali robusti per il trasporto e lo stoccaggio di materiali.",
      image: "/images/benne-ribaltabili.jpg"
    },
    {
      title: "Vasche",
      description: "Vasche metalliche per liquidi di varie dimensioni e capacità.",
      image: "/images/vasche.jpg"
    }
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">CONTENITORI</h2>
        <p className="lead text-center mb-5">
          Chiarenza Group offre una vasta gamma di contenitori metallici, vasche e armadi, perfetti per organizzare 
          aree di stoccaggio di materiali e di scarti sia solidi che liquidi.
        </p>
        
        <Row className="g-4">
          {containerTypes.map((item, index) => (
            <Col md={6} key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <Button as={Link} to="/contatti" variant="primary">
                    Richiedi informazioni
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5">
          <Button as={Link} to="/contenitori" variant="outline-primary" size="lg">
            Vai al Catalogo Completo
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ContainersSection;