import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './hero.css';
import iPhone1 from '../../assets/images/iPhone/iPhone_Teil_1.png';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-gradient">{t('hero.title')}</span>
          </h1>
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          <p className="hero-description">
            {t('hero.description')}
          </p>
          <a 
            href="https://apps.apple.com/us/app/uml-studio-code/id6757933773" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-cta-button"
            aria-label={t('hero.ctaAria')}
          >
            {t('hero.cta')}
          </a>
        </div>
        <div className="hero-image-container">
          <img 
            src={iPhone1} 
            alt={t('hero.imageAlt')} 
            className="hero-image"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
