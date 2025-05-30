import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactMessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem('adminAuthToken');
        const response = await fetch('http://localhost:8080/api/admin/contact-messages', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (!response.ok) throw new Error('Errore nel caricamento dei messaggi');
        
        const data = await response.json();
        setMessages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    try {
        const token = localStorage.getItem('adminAuthToken');
        const response = await fetch(`http://localhost:8080/api/admin/contact-messages/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (!response.ok) throw new Error('Cancellazione fallita');
        
        setMessages(messages.filter(msg => msg.id !== id));
    } catch (err) {
        setError(err.message);
    }
  };

  if (loading) return <Container className="py-5">Caricamento...</Container>;
  if (error) return <Container className="py-5"><Alert variant="danger">{error}</Alert></Container>;

  return (
    <Container className="py-5">
      <h1 className="mb-4">Messaggi di Contatto</h1>
      
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Oggetto</th>
            <th>Data</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>{message.subject}</td>
              <td>{new Date(message.submissionTime).toLocaleString()}</td>
              <td>
                <Button 
                  variant="outline-danger" 
                  size="sm" 
                  onClick={() => handleDelete(message.id)}
                >Elimina</Button> 
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ContactMessagesPage;