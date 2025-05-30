import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Alert, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContainerManagementPage = () => {
  const [containers, setContainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  // STATO INIZIALE AGGIORNATO per includere tutti i nuovi campi
  const [currentContainer, setCurrentContainer] = useState({
    title: '', // Nuovo campo
    type: '',
    price: 0,
    description: '',
    imageUrl: '',
    condition: '',     // Nuovo campo
    size: '',          // Nuovo campo
    productionYear: '',// Nuovo campo
    deliveryTime: '',  // Nuovo campo
    ready: false       // Nuovo campo
  });

  // Opzioni per i dropdown (devono essere coerenti con il frontend pubblico)
  const typeOptions = ["Standard", "WC e lavabo", "WC, lavabo e doccia", "High Cube"];
  const conditionOptions = ["Nuovo", "Usato"];
  const sizeOptions = ["10 piedi", "20 piedi", "40 piedi", "45 piedi"];

  useEffect(() => {
    fetchContainers();
  }, []);

  const fetchContainers = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/containers');
      if (!response.ok) throw new Error('Errore nel caricamento dei container');
      const data = await response.json();
      setContainers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('adminAuthToken');
      const method = currentContainer.id ? 'PUT' : 'POST';
      const url = currentContainer.id 
        ? `http://localhost:8080/api/containers/${currentContainer.id}`
        : 'http://localhost:8080/api/containers';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(currentContainer)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Operazione fallita');
      }
      
      fetchContainers();
      setShowModal(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('adminAuthToken');
      const response = await fetch(`http://localhost:8080/api/containers/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) throw new Error('Cancellazione fallita');
      
      setContainers(containers.filter(cont => cont.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <Container className="py-5">Caricamento...</Container>;
  if (error) return <Container className="py-5"><Alert variant="danger">{error}</Alert></Container>;

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Gestione Container</h1>
        <Button variant="success" onClick={() => {
          setCurrentContainer({
            title: '', // Resetta tutti i campi
            type: '',
            price: 0,
            description: '',
            imageUrl: '',
            condition: '',
            size: '',
            productionYear: '',
            deliveryTime: '',
            ready: false
          });
          setShowModal(true);
        }}>Aggiungi Container</Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th> {/* Aggiunto ID per coerenza */}
            <th>Titolo</th>
            <th>Tipo</th>
            <th>Dim.</th> {/* Abbreviazione per spazio */}
            <th>Cond.</th> {/* Abbreviazione per spazio */}
            <th>Pronto</th> {/* Abbreviazione per spazio */}
            <th>Prezzo (€)</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {containers.map((container) => (
            <tr key={container.id}>
              <td>{container.id}</td>
              <td>{container.title}</td>
              <td>{container.type}</td>
              <td>{container.size}</td>
              <td>{container.condition}</td>
              <td>{container.ready ? 'Sì' : 'No'}</td>
              <td>{container.price.toFixed(2)}</td>
              <td>
                <Button 
                  variant="outline-primary" 
                  size="sm" 
                  className="me-2"
                  onClick={() => {
                    setCurrentContainer(container);
                    setShowModal(true);
                  }}
                >Modifica</Button>
                <Button 
                  variant="outline-danger" 
                  size="sm"
                  onClick={() => handleDelete(container.id)}
                >Elimina</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{currentContainer.id ? 'Modifica' : 'Aggiungi'} Container</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Titolo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Es: Container 20 piedi usato"
                value={currentContainer.title}
                onChange={(e) => setCurrentContainer({...currentContainer, title: e.target.value})}
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Tipo</Form.Label>
              <Form.Select
                value={currentContainer.type}
                onChange={(e) => setCurrentContainer({...currentContainer, type: e.target.value})}
                required
              >
                <option value="">Seleziona il tipo</option>
                {typeOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Dimensioni</Form.Label>
              <Form.Select
                value={currentContainer.size}
                onChange={(e) => setCurrentContainer({...currentContainer, size: e.target.value})}
                required
              >
                <option value="">Seleziona le dimensioni</option>
                {sizeOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Condizione</Form.Label>
              <Form.Select
                value={currentContainer.condition}
                onChange={(e) => setCurrentContainer({...currentContainer, condition: e.target.value})}
                required
              >
                <option value="">Seleziona la condizione</option>
                {conditionOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Prezzo (€)</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                value={currentContainer.price}
                onChange={(e) => setCurrentContainer({...currentContainer, price: parseFloat(e.target.value)})}
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>URL Immagine</Form.Label>
              <Form.Control
                type="text"
                placeholder="URL dell'immagine del container"
                value={currentContainer.imageUrl}
                onChange={(e) => setCurrentContainer({...currentContainer, imageUrl: e.target.value})}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Descrizione dettagliata del container"
                value={currentContainer.description}
                onChange={(e) => setCurrentContainer({...currentContainer, description: e.target.value})}
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Anno di Produzione</Form.Label>
              <Form.Control
                type="text"
                placeholder="Es: 2023"
                value={currentContainer.productionYear}
                onChange={(e) => setCurrentContainer({...currentContainer, productionYear: e.target.value})}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tempi di Consegna</Form.Label>
              <Form.Control
                type="text"
                placeholder="Es: 2 settimane"
                value={currentContainer.deliveryTime}
                onChange={(e) => setCurrentContainer({...currentContainer, deliveryTime: e.target.value})}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Disponibile per Pronta Consegna"
                checked={currentContainer.ready}
                onChange={(e) => setCurrentContainer({...currentContainer, ready: e.target.checked})}
              />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Annulla</Button>
            <Button variant="primary" type="submit">Salva</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default ContainerManagementPage;