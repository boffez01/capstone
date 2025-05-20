import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Carpenteria e Saldatura",
      description: "Realizziamo strutture metalliche su misura con precisione artigianale e attrezzature all'avanguardia."
    },
    {
      title: "Lavorazione Lamiera",
      description: "Taglio, piegatura e saldatura di lamiere in acciaio per ogni tipo di applicazione industriale."
    },
    {
      title: "Manutenzione Industriale",
      description: "Assistenza continua per impianti produttivi. Interventi rapidi e programmabili per massima efficienza."
    },
    {
      title: "Impiantistica",
      description: "Progettazione e installazione di impianti industriali completi, con soluzioni personalizzate."
    },
    {
      title: "Montaggi",
      description: "Servizi di montaggio professionale per strutture metalliche e componenti industriali."
    },
    {
      title: "Piping",
      description: "Realizzazione e installazione di sistemi di tubazioni industriali su misura."
    }
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5">I Nostri Servizi</h2>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="p-4">
                  <Card.Title className="mb-3">{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <Link to="/contatti" className="btn btn-outline-primary">
                    Richiedi informazioni
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;