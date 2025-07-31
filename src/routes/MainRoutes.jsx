import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// new page routing
const OrdersPage = Loadable(lazy(() => import('views/pages/Orders')));
const UsersPage = Loadable(lazy(() => import('views/pages/Users')));
const ProductsPage = Loadable(lazy(() => import('views/pages/Products')));
const QRCodePage = Loadable(lazy(() => import('views/pages/QRCode')));

// logout component
const Logout = () => {
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('user');
  return <Navigate to="/login" replace />;
};

// authentication wrapper
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      path: '/dashboard',
      element: <DashboardDefault />
    },
    {
      path: '/orders',
      element: <OrdersPage />
    },
    {
      path: '/users',
      element: <UsersPage />
    },
    {
      path: '/products',
      element: <ProductsPage />
    },
    {
      path: '/qrcode',
      element: <QRCodePage />
    },
    {
      path: '/logout',
      element: <Logout />
    }
  ]
};

export default MainRoutes;

