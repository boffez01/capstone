import { Container, Row, Col } from 'react-bootstrap';

const Stats = () => {
  const stats = [
    { value: "1200+", label: "Commesse" },
    { value: "17500t", label: "Acciaio lavorato" },
    { value: "165+", label: "Dipendenti" },
    { value: "120+", label: "Clienti nel mondo" }
  ];

  return (
    <section className="py-5 bg-primary text-white">
      <Container>
        <Row className="g-4 text-center">
          {stats.map((stat, index) => (
            <Col sm={6} md={3} key={index}>
              <div className="p-3">
                <h3 className="display-4 fw-bold mb-2">{stat.value}</h3>
                <p className="mb-0">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats;