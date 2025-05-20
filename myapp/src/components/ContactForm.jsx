import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <h3>Richiedi Informazioni</h3>
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Il tuo nome" required />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="La tua email" required />
              </Form.Group>

              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="tel" placeholder="Il tuo telefono" />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Messaggio</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Scrivici..." required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Invia Richiesta
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h3>Dove Siamo</h3>
            <p>
              <strong>Indirizzo:</strong> Via Industriale, 11/13 - 25030 Corzano (BS)
            </p>
            <p>
              <strong>Telefono:</strong> +39 0309718894
            </p>
            <p>
              <strong>Email:</strong> info@chiarenzagroup.com
            </p>
            
            <div className="ratio ratio-16x9 mt-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.068191019901!2d10.22261431547599!3d45.46421237910249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47814a755efb2927%3A0xd588c80c7c8c1dd7!2sVia+Industriale%2C+11%2C+25030+Corzano+BS!5e0!3m2!1sit!2sit!4v1612101120000!5m2!1sit!2sit" 
                title="Mappa Chiarenza Impianti"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;