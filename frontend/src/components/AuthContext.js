import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null); // Add token state

  const login = (newToken) => {
    setIsAuthenticated(true);
    setToken(newToken); // Store the new token
  };
  const logout = () => {
    setIsAuthenticated(false);
    setToken(null); // Clear the token on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}> {/* Expose token */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);