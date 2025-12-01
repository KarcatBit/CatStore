import PromoGrid from '../components/PromoGrid';
import { products } from '../data/products';

export default function Offers() {
  const offers = products.filter(p => Boolean(p.badge)); // en oferta si tiene badge
  const handleAddToCart = (product) => console.log('Agregar al carrito (oferta):', product);

  return (
    <div className="container py-4">
      <h2 className="mb-4">Ofertas</h2>
      <PromoGrid items={offers} onAdd={handleAddToCart} />
    </div>
  );
}