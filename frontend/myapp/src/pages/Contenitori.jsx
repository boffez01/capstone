import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Card, Button, Form, ListGroup, Badge, Offcanvas, Alert, Modal } from 'react-bootstrap';
import { FaShippingFast, FaRuler, FaBoxOpen, FaBath, FaPlug, FaShoppingCart, FaTimes, FaEuroSign, FaSearch } from 'react-icons/fa';
import { useCart } from '../components/CartContext'; // Assicurati che questo path sia corretto
import { Link } from 'react-router-dom'; // Assicurati che react-router-dom sia installato e configurato

const Contenitori = () => {
  const { cart, addToCart, removeFromCart, cartTotal } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [containers, setContainers] = useState([]); // Questo stato conterrà l'unione dei dati
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    category: [],
    size: [],
    type: [],
    condition: []
  });

  const filterOptions = {
    categories: ["Box Prefabbricati", "Cabine uso bagno", "Container marittimi", "Occasioni"],
    sizes: ["10 piedi", "20 piedi", "40 piedi", "45 piedi"],
    types: ["Standard", "WC e lavabo", "WC, lavabo e doccia", "High Cube"],
    conditions: ["Nuovo", "Usato"]
  };

   const localContainersData = [
    {
      "id": "loc1",
      "title": "Box Prefabbricato Standard",
      "description": "Box prefabbricato versatile, ideale per magazzino o ufficio temporaneo. Facile da installare.",
      "imageUrl": "https://www2.container.it/wp-content/uploads/2024/05/3-metri-st-240-ok.jpg",
      "price": 3500.00,
      "condition": "Nuovo",
      "size": "10 piedi",
      "type": "Standard",
      "productionYear": 2024,
      "deliveryTime": "3-5 giorni lavorativi",
      "ready": true
    },
    {
      "id": "loc2",
      "title": "Container Marittimo 20 piedi Usato",
      "description": "Container marittimo robusto, perfetto per stoccaggio o trasporto. Ottime condizioni.",
      "imageUrl": "https://www2.container.it/wp-content/uploads/2024/01/ctr-usato-1.jpg.webp",
      "price": 2200.00,
      "condition": "Usato",
      "size": "20 piedi",
      "type": "Standard",
      "productionYear": 2010,
      "deliveryTime": "1 settimana",
      "ready": true
    },
    {
      "id": "loc3",
      "title": "Cabina Bagno Mobile WC e Lavabo",
      "description": "Cabina bagno prefabbricata con WC e lavabo, perfetta per cantieri o eventi.",
      "imageUrl": "https://www2.container.it/wp-content/uploads/2023/12/box-ufficio-prefabbricati-new-millennium-3-metri-2.jpg.webp",
      "price": 4800.00,
      "condition": "Nuovo",
      "size": "10 piedi",
      "type": "WC e lavabo",
      "productionYear": 2024,
      "deliveryTime": "5-7 giorni lavorativi",
      "ready": true
    },
    {
      "id": "loc4",
      "title": "Container Marittimo High Cube 40 piedi",
      "description": "Container 40 piedi High Cube, offre maggiore altezza interna. Ideale per volumi ingombranti.",
      "imageUrl": "https://www.basenton.com/wp-content/uploads/2024/02/40hc_container.jpg",
      "price": 4100.00,
      "condition": "Nuovo",
      "size": "40 piedi",
      "type": "High Cube",
      "productionYear": 2023,
      "deliveryTime": "2 settimane",
      "ready": false
    },
    {
      "id": "loc5",
      "title": "Box Prefabbricato per Ufficio Usato",
      "description": "Box prefabbricato usato, allestito per ufficio. Include finestre e impianto elettrico.",
      "imageUrl": "https://www.container.it/keywords/immagini/prodotti/box-prefabbricati.jpg",
      "price": 3000.00,
      "condition": "Usato",
      "size": "20 piedi",
      "type": "Standard",
      "productionYear": 2015,
      "deliveryTime": "1 settimana",
      "ready": true
    },
    {
      "id": "loc6",
      "title": "Cabina Bagno Completa (WC, Lavabo, Doccia)",
      "description": "Cabina bagno autonoma con tutti i comfort: WC, lavabo e doccia. Pronta all'uso.",
      "imageUrl": "https://s.alicdn.com/@sc04/kf/Ha8a683dbd9b4469b8c7524e0e67e84d4A.png_720x720q50.png",
      "price": 6500.00,
      "condition": "Nuovo",
      "size": "10 piedi",
      "type": "WC, lavabo e doccia",
      "productionYear": 2024,
      "deliveryTime": "7-10 giorni lavorativi",
      "ready": true
    },
    {
      "id": "loc7",
      "title": "Container Marittimo 10 piedi (Occasione)",
      "description": "Piccolo container marittimo, ideale per spazi ridotti. Ottima occasione per stoccaggio extra.",
      "imageUrl": "https://www2.container.it/wp-content/uploads/2024/04/10-piedi-2.jpg.webp",
      "price": 1800.00,
      "condition": "Usato",
      "size": "10 piedi",
      "type": "Standard",
      "productionYear": 2008,
      "deliveryTime": "5 giorni lavorativi",
      "ready": true
    },
    {
      "id": "loc8",
      "title": "Box Prefabbricato 20 piedi Nuovo",
      "description": "Ampio box prefabbricato nuovo, configurabile per diverse esigenze. Consegna rapida.",
      "imageUrl": "https://www.containex.com/-/m/resize?quality=80&image=https%3A%2F%2Fwww.containex.com%2F-%2Fm%2Fpicturepark%2Fctx%2Fstart%2Fcontainer-und-module%2F20-fuss-container-neu%2Fcontent%2Fjumbotron-text%2Fbackground-image%2F8dcab2fa4a3b321.jpg%3Fh%3D1349%26w%3D1912%26la%3Dit%26rev%3D8465cdc078e2453fb83629ff7ba85e36",
      "price": 4500.00,
      "condition": "Nuovo",
      "size": "20 piedi",
      "type": "Standard",
      "productionYear": 2024,
      "deliveryTime": "4-6 giorni lavorativi",
      "ready": true
    },
    {
      "id": "loc9",
      "title": "Container Marittimo 45 piedi High Cube",
      "description": "Il più grande dei container marittimi, 45 piedi High Cube. Massimo spazio di carico.",
      "imageUrl": "https://www2.container.it/wp-content/uploads/2023/12/container-45.jpg",
      "price": 5500.00,
      "condition": "Nuovo",
      "size": "45 piedi",
      "type": "High Cube",
      "productionYear": 2023,
      "deliveryTime": "3 settimane",
      "ready": false
    },
    {
      "id": "loc10",
      "title": "Cabina Bagno Usata (WC e Lavabo)",
      "description": "Cabina bagno usata ma funzionale, con WC e lavabo. Soluzione economica per esigenze temporanee.",
      "imageUrl": "https://s.alicdn.com/@sc04/kf/H3bfb080f11e248feb76a22e7a7ed8bd7z.png_720x720q50.png",
      "price": 3800.00,
      "condition": "Usato",
      "size": "10 piedi",
      "type": "WC e lavabo",
      "productionYear": 2018,
      "deliveryTime": "1 settimana",
      "ready": true
    }
  ];


 useEffect(() => {
    const fetchAndCombineContainers = async () => {
      setLoading(true);
      setError(null); // Resetta eventuali errori precedenti

      let backendContainers = [];
      let backendErrorOccurred = false; // Flag per tracciare se c'è stato un errore dal backend

      try {
        const response = await fetch('http://localhost:8080/api/containers');
        if (!response.ok) {
          backendErrorOccurred = true;
          throw new Error(`Errore HTTP dal backend: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          backendContainers = data;
        } else {
          backendErrorOccurred = true;
          console.warn("Il backend non ha restituito un array valido. I dati del backend non verranno inclusi.");
        }
      } catch (err) {
        backendErrorOccurred = true;
        console.error("Errore di connessione o fetch dal backend:", err);
      } finally {
        // Unisci i container dal backend (se presenti) con i container locali.
        // Utilizziamo un oggetto temporaneo per unire e rimuovere duplicati basati sull'ID.
        // Priorità: se un ID esiste sia nel backend che nei dati locali, prende quello del backend.
        const combined = {};
        
        // Aggiungi prima i locali, in modo che possano essere sovrascritti dai dati del backend
        localContainersData.forEach(item => {
            combined[item.id] = item;
        });

        // Aggiungi poi quelli del backend. Se hanno lo stesso ID di un locale, lo sovrascrivono.
        backendContainers.forEach(item => {
            combined[item.id] = item;
        });

        const finalContainers = Object.values(combined); // Converti l'oggetto in un array

        setContainers(finalContainers); // Popola lo stato 'containers' con l'unione

        if (backendErrorOccurred) {
          setError("Si è verificato un problema con il caricamento dal backend. Stai visualizzando un catalogo combinato di prodotti locali e dal backend (se disponibili).");
        }
        setLoading(false);
      }
    };

    fetchAndCombineContainers();
  }, []); // Esegui solo al mount del componente

  // Il filtraggio opera sullo stato 'containers' che ora include sia dati backend che locali
  const filteredContainers = containers.filter(container => {
    const categoryMatch = filters.category.length === 0 ||
      filters.category.some(cat => {
        if (cat === "Box Prefabbricati") return container.title.includes("Box") || container.title.includes("prefabbricato");
        if (cat === "Cabine uso bagno") return container.type.includes("WC") || container.title.includes("Cabina uso bagno");
        if (cat === "Container marittimi") return container.title.includes("Container") || container.title.includes("marittimo");
        if (cat === "Occasioni") return container.condition === "Usato";
        return false;
      });

    const typeMatch = filters.type.length === 0 ||
      filters.type.some(type => container.type && container.type.includes(type));

    const sizeMatch = filters.size.length === 0 ||
      (container.size && filters.size.includes(container.size));

    const conditionMatch = filters.condition.length === 0 ||
      (container.condition && filters.condition.includes(container.condition));

    return categoryMatch && typeMatch && sizeMatch && conditionMatch;
  });

  const handleAddToCart = (item) => {
  let priceNumber;
  
  if (typeof item.price === 'string') {

    priceNumber = parseFloat(
      item.price
        .replace('€', '')
        .replace(/\./g, '')
        .replace(',', '.')
    );
  } else {

    priceNumber = item.price;
  }

  addToCart({
    ...item,
    id: `${item.id}-${Date.now()}`, 
    quantity: 1,
    priceNumber: priceNumber
  });

  setAlertMessage(`${item.title} aggiunto al carrello`);
  setShowAlert(true);
  setTimeout(() => setShowAlert(false), 3000);
};

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredContainers.length / itemsPerPage);
  const paginatedContainers = filteredContainers.length > 0 ? filteredContainers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ) : [];

  if (loading) {
    return <Container className="py-5 text-center">Caricamento container...</Container>;
  }

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

      {error && (
        <Alert variant="warning" className="mb-4">
          <strong>Avviso:</strong> {error}
          <br />
          Assicurati che il tuo backend sia attivo e configurato per il CORS su `http://localhost:8080/api/containers`.
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
                      {/* L'intera area cliccabile della card per aprire la modale */}
                      <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => setSelectedProduct(item)}
                      >
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                          <Card.Img
                            variant="top"
                            src={item.imageUrl}
                            alt={item.title}
                            style={{
                              objectFit: 'cover',
                              height: '100%',
                              width: '100%',
                              transition: 'transform 0.3s'
                            }}
                            className="hover-zoom"
                          />
                        </div>

                        <Card.Body>
                          <div className="d-flex justify-content-between align-items-start">
                            <Card.Title>{item.title}</Card.Title>
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
                      </div> {/* Fine div cliccabile per la modale */}

                      <Card.Footer className="bg-white border-0 d-flex justify-content-between">
                        {/* Pulsante "Dettagli" che apre la modale */}
                        <Button
                          variant="outline-primary"
                          onClick={() => setSelectedProduct(item)}
                        >
                          Dettagli
                        </Button>

                        {/* Pulsante "Aggiungi" che aggiunge al carrello e NON apre la modale */}
                        <Button
  variant="primary"
  onClick={(e) => {
    e.stopPropagation(); // ESSENZIALE: impedisce al click di propagarsi al genitore (il div che apre la modale)
    handleAddToCart(item);
  }}
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
                src={selectedProduct?.imageUrl}
                alt={selectedProduct?.title}
                className="img-fluid rounded"
              />
            </Col>
            <Col md={6}>
              <p><strong>Prezzo:</strong> {selectedProduct?.price}</p>
              <p><strong>Condizione:</strong> {selectedProduct?.condition}</p>
              <p><strong>Dimensioni:</strong> {selectedProduct?.size}</p>
              <p><strong>Tipo:</strong> {selectedProduct?.type}</p>
              <p><strong>Anno di produzione:</strong> {selectedProduct?.productionYear || 'N/A'}</p>
              <p><strong>Descrizione:</strong> {selectedProduct?.description}</p>
              <p><strong>Tempi di consegna:</strong> {selectedProduct?.deliveryTime || 'N/A'}</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedProduct(null)}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={() => {
            // Aggiungi al carrello dalla modale e chiudi la modale
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