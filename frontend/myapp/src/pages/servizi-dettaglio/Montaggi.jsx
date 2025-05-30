import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const Montaggi = () => {
  return (
    <div className="servizio-dettaglio-page py-5">
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <h1 className="mb-4">Montaggi Professionali</h1>
            <p className="lead mb-5">
              Offriamo servizi di montaggio professionale per strutture
              metalliche e componenti industriali, garantendo qualità e
              precisione in ogni progetto.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <img
              src="/images/servizi/montaggio_prof.jpg" 
              alt="Montaggio Strutture Metalliche"
              className="img-fluid rounded shadow-lg"
            />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h3>Montaggio Strutture Metalliche</h3>
            <p>
              Dalla carpenteria leggera a quella pesante, assembliamo strutture
              metalliche complesse con la massima attenzione ai dettagli, alla
              stabilità e alla sicurezza. La nostra esperienza garantisce un
              montaggio impeccabile.
            </p>
            <ul>
              <li>Montaggio di capannoni industriali.</li>
              <li>Assemblaggio di piattaforme e passerelle.</li>
              <li>Installazione di strutture di supporto.</li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center flex-row-reverse mb-5">
          <Col md={6}>

            <img
              src="/images/servizi/montaggio_industriale.jpg" 
              alt="Montaggio Componenti Industriali"
              className="img-fluid rounded shadow-lg"
            />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h3>Montaggio Componenti e Impianti Industriali</h3>
            <p>
              Integriamo macchinari, linee di produzione e sistemi complessi,
              assicurando la corretta installazione, allineamento e messa in
              funzione. Operiamo su diverse tipologie di componenti.
            </p>
            <ul>
              <li>Assemblaggio di macchinari e attrezzature.</li>
              <li>Montaggio di linee di produzione automatizzate.</li>
              <li>Installazione di impianti completi.</li>
            </ul>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <h2>Affidati a Esperti del Montaggio</h2>
            <p className="lead">
              Contattaci per discutere il tuo prossimo progetto di montaggio e
              scoprire come possiamo supportarti.
            </p>
            <Button
              as={Link}
              to="/contatti" 
              variant="primary"
              size="lg"
              className="px-5 py-3 mt-3"
            >
              Richiedi una Consulenza
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Montaggi;