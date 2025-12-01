import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Promo from "../components/Promo";
import PromoGrid from "../components/PromoGrid";
import { getAllProducts } from "../api/productsApi";

export default function Home() {
  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    console.log("Agregar al carrito:", product);
  };

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getAllProducts();
        console.log("Productos desde backend:", data);
        setProducts(data);
      } catch (err) {
        console.error("Error cargando productos:", err.message);
      }
    };
    load();
  }, []);

  const destacados = products.slice(0, 4);

  return (
    <>
      <Hero />
      <Promo />
      <div className="container my-5">
        {destacados.length === 0 ? (
          <p>No hay productos disponibles.</p>
        ) : (
          <PromoGrid items={destacados} onAdd={handleAddToCart} />
        )}
      </div>
    </>
  );
}