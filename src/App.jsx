import React from 'react';
import './index.css';

function App() {
  return (
    <>
      <header>
        <div className="nav">
          <div className="brand">ATLAS</div>
          <nav className="menu">
            <a href="#anasayfa">Ana Sayfa</a>
            <div className="dropdown">
              <a href="#urunler">Ürünler</a>
              <div className="dropdown-content">
                <a href="#tekli-dolum">Tekli Dolum Makinesi</a>
                <a href="#santrifuj">Hijyenik Santrifüj Pompa</a>
              </div>
            </div>
            <a href="#iletisim">İletişim</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Ana Sayfa / Hero Section */}
        <section className="hero" id="anasayfa">
          <div>
            <h1>Atlas ile hijyenik ve verimli akış çözümleri</h1>
            <p>
              Atlas, tekli dolum makineleri ve hijyenik santrifüj pompalar alanında güvenilir çözümler sunar.
              Gıda, içecek ve hijyen hassasiyeti gerektiren prosesler için modern ekipmanlar sağlar.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a className="btn" href="#urunler">Ürünleri İncele</a>
              <a className="btn btn-outline" href="#iletisim">Bize Ulaşın</a>
            </div>
          </div>
          <div>
            <img 
              src="/resim1.jpeg" 
              alt="Endüstriyel üretim ve dolum tesisi" 
              loading="lazy"
            />
          </div>
        </section>

        {/* Ürünler Grid */}
        <section id="urunler">
          <h2 className="section-title">Ürünlerimiz</h2>
          <div className="product-grid">
            <article className="product-card" id="tekli-dolum">
              <img 
                src="/resim1.jpeg" 
                alt="Tekli dolum makinesi" 
                loading="lazy"
              />
              <h3>Tekli Dolum Makinesi</h3>
              <p>
                Akışkan ürünlerin kontrollü ve hassas şekilde doldurulması için tasarlanmış kompakt çözüm.
              </p>
              <a className="btn btn-outline" href="#tekli-dolum-detay">Detayları Gör</a>
            </article>

            <article className="product-card" id="santrifuj">
              <img 
                src="/resim2.jpeg" 
                alt="Hijyenik santrifüj pompa" 
                loading="lazy"
              />
              <h3>Hijyenik Santrifüj Pompa</h3>
              <p>
                Hijyenik proseslerde güvenli transfer için yüksek verimli ve paslanmaz gövdeli pompa çözümü.
              </p>
              <a className="btn btn-outline" href="#santrifuj-detay">Detayları Gör</a>
            </article>
          </div>
        </section>

        {/* Ürün Detayları */}
        <section id="tekli-dolum-detay">
          <h2 className="section-title">Tekli Dolum Makinesi Özellikleri</h2>
          <div className="detail">
            <img 
              src="/resim1.jpeg" 
              alt="Tekli dolum makinesi detay" 
              loading="lazy"
            />
            <div>
              <p>
                Tekli dolum makinesi; sos, krem, sıvı ve yarı akışkan ürünlerin hassas ve düzenli dolumu için uygundur.
                Kompakt yapısı sayesinde üretim alanında az yer kaplar.
              </p>
              <ul>
                <li><strong>Hijyenik tasarım:</strong> Gıda standartlarına uygun paslanmaz çelik malzeme.</li>
                <li><strong>Kolay temizlenebilir yapı:</strong> CIP (Clean-in-Place) sistemlerine uyumlu.</li>
                <li><strong>Kompakt ve sağlam gövde:</strong> Uzun ömürlü endüstriyel kullanım.</li>
                <li><strong>Esneklik:</strong> Farklı dolum gramajlarına ve ambalaj tiplerine kolay adaptasyon.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="santrifuj-detay">
          <h2 className="section-title">Hijyenik Santrifüj Pompa Özellikleri</h2>
          <div className="detail">
            <div>
              <p>
                Hijyenik santrifüj pompa; düşük ve orta viskoziteli akışkanların güvenli şekilde transfer edilmesi için geliştirilmiştir.
                Gıda, süt ürünleri ve içecek proseslerinde yaygın olarak kullanılır.
              </p>
              <ul>
                <li><strong>Paslanmaz çelik gövde:</strong> Korozyona karşı tam koruma.</li>
                <li><strong>Hijyenik bağlantı seçenekleri:</strong> DIN, SMS, Tri-Clamp gibi standart bağlantılar.</li>
                <li><strong>Kolay bakım:</strong> Hızlı sökülüp takılabilen ön kapak tasarımı.</li>
                <li><strong>Yüksek verimlilik:</strong> Düşük enerji tüketimi ile maksimum performans.</li>
              </ul>
            </div>
            <img 
              src="/resim2.jpeg" 
              alt="Hijyenik santrifüj pompa detay" 
              loading="lazy"
            />
          </div>
        </section>

        {/* İletişim */}
        <section id="iletisim">
          <h2 className="section-title">İletişim</h2>
          <div className="contact-box">
            <div className="contact-item">
              <strong>Firma Adı</strong>
              <p>Atlas Makine</p>
            </div>
            <div className="contact-item">
              <strong>Faaliyet Alanı</strong>
              <p>Tekli dolum makinesi ve hijyenik santrifüj pompa satışı</p>
            </div>
            <div className="contact-item">
              <strong>E-posta</strong>
              <p><a href="mailto:info@atlas.com" style={{color: 'inherit'}}>info@atlas.com</a></p>
            </div>
            <div className="contact-item">
              <strong>Telefon</strong>
              <p><a href="tel:+905000000000" style={{color: 'inherit'}}>+90 5XX XXX XX XX</a></p>
            </div>
            <div className="contact-item" style={{ gridColumn: '1 / -1' }}>
              <strong>Adres</strong>
              <p>Türkiye</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Atlas. Tüm hakları saklıdır.</p>
        <p style={{ fontSize: '14px', marginTop: '8px' }}>Korkmaz Pompa İştirakidir</p>
      </footer>
    </>
  );
}

export default App;
