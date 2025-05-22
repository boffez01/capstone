import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Servizi from './pages/Servizi';
import Contenitori from './pages/Contenitori';
import Contatti from './pages/Contatti';
import NotFound from './pages/NotFound';

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
    ],
  },
]);

export default router;
