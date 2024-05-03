/* IMPORTACIONES */
import React, { createContext, useState } from 'react';
/* CONSTANTES */
export const AuthContext = createContext();
/* INTERFACES */
// interface IAuthProvider {
//   children:React.ReactNode;
// }
// AuthProvider.propTypes = {children: React.ReactNode,};
AuthProvider.propTypes = {children:React.JSX};
/* COMPONENTE */
// const AuthProvider = ( {children} ) => {
function AuthProvider ( {children} ) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const value = { isAuthenticated, login, logout };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;