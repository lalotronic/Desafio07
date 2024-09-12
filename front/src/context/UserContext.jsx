// src/context/UserContext.jsx
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); // Estado inicial del token

  const logout = () => {
    setToken(false); // Cambiar el estado del token a false al hacer logout
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;