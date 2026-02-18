import React from 'react';
import { IconContext } from 'react-icons';
import { HiCode, HiCheckCircle } from 'react-icons/hi';
import { useTranslation } from '../../hooks/useTranslation';
import './codeGeneration.css';

const CodeGeneration = () => {
  const { t } = useTranslation();

  const languages = t('codeGeneration.features.languages', { returnObjects: true });
  const benefits = t('codeGeneration.benefits.items', { returnObjects: true });

  return (
    <section className="code-generation section" id="code-generation">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('codeGeneration.title')}</h2>
          <div className="code-generation-header-texts">
            <p className="section-subtitle">{t('codeGeneration.subtitle')}</p>
            <p className="section-description">
              {t('codeGeneration.description')}
            </p>
          </div>
        </div>

        <div className="code-generation-content">
          <div className="code-generation-main">
            <div className="code-generation-features">
              <h3 className="code-generation-features-title">
                {t('codeGeneration.features.title')}
              </h3>
              <div className="languages-grid">
                {languages && languages.map((lang, index) => (
                  <div key={index} className="language-card">
                    <div className="language-icon">
                      <IconContext.Provider value={{ size: '32px', color: 'var(--color-primary-blue)' }}>
                        <HiCode aria-hidden="true" />
                      </IconContext.Provider>
                    </div>
                    <h4 className="language-name">{lang.name}</h4>
                    <p className="language-description">{lang.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="code-generation-benefits">
              <h3 className="code-generation-benefits-title">
                {t('codeGeneration.benefits.title')}
              </h3>
              <ul className="benefits-list">
                {benefits && benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">
                    <IconContext.Provider value={{ size: '20px', color: 'var(--color-accent-green)' }}>
                      <HiCheckCircle aria-hidden="true" />
                    </IconContext.Provider>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeGeneration;
