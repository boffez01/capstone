
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Alert, Table } from 'react-bootstrap';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAdminDashboardData = async () => {
            const token = localStorage.getItem('adminAuthToken');

            if (!token) {
                console.log("Nessun token admin trovato, reindirizzo al login.");
                navigate('/admin/login');
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const response = await fetch('http://localhost:8080/api/admin/dashboard', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    let errorMessage = `Errore nel caricamento dei dati: ${response.status} ${response.statusText}`;
                    try {
                        const errorData = await response.json();
                        errorMessage = errorData.message || errorData.error || errorMessage;
                    } catch (e) {

                    }

                    if (response.status === 401 || response.status === 403) {
                        setError('Accesso non autorizzato. Effettua nuovamente il login.');
                        localStorage.removeItem('adminAuthToken');
                        navigate('/admin/login');
                    } else {
                        setError(errorMessage);
                    }
                    return;
                }

                const data = await response.json();
                setDashboardData(data);
                console.log("Dati dashboard admin ricevuti:", data);
            } catch (err) {
                setError('Errore di rete durante il caricamento dei dati. Assicurati che il server sia attivo.');
                console.error('Errore fetch dashboard:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchAdminDashboardData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminAuthToken');
        navigate('/admin/login');
    };

    const cardStyle = {
        minHeight: '150px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    };

    if (loading) {
        return (
            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <div>Caricamento dati dashboard...</div>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <Alert variant="danger" className="text-center">
                    <p>{error}</p>
                    <Button variant="outline-danger" onClick={() => navigate('/admin/login')}>
                        Torna al Login
                    </Button>
                </Alert>
            </Container>
        );
    }

    return (
        <Container className="my-5">
            <Row className="mb-4">
                <Col>
                    <h1 className="text-center">Dashboard Amministrativa</h1>
                    <p className="text-center text-muted">Benvenuto, {dashboardData?.username || 'Amministratore'}!</p>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col className="text-end">
                    <Button variant="danger" onClick={handleLogout}>
                        Esci dall'Admin
                    </Button>
                </Col>
            </Row>

            <Row className="g-4 mb-5">
                <Col md={6} lg={4}>
                    <Card style={cardStyle} className="shadow-sm">
                        <Card.Body>
                            <Card.Title>Utenti Registrati</Card.Title>
                            <Card.Text className="display-4 fw-bold text-primary">
                                {dashboardData?.totalUsers || 'N/A'}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card style={cardStyle} className="shadow-sm">
                        <Card.Body>
                            <Card.Title>Ordini in Sospeso</Card.Title>
                            <Card.Text className="display-4 fw-bold text-warning">
                                {dashboardData?.pendingOrders || 'N/A'}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card style={cardStyle} className="shadow-sm">
                        <Card.Body>
                            <Card.Title>Nuovi Messaggi</Card.Title>
                            <Card.Text className="display-4 fw-bold text-info">
                                {dashboardData?.newMessages || 'N/A'}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="g-4 mt-4">
                <Col md={6} lg={4} className="mb-4">
                    <Card className="shadow-sm h-100">
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <div>
                                <Card.Title>Messaggi di Contatto</Card.Title>
                                <Card.Text>Visualizza e gestisci i messaggi ricevuti dal form contatti.</Card.Text>
                            </div>
                            <Button as={Link} to="/admin/messages" variant="primary" className="mt-3">
                                Vai ai Messaggi
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card className="shadow-sm h-100">
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <div>
                                <Card.Title>Gestione Container</Card.Title>
                                <Card.Text>Aggiungi, modifica o elimina container dal catalogo.</Card.Text>
                            </div>
                            <Button as={Link} to="/admin/containers" variant="info" className="mt-3"> 
                                Vai alla Gestione
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={4} className="mb-4">
                    <Card className="shadow-sm h-100">
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <div>
                                <Card.Title>Gestione Ordini</Card.Title>
                                <Card.Text>Visualizza e aggiorna lo stato degli ordini dei clienti.</Card.Text>
                            </div>
                            <Button as={Link} to="/admin/orders" variant="warning" className="mt-3">
                                Vai agli Ordini
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={4} className="mb-4">
                    <Card className="shadow-sm h-100">
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <div>
                                <Card.Title>Gestione Clienti</Card.Title>
                                <Card.Text>Visualizza, aggiungi e modifica i dati dei clienti. (Prossimamente!)</Card.Text>
                            </div>
                            <Button variant="secondary" disabled className="mt-3">
                                Vai ai Clienti
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {dashboardData && (
                <Row className="mt-5">
                    <Col>
                        <h3 className="mb-3">Dettagli Dashboard</h3>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Proprietà</th>
                                    <th>Valore</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(dashboardData).map(([key, value]) => (
                                    <tr key={key}>
                                        <td>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                                        <td>{typeof value === 'object' && value !== null ? JSON.stringify(value) : String(value)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default AdminDashboard;