import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contenitori = () => {
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
    },
    {
      title: "Contenitori Industriali",
      description: "Soluzioni personalizzate per lo stoccaggio di materiali solidi.",
      image: "/images/contenitori-industriali.jpg"
    },
    {
      title: "Pedane",
      description: "Pedane metalliche per movimentazione e stoccaggio merci.",
      image: "/images/pedane.jpg"
    },
    {
      title: "Contenitori per Rifiuti",
      description: "Soluzioni per la gestione dei rifiuti in cantiere.",
      image: "/images/rifiuti.jpg"
    },
    {
      title: "Armadi Metallici",
      description: "Armadi robusti per lo stoccaggio sicuro di attrezzature.",
      image: "/images/armadi.jpg"
    }
  ];

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">CONTENITORI</h1>
      
      <p className="lead text-center mb-5">
        Chiarenza Group offre una vasta gamma di contenitori metallici, vasche e armadi, 
        perfetti per organizzare aree di stoccaggio di materiali e di scarti sia solidi che liquidi.
      </p>
      
      <Row className="g-4">
        {containerTypes.map((item, index) => (
          <Col md={6} lg={4} key={index}>
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
    </Container>
  );
};

export default Contenitori;