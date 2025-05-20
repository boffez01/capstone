import ContactForm from '../components/ContactForm';
import { Container } from 'react-bootstrap';

const Contatti = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Contatti</h1>
      <ContactForm />
    </Container>
  );
};

export default Contatti;