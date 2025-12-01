import p1 from '../assets/img/logo1.png';
import p2 from '../assets/img/promo2.png';


export default function Promo() {
  return (
    <section className="promo">
      <div className="promo-box left"  style={{ backgroundImage: `url(${p1})` }} />
      <div className="promo-box right" style={{ backgroundImage: `url(${p2})` }} />
    </section>
  );
}
