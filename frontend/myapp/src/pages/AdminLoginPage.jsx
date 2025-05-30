import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Alert, Form } from 'react-bootstrap';


const AdminLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const formData = new URLSearchParams();
            formData.append('username', username);
            formData.append('password', password);

            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({ username, password }) 
            });

            if (response.ok) {
             
                const data = await response.json();
                if (data && data.token) {
                    localStorage.setItem('adminAuthToken', data.token); 
                    navigate('/admin/dashboard'); 
                } else {
                    setError('Login riuscito, ma nessun token ricevuto.');
                }
            } else if (response.status === 401) {
                setError('Autenticazione fallita: Credenziali non valide.');
            } else {
                const errorText = await response.text();
                setError('Errore durante il login: ' + errorText);
            }
        } catch (err) {
            setError('Errore di connessione: Impossibile contattare il server.');
            console.error('Errore login:', err);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Card style={{ width: '400px' }} className="p-4">
                <h2 className="text-center mb-4">Login Amministratore</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Inserisci username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Accedi
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};

export default AdminLoginPage;