import React from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap'; 

const faqs = [
  {
    id: '1',
    question: 'Quali servizi offre NexusTech Solutions?',
    answer: 'NexusTech Solutions è specializzata in carpenteria e saldatura, lavorazione lamiera, manutenzione industriale, impiantistica, piping e tubazioni, e montaggi industriali. Offriamo soluzioni complete dalla progettazione all\'implementazione.'
  },
  {
    id: '2',
    question: 'Dove si trova la vostra sede principale?',
    answer: 'La nostra sede principale si trova in Via Innovazione Digitale, 42, 20124 Milano (MI).'
  },
  {
    id: '3',
    question: 'Offrite sopralluoghi o consulenze gratuite?',
    answer: 'Sì, siamo disponibili per consulenze gratuite e sopralluoghi per comprendere al meglio le vostre esigenze e proporre la soluzione più adatta.'
  },
  {
    id: '4',
    question: 'Come posso richiedere un preventivo?',
    answer: 'Puoi richiedere un preventivo compilando il modulo nella sezione "Contatti" sul nostro sito web, oppure chiamandoci direttamente al numero +39 030 9718894.'
  },
  {
    id: '5',
    question: 'Qual è la vostra esperienza nel settore?',
    answer: 'Operiamo nel settore dell\'impiantistica industriale da anni, con un team di maestranze qualificate e una vasta rete di fornitori certificati. La nostra esperienza si traduce in innovazione, efficienza e qualità superiore per ogni progetto.'
  }
];

const FaqSection = () => {
  return (
    <section className="faq-section py-5">
      <Container>
        <Card className="faq-card p-4 p-md-5 rounded-4 shadow-lg border-0">
          <Card.Body>
            <Row className="g-5 align-items-center"> 
             
              <Col lg={5} className="d-flex justify-content-center align-items-center">
                <div className="faq-illustration-wrapper text-center">
                  <img
                    src="/images/FAQ.png" 
                    alt="Domande Frequenti - Illustrazione"
                    className="img-fluid"
                    style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                  />
                </div>
              </Col>

              <Col lg={7}>
                <div className="faq-content-wrapper">
                  <h2 className="mb-2 fw-bold">Domande Frequenti</h2>
                  <p className="lead text-muted mb-4">
                    Domande che potresti avere sui nostri prodotti e servizi.
                  </p>

                  <Accordion defaultActiveKey="0" flush> 
                    {faqs.map((faq, index) => (
                      <Accordion.Item eventKey={faq.id} key={faq.id} className="mb-2">
                        <Accordion.Header>
                          <h6 className="mb-0 fw-bold">{faq.question}</h6>
                        </Accordion.Header>
                        <Accordion.Body className="text-muted">
                          {faq.answer}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default FaqSection;