import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Aqui você pode realizar a lógica de validação dos dados de login
    // e definir o usuário no estado local
    setUser(userData);
  };

  const logout = () => {
    // Aqui você pode realizar a lógica para fazer logout do usuário
    // e remover os dados do estado local
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
