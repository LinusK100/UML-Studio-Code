import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import './Privacy.css';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">{t('privacy.title')}</h1>
        <div className="page-section">
          <h2 className="page-heading">{t('privacy.section1.title')}</h2>
          <p className="page-text">
            {t('privacy.section1.name')}, <a href={`mailto:${t('privacy.section1.email')}`} className="privacy-email-link">{t('privacy.section1.email')}</a>
          </p>
        </div>
        <div className="page-section">
          <h2 className="page-heading">{t('privacy.section2.title')}</h2>
          <p className="page-text">{t('privacy.section2.content')}</p>
        </div>
        <div className="page-section">
          <h2 className="page-heading">{t('privacy.section3.title')}</h2>
          <p className="page-text">{t('privacy.section3.content')}</p>
        </div>
        <div className="page-section">
          <h2 className="page-heading">{t('privacy.section4.title')}</h2>
          <p className="page-text">{t('privacy.section4.content')}</p>
        </div>
        <div className="page-section">
          <h2 className="page-heading">{t('privacy.section5.title')}</h2>
          <p className="page-text">{t('privacy.section5.content')}</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
