import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Realizar validação dos dados de login
    if (userData.username === 'admin' && userData.password === 'admin123') {
      // Dados de login válidos, definir o usuário no estado
      setUser(userData);
    } else {
      // Dados de login inválidos
      alert('Dados de login inválidos');
    }
  };

  const logout = () => {
    // Remover os dados do usuário do estado
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
