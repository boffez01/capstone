import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, ListGroup, Badge } from 'react-bootstrap';
import { FaShippingFast, FaRuler, FaBoxOpen, FaBath, FaPlug, FaSearch } from 'react-icons/fa';

const Contenitori = () => {
  const [filters, setFilters] = useState({
    category: [],
    size: [],
    type: [],
    condition: []
  });


  const allContainers = [
    {
      id: 1,
      title: "Container Marittimo 20 Piedi Usato",
      condition: "Usato",
      type: "Standard",
      size: "20 piedi",
      price: "€1.900,00",
      features: ["Peso: 2.300 kg", "Portata: 28.000 kg"],
      ready: true,
      image: "https://i.ibb.co/0jQ7ZJk/container20usato.jpg"
    },
    {
      id: 2,
      title: "Box Prefabbricato 4 Metri con Bagno",
      condition: "Nuovo",
      type: "WC e lavabo",
      length: "4 m",
      height: "2.25 m",
      price: "€3.450,00",
      features: ["Bagno completo", "Isolamento termico"],
      ready: true,
      image: "https://i.ibb.co/4W2PYt0/box4bagno.jpg"
    },
    {
      id: 3,
      title: "Container 40 Piedi High Cube Nuovo",
      condition: "Nuovo",
      type: "High Cube",
      size: "40 piedi",
      price: "€4.800,00",
      features: ["Altezza: 2.70m", "Nuovo di fabbrica"],
      ready: true,
      image: "https://i.ibb.co/6RJQ1vG/container40nuovo.jpg"
    },
    {
      id: 4,
      title: "Cabina Ufficio 3 Metri",
      condition: "Usato",
      type: "Standard",
      length: "3 m",
      price: "€1.750,00",
      features: ["2 finestre", "Impianto elettrico"],
      ready: true,
      image: "https://i.ibb.co/4T1H2hK/cabina3metri.jpg"
    },
    {
      id: 5,
      title: "Container 10 Piedi Usato",
      condition: "Usato",
      type: "Standard",
      size: "10 piedi",
      price: "€1.200,00",
      features: ["Peso: 1.200 kg", "Ottime condizioni"],
      ready: true,
      image: "https://i.ibb.co/0nSJYF5/container10usato.jpg"
    },
    {
      id: 6,
      title: "Box Magazzino 6 Metri",
      condition: "Nuovo",
      type: "Standard",
      length: "6 m",
      price: "€2.900,00",
      features: ["Porta scorrevole", "Ventilazione"],
      ready: true,
      image: "https://i.ibb.co/0nSJYF5/box6metri.jpg"
    },
    {
      id: 7,
      title: "Container 45 Piedi Usato",
      condition: "Usato",
      type: "Standard",
      size: "45 piedi",
      price: "€3.200,00",
      features: ["Doppia porta", "Pavimento rinforzato"],
      ready: true,
      image: "https://i.ibb.co/0nSJYF5/container45usato.jpg"
    },
    {
      id: 8,
      title: "Cabina Bagno 2.5 Metri",
      condition: "Nuovo",
      type: "WC, lavabo e doccia",
      length: "2.5 m",
      price: "€2.100,00",
      features: ["Dotazione completa", "Acqua calda"],
      ready: true,
      image: "https://i.ibb.co/0nSJYF5/cabinabagno.jpg"
    },
    {
      id: 9,
      title: "Container 20 Piedi Nuovo RAL 7035",
      condition: "Nuovo",
      type: "Standard",
      size: "20 piedi",
      price: "€3.800,00",
      features: ["Colore personalizzato", "Garanzia 2 anni"],
      ready: true,
      image: "https://i.ibb.co/0nSJYF5/container20nuovo.jpg"
    },
    {
      id: 10,
      title: "Box Ufficio 5 Metri Usato",
      condition: "Usato",
      type: "Standard",
      length: "5 m",
      price: "€2.300,00",
      features: ["3 finestre", "Climatizzato"],
      ready: true,
      image: "https://i.ibb.co/0nSJYF5/boxufficio.jpg"
    }
  ];

  const filterOptions = {
    categories: ["Box Prefabbricati", "Cabine uso bagno", "Container marittimi", "Occasioni"],
    sizes: ["10 piedi", "20 piedi", "40 piedi", "45 piedi"],
    types: ["Standard (senza bagno)", "WC e lavabo", "WC, lavabo e doccia", "High Cube"],
    conditions: ["Nuovo", "Usato"]
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  const filteredContainers = allContainers.filter(container => {
    return (
      (filters.category.length === 0 || 
       (container.type && filters.category.some(cat => container.type.includes(cat)))) &&
      (filters.size.length === 0 || 
       (container.size && filters.size.includes(container.size))) &&
      (filters.type.length === 0 || 
       filters.type.includes(container.type)) &&
      (filters.condition.length === 0 || 
       filters.condition.includes(container.condition))
    );
  });


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredContainers.length / itemsPerPage);
  const paginatedContainers = filteredContainers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Container className="py-5">

      <div className="mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/contenitori">Prodotti</a></li>
            <li className="breadcrumb-item active">Pronta Consegna</li>
          </ol>
        </nav>
        
        <h1 className="mb-3">CONTAINER E BOX PREFABBRICATI IN PRONTA CONSEGNA</h1>
        <p className="lead">
          {filteredContainers.length} prodotti disponibili per consegna immediata
        </p>
      </div>

      <Row>

        <Col lg={3} className="mb-4">
          <Card className="shadow-sm sticky-top" style={{ top: '20px' }}>
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0"><FaSearch className="me-2" />Filtra Prodotti</h5>
            </Card.Header>
            <Card.Body>

              <Form.Group className="mb-3">
                <Form.Label><FaBoxOpen className="me-2" />Categorie</Form.Label>
                <ListGroup>
                  {filterOptions.categories.map((cat, i) => (
                    <ListGroup.Item key={i}>
                      <Form.Check 
                        type="checkbox" 
                        label={cat} 
                        id={`cat-${i}`}
                        checked={filters.category.includes(cat)}
                        onChange={() => handleFilterChange('category', cat)}
                      />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label><FaRuler className="me-2" />Misura Container</Form.Label>
                <ListGroup>
                  {filterOptions.sizes.map((size, i) => (
                    <ListGroup.Item key={i}>
                      <Form.Check 
                        type="checkbox" 
                        label={size} 
                        id={`size-${i}`}
                        checked={filters.size.includes(size)}
                        onChange={() => handleFilterChange('size', size)}
                      />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label><FaBath className="me-2" />Tipologia</Form.Label>
                <ListGroup>
                  {filterOptions.types.map((type, i) => (
                    <ListGroup.Item key={i}>
                      <Form.Check 
                        type="checkbox" 
                        label={type} 
                        id={`type-${i}`}
                        checked={filters.type.includes(type)}
                        onChange={() => handleFilterChange('type', type)}
                      />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label><FaPlug className="me-2" />Condizioni</Form.Label>
                <ListGroup>
                  {filterOptions.conditions.map((cond, i) => (
                    <ListGroup.Item key={i}>
                      <Form.Check 
                        type="checkbox" 
                        label={cond} 
                        id={`cond-${i}`}
                        checked={filters.condition.includes(cond)}
                        onChange={() => handleFilterChange('condition', cond)}
                      />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>

              <Button 
                variant="outline-primary" 
                className="w-100"
                onClick={() => setFilters({
                  category: [],
                  size: [],
                  type: [],
                  condition: []
                })}
              >
                Resetta Filtri
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={9}>

          {filteredContainers.length === 0 ? (
            <div className="text-center py-5">
              <h4>Nessun risultato trovato</h4>
              <p>Prova a modificare i filtri di ricerca</p>
            </div>
          ) : (
            <>
              <Row xs={1} md={2} className="g-4">
                {paginatedContainers.map((item) => (
                  <Col key={item.id}>
                    <Card className="h-100 shadow-sm hover-effect">
                      <div style={{ height: '200px', overflow: 'hidden' }}>
                        <Card.Img 
                          variant="top" 
                          src={item.image} 
                          style={{ objectFit: 'cover', height: '100%', width: '100%' }} 
                          alt={item.title}
                        />
                      </div>
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-start">
                          <Card.Title>{item.title}</Card.Title>
                          {item.ready && (
                            <Badge bg="success" className="ms-2">
                              <FaShippingFast className="me-1" /> PRONTA CONSEGNA
                            </Badge>
                          )}
                        </div>
                        
                        <ListGroup variant="flush" className="mb-3">
                          <ListGroup.Item>
                            <strong>Condizione:</strong> {item.condition}
                          </ListGroup.Item>
                          {item.size && (
                            <ListGroup.Item>
                              <strong>Misura:</strong> {item.size}
                            </ListGroup.Item>
                          )}
                          {item.length && (
                            <ListGroup.Item>
                              <strong>Lunghezza:</strong> {item.length}
                            </ListGroup.Item>
                          )}
                          <ListGroup.Item>
                            <strong>Tipologia:</strong> {item.type}
                          </ListGroup.Item>
                        </ListGroup>

                        <Card.Text>
                          {item.features.map((feat, i) => (
                            <span key={i} className="d-block mb-1">• {feat}</span>
                          ))}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="bg-white border-0">
                        <div className="d-flex justify-content-between align-items-center">
                          <h4 className="text-primary mb-0">{item.price}</h4>
                          <Button variant="primary">Richiedi Info</Button>
                        </div>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
              </Row>

              {totalPages > 1 && (
                <div className="d-flex justify-content-center mt-5">
                  <nav>
                    <ul className="pagination">
                      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button 
                          className="page-link" 
                          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        >
                          Precedente
                        </button>
                      </li>
                      
                      {[...Array(totalPages)].map((_, i) => (
                        <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                          <button 
                            className="page-link" 
                            onClick={() => setCurrentPage(i + 1)}
                          >
                            {i + 1}
                          </button>
                        </li>
                      ))}
                      
                      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button 
                          className="page-link" 
                          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        >
                          Successivo
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Contenitori;