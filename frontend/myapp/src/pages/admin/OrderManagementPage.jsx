
import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Alert, Modal, Form, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrderManagementPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false); 

  const orderStatusOptions = ["Pending", "Confirmed", "Completed", "Cancelled"]; 

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem('adminAuthToken');
      const response = await fetch('http://localhost:8080/api/orders', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('Errore nel caricamento degli ordini');

      const data = await response.json();
      setOrders(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateOrderStatus = async () => {
    if (!selectedOrder) return;
    if (!window.confirm(`Sei sicuro di voler cambiare lo stato dell'ordine #${selectedOrder.id} a "${selectedOrder.status}"?`)) return;

    try {
      const token = localStorage.getItem('adminAuthToken');
      const response = await fetch(`http://localhost:8080/api/orders/${selectedOrder.id}/status?status=${selectedOrder.status}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Aggiornamento stato ordine fallito');
      }

      fetchOrders(); 
      setShowOrderModal(false);
      setSelectedOrder(null); 
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteOrder = async (id) => {
    if (!window.confirm('Sei sicuro di voler eliminare questo ordine? Questa azione è irreversibile!')) return;
    try {
      const token = localStorage.getItem('adminAuthToken');
      const response = await fetch(`http://localhost:8080/api/orders/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('Cancellazione ordine fallita');

      setOrders(orders.filter(order => order.id !== id)); 
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <Container className="py-5 text-center">Caricamento ordini...</Container>;
  if (error) return <Container className="py-5"><Alert variant="danger">Errore: {error}</Alert></Container>;

  return (
    <Container className="py-5">
      <h1 className="mb-4">Gestione Ordini</h1> 

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID Ordine</th>
            <th>Data</th>
            <th>Totale (€)</th>
            <th>Stato</th>
            <th>Elementi</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{new Date(order.orderDate).toLocaleString()}</td>
              <td>{order.totalPrice ? order.totalPrice.toFixed(2) : 'N/A'}</td>
              <td>{order.status}</td>
              <td>
                <ListGroup variant="flush">
                  {order.items && order.items.length > 0 ? (
                    order.items.map(item => (
                      <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center px-0 py-1">
                        {item.container ? item.container.title : 'Prodotto Sconosciuto'} x {item.quantity}
                      </ListGroup.Item>
                    ))
                  ) : (
                    <ListGroup.Item className="px-0 py-1 text-muted">Nessun elemento</ListGroup.Item>
                  )}
                </ListGroup>
              </td>
              <td>
                <Button
                  variant="outline-info"
                  size="sm"
                  className="me-2"
                  onClick={() => {
                    setSelectedOrder(order); 
                    setShowOrderModal(true); 
                  }}
                >Dettagli/Stato</Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleDeleteOrder(order.id)}
                >Elimina</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showOrderModal} onHide={() => setShowOrderModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Dettagli Ordine #{selectedOrder?.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && ( 
            <>
              <p><strong>Data Ordine:</strong> {new Date(selectedOrder.orderDate).toLocaleString()}</p>
              <p><strong>Totale:</strong> € {selectedOrder.totalPrice?.toFixed(2)}</p>
              
              <Form.Group className="mb-3">
                <Form.Label><strong>Stato Ordine:</strong></Form.Label>
                <Form.Select
                  value={selectedOrder.status}
                  onChange={(e) => setSelectedOrder({...selectedOrder, status: e.target.value})}
                >
                  {orderStatusOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <h5>Elementi dell'Ordine:</h5>
              <ListGroup variant="flush">
                {selectedOrder.items && selectedOrder.items.length > 0 ? (
                  selectedOrder.items.map(item => (
                    <ListGroup.Item key={item.id}>
                      {item.container ? item.container.title : 'Prodotto Sconosciuto'} (ID: {item.container?.id || 'N/A'}) x {item.quantity} - € {item.unitPrice?.toFixed(2)} cad.
                    </ListGroup.Item>
                  ))
                ) : (
                  <p>Nessun elemento in questo ordine.</p>
                )}
              </ListGroup>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowOrderModal(false)}>Chiudi</Button>
          <Button variant="primary" onClick={handleUpdateOrderStatus}>Salva Stato</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default OrderManagementPage;