// /* IMPORTACIONES */
// import React, { createContext, useState } from 'react';
// /* CONSTANTES */
// export const AuthContext = createContext();
// /* COMPONENTE */
// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const login = () => {
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//   };

//   const value = { isAuthenticated, login, logout };

//   return (
//     <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definición de tipos
type AuthContextType = {
  isAuthenticated: boolean;
  login: (token:string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Proveedor de autenticación
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(localStorage.getItem('token') ? true : false);
  console.log(isAuthenticated);
  const login = (token:string) => {
    // Lógica de autenticación (puedes personalizarla según tus necesidades)
    setIsAuthenticated(true);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    // Lógica de cierre de sesión (puedes personalizarla según tus necesidades)
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acceder al contexto de autenticación
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
//   }
//   return context;
// };
