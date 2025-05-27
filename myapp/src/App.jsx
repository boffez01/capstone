import { Outlet } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; 

const App = () => {
  return (
    <>
      <ScrollToTop /> 
      <Navbar /> 
      <main className="content-offset"> 
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

export default App;