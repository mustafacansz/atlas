import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <main>
      <section className="section section-top">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Ana Sayfa</Link> / İletişim
          </div>
          <div className="section-head">
            <h2>İletişim</h2>
            <p>Ürünlerimiz hakkında bilgi almak, teklif istemek veya teknik detayları görüşmek için bizimle doğrudan iletişime geçebilirsiniz.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>İletişim Bilgileri</h3>
              <div className="contact-list">
                <div className="contact-item"><span>Firma</span>Pascal Flow</div>
                <div className="contact-item"><span>Telefon</span><a href="tel:+905300684321">+90 530 068 43 21</a></div>
                <div className="contact-item"><span>WhatsApp</span><a href="https://wa.me/905300684321" target="_blank" rel="noopener noreferrer">+90 530 068 43 21</a></div>
                <div className="contact-item"><span>E-posta</span>info@pascalflow.com</div>
                <div className="contact-item"><span>Bağlı Kuruluş</span>Korkmaz Endüstriyel Pompa</div>
              </div>
            </div>
            <div className="logo-panel">
              <img src="/assets/logo.jpeg" alt="Pascal Flow logosu" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
