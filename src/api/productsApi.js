import { apiGet, apiPost, apiPut, apiDelete } from "./httpClient";

// Productos visibles para todos (home, catálogo público)
export async function getAllProducts() {
  return apiGet("/products", null); // GET /api/v1/products
}

// Productos para el panel admin
export async function getAdminProducts(token) {
  return apiGet("/products", token);
}

// Crear producto (ADMIN)
export async function createProduct(product, token) {
  return apiPost("/products", product, token);
}

// Actualizar producto (ADMIN)
export async function updateProduct(id, product, token) {
  return apiPut(`/products/${id}`, product, token);
}

// Eliminar producto (ADMIN)
export async function deleteProduct(id, token) {
  return apiDelete(`/products/${id}`, token);
}