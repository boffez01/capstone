import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Piping = () => {
  return (
    <div className="servizio-dettaglio-page py-5">
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <h1 className="mb-4">Piping e Tubazioni Industriali</h1>
            <p className="lead mb-5">
              Progettiamo, realizziamo e installiamo sistemi di tubazioni su misura per fluidi e gas, garantendo sicurezza e conformità normativa.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <img src="/images/servizi/piping.jpg" alt="Piping Design" className="img-fluid rounded shadow-lg" />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h3>Progettazione e Fabbricazione Certificata</h3>
            <p>
              I nostri sistemi di piping sono frutto di un'attenta progettazione, tenendo conto delle specifiche di processo, dei materiali e delle normative di sicurezza. La fabbricazione avviene in conformità con gli standard più rigorosi.
            </p>
            <ul>
              <li>Progettazione 2D/3D di reti di tubazioni.</li>
              <li>Scelta dei materiali e dimensionamento.</li>
              <li>Fabbricazione di prefabbricati e skids.</li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center flex-row-reverse mb-5">
          <Col md={6}>
            <img src="/images/servizi/installazione_piping.jpg" alt="Installazione Piping" className="img-fluid rounded shadow-lg" />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h3>Installazione e Manutenzione</h3>
            <p>
              Il nostro team esegue l'installazione dei sistemi di tubazioni in loco, assicurando precisione e rispetto dei tempi. Offriamo anche servizi di manutenzione per garantire l'integrità e l'efficienza a lungo termine delle vostre reti.
            </p>
            <ul>
              <li>Installazione in cantiere e collaudo.</li>
              <li>Manutenzione preventiva e correttiva su piping.</li>
              <li>Aggiornamento e modifica di impianti esistenti.</li>
            </ul>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <h2>Sistemi di Piping su Misura</h2>
            <p className="lead">Contattaci per una soluzione di tubazioni industriale all'avanguardia.</p>
            <Button as={Link} to="/contatti" variant="primary" size="lg" className="px-5 py-3 mt-3">
              Richiedi una Consulenza
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Piping;