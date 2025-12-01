import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RequireRole({ allowedRoles, children }) {
  const { token, user } = useAuth();
  const location = useLocation();

  if (!token) {
    // No autenticado, al login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const roles = user?.roles || [];
  const hasRole = allowedRoles.some((r) => roles.includes(r));

  if (!hasRole) {
    // Autenticado pero sin permisos, lo mandamos al inicio
    return <Navigate to="/" replace />;
  }

  return children;
}