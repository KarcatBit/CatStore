import { Link } from 'react-router-dom';


export default function Hero() {
  return (
    <section className="hero d-flex align-items-center">
      <div className="container">
        <div className="hero-text">
          <h1>
            Encuentra todo <br />
            para tu gato
          </h1>
          <p>Explora nuestro catalogo con las mejoras marcas.</p>

          <Link to="/ofertas" className="btn btn-primary btn-lg mt-3">
            Ver ofertas
          </Link>
        </div>
      </div>
    </section>
  );
}
