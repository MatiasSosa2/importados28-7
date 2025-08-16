import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in">
            <h1 className="hero-title">
              <span className="hero-title-main">IMPORTADOS</span>
              <span className="hero-title-accent">28/7</span>
            </h1>
            
            <div className="hero-ornament">
              <div className="ornament"></div>
            </div>
            
            <p className="hero-subtitle fade-in fade-in-delay-1">
              Selección de Bebidas   
            </p>
            
            <p className="hero-description fade-in fade-in-delay-2">
              Ofrecemos una variada selección de vodkas, whiskys y champagnes de diferentes marcas 
              para acompañar tus momentos especiales.
            </p>
            
            <div className="hero-cta fade-in fade-in-delay-3">
              <button onClick={scrollToProducts} className="btn hero-btn">
                Explorar Colección
              </button>
            </div>
          </div>
          
          <div className="hero-decorative">
            <div className="hero-pattern"></div>
            <div className="hero-shine"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
