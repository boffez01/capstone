import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContainersSection = () => {
  const originalPreviewContainers = [
    {
      title: "Container 20 piedi",
      image: 'https://images.sbito.it/api/v1/sbt-ads-images-pro/images/88/883c2d2b-a35d-4b98-8060-6276f1ab9da0?rule=fullscreen-1x-auto',
      id: '1'
    },
    {
      title: "Box Ufficio",
      image: 'https://www.container.it/upload/prodotti/media2/21-b_b_15.jpg',
      id: '2'
    },
    {
      title: "Cabina Bagno",
      image: 'https://www2.container.it/wp-content/uploads/2023/12/box-prefabbricati-modello-n1-wc-lavabo-e-doccia-servizi-igienici-vari-4-14-m.jpg.webp',
      id: '3'
    },
    {
      title: "Container HC 40 piedi",
      image: 'https://www2.container.it/wp-content/uploads/2024/10/40-hc.jpg',
      id: '4'
    },
    {
      title: "Container Usato",
      image: 'https://www2.container.it/wp-content/uploads/2023/12/container-40-usato.jpg',
      id: '5'
    },
  ];

  const animatedContainers = [
    ...originalPreviewContainers,
    ...originalPreviewContainers.map(item => ({ ...item, id: `${item.id}-dup1` })),
    ...originalPreviewContainers.map(item => ({ ...item, id: `${item.id}-dup2` }))
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">I Nostri Contenitori</h2>
        <p className="lead text-center mb-5">
          Scopri la nostra vasta selezione di contenitori e box prefabbricati,
          soluzioni robuste e versatili per ogni esigenza di stoccaggio e logistica.
        </p>

        <div className="containers-animation-wrapper">
          <div className="containers-scroll">
            {animatedContainers.map((item, index) => (
              <div key={item.id || index} className="container-animated-item">
                <Link to="/contenitori">
                  <Card className="h-100 border-0">
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body className="p-2">
                      <Card.Title className="text-dark h6">{item.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-5">
          <Button as={Link} to="/contenitori" variant="primary" size="lg">
            VAI AL CATALOGO COMPLETO
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ContainersSection;
