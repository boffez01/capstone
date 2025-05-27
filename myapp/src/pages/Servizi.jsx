import { Container } from 'react-bootstrap';
import Services from '../components/Services';
import Stats from '../components/Stats';

const Servizi = () => {
  return (
    <>
      <Container className="py-5">
        <Services />
      </Container>
      <Stats />
    </>
  );
};

export default Servizi;