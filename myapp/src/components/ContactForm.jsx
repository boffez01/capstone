import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contatti = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [oggetto, setOggetto] = useState('');
  const [messaggio, setMessaggio] = useState('');
  const [privacyAccettata, setPrivacyAccettata] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!privacyAccettata) {
      alert("Devi accettare la politica sulla privacy per inviare il messaggio.");
      return;
    }
    console.log({
      nome,
      email,
      oggetto,
      messaggio,
      privacyAccettata,
    });
    alert('Grazie! Il tuo messaggio è stato inviato con successo.');
    setNome('');
    setEmail('');
    setOggetto('');
    setMessaggio('');
    setPrivacyAccettata(false);
  };

  return (
    <div className="contatti-page py-5">
      <Container className="my-5">
        <p className="lead text-center mb-5">
          Siamo a tua disposizione per qualsiasi informazione, richiesta o preventivo.
          Compila il modulo sottostante o contattaci direttamente.
        </p>

        <Row className="g-4">
          <Col md={6}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title className="mb-4">Dove Trovarci</Card.Title>
                <div className="map-container mb-4" style={{ height: '350px', width: '100%', overflow: 'hidden', borderRadius: '8px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.779776999719!2d9.18659101594943!3d45.46542197910014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c4f7b0f1b2b9%3A0x6b8d7c2a7e7d7c2a!2sDuomo%20di%20Milano!5e0!3m2!1sit!2sit!4v1678912345678!5m2!1sit!2sit"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mappa della Nostra Sede"
                  ></iframe>
                </div>

                <Card.Title className="mb-3">I Nostri Recapiti</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <FaMapMarkerAlt className="me-2 text-primary" />
                    <strong>Indirizzo:</strong> Via Industriale, 123, 10100 Torino, Italia
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <FaPhone className="me-2 text-primary" />
                    <strong>Telefono:</strong> +39 011 1234567
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <FaEnvelope className="me-2 text-primary" />
                    <strong>Email:</strong> info@chiareza.it
                  </ListGroup.Item>
                </ListGroup>

                <Card.Title className="mt-4 mb-3">Seguici sui Social</Card.Title>
                <div className="d-flex gap-3">
                  <Button variant="outline-primary" href="http://facebook.com/tuapagina" target="_blank" aria-label="Facebook">
                    <FaFacebook />
                  </Button>
                  <Button variant="outline-primary" href="http://linkedin.com/company/tuacompagnia" target="_blank" aria-label="LinkedIn">
                    <FaLinkedin />
                  </Button>
                  <Button variant="outline-primary" href="http://instagram.com/tuaprofilo" target="_blank" aria-label="Instagram">
                    <FaInstagram />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title className="mb-4">Inviaci la Tua Richiesta</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formNome">
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci il tuo nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Indirizzo Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="La tua email migliore"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formOggetto">
                    <Form.Label>Oggetto della Richiesta</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Es: Richiesta preventivo saldatura, Informazioni impianto..."
                      value={oggetto}
                      onChange={(e) => setOggetto(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessaggio">
                    <Form.Label>Messaggio</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      placeholder="Descrivi la tua richiesta nel dettaglio..."
                      value={messaggio}
                      onChange={(e) => setMessaggio(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPrivacy">
                    <Form.Check
                      type="checkbox"
                      label={
                        <>
                          Accetto la{' '}
                          <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer">
                            Politica sulla Privacy
                          </Link>
                        </>
                      }
                      checked={privacyAccettata}
                      onChange={(e) => setPrivacyAccettata(e.target.checked)}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Invia Messaggio
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contatti;