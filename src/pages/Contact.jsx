import { useEffect, useMemo, useState } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [name, setName]   = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg]     = useState('');
  const [touched, setTouched] = useState({name:false,email:false,msg:false});
  const [sent, setSent] = useState(false);

  const errors = useMemo(() => {
    return {
      name: name.trim().length < 3 ? 'Mínimo 3 caracteres' : '',
      email: EMAIL_RE.test(email) ? '' : 'Email inválido',
      msg: msg.trim().length < 10 ? 'Mínimo 10 caracteres' : '',
    };
  }, [name,email,msg]);

  const invalid = !!(errors.name || errors.email || errors.msg);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({name:true,email:true,msg:true});
    if (invalid) return;
    // simular envío
    setSent(true);
  };

  useEffect(()=>{ if(sent) {
    const t = setTimeout(()=> setSent(false), 2500);
    return ()=> clearTimeout(t);
  }},[sent]);

  return (
    <div className="container py-4">
      <h2 className="mb-3">Contacto</h2>
      {sent && <div className="alert alert-success">¡Mensaje enviado! Te responderemos pronto.</div>}

      <form onSubmit={handleSubmit} noValidate className="row g-3">
        <div className="col-12 col-md-6">
          <label className="form-label" htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched(t => ({ ...t, name: true }))}
          />
          {touched.name && errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched(t => ({ ...t, email: true }))}
          />
          {touched.email && errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="col-12">
          <label className="form-label" htmlFor="msg">Mensaje</label>
          <textarea
            id="msg"
            rows="4"
            className={`form-control ${touched.msg && errors.msg ? 'is-invalid' : ''}`}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onBlur={() => setTouched(t => ({ ...t, msg: true }))}
          />
          {touched.msg && errors.msg && <div className="invalid-feedback">{errors.msg}</div>}
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit" disabled={invalid}>Enviar</button>
        </div>
      </form>
    </div>
  );
}