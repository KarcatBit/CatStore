import { useMemo, useState } from 'react';
import { products, categories } from '../data/products';
import PromoGrid from '../components/PromoGrid';

export default function Categories() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('all');

  const filtered = useMemo(() => {
    let list = products;
    if (cat !== 'all') list = list.filter(p => p.category === cat);
    if (q.trim()) {
      const s = q.toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(s));
    }
    return list;
  }, [q, cat]);

  const onAdd = (p) => console.log('Agregar al carrito (categorías):', p);

  return (
    <div className="container py-4">
      <h2 className="mb-3">Categorías</h2>

      <div className="row g-3 align-items-end mb-4">
        <div className="col-12 col-md-4">
          <label className="form-label">Categoría</label>
          <select className="form-select" value={cat} onChange={e => setCat(e.target.value)}>
            <option value="all">Todas</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="col-12 col-md-4">
          <label className="form-label">Buscar</label>
          <input className="form-control" value={q} onChange={e=>setQ(e.target.value)} placeholder="Ej: rascador" />
        </div>
      </div>

      <PromoGrid items={filtered} onAdd={onAdd} />
    </div>
  );
}