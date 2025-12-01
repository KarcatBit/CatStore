import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getAllOrders } from "../../api/ordersApi";

export default function AdminOrders() {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getAllOrders(token);
        setOrders(data);
      } catch (err) {
        console.error(err);
      }
    };
    if (token) load();
  }, [token]);

  return (
    <div className="container">
      <h2 className="my-3">Listado de Órdenes</h2>

      {orders.length === 0 ? (
        <p>No hay órdenes registradas.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Total</th>
              <th>Cliente</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>${order.total}</td>
                <td>{order.customerName || "Cliente"}</td>
                <td>{order.createdAt || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}