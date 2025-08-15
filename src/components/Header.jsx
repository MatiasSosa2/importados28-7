import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-brand fade-in">
            <h1 className="brand-title">IMPORTADOS</h1>
            <div className="brand-subtitle">28/7</div>
            <div className="brand-line"></div>
          </div>
          
          <ul className="nav-menu fade-in fade-in-delay-1">
            <li className="nav-item">
              <button 
                onClick={() => scrollToSection('home')}
                className="nav-link"
              >
                Inicio
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => scrollToSection('products')}
                className="nav-link"
              >
                Productos
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => scrollToSection('contact')}
                className="nav-link"
              >
                Contacto
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
