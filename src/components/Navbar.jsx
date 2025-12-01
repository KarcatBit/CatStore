import { Link, NavLink } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext';
import logo from '../assets/img/logo2.png';

export default function Navbar() {
  const { user, logoutUser, isAdmin, isVendedor } = useAuth();

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light header-navbar">
      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" height="40" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-2">

            {/* ADMIN SOLO PARA ADMIN O VENDEDOR */}
            {(isAdmin || isVendedor) && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                  Admin
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <NavLink className="nav-link" to="/">Inicio</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/categorias">Categorias</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/ofertas">Ofertas</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
            </li>

            {/* BOTÓN LOGIN / LOGOUT */}
            {!user ? (
              <li className="nav-item">
                <NavLink className="nav-link btn btn-outline-primary px-3 py-1" to="/login">
                  Iniciar sesión
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-outline-danger px-3 py-1"
                  onClick={handleLogout}
                >
                  Cerrar sesión ({user.username})
                </button>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}
