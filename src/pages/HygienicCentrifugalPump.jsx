import { Link } from 'react-router-dom';

export default function HygienicCentrifugalPump() {
  return (
    <main>
      <section className="section section-top">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Ana Sayfa</Link> / Ürünler / Hijyenik Santrifüj Pompa
          </div>
          <div className="section-head">
            <h2>Hijyenik Santrifüj Pompa</h2>
            <p>Güvenli, verimli ve sürekli akış sağlayan çözüm.</p>
          </div>
          <div className="detail-layout">
            <div className="detail-image">
              <img src="/assets/hijyenik-santrifuj-pompa.png" alt="Hijyenik Santrifüj Pompa" />
            </div>
            <div className="detail-copy">
              <p>Hijyenik santrifüj pompamız, gıda, içecek ve benzeri hassas proseslerde güvenli, verimli ve sürekli akış sağlamak için geliştirilmiştir. Paslanmaz yapısı, kolay temizlenebilir tasarımı ve proses dostu çalışma karakteri sayesinde modern üretim hatlarının ihtiyaçlarına uyum sağlar.</p>
              <p>Yüksek debi gerektiren uygulamalarda etkili performans sunarken, hijyen standartlarını da ön planda tutar. Dayanıklı gövde yapısı, düşük bakım ihtiyacı ve kullanım kolaylığı ile işletmelere uzun ömürlü ve güvenilir bir çözüm sağlar. Özellikle hijyenin kritik olduğu üretim alanlarında, ürün transferini güvenli ve verimli şekilde gerçekleştirmek için ideal bir tercihtir.</p>
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
