// src/components/UserOptions.jsx
import React from 'react';
import { useAuth } from '../contexts/authContext';

const UserOptions = () => {
  const { userLoggedIn, userType } = useAuth();

  if (!userLoggedIn) {
    return null;
  }

  return (
    <div className="user-options">
      <h2>Welcome, {userType === 'admin' ? 'Admin' : 'User'}</h2>
      <ul>
        {userType === 'admin' ? (
          <>
            <li><a href="/admin-dashboard">Admin Dashboard</a></li>
            <li><a href="/manage-products">Manage Products</a></li>
          </>
        ) : (
          <>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/orders">My Orders</a></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default UserOptions;
