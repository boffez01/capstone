import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LavorazioneLamiera = () => {
  return (
    <div className="servizio-dettaglio-page py-5">
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <h1 className="mb-4">Lavorazione Lamiera</h1>
            <p className="lead mb-5">
              Trasformiamo lamiere grezze in componenti di precisione, offrendo soluzioni su misura per ogni esigenza industriale.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <img src="/images/servizi/puntoratura.jpg" alt="Taglio Lamiera" className="img-fluid rounded shadow-lg" />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h3>Taglio, Piegatura e Punzonatura di Precisione</h3>
            <p>
              Con macchinari all'avanguardia e personale altamente specializzato, eseguiamo lavorazioni su lamiere di diversi materiali e spessori. Dalla prototipazione alla produzione in serie, garantiamo risultati impeccabili e massima efficienza.
            </p>
            <ul>
              <li>Taglio laser e al plasma ad alta definizione.</li>
              <li>Piegatura CNC per forme complesse.</li>
              <li>Punzonatura e stampaggio per produzioni veloci.</li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center flex-row-reverse mb-5">
          <Col md={6}>
            <img src="/images/servizi/finiture.jpg" alt="Controllo Qualità Lamiera" className="img-fluid rounded shadow-lg" />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h3>Finiture e Assemblaggio</h3>
            <p>
              Oltre alla lavorazione primaria, offriamo servizi di finitura superficiale, saldatura e assemblaggio, consegnando componenti pronti per l'integrazione nei vostri sistemi. La qualità è la nostra priorità in ogni fase del processo.
            </p>
            <ul>
              <li>Saldatura e giunzione dei componenti in lamiera.</li>
              <li>Trattamenti superficiali e verniciatura.</li>
              <li>Assemblaggio di sottogruppi e strutture complesse.</li>
            </ul>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <h2>Affida la Tua Lamiera a Esperti</h2>
            <p className="lead">Contattaci per una consulenza o un preventivo personalizzato sui nostri servizi di lavorazione lamiera.</p>
            <Button as={Link} to="/contatti" variant="primary" size="lg" className="px-5 py-3 mt-3">
              Richiedi un Preventivo
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LavorazioneLamiera;