import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { getAllOrders } from "../../api/ordersApi";

export default function AdminDashboard() {
  const { token } = useAuth();

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await getAllOrders(token);
        console.log("Órdenes desde backend:", data);
      } catch (err) {
        console.error("Error cargando órdenes:", err.message);
      }
    };

    if (token) {
      loadOrders();
    }
  }, [token]);

  return <h2>Panel de administración</h2>;
}