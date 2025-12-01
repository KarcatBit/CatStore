import { API_BASE_URL } from "./api/config";
console.log("API_BASE_URL:", API_BASE_URL);

import AppRouter from './router/AppRouter';
import Navbar from './components/Navbar';

export default function App() {
      
  return <AppRouter />;
}