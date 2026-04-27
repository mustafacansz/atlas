export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-main">
          <div>
            <strong>Korkmaz Pompa İştirakidir</strong>
            <div className="footer-note">Pascal Flow, proses ekipmanlarında mühendislik yaklaşımını pratik ve güvenilir çözümlerle bir araya getirir.</div>
          </div>
          <div className="footer-links">
            <a className="footer-pill" href="tel:+905300684321" onClick={() => window.gtag_report_conversion('tel:+905300684321')}>+90 530 068 43 21</a>
            <a className="footer-pill" href="https://wa.me/905300684321" target="_blank" rel="noopener noreferrer" onClick={() => window.gtag_report_conversion('https://wa.me/905300684321')}>WhatsApp</a>
          </div>
        </div>
      </footer>
      <a className="whatsapp-float" href="https://wa.me/905300684321" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile iletişime geçin" onClick={() => window.gtag_report_conversion('https://wa.me/905300684321')}>
        <span className="whatsapp-icon">✆</span>
        <span>WhatsApp</span>
      </a>
    </>
  );
}
