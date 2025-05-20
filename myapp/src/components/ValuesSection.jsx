import { Container, Row, Col } from 'react-bootstrap';

const ValuesSection = () => {
  const values = [
    {
      title: "Integrità",
      content: "Mettiamo l'integrità al centro di tutto ciò che facciamo. Affrontiamo ogni progetto con una combinazione di passione, precisione e rispetto per i nostri clienti."
    },
    {
      title: "Automazione 4.0",
      content: "La nostra carpenteria industriale si distingue grazie all'industria 4.0. Utilizziamo tecnologie intelligenti come l'IoT e l'automazione per ottimizzare la produzione."
    },
    {
      title: "Sostenibilità",
      content: "Riduciamo gli sprechi e ottimizziamo l'uso delle risorse, contribuendo alla riduzione dell'impatto ambientale."
    },
    {
      title: "Sicurezza",
      content: "Investiamo nella formazione per sensibilizzare i dipendenti sulle norme di sicurezza e dotarli delle competenze necessarie."
    }
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="g-4">
          {values.map((value, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="h-100 p-4 bg-white rounded shadow-sm">
                <h3 className="h4 mb-3">{value.title}</h3>
                <p>{value.content}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ValuesSection;