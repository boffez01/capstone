import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ContainersSection from '../components/ContainersSection';
import ValuesSection from '../components/ValuesSection';
import Stats from '../components/Stats';
import CallToActionContactSection from '../components/CallToActionContactSection';

import FaqSection from '../components/FaqSection'; 

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <ContainersSection />
      <ValuesSection />
      <Stats />

      
      <FaqSection /> 

      <CallToActionContactSection />
    </>
  );
};

export default Home;