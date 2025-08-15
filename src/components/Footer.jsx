import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main fade-in">
            <div className="footer-brand">
              <h3 className="footer-title">IMPORTADOS</h3>
              <div className="footer-subtitle">28/7</div>
              <div className="footer-line"></div>
              <p className="footer-tagline">
                Bebidas Premium de Distinción
              </p>
            </div>
            
            <div className="footer-info fade-in fade-in-delay-1">
              <h4 className="footer-section-title">Contacto</h4>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span className="contact-text">info@importados287.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span className="contact-text">+54 11 XXXX-XXXX</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🌐</span>
                <span className="contact-text">24/7 Disponibilidad</span>
              </div>
            </div>
            
            <div className="footer-social fade-in fade-in-delay-2">
              <h4 className="footer-section-title">Síguenos</h4>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Instagram">
                  <div className="social-icon">📷</div>
                </a>
                <a href="#" className="social-link" aria-label="WhatsApp">
                  <div className="social-icon">💬</div>
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  <div className="social-icon">📘</div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-bottom fade-in fade-in-delay-3">
            <div className="footer-legal">
              <p>© 2025 IMPORTADOS 28/7. Todos los derechos reservados.</p>
              <p className="legal-notice">
                El consumo excesivo de alcohol es perjudicial para la salud. 
                Prohibida la venta de bebidas alcohólicas a menores de 18 años.
              </p>
            </div>
            
            <div className="footer-ornament">
              <div className="ornament"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-pattern"></div>
    </footer>
  );
};

export default Footer;
