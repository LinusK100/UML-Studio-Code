import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import Anleitung1 from '../assets/images/Anleitung/Anleitung_1.png';
import Anleitung2 from '../assets/images/Anleitung/Anleitung_2.png';
import Kontakt1 from '../assets/images/Kontakt/Kontakt_1.png';
import Kontakt2 from '../assets/images/Kontakt/Kontakt_2.png';
import './Support.css';

const Support = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">{t('support.title')}</h1>
        <div className="page-section">
          <h2 className="page-heading">{t('support.section1.title')}</h2>
          <p className="page-text">{t('support.section1.content')}</p>
          <div className="support-images">
            <img 
              src={Anleitung1} 
              alt="Anleitung 1" 
              className="support-image"
              loading="lazy"
            />
            <img 
              src={Anleitung2} 
              alt="Anleitung 2" 
              className="support-image"
              loading="lazy"
            />
          </div>
        </div>
        <div className="page-section">
          <h2 className="page-heading">{t('support.section2.title')}</h2>
          <p className="page-text">{t('support.section2.content')}</p>
          <div className="support-images">
            <img 
              src={Kontakt1} 
              alt="Kontakt 1" 
              className="support-image"
              loading="lazy"
            />
            <img 
              src={Kontakt2} 
              alt="Kontakt 2" 
              className="support-image"
              loading="lazy"
            />
          </div>
        </div>
        <div className="page-section">
          <h2 className="page-heading">{t('support.section3.title')}</h2>
          <p className="page-text">{t('support.section3.content')}</p>
          <p className="page-text">
            {t('support.section3.email')} <a href={`mailto:${t('support.section3.emailAddress')}`} className="support-email-link">{t('support.section3.emailAddress')}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
