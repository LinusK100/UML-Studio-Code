import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import './Imprint.css';

const Imprint = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">{t('imprint.title')}</h1>
        <div className="page-section">
          <h2 className="page-heading">{t('imprint.section1.title')}</h2>
        </div>
        <div className="page-section">
          <h2 className="page-heading">{t('imprint.section2.title')}</h2>
          <p className="page-text">{t('imprint.section2.location')}</p>
        </div>
        <div className="page-section">
          <h2 className="page-heading">{t('imprint.section3.title')}</h2>
          <p className="page-text">
            {t('imprint.section3.email')} <a href={`mailto:${t('imprint.section3.emailAddress')}`} className="imprint-email-link">{t('imprint.section3.emailAddress')}</a>
          </p>
        </div>
        <div className="page-section">
          <h2 className="page-heading">{t('imprint.section4.title')}</h2>
          <p className="page-text">{t('imprint.section4.name')}</p>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
