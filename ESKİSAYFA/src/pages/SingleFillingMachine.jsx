import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function SingleFillingMachine() {
  return (
    <main>
      <Helmet>
        <title>Tekli Dolum Makinesi | Pascal Flow</title>
        <meta name="description" content="Akışkan ürünlerin kontrollü ve güvenilir dolumu için loblu pompa teknolojili, PLC kontrollü, hijyenik tekli dolum makinesi." />
        <link rel="canonical" href="https://pascalflow.com/single-filling-machine" />
      </Helmet>
      <section className="section section-top">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Ana Sayfa</Link> / Ürünler / Tekli Dolum Makinesi
          </div>
          <div className="section-head">
            <h2>Tekli Dolum Makinesi</h2>
            <p>Hassasiyet, hijyen ve kullanım kolaylığı bir arada.</p>
          </div>
          <div className="detail-layout">
            <div className="detail-image">
              <img src="/assets/tekli-dolum-makinesi.png" alt="Tekli Dolum Makinesi" />
            </div>
            <div className="detail-copy">
              <p>Üretim hattınızda hassasiyet, hijyen ve kullanım kolaylığını bir arada sunan tekli dolum makinemiz, özellikle akışkan ürünlerin kontrollü ve güvenilir şekilde dolumu için tasarlanmıştır.</p>
              <ul>
                <li>Loblu pompa teknolojisi sayesinde hassas ve tekrarlanabilir dolum miktarı sağlar.</li>
                <li>316 kalite paslanmaz çelik hijyenik yapısı ile gıda ve hassas ürün proseslerine uygundur.</li>
                <li>İhtiyaca göre loadcell veya flowmetre entegrasyonu ile farklı dolum kontrol seçenekleri sunar.</li>
                <li>PLC ekran üzerinden kolay ayar imkanı sayesinde operatör kullanımını pratik hale getirir.</li>
                <li>Tak-çalıştır yapısı ile hızlı kurulum ve kolay devreye alma avantajı sağlar.</li>
              </ul>
            </div>
          </div>
          <div className="info-strip">
            <strong>İletişim:</strong> Teknik bilgi ve teklif için <a href="tel:+905300684321" onClick={() => window.gtag_report_conversion('tel:+905300684321')}>+90 530 068 43 21</a> veya <a href="https://wa.me/905300684321" target="_blank" rel="noopener noreferrer" onClick={() => window.gtag_report_conversion('https://wa.me/905300684321')}>WhatsApp</a>.
          </div>
        </div>
      </section>
    </main>
  );
}
