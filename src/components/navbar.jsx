//componets/navabr.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { doSignOut } from '../firebase/auth';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { userLoggedIn, currentUser, userType } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`flex justify-between items-center p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} fixed top-0 left-0 w-full z-20 shadow-md`}>
      <div className="flex items-center space-x-4">
        <img src="/images/adidas-logo.png" alt="Adidas Logo" className="h-10" />
        <Link
          to="/home"
          className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} hover:${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
        >
          My E-Commerce
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link
          to="/home"
          className={`text-lg ${isDarkMode ? 'text-white' : 'text-black'} hover:${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition duration-200`}
        >
          Home
        </Link>
        <Link
          to="/products"
          className={`text-lg ${isDarkMode ? 'text-white' : 'text-black'} hover:${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition duration-200`}
        >
          Products
        </Link>
        <Link
          to="/cart"
          className={`text-lg ${isDarkMode ? 'text-white' : 'text-black'} hover:${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition duration-200`}
        >
          Cart
        </Link>
        {userLoggedIn && userType === 'admin' && (
          <Link
            to="/admin-dashboard"
            className={`text-lg ${isDarkMode ? 'text-white' : 'text-black'} hover:${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition duration-200`}
          >
            Admin Dashboard
          </Link>
        )}
        {userLoggedIn ? (
          <>
            <span className={`text-lg ${isDarkMode ? 'text-white' : 'text-black'} px-3 py-2`}>
              Welcome, {currentUser.email}
            </span>
            <button
              onClick={() => {
                doSignOut().then(() => navigate('/login'));
              }}
              className={`text-lg ${isDarkMode ? 'text-white' : 'text-black'} hover:${isDarkMode ? 'text-gray-300' : 'text-gray-600'} px-3 py-2 transition duration-200`}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className={`text-lg ${isDarkMode ? 'text-white' : 'text-black'} hover:${isDarkMode ? 'text-gray-300' : 'text-gray-600'} px-3 py-2 transition duration-200`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`text-lg ${isDarkMode ? 'text-white' : 'text-black'} hover:${isDarkMode ? 'text-gray-300' : 'text-gray-600'} px-3 py-2 transition duration-200`}
            >
              Register
            </Link>
          </>
        )}
        <button
          onClick={toggleTheme}
          className={`ml-4 px-4 py-2 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'} rounded transition duration-200`}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
