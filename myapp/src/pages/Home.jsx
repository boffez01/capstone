import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ContainersSection from '../components/ContainersSection';
import ValuesSection from '../components/ValuesSection';
import Certifications from '../components/Certifications';
import Stats from '../components/Stats';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <ContainersSection />
      <ValuesSection />
      <Certifications />
      <Stats />
    </>
  );
};

export default Home;