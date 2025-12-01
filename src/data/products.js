import alimento from '../assets/img/felicette_3k.jpg';
import rascador from '../assets/img/rascador_deluxe.jpg';
import cama from '../assets/img/cama_suave_xl.jpeg';
import collar from '../assets/img/collar_con_placa.jpg';

//helpers de persistencia
import { persistGet, persistSet } from './persist';

// Clave usada en localStorage
const KEY = 'products';

// ==========================
//  Datos iniciales (semilla)
// ==========================
export const products = [
  { id: 'p1', title: 'Alimento Premium 3kg', price: 15990, image: alimento, badge: 'Oferta', category: 'alimento' },
  { id: 'p2', title: 'Rascador Deluxe', price: 24990, image: rascador, category: 'accesorios' },
  { id: 'p3', title: 'Cama Suave XL', price: 19990, image: cama, badge: '-20%', category: 'camas' },
  { id: 'p4', title: 'Collar con Placa', price: 5990, image: collar, category: 'accesorios' },
];

// Categorías
export const categories = ['alimento', 'accesorios', 'camas'];

// Exporta la semilla para persistencia
export const seedProducts = products;

// ==========================
//  Funciones CRUD
// ==========================
export function getAllProducts() {
  return persistGet(KEY, seedProducts);
}

export function getProductById(id) {
  return getAllProducts().find(p => p.id === id);
}

export function createProduct(product) {
  const data = getAllProducts();
  const id = crypto.randomUUID();
  const newItem = { id, ...product };
  persistSet(KEY, [...data, newItem]);
  return newItem;
}

export function updateProduct(id, patch) {
  const data = getAllProducts();
  const next = data.map(p => p.id === id ? { ...p, ...patch } : p);
  persistSet(KEY, next);
  return getProductById(id);
}

export function deleteProduct(id) {
  const data = getAllProducts();
  persistSet(KEY, data.filter(p => p.id !== id));
}