import { Container } from 'react-bootstrap';
import AboutUs from '../components/AboutUs';
import ValuesSection from '../components/ValuesSection';
import Certifications from '../components/Certifications';
import Stats from '../components/Stats';

const ChiSiamo = () => {
  return (
    <>
      <Container className="py-5">
        <h1 className="text-center mb-5">Chi Siamo</h1>
        <AboutUs />
      </Container>
      
      <ValuesSection />
      <Certifications />
      <Stats />
    </>
  );
};

export default ChiSiamo;