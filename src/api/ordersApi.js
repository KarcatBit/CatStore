import { apiGet } from "./httpClient";

// Obtiene todas las órdenes (rol ADMIN o VENDEDOR)
export async function getAllOrders(token) {
  return apiGet("/orders", token); //  GET http://localhost:8080/api/v1/orders
}