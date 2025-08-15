import React, { useState } from 'react';
import './ProductCategories.css';

const ProductCategories = () => {
  const [activeCategory, setActiveCategory] = useState('vodka');
  
  const categories = {
    vodka: {
      title: 'Vodka',
      subtitle: 'Pureza cristalina y elegancia destilada',
      products: [
        'Nuvo Rose 700ml',
        'Absolut Pride LGTB 1000ml',
        'Absolut Warhol Limited 1000ml',
        'Absolut 100 Proof 50° 1000ml',
        'Grey Goose 750ml',
        'Grey Goose 1000ml',
        'Grey Goose 1750ml',
        'Grey Goose 3000ml',
        'Grey Goose Sabor 750ml (Pera o Naranja)',
        'Grey Goose Sabor 1000ml (Pera o Naranja o Limón)',
        'Grey Goose Essences 1000ml (Strawberry o Peach o Watermelon)',
        'Belvedere 700ml',
        'Belvedere 1000ml',
        'Belvedere Luminous 1750ml',
        'Belvedere Luminous 3000ml',
        'Belvedere Citrus 1000ml',
        'Belvedere Infusions 700ml (Blackberry o Lemon o Pear)',
        'Belvedere Intense 750ml',
        'Belvedere Smog Forest 1000ml',
        'Roberto Cavalli Sabor 1000ml (Melón o Watermelon o Pineapple o Mango)',
        'Pravda Coco 700ml',
        'Pravda Coco y Pineapple 700ml',
        'Ciroc 750ml',
        'Ciroc 1000ml',
        'Ciroc Peach 700ml',
        'Ciroc Pineapple 700ml',
        'Ciroc Limonata 700ml',
        'Ciroc Mango 700ml',
        'Ciroc Apple 700ml'
      ]
    },
    whisky: {
      title: 'Whisky',
      subtitle: 'Tradición, carácter y complejidad en cada gota',
      products: [
        'Ballantines 17 750ml',
        'Glenfiddich 12 750ml',
        'Glenfiddich 15 750ml',
        'Glenfiddich 18 750ml',
        'Glenfiddich Vat 01 1000ml',
        'The Macallan 12 Double 700ml',
        'The Macallan 15 Double 700ml',
        'The Macallan 18 Double 700ml',
        'The Macallan Quest 1000ml',
        'The Macallan Enigma 700ml',
        'The Macallan Rare Cask 700ml',
        'J. Walker Gold Label 1000ml',
        'J. Walker Green Label 750ml',
        'J. Walker Island Green 1000ml',
        'J. Walker 18 750ml (¡Nuevo!)',
        'J. Walker XR 19 750ml',
        'J. Walker XR 21 750ml',
        'J. Walker Blue Label 750ml',
        'Old Parr 12 1000ml',
        'The Dalmore 12 700ml',
        'The Dalmore 12 Sherry 750ml',
        'The Dalmore 15 750ml',
        'Jura 10 700ml',
        'Jura 12 700ml',
        'Tomatin 12 700ml',
        'Tomatin 16 700ml',
        'Glenallachie 8 700ml',
        'Glenmorangie 10 700ml',
        'Glenkinchie 12 700ml',
        'Hibiki Harmony 700ml',
        'Hibiki Master Select 700ml',
        'Yamazakura 700ml',
        'Nebushi 700ml'
      ]
    },
    champagne: {
      title: 'Champagne',
      subtitle: 'Celebración, lujo y burbujas doradas',
      products: [
        'Moët Brut 750ml',
        'Moët Brut Rose 750ml',
        'Moët Néctar Imperial 750ml',
        'Moët Néctar Imp. Rose 750ml',
        'Moët Brut Twin Set 750ml',
        'Moët Ice Rose 750ml',
        'Veuve Clicquot Brut 750ml',
        'Veuve Clicquot Demi Sec 750ml',
        'Veuve Clicquot Brut Rose 750ml',
        'Veuve Clicquot Rich Silver 750ml',
        'Dom Pérignon 2013',
        'Champagne Armand De Brignac 750ml',
        'Champagne Cristal 2015'
      ]
    }
  };

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="products-header fade-in">
          <h2 className="heading-secondary text-gold">Nuestra Colección</h2>
          <div className="divider"></div>
        </div>

        <div className="category-tabs fade-in fade-in-delay-1">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              className={`category-tab ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              <span className="tab-title">{category.title}</span>
              <div className="tab-underline"></div>
            </button>
          ))}
        </div>

        <div className="category-content fade-in fade-in-delay-2">
          <div className="category-intro">
            <h3 className="heading-tertiary">{categories[activeCategory].title}</h3>
            <p className="category-subtitle">{categories[activeCategory].subtitle}</p>
            <div className="ornament"></div>
          </div>

          <div className="products-grid">
            {categories[activeCategory].products.map((product, index) => (
              <div 
                key={index} 
                className="product-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="product-content">
                  <div className="product-icon">
                    <div className="product-dot"></div>
                  </div>
                  <span className="product-name">{product}</span>
                </div>
                <div className="product-hover-line"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="products-background">
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
      </div>
    </section>
  );
};

export default ProductCategories;
