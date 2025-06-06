import React, { useState, useEffect } from 'react'; 
import { Container, Row, Col, Card, Button, Form, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext'; 

const ProceedToOrderPage = () => {
  const navigate = useNavigate();
  const { cart, cartTotal } = useCart(); 

  
  const taxRate = 0.22; 

  const taxAmount = cartTotal * taxRate;
  const total = cartTotal + taxAmount;


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


  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();

    console.log('Ordine da confermare:', {
      order: {
        items: cart.map(item => ({ 
          id: item.id, 
          name: item.title, 
          quantity: item.quantity,
          price: item.priceNumber 
        })),
        subtotal: cartTotal,
        taxRate: taxRate,
        total: total
      },
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
              {cart.length === 0 ? (
                <p className="text-center text-muted">Il carrello è vuoto. Torna al catalogo per aggiungere prodotti.</p>
              ) : (
                <ListGroup variant="flush">
                  {cart.map(item => (
                    <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                      <div>
                        {item.title} <span className="text-muted">x {item.quantity}</span>
                      </div>
                      <span>€ {(item.priceNumber * item.quantity).toFixed(2)}</span> 
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
              
              <hr />
              <div className="d-flex justify-content-between fw-bold mb-2">
                <span>Subtotale:</span>
                <span>€ {cartTotal.toFixed(2)}</span> 
              </div>
              <div className="d-flex justify-content-between fw-bold mb-2">
                <span>IVA ({(taxRate * 100).toFixed(0)}%):</span> 
                <span>€ {taxAmount.toFixed(2)}</span> 
              </div>
              <div className="d-flex justify-content-between display-6 fw-bold text-primary">
                <span>Totale:</span>
                <span>€ {total.toFixed(2)}</span> 
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