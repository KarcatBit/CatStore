
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function AdminLayout() {
  const { isAdmin, isVendedor } = useAuth();

  return (
    <div className="container-fluid">
      {/* Encabezado de admin con botón para volver */}
      <header className="d-flex justify-content-between align-items-center p-3 border-bottom bg-light">
        <h5 className="m-0">Admin</h5>
        <Link to="/" className="btn btn-outline-secondary btn-sm">
          Volver a Inicio
        </Link>
      </header>

      <div className="row">
        <aside className="col-12 col-md-3 col-lg-2 border-end min-vh-100 py-4">
          <nav className="nav flex-column px-2">
            {isAdmin && (
            <NavLink className="nav-link" to="/admin">Dashboard</NavLink>)}
            {(isAdmin || isVendedor) && (
              <>
            <NavLink className="nav-link" to="/admin/productos">Productos</NavLink>
            <NavLink className="nav-link" to="/admin/ordenes">Órdenes</NavLink>
            </>
            )}
          </nav>
        </aside>

        <main className="col py-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}