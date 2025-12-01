export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container py-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <span className="text-muted">© {new Date().getFullYear()} CatStore</span>
        <ul className="nav">
          <li className="nav-item"><a className="nav-link px-2 text-muted" href="#">Términos</a></li>
          <li className="nav-item"><a className="nav-link px-2 text-muted" href="#">Privacidad</a></li>
          <li className="nav-item"><a className="nav-link px-2 text-muted" href="/contacto">Contacto</a></li>
        </ul>
      </div>
    </footer>
  );
  
}