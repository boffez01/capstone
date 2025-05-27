import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProceedToOrderPage = () => {
  const navigate = useNavigate();

  const [orderSummary, setOrderSummary] = useState({
    items: [
      { id: 1, name: 'Container 20 piedi', quantity: 1, price: 2500.00 },
      { id: 2, name: 'Box Ufficio', quantity: 1, price: 3800.00 },
      { id: 3, name: 'Servizio di Montaggio Base', quantity: 1, price: 500.00 },
    ],
    subtotal: 0, 
    taxRate: 0.22, 
    total: 0
  });

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    notes: ''
  });

  // Calcola subtotale e totale ogni volta che gli items cambiano
  React.useEffect(() => {
    const newSubtotal = orderSummary.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    const taxAmount = newSubtotal * orderSummary.taxRate;
    const newTotal = newSubtotal + taxAmount;

    setOrderSummary(prev => ({
      ...prev,
      subtotal: newSubtotal,
      total: newTotal
    }));
  }, [orderSummary.items, orderSummary.taxRate]);


  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();

    console.log('Ordine da confermare:', {
      order: orderSummary,
      customerDetails: userDetails
    });

    alert('Ordine confermato! Verrai ricontattato a breve per fissare un appuntamento in sede per la firma dei documenti.');

    navigate('/'); 
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 display-5 fw-bold">Riepilogo Ordine e Conferma</h2>
      <p className="lead text-center text-muted mb-5">
        Controlla i dettagli del tuo ordine e completa le informazioni per procedere.
      </p>

      <Row className="justify-content-center">

        <Col lg={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header as="h5" className="bg-primary text-white">Il tuo Ordine</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {orderSummary.items.map(item => (
                  <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                    <div>
                      {item.name} <span className="text-muted">x {item.quantity}</span>
                    </div>
                    <span>€ {(item.quantity * item.price).toFixed(2)}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <hr />
              <div className="d-flex justify-content-between fw-bold mb-2">
                <span>Subtotale:</span>
                <span>€ {orderSummary.subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between fw-bold mb-2">
                <span>IVA ({orderSummary.taxRate * 100}%):</span>
                <span>€ {(orderSummary.subtotal * orderSummary.taxRate).toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between display-6 fw-bold text-primary">
                <span>Totale:</span>
                <span>€ {orderSummary.total.toFixed(2)}</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

 
        <Col lg={6}>
          <Card className="shadow-sm">
            <Card.Header as="h5" className="bg-primary text-white">I tuoi Dati</Card.Header>
            <Card.Body>
              <Form onSubmit={handleConfirmOrder}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="firstName">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="firstName"
                        value={userDetails.firstName} 
                        onChange={handleUserInputChange} 
                        required 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="lastName">
                      <Form.Label>Cognome</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="lastName"
                        value={userDetails.lastName} 
                        onChange={handleUserInputChange} 
                        required 
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    value={userDetails.email} 
                    onChange={handleUserInputChange} 
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control 
                    type="tel" 
                    name="phone"
                    value={userDetails.phone} 
                    onChange={handleUserInputChange} 
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>Indirizzo</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="address"
                    value={userDetails.address} 
                    onChange={handleUserInputChange} 
                    required 
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="city">
                      <Form.Label>Città</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="city"
                        value={userDetails.city} 
                        onChange={handleUserInputChange} 
                        required 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="zip">
                      <Form.Label>CAP</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="zip"
                        value={userDetails.zip} 
                        onChange={handleUserInputChange} 
                        required 
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4" controlId="notes">
                  <Form.Label>Note aggiuntive (opzionale)</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={3} 
                    name="notes"
                    value={userDetails.notes} 
                    onChange={handleUserInputChange} 
                  />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100 py-3 fw-bold">
                  Conferma Ordine 
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProceedToOrderPage;