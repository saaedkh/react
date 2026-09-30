// src/contexts/authContext/index.jsx
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);
  const [isGoogleUser, setIsGoogleUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState(null); // 'admin' or 'user'
  const [username, setUsername] = useState(""); // Added state for username
  const [password, setPassword] = useState(""); // Added state for password (note: not recommended to store passwords in state)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUsername(user.email); // Assume username is the email (or you could use a different property)
      setPassword(""); // Reset password (it's not recommended to store passwords in state for security reasons)

      const isEmail = user.providerData.some(
        (provider) => provider.providerId === "password"
      );
      setIsEmailUser(isEmail);

      // Check if user is an admin based on email
      const fetchedUserType = user.email === "admin@admin.com" ? "admin" : "user";
      setUserType(fetchedUserType);

      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUsername("");
      setPassword("");
      setUserLoggedIn(false);
      setUserType(null);
    }

    setLoading(false);
  }

  const value = {
    userLoggedIn,
    isEmailUser,
    isGoogleUser,
    currentUser,
    username, // Expose username in the context value
    password, // Expose password in the context value (not recommended for security reasons)
    setCurrentUser,
    setUsername,
    setPassword,
    userType, // Expose userType in the context value
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
