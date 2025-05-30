import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Certifications from '../../components/Certifications'; 

const CarpenteriaSaldatura = () => {
  return (
    <div className="servizio-dettaglio-page py-5">
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <h1 className="mb-4">Carpenteria e Saldatura</h1>
            <p className="lead mb-5">
              La nostra esperienza nella carpenteria metallica e saldatura è la base per la realizzazione di strutture robuste e precise, essenziali per ogni settore industriale.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <img src="/images/servizi/metallo_carpenteria_finale.jpg" alt="Carpenteria e Saldatura" className="img-fluid rounded shadow-lg" />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h3>Precisione e Affidabilità nel Metallo</h3>
            <p>
              Offriamo servizi completi di carpenteria metallica, dalla progettazione alla realizzazione, utilizzando le più avanzate tecniche di taglio, piegatura e assemblaggio. Le nostre strutture sono progettate per durare, garantendo la massima sicurezza e conformità agli standard internazionali.
            </p>
            <ul>
              <li>Realizzazione di strutture portanti su misura.</li>
              <li>Produzione di componenti metallici complessi.</li>
              <li>Lavorazioni di precisione su diversi tipi di metalli.</li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center flex-row-reverse mb-5">
          <Col md={6}>
            <img src="/images/servizi/saldatura_personalizzata.jpg" alt="Saldatura Speciale" className="img-fluid rounded shadow-lg" />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h3>Saldature Certificate e Personalizzate</h3>
            <p>
              I nostri saldatori sono altamente qualificati e certificati per operare su un'ampia gamma di materiali e processi, inclusi TIG, MIG/MAG e saldatura ad arco. Ogni giunzione è eseguita con la massima cura per assicurare integrità strutturale e finitura impeccabile.
            </p>
            <ul>
              <li>Saldatura su acciaio al carbonio, inox, alluminio.</li>
              <li>Riparazioni strutturali e rinforzi.</li>
              <li>Controllo qualità e test di integrità.</li>
            </ul>
          </Col>
        </Row>

        <Certifications /> 

        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <h2>Pronto per il Tuo Progetto?</h2>
            <p className="lead">Contattaci oggi stesso per discutere le tue esigenze e ricevere un preventivo personalizzato.</p>
            <Button as={Link} to="/contatti" variant="primary" size="lg" className="px-5 py-3 mt-3">
              Richiedi un Preventivo
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CarpenteriaSaldatura;