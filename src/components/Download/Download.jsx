import React from 'react';
import { HiDownload } from 'react-icons/hi';
import { useTranslation } from '../../hooks/useTranslation';
import './download.css';

const Download = () => {
  const { t } = useTranslation();

  return (
    <section className="download section" id="download">
      <div className="container">
        <div className="download-content">
          <h2 className="download-title">{t('download.title')}</h2>
          <p className="download-description">
            {t('download.description')}
          </p>
          
          <div className="download-badges">
            <a 
              href="https://apps.apple.com/us/app/uml-studio-code/id6757933773" 
              target="_blank" 
              rel="noopener noreferrer"
              className="app-store-button"
              aria-label={t('download.buttonAria')}
            >
              <HiDownload size="24px" aria-hidden="true" />
              <span>{t('download.button')}</span>
            </a>
          </div>

          <div className="download-info">
            <p className="download-info-text">
              <strong>{t('download.availableFor')}</strong> {t('download.iphoneIpad')}
            </p>
            <p className="download-info-text">
              <strong>{t('download.iosVersion')}</strong> {t('download.iosVersionValue')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
