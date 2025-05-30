import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManutenzioneIndustriale = () => {
  return (
    <div className="servizio-dettaglio-page py-5">
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <h1 className="mb-4">Manutenzione Industriale</h1>
            <p className="lead mb-5">
              Massimizza l'efficienza e la durata dei tuoi impianti con i nostri servizi di manutenzione preventiva e correttiva.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <img src="/images/servizi/manutenzione.jpg" alt="Manutenzione Preventiva" className="img-fluid rounded shadow-lg" />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h3>Prevenzione e Ottimizzazione</h3>
            <p>
              Un approccio proattivo alla manutenzione è essenziale per evitare fermi macchina costosi e imprevisti. Offriamo piani di manutenzione programmata e monitoraggio costante per garantire la massima operatività dei vostri asset.
            </p>
            <ul>
              <li>Piani di manutenzione preventiva e predittiva.</li>
              <li>Ispezioni regolari e diagnosi precoce dei guasti.</li>
              <li>Ottimizzazione delle performance e riduzione dei consumi.</li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center flex-row-reverse mb-5">
          <Col md={6}>
            <img src="/images/servizi/interventi.jpg" alt="Manutenzione Correttiva" className="img-fluid rounded shadow-lg" />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h3>Interventi Rapidi e Competenti</h3>
            <p>
              In caso di guasto, i nostri tecnici specializzati sono pronti a intervenire con rapidità ed efficacia. La nostra esperienza copre un'ampia gamma di macchinari e sistemi industriali, minimizzando i tempi di inattività.
            </p>
            <ul>
              <li>Servizio di pronto intervento 24/7.</li>
              <li>Riparazione e sostituzione di componenti.</li>
              <li>Revisione e ripristino di macchinari complessi.</li>
            </ul>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <h2>Metti in Sicurezza i Tuoi Impianti</h2>
            <p className="lead">Parla con i nostri esperti per un piano di manutenzione su misura per la tua azienda.</p>
            <Button as={Link} to="/contatti" variant="primary" size="lg" className="px-5 py-3 mt-3">
              Richiedi una Consulenza
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ManutenzioneIndustriale;