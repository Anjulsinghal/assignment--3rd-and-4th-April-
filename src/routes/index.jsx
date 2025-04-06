import React from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

// Public route - accessible to all users
const PublicRoute = ({ children }) => {
  return children;
};

// Private route - requires authentication
const PrivateRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Auth route - redirects to dashboard if already authenticated
const AuthRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/dashboard" /> : children;
};

const routes = (isAuthenticated) => [
  {
    path: "/",
    element: (
      <PublicRoute>
        <Layout>
          <Home />
        </Layout>
      </PublicRoute>
    )
  },
  {
    path: "/contact",
    element: (
      <PublicRoute>
        <Layout>
          <Contact />
        </Layout>
      </PublicRoute>
    )
  },
  {
    path: "/login",
    element: (
      <AuthRoute isAuthenticated={isAuthenticated}>
        <Login />
      </AuthRoute>
    )
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute isAuthenticated={isAuthenticated}>
        <Layout>
          <Dashboard />
        </Layout>
      </PrivateRoute>
    )
  },
  {
    path: "/products",
    element: (
      <PrivateRoute isAuthenticated={isAuthenticated}>
        <Layout>
          <Products />
        </Layout>
      </PrivateRoute>
    )
  },
  {
    path: "/about",
    element: (
      <PublicRoute >
        <Layout>
          <About />
        </Layout>
      </PublicRoute>
    )
  },
  {
    path: "*",
    element: (
      <PublicRoute>
        <NotFound />
      </PublicRoute>
    )
  }
];

export default routes;