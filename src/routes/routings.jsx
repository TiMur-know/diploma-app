import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

import ErrorComponent from '../layouts/Layout1/ErrorComponent2';
import TransportsPage from '../pages/TransportsPage';
import PredictPage from '../pages/PredictPage';
import RoutePage from '../pages/RoutePage';
import TransportPage from '../pages/TransportPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    index: true,
    errorElement: <ErrorComponent />,
  },
  {
    path: '/routes',
    element: <RoutePage />,
  },
  {
    path: '/transports',
    element: <TransportsPage />,
  },
  {
    path: '/transports/:id',
    element: <TransportPage />,
  },
  {
    path: '/predict',
    element: <PredictPage />,
  },
]);
export default router;
