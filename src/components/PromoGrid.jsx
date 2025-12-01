/* eslint-disable react/prop-types */
import ProductCard from './ProductCard';

export default function PromoGrid({ items, onAdd }) {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="h4 mb-4">Productos destacados</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {items.map((p) => (
            <div className="col" key={p.id}>
              <ProductCard
                title={p.title}
                price={p.price}
                image={p.image}
                badge={p.badge}
                onAdd={() => onAdd(p)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}