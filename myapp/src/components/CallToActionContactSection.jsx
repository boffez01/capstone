import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaClock, FaCalendarAlt, FaChevronRight } from 'react-icons/fa'; // Icone aggiornate per un look più moderno

const CallToActionContactSection = () => {
  const [nominativo, setNominativo] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [servizio, setServizio] = useState('');
  const [messaggio, setMessaggio] = useState('');

  const officeHours = [
    { day: 'Lunedì', hours: '08:00 - 12:30 / 13:30 - 17:30', isOpen: true },
    { day: 'Martedì', hours: '08:00 - 12:30 / 13:30 - 17:30', isOpen: true },
    { day: 'Mercoledì', hours: '08:00 - 12:30 / 13:30 - 17:30', isOpen: true },
    { day: 'Giovedì', hours: '08:00 - 12:30 / 13:30 - 17:30', isOpen: true },
    { day: 'Venerdì', hours: '08:00 - 12:30 / 13:30 - 17:30', isOpen: true },
    { day: 'Sabato', hours: '08:00 - 12:00', isOpen: true },
    { day: 'Domenica', hours: 'Chiuso', isOpen: false },
  ];

  const servicesOptions = [
    { value: '', label: 'Seleziona un servizio per la tua richiesta' }, 
    { value: 'carpenteria-saldatura', label: 'Carpenteria e Saldatura' },
    { value: 'lavorazione-lamiera', label: 'Lavorazione Lamiera' },
    { value: 'manutenzione-industriale', label: 'Manutenzione Industriale' },
    { value: 'impiantistica', label: 'Impiantistica' },
    { value: 'piping', label: 'Piping e Tubazioni' },
    { value: 'montaggi', label: 'Montaggi Industriali' },
    { value: 'altro', label: 'Altro / Informazioni Generali' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nominativo, email, telefono, servizio, messaggio });
    alert('La tua richiesta è stata inviata con successo! Ti contatteremo a breve.');
    setNominativo('');
    setEmail('');
    setTelefono('');
    setServizio('');
    setMessaggio('');
  };

  return (
    <section className="contact-cta-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Parliamone!</h2>
          <p className="lead text-muted">
            Siamo pronti a offrirti soluzioni innovative e su misura per le tue esigenze industriali.
            Contattaci oggi stesso per una consulenza gratuita.
          </p>
        </div>

        <Row className="g-5">
          <Col lg={6}>
            <div className="contact-info-block p-4 rounded shadow-sm h-100 bg-white">
              <h3 className="mb-4 text-primary fw-bold">
                <FaPhoneAlt className="me-3" />
                Chiamaci Ora
              </h3>
              <a href="tel:+390309718894" className="text-decoration-none">
                <p className="display-4 fw-bold mb-4 contact-phone-number">+39 030 9718894</p>
              </a>

              <h4 className="mb-3">
                <FaClock className="me-3 text-primary" />
                Orari di Ufficio
              </h4>
              <ListGroup variant="flush" className="mb-4">
                {officeHours.map((item, index) => (
                  <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center px-0 py-2 border-bottom">
                    <span className={item.isOpen ? 'fw-bold' : 'text-muted'}>{item.day}</span>
                    <span className={item.isOpen ? '' : 'text-muted'}>
                      {item.hours}
                      {item.isOpen && (
                        <Button
                          variant="outline-primary"
                          size="sm"
                          className="ms-3 rounded-pill"
                          onClick={() => alert(`Richiesta appuntamento per ${item.day}`)}
                        >
                          <FaCalendarAlt className="me-1" /> prenota
                        </Button>
                      )}
                    </span>
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <h4 className="mb-3">Connettiti con Noi</h4>
              <div className="d-flex gap-3">
                <Button variant="outline-primary" href="http://facebook.com/tuapagina" target="_blank" aria-label="Facebook" className="rounded-circle">
                  <FaFacebookF />
                </Button>
                <Button variant="outline-primary" href="http://instagram.com/tuaprofilo" target="_blank" aria-label="Instagram" className="rounded-circle">
                  <FaInstagram />
                </Button>
                <Button variant="outline-primary" href="http://linkedin.com/company/tuacompagnia" target="_blank" aria-label="LinkedIn" className="rounded-circle">
                  <FaLinkedinIn />
                </Button>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div
              className="contact-form-block p-5 rounded shadow-sm h-100 position-relative"
              style={{
                backgroundImage: `url('/images/contact_bg_industrial.jpg')`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                zIndex: 1, 
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                  borderRadius: '8px',
                  zIndex: -1, 
                }}
              ></div>

              <h3 className="mb-4 text-white">Richiedi una Consulenza Gratuita</h3>
              <p className="mb-4">
                Compila il modulo sottostante per ricevere un preventivo personalizzato
                o per richiedere maggiori informazioni sui nostri servizi.
              </p>
              
              <Form onSubmit={handleSubmit} className="w-100 text-start">
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formNominativo">
                      <Form.Control
                        type="text"
                        placeholder="Nome e Cognome *"
                        value={nominativo}
                        onChange={(e) => setNominativo(e.target.value)}
                        required
                        className="form-control-light" 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Control
                        type="email"
                        placeholder="Indirizzo Email *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-control-light"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formTelefono">
                  <Form.Control
                    type="tel"
                    placeholder="Numero di Telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="form-control-light"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formServizio">
                  <Form.Select
                    value={servizio}
                    onChange={(e) => setServizio(e.target.value)}
                    required
                    className="form-control-light"
                  >
                    {servicesOptions.map((option, index) => (
                      <option key={index} value={option.value} disabled={option.value === ''}>
                        {option.label}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessaggio">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Descrivi la tua richiesta in dettaglio *"
                    value={messaggio}
                    onChange={(e) => setMessaggio(e.target.value)}
                    required
                    className="form-control-light"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 fw-bold py-3">
                  Invia la tua Richiesta <FaChevronRight className="ms-2" />
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToActionContactSection;