import React from 'react';
import { useRoutes, Outlet } from 'react-router-dom'; // Import Outlet for page-single structure
import Home from './components/home';
import Products from './components/Products';
import Cart from './components/cart/Cart';
import Login from './components/auth/login';
import Register from './components/auth/register';
import ProductDetail from './components/ProductDetail';
import AdminDashboard from './components/AdminDashboard';
import SendReport from './components/SendReport';
import Checkout from './components/checkout/Checkout';
import Navbar from './components/navbar';
import UserOptions from './components/UserOptions';
import { AuthProvider } from './contexts/authContext';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

const App = () => {
  const routes = useRoutes([
    { path: '/home', element: <Home /> },
    { path: '/products', element: <Products /> },
    { path: '/cart', element: <Cart /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/admin-dashboard', element: <AdminDashboard /> },
    { path: '/send-report', element: <SendReport /> }, 
    { path: '/product/:id', element: <ProductDetail /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '*', element: <Home /> } // Fallback route
  ]);

  return (
    <AuthProvider>
      <ThemeProvider>
        <Navbar />
        <UserOptions />
        <main className="page-content">
          {routes}
          {/* Use an Outlet if you have nested routes that need to be rendered here */}
        </main>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
