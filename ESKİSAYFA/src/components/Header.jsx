import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="topbar">
      <div className="container nav">
        <div className="brand">
          <Link to="/" aria-label="Pascal Flow Ana Sayfa">
            <img className="brand-logo" src="/assets/logo.jpeg" alt="Pascal Flow logosu" />
          </Link>
        </div>
        <ul className="menu">
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><a href="/#about-us">Hakkımızda</a></li>
          <li className="dropdown">
            <button type="button">Ürünler</button>
            <ul className="submenu">
              <li><Link to="/single-filling-machine">Tekli Dolum Makinesi</Link></li>
              <li><Link to="/hygienic-centrifugal-pump">Hijyenik Santrifüj Pompa</Link></li>
            </ul>
          </li>
          <li><a href="/#industries">Sektörler</a></li>
          <li><Link to="/contact">İletişim</Link></li>
        </ul>
      </div>
    </header>
  );
}
