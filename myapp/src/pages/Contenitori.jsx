import { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, ListGroup, Badge, Offcanvas, Alert } from 'react-bootstrap';
import { FaShippingFast, FaRuler, FaBoxOpen, FaBath, FaPlug, FaShoppingCart, FaTimes, FaEuroSign, FaSearch } from 'react-icons/fa';
import { useCart } from '../components/CartContext';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Contenitori = () => {
  const { cart, addToCart, removeFromCart, cartTotal } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [filters, setFilters] = useState({
    category: [],
    size: [],
    type: [],
    condition: []
  });

  const allContainers = [
  {
    id: '1',
    title: 'Container 20 piedi usato',
    price: '€1.200,00',
    image: 'https://images.sbito.it/api/v1/sbt-ads-images-pro/images/88/883c2d2b-a35d-4b98-8060-6276f1ab9da0?rule=fullscreen-1x-auto',
    condition: 'Usato',
    size: '20 piedi',
    type: 'Standard',
    ready: true,
    description: 'Container usato da 20 piedi, resistente e ideale per stoccaggio sicuro.',
    productionYear: '2016',
    deliveryTime: '2 settimane'
  },
  {
    id: '2',
    title: 'Box prefabbricato uso ufficio',
    price: '€2.500,00',
    image: 'https://www.container.it/upload/prodotti/media2/21-b_b_15.jpg',
    condition: 'Nuovo',
    size: '20 piedi',
    type: 'Standard',
    ready: true,
    description: 'Box prefabbricato perfetto per uffici temporanei, dotato di isolamento termico.',
    productionYear: '2023',
    deliveryTime: '1 settimana'
  },
  {
    id: '3',
    title: 'Cabina uso bagno con WC e lavabo',
    price: '€1.800,00',
    image: 'https://www2.container.it/wp-content/uploads/2023/12/box-prefabbricati-modello-n1-wc-lavabo-e-doccia-servizi-igienici-vari-4-14-m.jpg.webp',
    condition: 'Nuovo',
    size: '10 piedi',
    type: 'WC e lavabo',
    ready: false,
    description: 'Cabina bagno compatta con WC e lavabo, ideale per cantieri o eventi temporanei.',
    productionYear: '2022',
    deliveryTime: '3 settimane'
  },
  {
    id: '4',
    title: 'Container High Cube 40 piedi',
    price: '€3.200,00',
    image: 'https://www2.container.it/wp-content/uploads/2024/10/40-hc.jpg',
    condition: 'Nuovo',
    size: '40 piedi',
    type: 'High Cube',
    ready: true,
    description: 'Container 40 piedi High Cube con altezza extra per spazi voluminosi.',
    productionYear: '2024',
    deliveryTime: '2 settimane'
  },
  {
    id: '5',
    title: 'Container 40 piedi usato',
    price: '€1.900,00',
    image: 'https://www2.container.it/wp-content/uploads/2023/12/container-40-usato.jpg',
    condition: 'Usato',
    size: '40 piedi',
    type: 'Standard',
    ready: false,
    description: 'Container usato da 40 piedi, perfetto per stoccaggio a lungo termine.',
    productionYear: '2015',
    deliveryTime: '4 settimane'
  },
  {
    id: '6',
    title: 'Box prefabbricato per cantiere',
    price: '€2.800,00',
    image: 'https://www.isipsicilia.it/images/isip/prodotti/strutture-on-demand/magazzino/magazzino-prefabbricato-su-misura.jpg',
    condition: 'Nuovo',
    size: '20 piedi',
    type: 'Standard',
    ready: true,
    description: 'Box prefabbricato robusto per uso in cantieri, facile da trasportare.',
    productionYear: '2023',
    deliveryTime: '1 settimana'
  },
  {
    id: '7',
    title: 'Cabina uso bagno completa',
    price: '€2.200,00',
    image: 'https://www.iltuobox.it/pub/prodotti_foto/Foto_77_80_big.jpg',
    condition: 'Nuovo',
    size: '10 piedi',
    type: 'WC, lavabo e doccia',
    ready: true,
    description: 'Cabina bagno completa di WC, lavabo e doccia, ideale per uso prolungato.',
    productionYear: '2024',
    deliveryTime: '2 settimane'
  },
  {
    id: '8',
    title: 'Container 45 piedi High Cube',
    price: '€3.800,00',
    image: 'https://www2.container.it/wp-content/uploads/2023/12/container-45.jpg',
    condition: 'Nuovo',
    size: '45 piedi',
    type: 'High Cube',
    ready: false,
    description: 'Container High Cube da 45 piedi, massimo spazio e altezza per grandi carichi.',
    productionYear: '2024',
    deliveryTime: '3 settimane'
  },
  {
    id: '9',
    title: 'Container marittimo 20 piedi',
    price: '€2.000,00',
    image: 'https://www2.container.it/wp-content/uploads/2023/12/container-marittimo-20-piedi-ral-5013-1.jpg',
    condition: 'Nuovo',
    size: '20 piedi',
    type: 'Standard',
    ready: true,
    description: 'Container marittimo da 20 piedi, resistente alla corrosione e ideale per trasporti.',
    productionYear: '2023',
    deliveryTime: '1 settimana'
  },
  {
    id: '10',
    title: 'Box prefabbricato doppio modulo',
    price: '€4.000,00',
    image: 'https://www.metalbox.it/wp-content/themes/yootheme/cache/1d/edilflex-4-1d66421e.jpeg',
    condition: 'Nuovo',
    size: '40 piedi',
    type: 'Standard',
    ready: false,
    description: 'Box prefabbricato doppio modulo, ideale per uffici o magazzini temporanei.',
    productionYear: '2023',
    deliveryTime: '4 settimane'
  }
];

  const filterOptions = {
    categories: ["Box Prefabbricati", "Cabine uso bagno", "Container marittimi", "Occasioni"],
    sizes: ["10 piedi", "20 piedi", "40 piedi", "45 piedi"],
    types: ["Standard", "WC e lavabo", "WC, lavabo e doccia", "High Cube"],
    conditions: ["Nuovo", "Usato"]
  };

  
  const filteredContainers = allContainers.filter(container => {
    const categoryMatch = filters.category.length === 0 || 
      filters.category.some(cat => {
        if (cat === "Box Prefabbricati") return container.title.includes("Box");
        if (cat === "Cabine uso bagno") return container.type.includes("WC");
        if (cat === "Container marittimi") return container.title.includes("Container");
        if (cat === "Occasioni") return container.condition === "Usato";
        return false;
      });
    
    const typeMatch = filters.type.length === 0 || 
      filters.type.some(type => container.type.includes(type.split(' ')[0]));

    return (
      categoryMatch &&
      typeMatch &&
      (filters.size.length === 0 || (container.size && filters.size.includes(container.size))) &&
      (filters.condition.length === 0 || filters.condition.includes(container.condition))
    );
  });

  const handleAddToCart = (item) => {
    addToCart({
      ...item,
      id: `${item.id}-${Date.now()}`, 
      quantity: 1,
      priceNumber: parseFloat(item.price.replace('€', '').replace(/\./g, '').replace(',', '.'))
    });
    
    setAlertMessage(`${item.title} aggiunto al carrello`);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredContainers.length / itemsPerPage);
  const paginatedContainers = filteredContainers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Container className="py-5">

      {showAlert && (
        <Alert 
          variant="success" 
          className="position-fixed top-0 start-50 translate-middle-x mt-3"
          onClose={() => setShowAlert(false)} 
          dismissible
        >
          {alertMessage}
        </Alert>
      )}

      
      <Button 
        variant="primary" 
        onClick={() => setShowCart(true)}
        className="position-fixed end-0 m-3" 
        style={{ zIndex: 1040, top: 'calc(var(--navbar-height-lg) + 15px)' }} 
      >
        <FaShoppingCart />
        {cart.length > 0 && (
          <Badge pill bg="danger" className="ms-1">
            {cart.length}
          </Badge>
        )}
      </Button>


      <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <FaShoppingCart className="me-2" />
            Il Tuo Carrello
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length === 0 ? (
            <div className="text-center py-4">
              <p>Il carrello è vuoto</p>
              <Button variant="outline-primary" onClick={() => setShowCart(false)}>
                Continua lo shopping
              </Button>
            </div>
          ) : (
            <>
              <ListGroup variant="flush">
                {cart.map((item) => (
                  <ListGroup.Item key={item.id}>
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="me-3">
                        <h6>{item.title}</h6>
                        <small className="text-muted">
                          {item.size || item.length} • {item.type}
                        </small>
                        <div className="mt-1">
                          <strong className="text-primary">{item.price}</strong>
                        </div>
                      </div>
                      <Button 
                        variant="outline-danger" 
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FaTimes />
                      </Button>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              
              <div className="mt-4 border-top pt-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Totale:</h5>
                  <h4 className="mb-0 text-primary">
                    <FaEuroSign className="me-1" />
                    {cartTotal.toFixed(2)}
                  </h4>
                </div>
                <Button 
                  variant="success" 
                  className="w-100 mb-2"
                  as={Link}
                  to="/procedi-ordine"
                >
                  Procedi all'ordine
                </Button>
                <Button 
                  variant="outline-secondary" 
                  className="w-100"
                  onClick={() => setShowCart(false)}
                >
                  Continua lo shopping
                </Button>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      <div className="mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/contenitori">Prodotti</Link></li>
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
          <Card className="shadow-sm sticky-top" style={{ top: '80px' }}>
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
                        checked={filters.category.includes(cat)}
                        onChange={() => {
                          const newCategories = filters.category.includes(cat)
                            ? filters.category.filter(c => c !== cat)
                            : [...filters.category, cat];
                          setFilters({...filters, category: newCategories});
                          setCurrentPage(1);
                        }}
                      />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label><FaRuler className="me-2" />Dimensioni</Form.Label>
                <ListGroup>
                  {filterOptions.sizes.map((sz, i) => (
                    <ListGroup.Item key={i}>
                      <Form.Check 
                        type="checkbox" 
                        label={sz} 
                        checked={filters.size.includes(sz)}
                        onChange={() => {
                          const newSizes = filters.size.includes(sz)
                            ? filters.size.filter(s => s !== sz)
                            : [...filters.size, sz];
                          setFilters({...filters, size: newSizes});
                          setCurrentPage(1);
                        }}
                      />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label><FaBath className="me-2" />Tipologia</Form.Label>
                <ListGroup>
                  {filterOptions.types.map((tp, i) => (
                    <ListGroup.Item key={i}>
                      <Form.Check 
                        type="checkbox" 
                        label={tp} 
                        checked={filters.type.includes(tp)}
                        onChange={() => {
                          const newTypes = filters.type.includes(tp)
                            ? filters.type.filter(t => t !== tp)
                            : [...filters.type, tp];
                          setFilters({...filters, type: newTypes});
                          setCurrentPage(1);
                        }}
                      />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label><FaPlug className="me-2" />Condizione</Form.Label>
                <ListGroup>
                  {filterOptions.conditions.map((cond, i) => (
                    <ListGroup.Item key={i}>
                      <Form.Check 
                        type="checkbox" 
                        label={cond} 
                        checked={filters.condition.includes(cond)}
                        onChange={() => {
                          const newConditions = filters.condition.includes(cond)
                            ? filters.condition.filter(c => c !== cond)
                            : [...filters.condition, cond];
                          setFilters({...filters, condition: newConditions});
                          setCurrentPage(1);
                        }}
                      />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>
              
              <Button 
                variant="outline-primary" 
                className="w-100 mt-3"
                onClick={() => {
                  setFilters({
                    category: [],
                    size: [],
                    type: [],
                    condition: []
                  });
                  setCurrentPage(1);
                }}
              >
                Mostra tutti i prodotti
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={9}>
          {filteredContainers.length === 0 ? (
            <div className="text-center py-5">
              <h4>Nessun risultato trovato</h4>
              <p>Prova a modificare i filtri di ricerca</p>
              <Button 
                variant="primary"
                onClick={() => setFilters({
                  category: [],
                  size: [],
                  type: [],
                  condition: []
                })}
              >
                Mostra tutti i prodotti
              </Button>
            </div>
          ) : (
            <>
              <Row xs={1} md={2} className="g-4">
                {paginatedContainers.map((item) => (
                  <Col key={item.id}>
                    <Card className="h-100 shadow-sm">
                      <Link to={`/contenitori/${item.id}`}>
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                          <Card.Img 
                            variant="top" 
                            src={item.image} 
                            style={{ 
                              objectFit: 'cover', 
                              height: '100%', 
                              width: '100%',
                              transition: 'transform 0.3s'
                            }}
                            className="hover-zoom"
                          />
                        </div>
                      </Link>
                      
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-start">
                          <Card.Title>
                            <Link to={`/contenitori/${item.id}`} className="text-decoration-none text-dark">
                              {item.title}
                            </Link>
                          </Card.Title>
                          {item.ready && (
                            <Badge bg="success" className="ms-2">
                              <FaShippingFast className="me-1" /> PRONTA
                            </Badge>
                          )}
                        </div>
                        
                        <ListGroup variant="flush" className="mb-3">
                          <ListGroup.Item>
                            <strong>Prezzo:</strong> {item.price}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <strong>Condizione:</strong> {item.condition}
                          </ListGroup.Item>
                          {item.size && (
                            <ListGroup.Item>
                              <strong>Dimensioni:</strong> {item.size}
                            </ListGroup.Item>
                          )}
                        </ListGroup>
                      </Card.Body>
                      
                      <Card.Footer className="bg-white border-0 d-flex justify-content-between">
                       <Button 
                          variant="outline-primary" 
                          onClick={() => setSelectedProduct(item)}
                        >
                          Dettagli
                        </Button>

                        <Button 
                          variant="primary"
                          onClick={() => handleAddToCart(item)}
                        >
                          <FaShoppingCart className="me-2" /> Aggiungi
                        </Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
              </Row>

              {totalPages > 1 && (
                <div className="d-flex justify-content-center mt-5">
                  <nav>
                    <ul className="pagination">
                      <PaginationItem 
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(p => p - 1)}
                        label="Precedente"
                      />
                      
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <PaginationItem 
                          key={i}
                          active={currentPage === i + 1}
                          onClick={() => setCurrentPage(i + 1)}
                          label={i + 1}
                        />
                      ))}
                      
                      <PaginationItem 
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(p => p + 1)}
                        label="Successivo"
                      />
                    </ul>
                  </nav>
                </div>
              )}
            </>
          )}
        </Col>
      </Row>
      <Modal
        show={selectedProduct !== null}
        onHide={() => setSelectedProduct(null)}
        size="lg"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img 
                src={selectedProduct?.image} 
                alt={selectedProduct?.title} 
                className="img-fluid rounded"
              />
            </Col>
            <Col md={6}>
              <p><strong>Prezzo:</strong> {selectedProduct?.price}</p>
              <p><strong>Condizione:</strong> {selectedProduct?.condition}</p>
              <p><strong>Dimensioni:</strong> {selectedProduct?.size}</p>
              
              <p><strong>Anno di produzione:</strong> {selectedProduct?.productionYear}</p>
              <p><strong>Descrizione:</strong> {selectedProduct?.description}</p>
              <p><strong>Tempi di consegna:</strong> {selectedProduct?.deliveryTime}</p>

            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedProduct(null)}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={() => {
            handleAddToCart(selectedProduct);
            setSelectedProduct(null);
          }}>
            <FaShoppingCart className="me-2" /> Aggiungi al carrello
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
};

const PaginationItem = ({ active, disabled, onClick, label }) => (
  <li className={`page-item ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`}>
    <button className="page-link" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  </li>
);

export default Contenitori;