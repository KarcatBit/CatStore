import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  getAdminProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../api/productsApi";

export default function AdminProducts() {
  const { token } = useAuth();

  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
  });

  const loadProducts = async () => {
    try {
      const data = await getAdminProducts(token);
      setProducts(data);
    } catch (err) {
      console.error("Error cargando productos:", err.message);
    }
  };

  useEffect(() => {
    if (token) {
      loadProducts();
    }
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    }));
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setForm({
      name: "",
      description: "",
      price: 0,
      stock: 0,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await updateProduct(editingId, form, token);
      } else {
        await createProduct(form, token);
      }

      await loadProducts();
      handleCancelEdit();
    } catch (err) {
      console.error("Error guardando producto:", err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar este producto?")) return;

    try {
      await deleteProduct(id, token);
      await loadProducts();
    } catch (err) {
      console.error("Error eliminando producto:", err.message);
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Gestión de Productos</h2>

      {/* Tabla de productos */}
      {products.length === 0 ? (
        <p>No hay productos registrados.</p>
      ) : (
        <table className="table table-striped mb-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Stock</th>
              <th style={{ width: "160px" }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>${p.price}</td>
                <td>{p.stock}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => handleEdit(p)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(p.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Formulario crear / editar */}
      <h3>{editingId ? "Editar producto" : "Crear nuevo producto"}</h3>

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Precio</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="form-control"
            min="0"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Stock</label>
          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            className="form-control"
            min="0"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Descripción</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="col-12 d-flex gap-2">
          <button type="submit" className="btn btn-success">
            {editingId ? "Guardar cambios" : "Crear producto"}
          </button>
          {editingId && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancelEdit}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}