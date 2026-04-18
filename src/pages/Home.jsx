import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);
  const totalSlides = 3;
  const totalTabs = 4;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4500);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const tabInterval = setInterval(() => {
      setCurrentTab((prev) => (prev + 1) % totalTabs);
    }, 3500);
    return () => clearInterval(tabInterval);
  }, []);

  return (
    <main>
      <Helmet>
        <title>Pascal Flow | Akış ve Dolum Çözümleri</title>
        <meta name="description" content="Pascal Flow tekli dolum makineleri ve hijyenik santrifüj pompa çözümleri sunar. Gıda üretim hatları için hijyenik ve güvenilir akış çözümleri." />
        <link rel="canonical" href="https://pascalflow.com/" />
      </Helmet>
      <section className="section section-top">
        <div className="container">
          <div className="slider" id="heroSlider">
            <div 
              className="slider-track" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <article className="slide">
                <div className="slide-copy">
                  <div className="slider-badge">Pascal Flow</div>
                  <h1>Food production lines için akış ve dolum çözümleri</h1>
                  <p>Tekli dolum makineleri ve hijyenik santrifüj pompalar ile üretim hatlarında hijyen, süreklilik ve kullanım kolaylığını bir araya getiriyoruz.</p>
                  <div className="button-row">
                    <Link className="button" to="/single-filling-machine">Tekli Dolum Makinesi</Link>
                    <Link className="button-outline" to="/hygienic-centrifugal-pump">Hijyenik Santrifüj Pompa</Link>
                  </div>
                </div>
                <div className="slide-media">
                  <img src="/assets/logo.jpeg" alt="Pascal Flow kurumsal logo" />
                </div>
              </article>
              <article className="slide">
                <div className="slide-copy">
                  <div className="slider-badge">Tekli Dolum Makinesi</div>
                  <h2>Hassas, hijyenik ve tekrarlanabilir dolum</h2>
                  <p>Loblu pompa teknolojisi, PLC kontrolü ve tak-çalıştır yapısıyla akışkan ürünlerde kontrollü ve güvenilir dolum sunar.</p>
                  <div className="button-row">
                    <Link className="button" to="/single-filling-machine">Ürünü İncele</Link>
                  </div>
                </div>
                <div className="slide-media">
                  <img src="/assets/tekli-dolum-makinesi.png" alt="Tekli dolum makinesi" />
                </div>
              </article>
              <article className="slide">
                <div className="slide-copy">
                  <div className="slider-badge">Hijyenik Santrifüj Pompa</div>
                  <h2>Güvenli ürün transferi ve yüksek debi performansı</h2>
                  <p>Paslanmaz yapısı ve kolay temizlenebilir tasarımıyla modern üretim hatlarında sürekli ve verimli akış sağlar.</p>
                  <div className="button-row">
                    <Link className="button" to="/hygienic-centrifugal-pump">Ürünü İncele</Link>
                  </div>
                </div>
                <div className="slide-media">
                  <img src="/assets/hijyenik-santrifuj-pompa.png" alt="Hijyenik santrifüj pompa" />
                </div>
              </article>
            </div>
            <div className="slider-controls" aria-label="Slider kontrolleri">
              {[0, 1, 2].map((index) => (
                <button 
                  key={index}
                  className={`slider-dot ${currentSlide === index ? 'active' : ''}`} 
                  type="button" 
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about-us">
        <div className="container">
          <div className="section-head">
            <h2>Hakkımızda</h2>
            <p>Pascal Flow, Korkmaz Endüstriyel Pompa tecrübesini daha odaklı ve çevik bir yapı ile sahaya taşır.</p>
          </div>
          <div className="about-box">
            <div className="eyebrow">Kurumsal</div>
            <p>Pascal Flow, Korkmaz Endüstriyel Pompa'nın bir uzantısı olarak; köklü profesyonelliği, mühendislik yaklaşımı ve proses deneyimini modern üretim hatlarının ihtiyaçlarıyla birleştirir. Endüstride güvenilir, sade ve uygulanabilir çözümler sunarak işletmelere verimli bir iş ortağı olur.</p>
            <div className="feature-grid">
              <article className="feature-card">
                <h3>Mühendislik Odaklı</h3>
                <p>Her çözümde proses ihtiyacını, hijyen beklentisini ve kullanım kolaylığını birlikte değerlendiririz.</p>
              </article>
              <article className="feature-card">
                <h3>Güvenilir Altyapı</h3>
                <p>Korkmaz Endüstriyel Pompa'dan gelen saha birikimini daha hızlı ve odaklı bir servis anlayışıyla sunarız.</p>
              </article>
              <article className="feature-card">
                <h3>Pratik Çözüm</h3>
                <p>Satıştan devreye almaya kadar net, uygulanabilir ve sonuç odaklı bir süreç tasarlarız.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="urunler">
        <div className="container">
          <div className="section-head">
            <h2>Ürün Grupları</h2>
            <p>Ürünler menüsündeki her başlık ayrı bir sayfaya gider. Böylece her ürünü kendi detay sayfasında inceleyebilirsiniz.</p>
          </div>
          <div className="grid-2">
            <article className="card">
              <img src="/assets/tekli-dolum-makinesi.png" alt="Tekli dolum makinesi" />
              <div className="card-body">
                <h3>Tekli Dolum Makinesi</h3>
                <p>Akışkan ürünlerin kontrollü, hijyenik ve tekrarlanabilir şekilde dolumu için tasarlanmış kompakt çözümdür.</p>
                <div className="badge-row">
                  <span className="badge">Loblu pompa</span>
                  <span className="badge">PLC kontrol</span>
                  <span className="badge">Hijyenik tasarım</span>
                </div>
                <p style={{ marginTop: '22px' }}>
                  <Link className="button-outline" to="/single-filling-machine">Ürüne Git</Link>
                </p>
              </div>
            </article>
            <article className="card">
              <img src="/assets/hijyenik-santrifuj-pompa.png" alt="Hijyenik santrifüj pompa" />
              <div className="card-body">
                <h3>Hijyenik Santrifüj Pompa</h3>
                <p>Gıda, içecek ve benzeri hassas proseslerde güvenli ve verimli akış sunan paslanmaz pompa çözümüdür.</p>
                <div className="badge-row">
                  <span className="badge">Yüksek debi</span>
                  <span className="badge">Kolay temizlenir</span>
                  <span className="badge">Düşük bakım</span>
                </div>
                <p style={{ marginTop: '22px' }}>
                  <Link className="button-outline" to="/hygienic-centrifugal-pump">Ürüne Git</Link>
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="industries">
        <div className="container">
          <div className="section-head">
            <h2>Hizmet Verdiğimiz Sektörler</h2>
            <p>Referans sitedeki görünüm mantığına yakın, ancak yönlendirme yapmayan görsel sektör vitrini olarak tasarlandı.</p>
          </div>
          <div className="sector-showcase">
            <div className="sector-tabs" role="tablist" aria-label="Sektörler">
              {[
                { num: '01', title: 'Gıda' },
                { num: '02', title: 'İçecek' },
                { num: '03', title: 'Süt ve Süt Ürünleri' },
                { num: '04', title: 'Sos ve Yarı Akışkan Ürünler' }
              ].map((tab, index) => (
                <button 
                  key={index}
                  className={`sector-tab ${currentTab === index ? 'active' : ''}`} 
                  type="button"
                  onMouseEnter={() => setCurrentTab(index)}
                  onFocus={() => setCurrentTab(index)}
                  onClick={(e) => { e.preventDefault(); setCurrentTab(index); }}
                >
                  <span>{tab.num}</span><strong>{tab.title}</strong>
                </button>
              ))}
            </div>
            <div className="sector-panes">
              <article className={`sector-pane ${currentTab === 0 ? 'active' : ''}`}>
                <div className="sector-visual">
                  <img src="/assets/tekli-dolum-makinesi.png" alt="Gıda sektörü için tekli dolum makinesi" />
                </div>
                <div className="sector-copy">
                  <div className="sector-index">01 / 04</div>
                  <h3>Gıda</h3>
                  <p>Hassas dolum, hijyenik tasarım ve kontrollü ürün aktarımı gerektiren gıda prosesleri için uygun çözümler sunuyoruz.</p>
                </div>
              </article>
              <article className={`sector-pane ${currentTab === 1 ? 'active' : ''}`}>
                <div className="sector-visual">
                  <img src="/assets/hijyenik-santrifuj-pompa.png" alt="İçecek sektörü için hijyenik pompa" />
                </div>
                <div className="sector-copy">
                  <div className="sector-index">02 / 04</div>
                  <h3>İçecek</h3>
                  <p>Düşük ve orta viskoziteli sıvıların güvenli, sürekli ve verimli şekilde transferi için hijyenik pompa çözümleri sağlıyoruz.</p>
                </div>
              </article>
              <article className={`sector-pane ${currentTab === 2 ? 'active' : ''}`}>
                <div className="sector-visual">
                  <img src="/assets/tekli-dolum-makinesi.png" alt="Süt ve süt ürünleri için dolum çözümü" />
                </div>
                <div className="sector-copy">
                  <div className="sector-index">03 / 04</div>
                  <h3>Süt ve Süt Ürünleri</h3>
                  <p>Hijyen standartlarının kritik olduğu süt ürünleri proseslerinde kolay temizlenebilir ve paslanmaz ekipman yapısı öne çıkar.</p>
                </div>
              </article>
              <article className={`sector-pane ${currentTab === 3 ? 'active' : ''}`}>
                <div className="sector-visual">
                  <img src="/assets/hijyenik-santrifuj-pompa.png" alt="Sos ve yarı akışkan ürünler için proses çözümü" />
                </div>
                <div className="sector-copy">
                  <div className="sector-index">04 / 04</div>
                  <h3>Sos ve Yarı Akışkan Ürünler</h3>
                  <p>Dolum hassasiyeti ve proses sürekliliği gerektiren yarı akışkan ürünlerde pratik kullanım ve stabil performans sunuyoruz.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-panel">
            <div>
              <div className="eyebrow">İletişim</div>
              <h3>Projeniz için bizimle iletişime geçin</h3>
              <p>Telefon veya WhatsApp üzerinden hızlıca ulaşabilir, ürünlerimiz için teklif ve teknik bilgi alabilirsiniz.</p>
            </div>
            <div className="button-row">
              <a className="button" href="tel:+905300684321" onClick={() => window.gtag_report_conversion('tel:+905300684321')}>+90 530 068 43 21</a>
              <Link className="button-outline" to="/contact">İletişim Sayfası</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
