import { Container } from 'react-bootstrap';
import Services from '../components/Services';
import Stats from '../components/Stats';

const Servizi = () => {
  return (
    <>
      <Container className="py-5">
        <h1 className="text-center mb-5">I Nostri Servizi</h1>
        <Services />
      </Container>
      <Stats />
    </>
  );
};

export default Servizi;