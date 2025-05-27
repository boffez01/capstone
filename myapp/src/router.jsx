import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Servizi from './pages/Servizi'; 
import Contenitori from './pages/Contenitori'; 
import Contatti from './pages/Contatti';
import NotFound from './pages/NotFound';

import CarpenteriaSaldatura from './pages/servizi-dettaglio/CarpenteriaSaldatura';
import LavorazioneLamiera from './pages/servizi-dettaglio/LavorazioneLamiera';
import ManutenzioneIndustriale from './pages/servizi-dettaglio/ManutenzioneIndustriale';
import Piping from './pages/servizi-dettaglio/Piping';
import Impiantistica from './pages/servizi-dettaglio/Impiantistica';
import Montaggi from './pages/servizi-dettaglio/Montaggi';

import ProceedToOrderPage from './pages/ProceedToOrderPage'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />, 
    children: [
      { index: true, element: <Home /> }, 
      { path: 'chi-siamo', element: <ChiSiamo /> },
      { path: 'servizi', element: <Servizi /> },
      { path: 'contenitori', element: <Contenitori /> },
      { path: 'contatti', element: <Contatti /> },


      { path: 'procedi-ordine', element: <ProceedToOrderPage /> }, 

      { path: 'servizi/carpenteria-saldatura', element: <CarpenteriaSaldatura /> },
      { path: 'servizi/lavorazione-lamiera', element: <LavorazioneLamiera /> },
      { path: 'servizi/manutenzione-industriale', element: <ManutenzioneIndustriale /> },
      { path: 'servizi/piping', element: <Piping /> },
      { path: 'servizi/impiantistica', element: <Impiantistica /> },
      { path: 'servizi/montaggi', element: <Montaggi /> },
    ],
  },
]);

export default router;