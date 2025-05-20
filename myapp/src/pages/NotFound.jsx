import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="py-5 my-5 text-center">
      <Row className="justify-content-center">
        <Col lg={8}>
          <h1 className="display-1 text-primary mb-4">404</h1>
          <h2 className="mb-4">Pagina non trovata</h2>
          <p className="lead mb-5">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
          <Button as={Link} to="/" variant="primary" size="lg">
            Torna alla Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;