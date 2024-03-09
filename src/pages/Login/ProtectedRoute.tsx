/* IMPORTACIONES */
import React, { useContext } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { AuthContext,useAuth } from './AuthContext';
export interface RouterProps {
  path: string;
  element: React.ReactNode;
}
/* COMPONENTE */
//  function ProtectedRoute ({ path,element }:RouterProps): React.ReactElement  {
  function ProtectedRoute (children){
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    // REDIRECCIONAR AL LOGIN SI EL USUARIO NO ESTA AUTENTICADO
    return <Navigate to="/login" replace />; 
  }
  return children
  // return (<Route path={path} element={element} />);
};

export default ProtectedRoute;

/*
PARA USARLO SE PONE COMO HIJO LA RUTA QUE QUEREMOS PROTEJER
*/
// import React, { useContext } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { AuthContext } from './AuthContext'; // Assuming AuthContext is defined

// interface AuthContextValue {
//   isAuthenticated: boolean;
// }

// const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { isAuthenticated } = useContext<AuthContextContextValue>(AuthContext);

//   if (!isAuthenticated) {
//     // REDIRECCIONAR AL LOGIN SI EL USUARIO NO ESTA AUTENTICADO
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
