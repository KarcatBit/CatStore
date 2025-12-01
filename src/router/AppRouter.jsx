import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Login from "../pages/Login";
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Offers from '../pages/Offers';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';
import AdminOrders from '../pages/admin/AdminOrders';
import AdminLayout from '../pages/admin/AdminLayout';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminProducts from '../pages/admin/AdminProducts';
import RequireRole from './RequireRole';

export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* Shell que ocupa todo el alto de la ventana */}
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        {/* El contenido crece y empuja el footer hacia abajo */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<Categories />} />
            <Route path="/ofertas" element={<Offers />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/admin" element={<RequireRole allowedRoles={["ROLE_ADMIN", "ROLE_VENDEDOR"]}>
              <AdminLayout />
              </RequireRole>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="productos" element={<AdminProducts />} />
              <Route path="ordenes" element={<AdminOrders />} />
            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}