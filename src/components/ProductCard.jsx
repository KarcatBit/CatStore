import PropTypes from 'prop-types';

export default function ProductCard({ title, price, image, badge, onAdd }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="position-relative">
        <img src={image} className="card-img-top" alt={title} loading="lazy" />
        {badge && (
          <span className="badge text-bg-danger position-absolute top-0 start-0 m-2">
            {badge}
          </span>
        )}
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text fw-bold mb-4">${price.toLocaleString('es-CL')}</p>
        <button onClick={onAdd} className="btn btn-outline-primary mt-auto" aria-label={`Agregar ${title} al carrito`}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  badge: PropTypes.string,
  onAdd: PropTypes.func,
};

ProductCard.defaultProps = {
  badge: null,
  onAdd: () => {},
};