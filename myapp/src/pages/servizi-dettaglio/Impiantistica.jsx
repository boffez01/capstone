import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Impiantistica = () => {
  return (
    <div className="servizio-dettaglio-page py-5">
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <h1 className="mb-4">Impiantistica Industriale</h1>
            <p className="lead mb-5">
              Progettiamo e realizziamo impianti industriali completi, dalla fase concettuale alla messa in funzione.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <img src="/images/servizi/progettazione.jpg" alt="Progettazione Impianti" className="img-fluid rounded shadow-lg" />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h3>Soluzioni Integrate e Chiavi in Mano</h3>
            <p>
              Offriamo un servizio completo per la realizzazione di nuovi impianti o l'aggiornamento di quelli esistenti. La nostra expertise copre tutti gli aspetti, dall'ingegneria di dettaglio alla fornitura e installazione di macchinari e sistemi.
            </p>
            <ul>
              <li>Ingegneria di processo e di dettaglio.</li>
              <li>Fornitura e installazione di macchinari e attrezzature.</li>
              <li>Integrazione di sistemi e automazione.</li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center flex-row-reverse mb-5">
          <Col md={6}>
            <img src="/images/servizi/controllo.jpg" alt="Messa in Funzione Impianti" className="img-fluid rounded shadow-lg" />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h3>Messa in Funzione e Supporto Continuo</h3>
            <p>
              Il nostro impegno non si ferma all'installazione. Seguiamo ogni fase della messa in funzione, offrendo test, collaudi e formazione del personale. Il nostro supporto tecnico è disponibile per garantire l'efficienza continua dell'impianto.
            </p>
            <ul>
              <li>Test e collaudi funzionali.</li>
              <li>Formazione del personale operativo.</li>
              <li>Assistenza tecnica e manutenzione post-vendita.</li>
            </ul>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <h2>Realizza il Tuo Impianto del Futuro</h2>
            <p className="lead">Parla con i nostri ingegneri per trasformare la tua visione in realtà.</p>
            <Button as={Link} to="/contatti" variant="primary" size="lg" className="px-5 py-3 mt-3">
              Richiedi una Consulenza
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Impiantistica;