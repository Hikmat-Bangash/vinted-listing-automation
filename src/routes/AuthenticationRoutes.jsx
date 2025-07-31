import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// maintenance routing
const LoginPage = Loadable(lazy(() => import('views/pages/authentication/Login')));
const RegisterPage = Loadable(lazy(() => import('views/pages/authentication/Register')));
const ForgotPasswordPage = Loadable(lazy(() => import('views/pages/authentication/ForgotPassword')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/',
      element: <Navigate to="/login" replace />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/register',
      element: <RegisterPage />
    },
    {
      path: '/forgot-password',
      element: <ForgotPasswordPage />
    },
    {
      path: '/pages/login',
      element: <LoginPage />
    },
    {
      path: '/pages/register',
      element: <RegisterPage />
    }
  ]
};

export default AuthenticationRoutes;
